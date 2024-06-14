import React, { useState, useRef } from "react";
import { Col, Row, Button, Card, Input, Space, message } from "antd";
import { SendOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import BarLoader from "react-spinners/BarLoader";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TrackTemplate from "../templates/trackTemplate";
import TrackTemplate2 from "../templates/trackTemplate2";
import TrackTemplate3 from "../templates/trackTemplate3";
import ProductTemplate from "../templates/productTemplate";
import ProductTemplate2 from "../templates/productTemplate2";
import ProductTemplate3 from "../templates/productTemplate3";
import ProductTemplate4 from "../templates/productTemplate4";
import ProductTemplate5 from "../templates/productTemplate5";
import ProductTemplate6 from "../templates/productTemplate6";
import StorageLimitTemplate from "../templates/storageLimitTemplate";
import SubscriptionTemplate from "../templates/subscriptionTemplate";
import OfferWallTemplate from "../templates/offerWallTemplate";
import OfferWallTemplate2 from "../templates/offerWallTemplate2";
import LimitedOfferTemplate from "../templates/limitedOfferTemplate";
import templateConfig from "../templateConfig";
import Preview from "../components/preview";
import PropertyMenu from "../components/propertyMenu";

const templates = [
	ProductTemplate,
	ProductTemplate2,
	ProductTemplate3,
	ProductTemplate4,
	ProductTemplate5,
	ProductTemplate6,
	TrackTemplate,
	TrackTemplate2,
	TrackTemplate3,
	OfferWallTemplate,
	OfferWallTemplate2,
	StorageLimitTemplate,
	SubscriptionTemplate,
	LimitedOfferTemplate,
];

const Editor = () => {
	const [url, setUrl] = useState("https://t4.npttrk.com/aff_c?offer_id=722&aff_id=2&aff_sub=nl-jumair");
	const [urlRequired, setUrlRequired] = useState(false);

	const [baseUrl, setBaseUrl] = useState("");

	const [images, setImages] = useState("");
	const [text, setText] = useState("");
	const [colors, setColors] = useState("");

	const [messageApi, contextHolder] = message.useMessage();

	const apiUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV;

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const templateId = queryParams.get("templateId");
	const template = templateConfig[templateId];
	const templateComponent = templates[templateId];

	const [loading, setLoading] = useState(false);
	const [finish, setFinish] = useState(false);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	const [color, setColor] = useState("#237bf5");

	const [fileName, setFileName] = useState(template.type);

	const bodyRef = useRef(null);

	// const handleBodyRef = (ref) => {
	// 	const dim = { width: ref.width, height: ref.height };
	// 	setDimensions(dim);
	// };

	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "#237bf5",
	};

	const handleButtonClick = async () => {
		if (url.trim() === "") {
			setUrlRequired(true);
			return; // Do not proceed if URL is not filled
		}

		try {
			const requestData = {
				url: url,
				brand: "Harbor Freight",
			};

			setLoading(true);

			const parsedUrl = new URL(requestData.url);
			const pathnameSegments = parsedUrl.pathname.split("/");
			const firstFolder = pathnameSegments[1];

			const baseUrl = `${parsedUrl.protocol}//${parsedUrl.host}/${firstFolder}`;

			const response = await fetch(`${apiUrl}/generate-html`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
			});

			if (!response.ok) {
				// throw new Error("Network response was not ok");
			}

			var data = await response.json();

			setImages(data.images);
			setText(data.title);
			setColors(data.colors);

			setLoading(false);
			setFinish(true);

			message.success("Data loaded succesfully");
		} catch (error) {
			// console.error("Error:", error);
			message.error("Error loading data: " + error);
			setLoading(false);
			setFinish(true);
		}
	};

	const navigate = useNavigate();

	const handleButtonTemplate = () => {
		navigate("/templates");
	};

	const [props, setProps] = useState(template.props);

	const handleChange = (index, value) => {
		const newProps = [...props];
		newProps[index] = { ...newProps[index], value };
		setProps(newProps);
	};

	const onChangeSize = (index, value) => {
		const newProps = [...props];
		newProps[index].size = `${value}%`;
		setProps(newProps);
	};

	return (
		<div style={{ height: "100vh" }}>
			<Row gutter={0} style={{ height: "100vh" }}>
				<Col span={6}>
					<Card style={{ borderRadius: 0, height: "99.9%", width: "100%" }}>
						<Col>
							<Button type="primary" icon={<ArrowLeftOutlined />} style={{ textAlign: "left", marginBottom: 20, marginTop: 5 }} onClick={handleButtonTemplate}>
								Templates
							</Button>
						</Col>
						<Card bordered={true} style={{ padding: 0, marginBottom: 12, border: "2px solid #bbb" }}>
							<div style={{ fontSize: 15, marginBottom: 7, fontWeight: "bold" }}>File name</div>
							<Input
								placeholder="Enter template name"
								defaultValue={fileName}
								style={{ borderRadius: 4, marginRight: 50, paddingRight: 50, width: "100%" }}
								onChange={(e) => {
									setFileName(e.target.value);
								}}
							/>
						</Card>

						<Card bordered={true} style={{ padding: 0, marginBottom: 12, border: "2px solid #bbb" }}>
							<div style={{ fontSize: 15, marginBottom: 7, fontWeight: "bold" }}>
								Load data from URL
								{urlRequired && <div style={{ color: "#fa2e2a" }}>URL is required</div>}
							</div>
							<Space.Compact
								style={{
									width: "100%",
									marginBottom: 10,
								}}
							>
								<Input
									defaultValue="https://t4.npttrk.com/aff_c?offer_id=722&aff_id=2&aff_sub=nl-jumair"
									onChange={(e) => {
										setUrl(e.target.value);
										setUrlRequired(false);
									}}
									type="text"
									placeholder="URL"
									style={{ borderColor: urlRequired ? "#fa2e2a" : "" }}
								/>
								<Button type="primary" onClick={handleButtonClick}>
									<SendOutlined />
								</Button>
							</Space.Compact>
							<BarLoader color={color} loading={loading} cssOverride={override} size={20} aria-label="Loading Spinner" data-testid="loader" />
						</Card>

						{!loading && finish && (
							<Card bordered={true} style={{ padding: 0, border: "2px solid #bbb" }}>
								<div style={{ fontSize: 15, marginBottom: 7, fontWeight: "bold" }}>
									Landing page
									{urlRequired && <div style={{ color: "#fa2e2a" }}>URL is required</div>}
								</div>

								<div>
									<img src={`${apiUrl}/screenshot.png?v=1`} style={{ width: "100%" }}></img>
								</div>
							</Card>
						)}
					</Card>
				</Col>
				<Col span={10}>
					<Preview dimensions={template.dimensions} props={props} setProps={setProps} templateName={template.name} fileName={fileName} template={templateComponent}></Preview>
				</Col>
				<Col span={8}>
					<PropertyMenu props={props} handleChange={handleChange} images={images} colors={colors} onChangeSize={onChangeSize}></PropertyMenu>
				</Col>
			</Row>
		</div>
	);
};

export default Editor;
