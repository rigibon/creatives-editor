import React, { useState, useEffect } from "react";
import { Col, Row, Card, Input, Tabs } from "antd";
import TranslateButton from "./translateButton";
import DownloadButton from "./downloadButton";
import PropertyMenu from "./propertyMenu";
import Preview from "./preview";

const TemplateLoader = ({ baseUrl, images, text, mainColors, templateName, properties, template, fileName }) => {
	const [props, setProps] = useState(properties);

	useEffect(() => {
		if (!(images && mainColors)) {
			images = [];
			mainColors = [];
		}

		for (var i = 0; i < props.length; i++) {
			if (props[i].type === "image") {
				images.push(props[i].value);
			} else if (props[i].type === "color") {
				mainColors.push(props[i].value);
			}
		}
	}, [baseUrl, images]);

	const handleChange = (index, value) => {
		const newProps = [...props];
		newProps[index] = { ...newProps[index], value };
		setProps(newProps);
	};

	return (
		<>
			<Row gutter={18} style={{}}>
				<Col span={10} style={{}}>
					<Preview props={props} setProps={setProps} templateName={templateName} fileName={fileName} template={template}></Preview>
				</Col>
				<Col span={8}>
					<PropertyMenu props={props} handleChange={handleChange} images={images} colors={mainColors}></PropertyMenu>
				</Col>
			</Row>
		</>
	);
};

export default TemplateLoader;
