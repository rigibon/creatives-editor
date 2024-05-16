import React, { useState } from "react";
import { Col, Row, Divider, Card, Input, Slider, InputNumber } from "antd";
import Image from "./image";

const ImageProperty = ({ property, index, onChange, onImageClick, onChangeSize }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	const borderColor = isHovered ? "rgb(22, 119, 255)" : "#888";
	const cursorStyle = isHovered ? "pointer" : "default";

	return (
		<>
			<Card key={property.name} style={{ borderColor: "#dddddd", marginBottom: 10 }}>
				<Divider orientation="left" style={{ padding: 0, marginTop: 0, marginBottom: 25, fontSize: 18, fontWeight: 500 }}>
					{property.name}
				</Divider>
				<Row gutter={24} style={{ marginBottom: 20 }}>
					<Col span={8}>
						<p style={{ fontSize: "17px", marginTop: 10, color: "black" }}>Image</p>
					</Col>
					<Col span={16} style={{ display: "flex", justifyContent: "start" }}>
						<Image
							src={property.value}
							onClick={() => {
								onImageClick(index);
							}}
						></Image>
					</Col>
				</Row>
				<Row gutter={24} style={{ marginBottom: 20 }}>
					<Col span={8}>
						<p style={{ fontSize: "17px", color: "black" }}>URL</p>
					</Col>
					<Col span={16}>
						<Input
							value={property.value}
							onChange={(e) => {
								onChange(index, e.target.value);
							}}
						/>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={8}>
						<p style={{ fontSize: "17px", color: "black" }}>Size</p>
					</Col>
					<Col span={16}>
						<Slider
							min={0}
							max={200}
							step={0.1}
							onChange={(e) => {
								onChangeSize(index, e);
								console.log(e);
							}}
							value={extractNumberFromString(property.size)}
						></Slider>
						<InputNumber
							min={0}
							max={200}
							step={0.1} // Set the same step for consistency
							style={{ marginLeft: 16 }}
							value={property.size}
							onChange={(e) => {
								onChangeSize(index, e);
							}}
						/>
						{/* <Input
							value={property.size}
							onChange={(e) => {
								onChangeSize(index, e.target.value);
							}}
						/> */}
					</Col>
				</Row>
			</Card>
		</>
	);
};

const extractNumberFromString = (str) => {
	// Use a regular expression to match numbers, including decimals
	if (!str) {
		return;
	}

	const matches = str.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g);

	// If matches are found, parse the first match as a float and return it
	if (matches && matches.length > 0) {
		return parseFloat(matches[0]);
	}

	// If no matches are found, return NaN or handle the case accordingly
	return NaN;
};

export default ImageProperty;
