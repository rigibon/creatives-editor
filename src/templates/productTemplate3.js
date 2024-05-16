import React, { useEffect } from "react";

const ProductTemplate3 = ({
	logoImg,
	logoImgSize,
	text01,
	mainColor,
	text02,
	text03,
	buttonTextColor,
	buttonColor,
	buttonText,
	productImg,
	productImgSize,
	product,
	text04,
	text05,
	buttonTextColor2,
	buttonText2,
	unsubscribeText,
	colorText1,
	colorText2,
	passBodyRef,
}) => {
	useEffect(() => {
		const dimensions = { width: document.getElementById("tab").offsetHeight - 700, height: 550 };
		passBodyRef(dimensions);
	}, []);
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
    font-family: Arial;
    color: #000;
    }
    .content-wrap {
    /* border: 5px solid rgb(0, 0, 0); */
    border-radius: 0px 0px 0px 0px;
    display: inline-block;
    }
    .logo-wrap {
    padding: 12px;
    // background-color: rgb(0, 115, 220);
    border-radius: 0px 0px 0px 0px;
    margin-top: 20px;
         margin-bottom: -20px;
         display: block;
         margin-left: auto;
         margin-right: auto;
    }
    .logo {
    font-size: 45px;
    font-weight: bold;
     margin-top: -30px;
    display: inline-block;
    color: #fff;
    }
    .top-para {
    font-size: 14px;
    margin-top: 20px;
    }
    .title{
    font-size: 36px;
    font-weight: bold;
    margin-top: 40px;
    }
    .product-name {
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    width: 80%;
    }
    .title-para {
    max-width: 75%;
    font-size: 18px;
    padding: 0px;
    }
    .cta {
    font-size: 22px;
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
    background: rgb(0, 115, 220);
    color: #fff;
    display: inline-block;
    padding: 16px 40px;
    text-decoration: none;
    border-radius: 50px;
    margin: 30px 0px;
    }
    .cta-bg{
    background-color: rgb(0, 115, 220);
    border: 5px solid black;
    }
    .feature-img {
    max-width: 70%;
    max-height: 340px;
    border-radius: 30px;
    }
    .product-image-wrap {
    max-width: 90%;
    margin: 20px 0px;
    overflow: auto;
    }
    .product-img {
    width: 45%;
    margin: 0px 2.5%;
    float: left;
    border-radius: 0px;
    }
   
   h2 {
   margin: 0;
   padding: 0;
   padding-bottom: 20px;
   line-height: 1.2;
   /* font-family: Verdana; */
   color: #fff;
   }
   
   h2 {
   font-size: 32px;
   font-weight: bold;
   color: #fff;
   padding-bottom: 0;
   background-color: #000;
   width: 320px;
   padding: 10px;
   border-top-left-radius: 40px;
   border-top-right-radius: 40px;
   border-bottom-left-radius: 40px;
   border-bottom-right-radius: 40px;
   }
    
    @media only screen and (max-width: 480px) {
    .wrapper .section {
    width: 100%;
    }
    .wrapper .column {
    width: 100%;
    display: block;
    }
    .title {
    font-size: 26px;
    font-weight: bold;
    margin-top: 40px;
    }
    .title-para {
    max-width: 85%;
    font-size: 16px;
    }
    .product-image-wrap {
    margin-bottom: 0px;
    }
    .feature-img {
    max-height: 280px;
    }
    .answer {
    font-size: 16px;
    margin-top: 35px;
    }
    .free {
    font-size: 24px;
    } 
    .cta {
    min-width: 260px;
    padding: 15px;
    font-size: 20px;
    margin-top: 20px;
    border: 2px solid black;
    }
    }
    `}
			</style>
			{/* <body> */}
			<table width="100%" id="tab">
				<tbody>
					<tr>
						<td className="wrapper" width="600" align="center">
							<table width="600" className="section header" align="center">
								<tbody>
									<tr>
										<td align="center" bgcolor="#fff">
											<div className="logo-wrap" style={{ backgroundColor: mainColor }}>
												<div style={{ textAlign: "center" }}>
													<img src={logoImg} width={logoImgSize} />
												</div>
												<p style={{ marginTop: "7px" }}>
													<span style={{ color: colorText1, fontSize: "14px" }}>
														<strong>{text01}</strong>
													</span>
												</p>
											</div>
											<div className="content-wrap" style={{ margin: 0, padding: 0 }}>
												<div style={{ backgroundColor: "white" }}>
													{/* <p className="title">ANSWER FOR FREE!</p> */}
													<h2 style={{ backgroundColor: mainColor, color: colorText1, width: "90%", marginTop: "40px", marginBottom: "20px", textShadow: "1px 1px 1px black", border: "solid" }}>
														{text02}
													</h2>
													<p className="title-para" style={{ color: colorText2 }}>
														{text03}
													</p>
													<a
														href=""
														className="cta"
														style={{
															color: buttonTextColor,
															backgroundColor: buttonColor,
															borderRadius: "12px",
															WebkitBoxShadow: "0px 8px 0px -1px rgba(170,170,170,1)",
															MozBoxShadow: "0px 8px 0px -1px rgba(170,170,170,1)",
															boxShadow: "0px 8px 0px -1px rgba(170,170,170,1)",
														}}
													>
														{buttonText}
													</a>
													<div className="product-image-wrap" style={{ margin: "0px" }}>
														<img border="0" src={productImg} width={productImgSize} alt="product image" className="feature-img" />
														<p className="product-name" style={{ fontSize: "24px", margin: "0px", color: colorText2 }}>
															{product}
														</p>
													</div>
												</div>
												<div style={{ background: `linear-gradient(0deg, ${mainColor} 26%, rgba(255,255,255,1) 100%)` }}>
													<p className="low-inventory" style={{ color: colorText2 }}>
														<span>
															<img
																border="0"
																alt="image"
																style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(0%) saturate(0%) hue-rotate(61deg) brightness(99%) contrast(96%)" }}
																src="https://686.efuserassets.com/686/offers/14047/c/40600/assets/icon.png"
																width="20"
															/>
															{text04}
														</span>
													</p>
													<p className="title-para" style={{ color: colorText2 }}>
														{text05}
													</p>
													<a
														href=""
														className="cta cta-bg"
														style={{
															color: buttonTextColor2,
															border: "20px",
															borderColor: "black",
															borderRadius: "15px",
															backgroundColor: buttonColor,
															WebkitBoxShadow: "0px 8px 0px -1px rgba(70,70,70,1)",
															MozBoxShadow: "0px 8px 0px -1px rgba(70,70,70,1)",
															boxShadow: "0px 8px 0px -1px rgba(70,70,70,1)",
														}}
													>
														{buttonText2}
													</a>
												</div>
											</div>
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
							<p style={{ fontSize: "12px", color: "#5e5e5e", maxWidth: "500px", lineHeight: "1.4" }}>{unsubscribeText}</p>
						</td>
					</tr>
					<tr>
						<td height="35" style={{ lineHeight: "35px" }}>
							&nbsp;
						</td>
					</tr>
				</tbody>
			</table>
			{/* </body> */}
		</>
	);
};

export default ProductTemplate3;
