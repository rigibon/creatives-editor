const fs = require("fs");
const puppeteer = require("puppeteer-extra");
const Handlebars = require("handlebars");
const bodyParser = require("body-parser");
const cors = require("cors");
const getColors = require("get-image-colors");
const translate = require("google-translate-api-x");
const path = require("path");
const express = require("express");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const cheerio = require("cheerio");

puppeteer.use(StealthPlugin());

require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

let browserInstance;

async function initPuppeteer() {
	browserInstance = await puppeteer.launch({
		executablePath: process.env.NODE_ENV === "production" ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath(),
		args: ["--disable-setuid-sandbox", "--no-sandbox", "--no-zygote", "--enable-chrome-browser-cloud-management"],
		dumpio: true
	});
}

process.on("exit", () => {
	if (browserInstance) {
		browserInstance.close();
	}
});

app.get("/", async (req, res) => {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/download", async (req, res) => {
	if (!browserInstance) {
		await initPuppeteer();
	}

	const { props, templateFileName, extension } = req.body;

	const jsonObject = {};

	props.forEach((property) => {
		jsonObject[property.name] = property.value;
	});

	var finalHtml = generateHtml(jsonObject, templateFileName);
	const publicFolderPath = path.join(__dirname, "public");
	if (!fs.existsSync(publicFolderPath)) {
		fs.mkdirSync(publicFolderPath);
	}
	const filePath = path.join(publicFolderPath, "final.html");
	const pngPath = path.join(publicFolderPath, "final.png");
	fs.writeFileSync(filePath, finalHtml);
	if (extension === ".html") {
		if (fs.existsSync(filePath)) {
			res.setHeader("Content-Disposition", "attachment; filename=final.html");
			res.setHeader("Content-Type", "text/html");
			const fileStream = fs.createReadStream(filePath);
			fileStream.pipe(res);
		} else {
			res.status(404).send("File not found");
		}
	} else if (extension === ".png") {
		const page = await browserInstance.newPage();

		const filePath = path.resolve(__dirname, "public", "final.html");
		await page.goto(`file://${filePath}`);

		const dimensions = await page.evaluate(() => {
			const element = document.querySelector('.creative');
			if (element) {
				return { width: element.offsetWidth, height: element.offsetHeight }; // Return the width of the element
			} else {
				return null; // Return null if the element is not found
			}
		});

		console.log("Width of element with class 'section header':", dimensions);

		await page.setViewport({
			width: 2500,
			height: 2500,
		});

		const $ = cheerio.load(finalHtml);



		// const width = parseInt($('.section.header').attr('style').match(/width:\s*(\d+)px/)[1]);
		// console.log(finalHtml);
		// const width = $('.section.header').width();
		const viewport = await page.viewport();
		const centerX = Math.round(viewport.width / 2);
		const centerY = Math.round(viewport.height / 2);
		const regionWidth = dimensions.width;
		const regionHeight = dimensions.height;
		const clip = {
			x: Math.round(centerX - regionWidth / 2),
			y: 0,
			width: regionWidth,
			height: regionHeight
		};

		await page.screenshot({ path: pngPath, clip });
		// await page.close();
		res.download(pngPath, "final.png", (err) => {
			if (err) {
				console.error("Error downloading file:", err);
				res.status(404).send("File not found");
			}
		});
	}
});

app.post("/translate", async (req, res) => {
	const { props, countryCode } = req.body;

	const translationPromises = props.map((property) => {
		return translate(property.value, { to: `${countryCode}`, forceTo: true }).then((res) => res.text);
	});

	Promise.all(translationPromises)
		.then((translations) => {
			res.send(translations);
		})
		.catch((error) => {
			res.status(500).send("Error occurred during translation: " + error);
		});
});

app.post("/generate-html", async (req, res) => {
	try {
		const { url } = req.body;

		if (!browserInstance) {
			await initPuppeteer();
		}

		const page = await browserInstance.newPage();

		await page.goto(url, { timeout: 0, waitUntil: "domcontentloaded" });

		const originalImageUrls = await page.evaluate(() => {
			const images = Array.from(document.querySelectorAll("img"));

			return images.map((img) => img.src);
		});

		await page.screenshot({ path: path.join(__dirname, "public", "screenshot.png") });
		const options = { count: 10, type: "image/png" };
		const colors2 = await getColors(path.join(__dirname, "public", "screenshot.png"), options);

		var responseData = {
			images: originalImageUrls,
			text: [],
			colors: colors2.map((c) => c.css()),
		};

		await page.close();

		res.send(responseData);
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
});

// Función para cargar y parsear el archivo de configuración
function loadConfig(configObject) {
	try {
		const configData = JSON.stringify(configObject);
		return JSON.parse(configData);
	} catch (error) {
		console.error("Error al cargar el archivo de configuración:", error.message);
		process.exit(1); // Salir con código de error
	}
}
// Función para cargar y compilar la plantilla Handlebars
function compileTemplate(templateFileName) {
	try {
		const templateData = fs.readFileSync(`./templates/${templateFileName}`, "utf8");
		return Handlebars.compile(templateData);
	} catch (error) {
		console.error("Error al cargar la plantilla Handlebars:", error.message);
		process.exit(1); // Salir con código de error
	}
}
// Función para generar el archivo HTML
function generateHtml(configData, templateFileName) {
	const config = loadConfig(configData);
	const template = compileTemplate(templateFileName);
	const renderedHtml = template(config);
	return renderedHtml;
	// Guardar el HTML como un archivo
	// fs.writeFileSync(outputFile, renderedHtml);
	// console.log(`Se ha generado el archivo HTML correctamente: ${outputFile}`);
}

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
