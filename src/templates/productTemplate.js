import React from "react";

const ProductTemplate = ({
	mainColor,
	secondaryColor,
	title_color_text,
	description_color_text,
	text_color,
	text_button_color,
	button_color,
	titleImg,
	titleImgSize,
	productImg,
	productImgSize,
	brand,
	product,
	creativeTitle,
	surveyTitle,
	title,
	paragraph,
	paragraph2,
	claimText,
	buttonText,
	unsubscribeText,
}) => {
	return (
		<>
			<style>
				{`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    .main_conteiner {
        width: 550px;
        height: 950px;
        margin-left: auto;
        margin-right: auto;
        background: linear-gradient(179deg, rgba(0, 0, 0, 0.00) 38%, #000 71%);
    }
    .header {
        background-color: #FF0000;
        height: 33px;
    }
    .header>h5 {
        height: 37px;
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 33px;
        text-align: center;
    }
    .product {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    .product_logo {
        display: flex;
        justify-content: center;
        margin-top: -30px;
        width: 100%;
    }
    .product_logo>img {
        width: 50%;
    }
    .product_text {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .product_text>h3 {
        color: #000;
        font-family: Roboto;
        font-size: 35px;
        font-style: italic;
        font-weight: 900;
        line-height: normal;
        text-align: center;
        margin-top: -30px;
    }
    .product_text>h4 {
        color: #F00;
        text-align: center;
        font-family: Work Sans;
        font-size: 38px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .product_img {
        margin-top: -20px;
        width: 100%;
    }
    .product_img>img {
        margin-top: 20px;
        width: 60%;
        margin-bottom: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .offer_block {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 52.76%);
    }
    .button_offer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .button_offer>h1 {
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top: -40px;
    }
    .button_text {
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    .myButton {
        background-color: #D92C27;
        border-radius: 0px;
        border: 1px solid #D92C27;
        display: inline-block;
        cursor: pointer;
        padding: 20px 35px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #2F6627;
        color: #FFF;
        font-family: Roboto;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 411px;
        text-align: center;
        margin-top: 30px;
    }
    .myButton:hover {
        background-color: #CC0000;
    }
    .myButton:active {
        position: relative;
        top: 1px;
    }
    @media (min-width: 576px) {
        .container,
        .container-sm {
            max-width: 540px
        }
    }
    @media (min-width: 768px) {
        .container,
        .container-md,
        .container-sm {
            max-width: 720px
        }
    }
    @media (min-width: 992px) {
        .container,
        .container-lg,
        .container-md,
        .container-sm {
            max-width: 960px
        }
    }
    @media (min-width: 1200px) {
        .container,
        .container-lg,
        .container-md,
        .container-sm,
        .container-xl {
            max-width: 1140px
        }
    }
    @media (min-width: 1400px) {
        .container,
        .container-lg,
        .container-md,
        .container-sm,
        .container-xl,
        .container-xxl {
            max-width: 1320px
        }
    }
    .product_logo {
        padding-top: 2%;
    }
    .product_text {
        padding-top: 5%;
    }
    .header {
        padding-bottom: 5%;
    }
    `}
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto&family=Work+Sans:wght@600&display=swap" rel="stylesheet"></link>
			</style>
			{/* <body> */}
			<div className="container main_conteiner">
				<div style={{ backgroundColor: secondaryColor }} className="header">
					<h5>{creativeTitle}</h5>
				</div>
				<div className="product">
					<div className="product_logo" style={{ backgroundColor: mainColor }}>
						<img src={titleImg} alt="" style={{ marginBottom: 12, width: titleImgSize }} />
					</div>
					<div className="product_text" style={{ marginTop: 15 }}>
						<h3 style={{ color: title_color_text }}>{surveyTitle}</h3>
						<h4 style={{ color: description_color_text }}>{product}</h4>
					</div>
					<div className="product_img" style={{ width: productImgSize }}>
						<br />
						<img src={productImg} alt="" />
					</div>
				</div>
				<div className="offer_block">
					<div className="button_offer" style={{ marginBottom: "50px" }}>
						<br />
						<h1>{title}</h1>
						<p className="button_text">
							{paragraph}
							<strong>{brand}</strong>
							{paragraph2}
							<strong style={{ color: description_color_text }}>{product}</strong>
							{/* Share your valuable insights and win big! You've been chosen for a quick survey about store promotions at <strong>{brand}</strong>. */}
							{/* By participating, you could win{" "} <strong style={{ color: mainColor }}>{product}</strong> */}
							<br />
							<br />
							{claimText} {brand}.
						</p>
						<div>
							<a href="" className="myButton" style={{ color: text_button_color, backgroundColor: button_color, borderColor: button_color }}>
								{buttonText}
							</a>
						</div>
					</div>
				</div>
			</div>
			<p style={{ textAlign: "center", fontFamily: "Arial,Helvetica,sans-serif", fontSize: "13px", lineHeight: "1px", color: "#000", padding: "15px" }}>
				{unsubscribeText}
				<a href="" style={{ color: "#666", textDecoration: "none" }}>
					clicking here.
				</a>{" "}
			</p>
			{/* </body> */}
		</>
	);
};

export default ProductTemplate;
