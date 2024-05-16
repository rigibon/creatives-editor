import React, { useState } from "react";
import { Col, Row, Button, Select, message } from "antd";
import { MoonLoader } from "react-spinners";

const options = [
	{ value: "pl", label: "Polish (PL)", color: "#ffffff" },
	{ value: "de", label: "German (DE)", color: "#ffffff" },
	{ value: "da", label: "Danish (DK)", color: "#ffffff" },
	{ value: "es", label: "Spanish (ES)", color: "#ffffff" },
	{ value: "fi", label: "Finnish (FI)", color: "#ffffff" },
	{ value: "fr", label: "French (FR)", color: "#ffffff" },
	{ value: "it", label: "Italian (IT)", color: "#ffffff" },
	{ value: "no", label: "Norwegian (NO)", color: "#ffffff" },
	{ value: "pt", label: "Portuguese (PT)", color: "#ffffff" },
	{ value: "en", label: "English (EN)", color: "#ffffff" },
	{ value: "nl", label: "Dutch (NL)", color: "#ffffff" },
];

const TranslateButton = ({ props, setProps }) => {
	const [color, setColor] = useState("#237bf5");
	const [loading, setLoading] = useState(false);
	const [finish, setFinish] = useState(false);
	const [countryCode, setCountryCode] = useState("");

	const apiUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV;

	const handleTranslation = async () => {
		try {
			const requestData = {
				props,
				countryCode: countryCode,
			};

			setLoading(true);

			const response = await fetch(`${apiUrl}/translate`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const reader = response.body.getReader();
			let chunks = [];

			while (true) {
				const { done, value } = await reader.read();

				if (done) break;

				chunks.push(value);
			}

			const concatenatedChunks = new Uint8Array(chunks.reduce((acc, chunk) => acc + chunk.length, 0));
			let offset = 0;
			for (const chunk of chunks) {
				concatenatedChunks.set(chunk, offset);
				offset += chunk.length;
			}

			const data = JSON.parse(new TextDecoder().decode(concatenatedChunks));

			var newProps = [];

			for (var i = 0; i < props.length; i++) {
				newProps[i] = props[i];

				if (newProps[i].type === "text") {
					newProps[i].value = data[i];
				}
			}

			setProps(newProps);

			setLoading(false);
			setFinish(true);

			message.success("Translation succesful");
		} catch (error) {
			message.error("Error during translation: " + error);
			setLoading(false);
			setFinish(true);
		}
	};

	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "#237bf5",
	};

	const handleCountryCode = (selectedOption) => {
		setCountryCode(selectedOption);
	};

	return (
		<Row>
			<Col>
				<MoonLoader color={color} loading={loading} cssOverride={override} size={20} aria-label="Loading Spinner" data-testid="loader" />
			</Col>
			<Col>
				<Button style={{ paddingLeft: 12, marginLeft: 12, marginRight: 10, textAlign: "left" }} type="primary" onClick={handleTranslation}>
					Translate
				</Button>
			</Col>
			<Col>
				<Select
					options={options}
					onChange={(e) => {
						handleCountryCode(e);
					}}
					value={options.find((option) => option.value === countryCode)}
					style={{ width: 150 }}
				/>
			</Col>
		</Row>
	);
};

export default TranslateButton;
