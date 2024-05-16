import React from "react";

const TrackTemplate2 = ({
	background_color,
	mainColor,
	secundaryColor,
	title_img,
	title_imgSize,
	intro,
	intro_background_color,
	color_text_intro,
	text_1,
	color_text_1,
	text_2,
	color_text_2,
	product_img,
	product_imgSize,
	secondary_background_color,
	text_3,
	color_text,
	text_4,
	text_5,
	text_6,
	color_text_button,
	color_button,
	unsuscribe_text,
	click_text,
}) => {
	return (
		<>
			<style>
				{`
    body,
    table,
    thead,
    tbody,
    tr,
    td,
    img {
        padding: 0;
        margin: 0;
        border: none;
        border-spacing: 0px;
        border-collapse: collapse;
        vertical-align: top;
    }

    .wrapper {
        padding-left: 10px;
        padding-right: 10px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a {
        margin: 0;
        padding: 0;
        padding-bottom: 20px;
        line-height: 1.2;
        font-family: Verdana, 'Arial', sans-serif;
        color: #fff;
    }

    h2 {
        font-size: 32px;
        font-weight: bold;
        color: #fff;
        padding-bottom: 0;
        background-: #000;
        width: 320px;
        padding: 10px;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
    }

    a {
        color: #000;
    }

    h1 {
        padding-bottom: 0px;
        padding-top: 10px;
        font-size: 36px;
    }

    .title-para {
        font-family: Verdana, 'Arial', sans-serif;
        text-shadow: 1px 1px 1px black;
        font-size: 22px;
        color: #fff;
        padding-bottom: 10px;
        padding-top: 15px;
        border-bottom: 0.5px solid #fff;
        width: 340px;
    }
.gradient-background {
    background: hsla(140, 67%, 49%, 1);
    background: linear-gradient(360deg, hsla(140, 67%, 49%, 1) 0%, hsla(0, 0%, 3%, 1) 50%);
    background: -moz-linear-gradient(360deg, hsla(140, 67%, 49%, 1) 0%, hsla(0, 0%, 3%, 1) 50%);
    background: -webkit-linear-gradient(360deg, hsla(140, 67%, 49%, 1) 0%, hsla(0, 0%, 3%, 1) 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#29D162", endColorstr="#080808", GradientType=1);
    width: 100%;
    height: 100vh; /* Adjust height as needed */
    /* Add any other styles you need */
}
    .feature-img {
        width: 65%;
        margin-top: -10px;
        margin-bottom: 70px;
    }

    .product-name {
        font-family: Verdana, 'Arial', sans-serif;
        text-shadow: 1px 1px 1px black;
        font-size: 32px;
        font-weight: bold;
        color: #fff;
        padding-bottom: 10px;
        padding-top: 15px;
        width: 100%;
    }

    #txt_4 {
        font-size: 25px;
        border-radius: 25px;
        color: #05b69f;
        line-height: 55px;
        padding: 5px 0 0 0;
        animation-name: txt4;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        font-family: Arial, Helvetica, sans-serif;
        vertical-align: -webkit-baseline-middle;

    }

    .button {
        background-color: red;
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin-top: -40px;
        font-weight: bold;
        cursor: pointer;
        width: 305px;
        height: 62px;
    }

    @keyframes txt4 {
        0% {
            color: #10234c;
        }
        25% {
            color: #10234c;
        }
        50% {
            color: #1f3870;
        }
        100% {
            color: #fff;
        }
    }

    .linebg {
        background-size: 200px;
        background-position: center;
        background-repeat: no-repeat;
    }

    .cta {
        background-color: #0946BE;
        padding: 16px 20px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
    }

    @media only screen and (max-width: 480px) {
        .wrapper .section {
            width: 100%;
        }
        .wrapper .column {
            width: 95%;
            display: block;
            padding: 10px;
        }
        h2 {
            margin-top: 0px;
            font-size: 24px;
            text-align: center;
            width: 260px;
        }
        .cta {
            display: block;
            max-width: 80%;
        }
        .title-para {
            width: 280px;
        }


    }
    `}
			</style>
			<body style={{ backgroundColor: background_color }}>
				<table width="100%" border="0" align="center">
					<tbody>
						<tr>
							<td align="center">
								<table width="600" border="0" align="center" alt="background-image-style" data="image_bg" style={{ backgroundImage: `linear-gradient(to right, ${mainColor}, ${secundaryColor})` }}>
									<tbody>
										<tr>
											<td height="146">
												<table width="100%" border="1" align="center">
													<tbody>
														<tr>
															<td height="20" style={{ lineHeight: "20px" }}></td>
														</tr>
														<tr>
															<td align="center" height="120">
																<img border="0" data-id="in" src={title_img} style={{ width: title_imgSize }} alt="logo" />
															</td>
														</tr>
														<tr>
															<td height="0" style={{ lineHeight: "30px" }}></td>
														</tr>
														<tr>
															<td align="center">
																<h2 style={{ backgroundColor: intro_background_color, color: color_text_intro, textShadow: "1px 1px 1px black", border: "solid" }}>{intro}</h2>
															</td>
														</tr>
														<tr>
															<td align="center">
																<p className="title-para">{text_1}</p>
															</td>
														</tr>
														<tr>
															<td align="center">
																<p className="product-name"> {text_2}</p>
																<br />
																<p>
																	<img border="0" alt="image" src="https://686.efuserassets.com/686/offers/13974/c/40313/assets/stars.png" width="90" /> 2,515 Reviews
																</p>
															</td>
														</tr>
														<tr>
															<td height="30" style={{ lineHeight: "30px" }}></td>
														</tr>
													</tbody>
												</table>
												<table
													width="600"
													border="0"
													align="center"
													cellpadding="10"
													data="image_bg"
													background="https://686.efuserassets.com/686/offers/14065/c/40720/assets/imgWhite.png"
													style={{ backgroundRepeat: "repeat-x", backgroundPosition: "center bottom", backgroundSize: "100% 900px" }}
												>
													<tbody>
														<tr>
															<td width="125">&nbsp;</td>
															<td width="275" align="center">
																<img border="0" src={product_img} style={{ width: product_imgSize, marginTop: "-25px" }} />
															</td>
															<td width="124">&nbsp;</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td align="center">
								<table width="600" border="0" align="center" style={{ backgroundColor: secondary_background_color }}>
									<tbody>
										<tr>
											<td align="center">
												<p style={{ width: "400px", maxWidth: "90%", marginTop: "30px", color: color_text, fontSize: "20px" }}>
													<strong>{text_3}</strong>
												</p>
												<br />
												<br />
												<p style={{ width: "450px", maxWidth: "70%", marginTop: "-20px", color: color_text, fontSize: "17px" }}>
													{text_4}
													<strong>{text_5}</strong>
													<br />
													<br />
												</p>
											</td>
										</tr>
										<tr>
											<td height="30" style={{ lineHeight: "30px" }}></td>
										</tr>
										<tr>
											<td align="center">
												<br />
												<br />
												<div id="txt_4" className="button" style={{ color: color_text_button, backgroundColor: color_button }}>
													{text_6}
												</div>
												<br />
											</td>
										</tr>
										<tr>
											<td height="50" style={{ lineHeight: "50px" }}></td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td align="center">
								<table width="100%">
									<tbody>
										<tr>
											<td height="20"></td>
										</tr>
										<tr>
											<td align="center">
												<p style={{ fontSize: "11px", color: "#797979", maxWidth: "550px", lineHeight: "1.4", padding: "0" }}>
													{unsuscribe_text}
													<a href="https://www.tenwindowripe.com/o-ngjc-p85-8d9d72e5c6610703d2f02c01a507e19c" style={{ color: "#666", textDecoration: "none" }}>
														{click_text}
													</a>
												</p>
											</td>
										</tr>
										<tr>
											<td height="35" style={{ lineHeight: "35px" }}>
												&nbsp;{" "}
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</>
	);
};

export default TrackTemplate2;
