import React from "react";

const TrackTemplate3 = ({
	mainColor,
	logoImg,
	logoImgSize,
	textColor,
	text_1,
	text_2,
	buttonColor,
	colorTextButton,
	textButton,
	productImg,
	productImgSize,
	text_3,
	textButton2,
	colorTextButton2,
	text_4,
	text_5,
	unsubscribe_text,
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

    #txt_4{
        font-size: 19px;
        border-radius: 7px;
        color: #ffffff;
        line-height: 55px;
        padding: 5px 0 0 0;
        font-family: Arial, Helvetica, sans-serif;
        vertical-align: -webkit-baseline-middle;

    }

    .button {
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

    .button2 {
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin-top: -40px;
        font-weight: bold;
        cursor: pointer;
        width: 210px;
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
			<table>
				<tbody style={{ background: `linear-gradient(180deg, ${mainColor} 0%, ${mainColor} 50%, rgb(255, 255, 255) 100%)` }}>
					<tr>
						<td align="center">
							<table width="600" border="0" align="center" alt="background-image-style">
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
															<img border="0" data-id="in" src={logoImg} width={logoImgSize} alt="logo" />
														</td>
													</tr>
													<tr>
														<td height="0" style={{ lineHeight: "30px" }}></td>
													</tr>
													<tr>
														<td align="center">
															<p style={{ fontSize: "35px", color: "rgb(255, 255, 255)", textShadow: "4px 3px 0px #000000", color: "white" }}>{text_1}</p>
														</td>
													</tr>
													<tr>
														<td align="center">
															<p style={{ fontSize: "20px", color: "white" }}>
																{text_2} <br /> {text_3}
															</p>
															<div id="txt_4" className="button2" style={{ marginTop: "20px", backgroundColor: buttonColor, color: colorTextButton }}>
																{textButton}
															</div>
														</td>
													</tr>
													<tr>
														<td height="30" style={{ lineHeight: "30px" }}></td>
													</tr>
												</tbody>
											</table>
											<table width="600" border="0" align="center" cellpadding="10">
												<tbody>
													<tr>
														<td width="125"></td>

														<td width="275" align="center">
															<img border="0" src={productImg} style={{ width: productImgSize, marginTop: "-10px" }} />
														</td>

														<td width="124"></td>
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
							<table width="600" border="0" align="center">
								<tbody>
									<tr align="center">
										<tr>
											<td height="30" style={{ lineHeight: "30px" }}></td>
										</tr>
										<tr>
											<td align="center">
												<p style={{ fontSize: "20px", color: "black" }}>
													<b>{text_4}</b>
												</p>
												<br />
												<br />

												<div id="txt_4" className="button" style={{ backgroundColor: mainColor, color: colorTextButton2 }}>
													{textButton2}
												</div>
												<br />

												<br />
												<br />
												<p style={{ fontStyle: "italic", fontSize: "12px", color: "black", margin: "0", padding: "0" }}>
													<b>{text_5}</b>
												</p>
											</td>
										</tr>
										<tr>
											<td height="50" style={{ lineHeight: "50px" }}></td>
										</tr>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td height="20"></td>
					</tr>
					<tr>
						<td align="center">
							<p style={{ fontSize: "11px", color: "#5c5b5b", maxWidth: "550px", lineHeight: "1.4", padding: "0" }}>{unsubscribe_text}</p>
						</td>
					</tr>
					<tr></tr>
					<tr>
						<td height="35" style={{ lineHeight: "35px" }}>
							&nbsp;{" "}
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default TrackTemplate3;
