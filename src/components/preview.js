import React from "react";
import { Card } from "antd";
import TranslateButton from "./translateButton";
import DownloadButton from "./downloadButton";

const Preview = ({ dimensions, props, setProps, templateName, fileName, template }) => {
	const jsonObject = {};

	props.forEach((property) => {
		jsonObject[property.name] = property.value;

		if (property.type === "image") {
			jsonObject[property.name + "Size"] = property.size;
		}
	});

	return (
		<Card
			title="Creative preview"
			extra={<TranslateButton props={props} setProps={setProps}></TranslateButton>}
			bordered={false}
			// style={{ padding: 0, margin: 0, boxShadow: "5px 8px 24px 5px rgba(200, 201, 199, 0.6)" }}
			style={{ borderRadius: 0, height: "99.9%", width: "100%" }}
		>
			<div style={{ height: "75vh", overflowY: "auto" }}>{template(jsonObject)}</div>
			<DownloadButton dimensions={dimensions} props={props} templateName={templateName} fileName={fileName}></DownloadButton>
		</Card>
	);
};

export default Preview;
