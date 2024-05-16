import React from "react";
import { Col, Row, Button, Modal } from "antd";
import Image from "./image";

const ImagesGallery = ({ visible, index, onCancel, images, selectImage }) => {
	return (
		<>
			<Modal
				open={visible}
				title="Images"
				onCancel={onCancel}
				footer={[
					<Button key="cancel" onClick={onCancel}>
						Close
					</Button>,
				]}
				// style={{ overflowX: "auto", height: "500px" }}
			>
				<Row gutter={16}>
					{images ? (
						images.map((image) => (
							<Col span={6} style={{ marginBottom: 12 }}>
								<Image
									src={image}
									onClick={(e) => {
										selectImage(index, e.target.src);
										onCancel();
									}}
								></Image>
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

export default ImagesGallery;
