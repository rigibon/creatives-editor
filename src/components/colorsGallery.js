import React from "react";
import { Col, Row, Button, Modal } from "antd";
import Color from "./color";

const ColorsGallery = ({ visible, index, onCancel, colors, selectColor }) => {
	const handleClick = (event) => {
		const backgroundColor = window.getComputedStyle(event.target).getPropertyValue("background-color");
		selectColor(index, backgroundColor);
		onCancel();
	};

	return (
		<>
			<Modal
				open={visible}
				title="Colors"
				onCancel={onCancel}
				footer={[
					<Button key="cancel" onClick={onCancel}>
						Close
					</Button>,
				]}
				// style={{ overflowX: "auto", height: "500px" }}
			>
				<Row gutter={16}>
					{colors ? (
						colors.map((color) => (
							<Col span={6} style={{ marginBottom: 20 }}>
								<Color value={color} onClick={handleClick}></Color>
							</Col>
						))
					) : (
						<></>
					)}
				</Row>
			</Modal>
		</>
	);
};

export default ColorsGallery;
