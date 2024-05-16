import React, { useState, useEffect } from "react";
import { Card, Input, Tabs, Row, Col } from "antd";
import ImageProperty from "./imageProperty";
import ImagesGallery from "./imagesGallery";
import ColorProperty from "./colorProperty";
import ColorsGallery from "./colorsGallery";
import TextProperty from "./textProperty";
const { TabPane } = Tabs;

const PropertyMenu = ({ props, handleChange, images, colors, onChangeSize }) => {
	const [selectedId, setSelectedId] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	const [selectedColorId, setSelectedColorId] = useState(null);
	const [colorModalVisible, setColorModalVisible] = useState(false);

	const renderImagesGallery = (originalIndex) => {
		return <ImagesGallery visible={modalVisible} index={originalIndex} onCancel={handleModalCancel} images={images} selectImage={handleChange}></ImagesGallery>;
	};

	const renderColorsGallery = (originalIndex) => {
		return <ColorsGallery visible={colorModalVisible} index={originalIndex} onCancel={handleColorModalCancel} colors={colors} selectColor={handleChange}></ColorsGallery>;
	};

	const handleImageClick = (id) => {
		setModalVisible(true);
		setSelectedId(id);
	};

	const handleColorClick = (id) => {
		setColorModalVisible(true);
		setSelectedColorId(id);
	};

	const handleModalCancel = () => {
		setModalVisible(false);
	};

	const handleColorModalCancel = () => {
		setColorModalVisible(false);
	};

	const apiUrl = "http://localhost:5500";

	const handleTabChange = async (e) => {
		const requestData = {
			event: e,
		};

		const response = await fetch(`${apiUrl}/handleEvents`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestData),
		});
	};

	return (
		<Card title="Settings" style={{ borderRadius: 0, height: "99.9%", width: "100%" }}>
			<div style={{ height: "80vh", width: "100%", margin: 0, padding: 0 }}>
				<Row gutter={24} style={{ marginBottom: 20 }}>
					<Col span={4}>
						<p style={{ color: "black", fontSize: "19px", fontWeight: "500", marginTop: "5px" }}>Brand</p>
					</Col>
					<Col span={20}>
						<Input
							value={props[0].value}
							onChange={(e) => {
								handleChange(0, e.target.value);
							}}
						/>
					</Col>
				</Row>
				<Tabs defaultActiveKey="image" style={{ height: "75vh", overflowY: "auto" }}>
					<TabPane tab="Images" key="image">
						{props
							.map((property, index) => ({ ...property, originalIndex: index }))
							.filter((property) => property.type === "image")
							.map((filteredProperty, filteredIndex) => (
								<>
									<ImageProperty
										key={filteredIndex} // Use filtered index as key
										property={filteredProperty}
										index={filteredProperty.originalIndex} // Pass original index
										onChange={handleChange}
										onImageClick={handleImageClick}
										onCancel={handleModalCancel}
										onChangeSize={onChangeSize}
									></ImageProperty>
									{renderImagesGallery(selectedId)}
								</>
							))}
					</TabPane>

					<TabPane style={{ fontWeight: "700" }} tab="Colors" key="color">
						{props
							.map((property, index) => ({ ...property, originalIndex: index }))
							.filter((property) => property.type === "color")
							.map((filteredProperty, filteredIndex) => (
								<>
									<ColorProperty
										key={filteredProperty.originalIndex} // Use filtered index as key
										property={filteredProperty}
										index={filteredProperty.originalIndex} // Pass original index
										onChange={handleChange}
										onColorClick={handleColorClick}
										onCancel={handleColorModalCancel}
									></ColorProperty>
									{renderColorsGallery(selectedColorId)}
								</>
							))}
					</TabPane>

					<TabPane style={{ fontWeight: "700" }} tab="Texts" key="text">
						{props
							.map((property, index) => ({ ...property, originalIndex: index }))
							.filter((property) => property.type === "text")
							.map((filteredProperty, filteredIndex) => (
								<>
									{filteredProperty.originalIndex !== 0 && (
										<>
											<TextProperty
												key={filteredProperty.originalIndex} // Use filtered index as key
												property={filteredProperty}
												index={filteredProperty.originalIndex} // Pass original index
												onChange={handleChange}
											></TextProperty>
											{renderColorsGallery(selectedColorId)}
										</>
									)}
								</>
							))}
					</TabPane>
				</Tabs>
			</div>
		</Card>
	);
};

export default PropertyMenu;
