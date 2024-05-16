import React, { useState } from "react";
import { Col, Row, Button, Divider, Card, Input } from "antd";
import Color from "./color";
import { ChromePicker } from "react-color";

const ColorProperty = ({ property, index, onChange, onColorClick }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [pickerVisible, setPickerVisible] = useState(false);
	const [showPicker, setShowPicker] = useState(false);

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
						<div style={{ fontSize: "17px", marginTop: "10px", fontWeight: 400 }}>Color</div>
					</Col>
					<Col span={16} style={{ display: "flex", justifyContent: "start" }}>
						<Color
							value={property.value}
							onClick={() => {
								onColorClick(index);
							}}
						></Color>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={8}>
						<div style={{ fontSize: "17px", fontWeight: 400 }}>Value</div>
					</Col>
					<Col span={16}>
						<Row>
							<Col>
								<Button onClick={() => setShowPicker(!showPicker)} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
									Pick
								</Button>
								{showPicker && (
									<div style={{ position: "absolute", zIndex: "2" }}>
										<ChromePicker
											color={property.value}
											onChange={(e) => {
												onChange(index, e.hex);
											}}
										/>
									</div>
								)}
							</Col>
							<Col span={13}>
								<Input
									value={property.value}
									onChange={(e) => {
										onChange(index, e.target.value);
									}}
									style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</>
	);
};

export default ColorProperty;
