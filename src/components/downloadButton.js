import React, { useState } from "react";
import { Col, Row, Button, Select, message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const DownloadButton = ({ dimensions, props, templateName, fileName }) => {
	const [extension, setExtension] = useState(".html");

	const apiUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV;

	const handleDownload = async () => {
		try {
			var keywords = [];

			keywords.push(...props);

			for (var i = 0; i < props.length; i++) {
				if (props[i].type === "image") {
					const newProp = { name: `${props[i].name}Size`, value: props[i].size };
					keywords.push(newProp);
				}
			}

			const requestData = {
				dimensions: dimensions,
				props: keywords,
				extension: extension,
				templateFileName: `${templateName}.html.hbs`,
			};

			const response = await fetch(`${apiUrl}/download`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
				responseType: "blob",
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const blob = await response.blob();

			const urls = window.URL.createObjectURL(blob);

			const link = document.createElement("a");
			link.href = urls;

			if (extension === ".html") {
				link.setAttribute("download", `${fileName}.html`);
			} else {
				link.setAttribute("download", `${fileName}.png`);
			}

			document.body.appendChild(link);
			link.click();

			window.URL.revokeObjectURL(urls);
			link.parentNode.removeChild(link);
		} catch (error) {
			message.error("Error downloading: " + error);
		}
	};

	const handleExtension = (value) => {
		setExtension(value);
	};

	return (
		// <Card bordered={true} style={{ padding: 0, marginTop: 50, alignSelf: "flex-end", border: "3px solid #bbb" }}>
		<Row gutter={24} style={{ marginTop: 40 }}>
			<Col span={13} style={{ paddingLeft: 70, margin: 0, paddingRight: 2 }}>
				<Button type="primary" style={{ width: "100%", borderRadius: 0, borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }} onClick={handleDownload}>
					Download
					<DownloadOutlined />
				</Button>
			</Col>
			<Col span={10} style={{ paddingLeft: 0, paddingRight: 30, margin: 0 }}>
				<Select
					defaultValue=".html"
					style={{ width: "100%", borderRadius: 0, borderTopRightRadius: 12, borderBottomRightRadius: 12, margin: 0, padding: 0 }}
					onChange={handleExtension}
					options={[
						{
							value: ".png",
							label: ".png",
						},
						{
							value: ".html",
							label: ".html",
						},
					]}
				/>
			</Col>
		</Row>
		// </Card>
	);
};

export default DownloadButton;
