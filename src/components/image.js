import React, { useState } from "react";

const Image = ({ src, onClick }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	const borderColor = isHovered ? "rgb(22, 119, 255)" : "#888";
	const cursorStyle = isHovered ? "pointer" : "default";

	return (
		<>
			<div
				onClick={onClick ? onClick : () => {}}
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
				style={{ border: "3px solid #888", borderColor, cursor: cursorStyle, padding: "2px", borderRadius: "4px", maxWidth: "80px", minHeight: "25px" }}
			>
				<img src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
			</div>
		</>
	);
};

export default Image;
