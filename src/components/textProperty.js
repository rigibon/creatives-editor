import React from "react";
import { Col, Row, Divider, Card, Input } from "antd";

const TextProperty = ({ property, index, onChange }) => {
	return (
		<>
			<Card key={property.name} style={{ borderColor: "#dddddd", marginBottom: 10 }}>
				<Divider orientation="left" style={{ padding: 0, marginTop: 0, marginBottom: 25, fontSize: 18, fontWeight: 500 }}>
					{property.name}
				</Divider>
				<Row gutter={24} style={{ marginBottom: 20 }}>
					<Col span={8}>
						<p style={{ fontSize: "17px", marginTop: 5, fontWeight: 400, color: "black" }}>Value</p>
					</Col>
					<Col span={16} style={{ display: "flex", justifyContent: "start" }}>
						<Input
							value={property.value}
							onChange={(e) => {
								onChange(index, e.target.value);
							}}
						/>
					</Col>
				</Row>
			</Card>
		</>
	);
};

export default TextProperty;
