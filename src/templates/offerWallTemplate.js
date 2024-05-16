import React from "react";

const OfferWallTemplate = ({
	mainColor,
	secondaryColor,
	title_img,
	title_imgSize,
	product_img,
	product_imgSize,
	color_buttom,
	intro,
	text_1,
	text_2,
	text_3,
	text_buttom,
	text_warning_1,
	intro_color,
}) => {
	return (
		<body style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top", backgroundColor: "#efefef" }}>
			<table style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top" }}>
				<tbody>
					<tr>
						<td height="35">&nbsp;</td>
					</tr>
				</tbody>
			</table>
			<table width="100%" style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top" }}>
				<tbody>
					<tr>
						<td
							className="wrapper"
							width="550"
							align="center"
							style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top", paddingLeft: "10px", paddingRight: "10px" }}
						>
							<table
								className="section header"
								width="550"
								style={{ backgroundColor: secondaryColor, border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top" }}
							>
								<tbody>
									<tr>
										<td align="center">
											<table>
												<tbody>
													<tr>
														<td height="15"></td>
													</tr>
													<tr>
														<td align="center">
															<img
																border="0"
																src={title_img}
																alt="logo"
																style={{ width: title_imgSize, border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top" }}
															/>
														</td>
													</tr>
													<tr>
														<td height="15"></td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table
								className="section"
								width="550"
								style={{ backgroundColor: mainColor, border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top" }}
							>
								<tbody>
									<tr>
										<td height="30"></td>
									</tr>
									<tr>
										<td valign="top">
											<table width="100%">
												<tbody>
													<tr>
														<td align="center">
															<h2
																style={{
																	color: intro_color,
																	fontFamily: "Verdana, Arial, sans-serif",
																	lineHeight: "1.2",
																	margin: "0",
																	padding: "0",
																	paddingBottom: "0",
																	fontSize: "24px",
																	fontWeight: "normal",
																	marginTop: "0px",
																	textAlign: "center",
																}}
															>
																{intro}
															</h2>
														</td>
													</tr>
													<tr>
														<td
															align="center"
															background="https://1687.efuserassets.com/1687/offers/7/c/2627/assets/lines.png"
															style={{
																border: "none",
																borderCollapse: "collapse",
																borderSpacing: "0px",
																margin: "0",
																padding: "0",
																verticalAlign: "top",
																backgroundRepeat: "no-repeat",
																backgroundSize: "180px",
																backgroundPosition: "center",
																WebkitTextSizeAdjust: "100%",
																msoLineHeightRule: "exactly",
															}}
														>
															<p
																style={{
																	color: "#fff",
																	fontFamily: "Verdana, Arial, sans-serif",
																	lineHeight: "1.2",
																	margin: "0",
																	padding: "0",
																	paddingBottom: "10px",
																	fontSize: "16px",
																	paddingTop: "10px",
																}}
															>
																{text_1}
															</p>
														</td>
													</tr>
													<tr>
														<td align="center">
															<h1 style={{ color: "#fff", fontFamily: "Verdana, Arial, sans-serif", lineHeight: "1.2", margin: "0", padding: "0", paddingBottom: "0px", fontSize: "36px" }}>
																{text_2}
															</h1>
														</td>
													</tr>
													<tr>
														<td height="30"></td>
													</tr>
													<tr>
														<td align="center">
															<img
																border="0"
																src={product_img}
																alt="reward"
																style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top", width: product_imgSize }}
															/>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table
								className="section header"
								cellpadding="15"
								width="550"
								style={{ backgroundColor: mainColor, border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top" }}
							>
								<tbody>
									<tr>
										<td
											className="column"
											style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "10px", verticalAlign: "top", display: "block", width: "95%" }}
										>
											<table width="100%">
												<tbody>
													<tr>
														<td align="center">
															<p
																style={{
																	color: "#fff",
																	fontFamily: "Verdana, Arial, sans-serif",
																	lineHeight: "1.2",
																	margin: "0",
																	padding: "0",
																	paddingBottom: "10px",
																	fontSize: "16px",
																	paddingTop: "0px",
																	width: "400px",
																	maxWidth: "90%",
																}}
															>
																{text_3}
															</p>
														</td>
													</tr>
													<tr>
														<td height="30"></td>
													</tr>
													<tr>
														<td align="center">
															<a
																href="https://www.extensivelead.com/3KN5X7W/SBCM8MH/?creative_id=36262"
																className="cta"
																style={{
																	color: "#fff",
																	fontFamily: "Verdana, Arial, sans-serif",
																	lineHeight: "1.2",
																	margin: "0",
																	padding: "16px 20px",
																	paddingBottom: "20px",
																	backgroundColor: color_buttom,
																	borderRadius: "5px",
																	fontWeight: "bold",
																	textDecoration: "none",
																	display: "block",
																	maxWidth: "80%",
																}}
															>
																{text_buttom}
															</a>
														</td>
													</tr>
													<tr>
														<td height="50"></td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table
								className="section header"
								cellpadding="15"
								width="550"
								style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "0", verticalAlign: "top" }}
							>
								<tbody>
									<tr>
										<td
											className="column"
											style={{ border: "none", borderCollapse: "collapse", borderSpacing: "0px", margin: "0", padding: "10px", verticalAlign: "top", display: "block", width: "95%" }}
										>
											<table>
												<tbody>
													<tr>
														<td height="25">&nbsp;</td>
													</tr>
													<tr>
														<td align="center">
															<p
																style={{
																	color: "#797979",
																	fontFamily: "Verdana, Arial, sans-serif",
																	lineHeight: "1.2",
																	margin: "0",
																	padding: "0",
																	paddingBottom: "10px",
																	fontSize: "12px",
																	paddingTop: "10px",
																}}
															>
																{text_warning_1}
																<a href="" style={{ color: "#666", textDecoration: "none" }}></a>
															</p>
														</td>
													</tr>
													<tr>
														<td height="35">&nbsp;</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</body>
	);
};

export default OfferWallTemplate;
