import React from "react";

const ProductTemplate2 = ({
	mainColor,
	secondaryColor,
	logoImg,
	logoImgSize,
	productImg,
	productImgSize,
	brand,
	product,
	buttonText,
	text01,
	text02,
	text03,
	text04,
	text05,
	text06,
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
    padding-bottom: 10px;
    line-height: 1.2;
    font-family: "Arial", sans-serif;
    color: #fff;
    }
    .logo-wrap {
    padding-top: 35px;
    margin-bottom: 20px;
    }
    .logo {
    }
    .intro {
    font-size: 120px;
    letter-spacing: -3px;
    font-weight: bold;
    padding: 0px;
    line-height: 1;
    }
    .intro-sub{
    text-transform: uppercase;
    font-size: 80px;
    font-weight: bold;
    color: #1c1e75;
    -webkit-text-stroke: 2px #fff;
    line-height: 1;
    }
    .intro-para {
    font-size: 24px;
    font-weight: bold;
    }
    .product-name {
    width: 80%;
    font-weight: bold;
    font-size: 40px;
    margin: 10px 0px;
    text-transform: uppercase;
    }
    .cta {
    background-color: #9BF2D1;
    color: #1C1D75;
    display: inline-block;
    min-width: 270px;
    padding: 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 28px;
    border-radius: 20px;
    }
    .feature-wrap{
    display: grid;
    place-items: center;
    margin-top: 150px;
    }
    .feature-img {
    margin-top: -100px;
    margin-bottom: 120px;
    max-height: 420px;
    }
    .cta-para {
    font-size: 26px;
    margin-top: -80px;
    width: 90%;
    color: #1C1D75;
    }
    .cta-2 {
    margin-top: 20px;
    margin-bottom: 50px;
    min-width: 75%;
    }
    .feature-para {
    font-size: 24px;
    margin-top: 20px;
    color: #000;
    margin-bottom: 30px;
    }
    .bg-wrap{background-repeat:no-repeat;background-size: 100%;-webkit-text-size-adjust: 100%;mso-line-height-rule: exactly;}
    @media only screen and (max-width: 480px) {
    .wrapper .section {
    width: 100%;
    }
    .wrapper .column {
    width: 100%;
    display: block;
    }
    .logo-wrap {
    padding-top: 23px;
    margin-bottom: 60px;
    }
    .intro {
    font-size: 78px;
    }
    .intro-sub{
    font-size: 36px;
    }
    .intro-para {
    font-size: 18px;
    }
    .product-name {
    font-size: 24px;
    }
    .cta{
    font-size: 24px;
    min-width: 210px;
    }
    .feature-wrap{
    height: 340px;
    margin-top: 40px;
    }
    .feature-img {
    max-height: 340px;
    }
    .cta-para {
    font-size: 20px;
    }
    .cta-2 {
    margin-top: 15px;
    font-size: 18px;
    }
    .feature-para {
    font-size: 17px;
    margin-top: 30px;
    }
    .bg-wrap{background-repeat:no-repeat;background-size: 115%;-webkit-text-size-adjust: 115%;background-position: top center;}
    }
    `}
			</style>
			<body style={{ backgroundColor: "#f5f5f5", paddingTop: "10px" }}>
				<table width="100%">
					<tbody>
						<tr>
							<td className="wrapper" width="550" align="center">
								<table width="550" className="section header" align="center">
									<tbody>
										<tr>
											<td align="center" bgcolor="#fff" data="image_bg" style={{ backgroundColor: mainColor }} bg-wrap>
												<div className="logo-wrap">
													<img border="0" src={logoImg} alt="logo" className="logo" style={{ width: logoImgSize }} />
												</div>
												{/* <p className="intro">{text01}</p> */}
												<p className="intro-sub" style={{ color: mainColor }}>
													{text02}
												</p>
												<p className="intro-para">{text03}</p>
												<p className="product-name">
													{brand} {product}
												</p>
												<a style={{ color: mainColor, backgroundColor: secondaryColor }} className="cta">
													{text04}
												</a>
												<a className="feature-wrap">
													<img border="0" src={productImg} alt="product image" style={{ width: productImgSize }} className="feature-img" />
												</a>
												<p className="cta-para" style={{ color: "white" }}>
													{text05}{" "}
													<strong>
														<span style={{ textTransform: "uppercase" }}>{text06}</span>
													</strong>
													.<br />
												</p>
												<a className="cta cta-2" style={{ color: mainColor, backgroundColor: secondaryColor }}>
													{buttonText}
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td height="15" style={{ lineHeight: "15px" }}>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td align="center">
								<p style={{ fontSize: "12px", color: "#797979", maxWidth: "550px", lineHeight: 1.4 }}>{unsubscribeText}</p>
							</td>
						</tr>
						<tr>
							<td height="35" style={{ lineHeight: "35px" }}>
								&nbsp;
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</>
	);
};

export default ProductTemplate2;
