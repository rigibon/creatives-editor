import React from "react";

const SubscriptionTemplate = ({ mainColor, colorButton, titleImg, titleImgSize, productImg, productImgSize, title, text01, text02, buttonText, text03, text04, unsubscribeText }) => {
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
    }

    .feature-para-2 {
        font-size: 17px;
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
			<body style={{ backgroundColor: "white", paddingTop: "30px", alignContent: "center" }}>
				<table width="100%" style={{ backgroundColor: mainColor }}>
					<tbody>
						<tr>
							<td className="wrapper" width="550" align="center">
								<table width="550" className="section header" align="center" style={{ borderTop: "1px solid #f0f0f0" }}>
									<tbody>
										<tr>
											<td align="center">
												<img border="0" src={titleImg} alt="" className="logo" style={{ width: titleImgSize }} />
												<p className="intro">{title}</p>
												<img border="0" src={productImg} className="feature-img" style={{ width: productImgSize }} />
												<p className="feature-para">{text01}</p>
												<p className="feature-para-2">{text02}</p>
												<a href="" style={{ backgroundColor: colorButton }} className="cta">
													{buttonText}
												</a>
												<p className="desc">
													{text03}
													<br />
													<strong>{text04}</strong>
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td align="center">
								<p style={{ textAlign: "center", fontFamily: "Arial,Helvetica,sans-serif", fontSize: "13px", lineHeight: "1px", color: "#000", padding: "15px" }}>{unsubscribeText}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</>
	);
};

export default SubscriptionTemplate;
