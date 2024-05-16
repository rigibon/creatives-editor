import React from "react";

const StorageLimitTemplate = ({
	brand,
	mainColor,
	backgroundColor,
	buttonColor,
	textButtonColor,
	colorText,
	logoImg,
	logoImgSize,
	productImg,
	productImgSize,
	title,
	text01,
	text02,
	text03,
	text04,
	buttonText,
	text05,
	unsubscribeText,
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
        line-height: 1.2;
        font-family: Verdana, "Arial", sans-serif;
        color: #17191c;
    }

    .logo {
        margin-top: 20px;
    }

    .intro {
        font-size: 34px;
        color: #1d1d1d;
        max-width: 65%;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .feature-img {
        width: 300px;
    }

    .feature-para {
        font-size: 20px;
        margin-top: 20px;
    }

    .feature-para-2 {
        font-size: 18px;
        margin-left: 35px;
        margin-right: 35px;
    }

    .cta {
        background-color: #0071E3;
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
        max-width: 85%;
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
    }
    `}
			</style>
			<body style={{ backgroundColor: backgroundColor, paddingTop: "30px" }}>
				<table width="100%">
					<tbody>
						<tr>
							<td className="wrapper" width="550" align="center">
								<table width="550" className="section header" bgcolor="#fff" align="center" style={{ borderTop: "1px solid #f0f0f0", backgroundColor: mainColor }}>
									<tbody>
										<tr>
											<td align="center">
												<img border="0" src={logoImg} alt="" className="logo" style={{ width: logoImgSize }} />
												<p className="intro" style={{ color: colorText }}>
													{title}
												</p>
												<img border="0" src={productImg} className="feature-img" style={{ width: productImgSize }} />
												<p className="feature-para">
													<div style={{ color: colorText }}>{text01}</div>
												</p>
												<p className="feature-para-2">
													<div style={{ color: colorText }}>{text03}</div>
												</p>
												<a href="" className="cta" style={{ color: textButtonColor, backgroundColor: buttonColor }}>
													{buttonText}
												</a>
												<br />
												<br />
												<p className="desc" style={{ color: colorText }}>
													{text05}
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td align="center">
								<p style={{ fontSize: "12px", color: "#797979", maxWidth: "550px", lineHeight: "1.4", marginTop: "15px" }}>{unsubscribeText}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</>
	);
};

export default StorageLimitTemplate;
