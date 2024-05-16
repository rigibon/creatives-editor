import React, { useState } from "react";
import { Card, Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";

import templateConfig from "../templateConfig";

const categories = [
	{ id: 0, name: "Sweeps" },
	{ id: 1, name: "Track & Trace" },
	{ id: 2, name: "Offer Wall" },
	{ id: 3, name: "Storage Limit" },
	{ id: 4, name: "Subscription" },
	{ id: 5, name: "Limited Offer" },
];

const { TabPane } = Tabs;

const Templates = () => {
	const [isHovered, setIsHovered] = useState(false);

	const navigate = useNavigate();

	const handleTemplateClick = (templateId) => {
		navigate(`/editor?templateId=${templateId}`);
	};

	const divStyle = {
		backgroundColor: isHovered ? "lightgray" : "white",
		padding: "10px",
		borderRadius: "0",
		border: "0",
		transition: "all 0.3s ease",
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
			<Card title="Templates" style={{ width: 800, height: 380 }}>
				<Tabs>
					{categories.map((category) => (
						<TabPane tab={category.name} key={category.id}>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<Row gutter={28}>
									{templateConfig
										.filter((template) => template.type === category.name)
										.map((template) => (
											<Col key={template.id}>
												<button onClick={() => handleTemplateClick(template.id)} style={divStyle}>
													<img src={template.imageSrc} alt={template.name} style={{ width: 120, height: 200, objectFit: "cover" }} />
												</button>
											</Col>
										))}
								</Row>
							</div>
						</TabPane>
					))}
				</Tabs>
			</Card>
		</div>
	);
};

export default Templates;
