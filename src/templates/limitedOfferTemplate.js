import React from "react";

const LimitedOfferTemplate = ({
	brand,
	mainColor,
	secondaryColor,
	textColor,
	title_img,
	title_imgSize,
	product_img,
	product_imgSize,
	color_button,
	intro,
	intro_2,
	text_1,
	text_2,
	text_3,
	text_4,
	text_buttom,
	text_warning_1,
	text_warning_2,
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
        padding-bottom: 10px;
        line-height: 1.2;
        font-family: Verdana, "Arial", sans-serif;
        color: #17191c;
    }

    .logo {
         margin-top: 30px;
  width: 35%;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
    }

    .intro {
        font-size: 34px;
        color: #1d1d1d;
        max-width: 65%;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .feature-img {
         margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
    }

    .feature-para {
        font-size: 20px;
        margin-top: 20px;
        max-width: 90%;
    }

    .feature-para-2 {
        font-size: 17px;
        max-width: 60%;
    }

    .cta {
        background-color: #e50914;
        padding: 16px 40px;
        text-decoration: none;
        color: #fff;
        font-size: 24px;
        border-radius: 50px;
        display: inline-block;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .desc {
        font-size: 12px;
        max-width: 55%;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 480px) {
        .wrapper .section {
            width: 100%;
        }
        .wrapper .column {
            width: 100%;
            display: block;
        }
        .intro {
            font-size: 26px;
            max-width: 80%;
        }
        .feature-para {
            font-size: 18px;
        }
        .feature-para-2 {
            font-size: 15px;
            max-width: 80%;
        }
        .desc {
            max-width: 85%;
        }
    }`}
			</style>
			<body style={{ backgroundColor: secondaryColor, paddingTop: "30px" }}>
				<table width="100%">
					<tbody>
						<tr>
							<td className="wrapper" width="550" align="center">
								<table width="550" className="section header" bgcolor={mainColor} align="center" style={{ borderTop: "1px solid #f0f0f0" }}>
									<tbody>
										<tr>
											<td align="center">
												<img border="0" src={title_img} alt="" className="logo" style={{ width: title_imgSize }} />
												<div className="card">
													<span style={{ fontSize: "1em", fontWeight: 500 }}>
														<p style={{ color: textColor }}>{intro}</p>
													</span>
													<p className="intro" style={{ color: textColor }}>
														{intro_2}
													</p>
													<img className="feature-img" style={{ width: product_imgSize }} border="0" src={product_img} />

													<p className="feature-para">
														<div style={{ color: textColor }}>
															{text_1}
															<br />
															{text_3}
														</div>
													</p>
													<p className="feature-para-2" style={{ color: textColor }}>
														{text_4}
													</p>
													<a href="" style={{ backgroundColor: color_button }} className="cta">
														{text_buttom}
													</a>
													<br />
													<br />
													<p className="desc" style={{ color: textColor }}>
														{text_warning_1}
														<br /> <strong>{text_warning_2}</strong>
													</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td align="center">
								<br />
								<a href="" style={{ color: "#666", textDecoration: "none" }}>
									Unsubscribe
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</>
	);
};

export default LimitedOfferTemplate;
