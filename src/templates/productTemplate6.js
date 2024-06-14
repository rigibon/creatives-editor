import React from "react";

const ProductTemplate6 = ({
    brand,
    product_title,
    color_product_title,
    product_img,
    product_imgSize,
    logo,
    logoSize,
    background_img,
    background_color,
    color_button,
    color_button_text,
    product_lema,
    color_warning,
    color_text,
    color_lema_text,
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
                        color: #000000;
                    }
                    .logo {
                        margin-top: 20px;
                        width: 30%;
                        margin-bottom: 20px;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .title {
                        font-size: 32px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        color: #fff;
                        font-weight: bold;
                        margin-top: 20px;
                        margin-bottom: -20px;
                        text-shadow: 1px 1px 1px black;
                    }
                    .icon {
                        width: 30px;
                    }
                    .wrap {
                        display: block;
                        width: 80%;
                        padding: 10px;
                        background-color: rgb(255 255 255 / 85%);
                        box-shadow: 8px 13px 30px #000;
                        border-radius: 10px;
                        margin-top: 10px;
                    }
                    .feature-title {
                        max-width: 95%;
                        font-size: 15px;
                        margin-bottom: 0px;
                        padding-bottom: 20px;
                        margin-top: 0px;
                    }
                    .feature-para {
                        font-size: 14px;
                        max-width: 85%;
                    }
                    .cta {
                        font-size: 18px;
                        font-weight: bold;
                        border: solid black 0.1rem;
                        line-height: 1;
                        text-transform: uppercase;
                        background: #da3733;
                        color: #fff;
                        display: inline-block;
                        padding: 15px 30px;
                        text-decoration: none;
                        border-radius: 5px;
                        margin: 10px 0px;
                    }
                    .cta-icon {
                        width: 10px;
                        vertical-align: baseline;
                        margin-left: 6px;
                    }
                    .product-wrap {
                        background-color: #ffffff;
                        margin-top: 20px;
                        padding: 20px 30px;
                        height: 150px;
                        text-align: left;
                    }
                    .feature-img {
                        margin-top: -155px;
                        width: 40%;
                        margin-bottom: 0px;
                        margin-left: 270px;
                    }
                    .product-name {
                        font-size: 23px;
                        font-weight: bold;
                        display: inline-block;
                        max-width: 70%;
                        margin-top: 75px;
                        color: #fff;
                    }
                    .claim {
                        color: #da3733;
                        margin-top: -20px;
                        font-weight: 600;
                        font-size: 20px;
                        letter-spacing: 0px;
                        margin-bottom: 5px;
                        display: block;
                    }
                    .bottom-para {
                        display: block;
                        clear: both;
                        margin-top: 50px;
                        margin-bottom: 40px;
                        font-size: 13px;
                    }
                    .bg-wrap {
                        background-repeat: no-repeat;
                        background-size: 110%;
                        -webkit-text-size-adjust: 100%;
                        mso-line-height-rule: exactly;
                    }
                    @media only screen and (max-width: 480px) {
                        .wrapper .section {
                            width: 100%;
                        }
                        .wrapper .column {
                            width: 100%;
                            display: block;
                        }
                        .logo {
                            max-width: 180px;
                            max-height: 50px;
                            margin: 12px 0px;
                        }
                        .title {
                            font-size: 16px;
                            margin-top: 18px;
                        }
                        .wrap {
                            width: 80%;
                            padding: 10px;
                            margin-top: 0px;
                        }
                        .feature-title {
                            max-width: 100%;
                            margin-bottom: 10px;
                            padding-bottom: 10px;
                            margin-top: 10px;
                            font-size: 14px;
                        }
                        .feature-para {
                            font-size: 11px;
                            max-width: 100%;
                        }
                        .cta {
                            min-width: 200px;
                            padding: 12px;
                            font-size: 18px;
                            margin-top: 10px;
                        }
                        .product-wrap {
                            margin-top: 10px;
                            padding: 20px 10px;
                            height: 120px;
                        }
                        .product-name {
                            font-size: 16px;
                        }
                        .claim {
                            font-size: 10px;
                            letter-spacing: 0px;
                            color: #;
                        }
                        .feature-img {
                            max-height: 180px;
                            max-width: 120px;
                        }
                    }
                `}
            </style>

            <body style={{ backgroundColor: "#f5f5f5", paddingTop: 30 }}>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td className="wrapper" width="548" align="center">
                                <table width="548" className="section header" align="center">
                                    <tbody>
                                        <tr>
                                            <td align="center" bgcolor="#ffffff">
                                                <img style={{width:logoSize}} border="0" src={logo} alt="logo" className="logo" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" bgcolor={background_color} background={background_img} className="bg-wrap">
                                                <div className="wrap">
                                                    <p style={{color:color_text}} className="feature-title">
                                                        Dear {brand} Shopper,<br /><br />We value your opinion and want to improve your experience. Help us serve you better by taking a quick <strong>2-minute</strong> survey, and you could be in with a chance of winning a fantastic prize!<br /><br />

                                                        As a token of our appreciation, we are offering you the unique opportunity to receive a <span style={{ color: color_product_title }}><strong>{product_title}</strong></span>!<br /><br />

                                                        To enter, simply complete this short survey about your experience with {brand}.<br /><br />

                                                        Thank you in advance for your time and feedback.
                                                    </p>
                                                    <a style={{ backgroundColor: color_button, color: color_button_text }} href="" className="cta">GET STARTED NOW</a>
                                                </div>
                                                <div className="product-wrap">
                                                    <p style={{color:color_text,maxWidth: 300}} className="product-name">
                                                        <span style={{color:color_lema_text}} className="claim">{product_lema}</span>
                                                        {product_title}
                                                    </p>
                                                    <img style={{width:product_imgSize}} border="0" src={product_img} alt="product image" className="feature-img" />
                                                </div>
                                                <br /><br />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="15" style={{ lineHeight: "15px" }}>&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center">
                                <p style={{ fontSize: 12, color: color_warning, maxWidth: "548px", lineHeight: 1.4 }}>
                                    If you no longer wish to receive these emails, you may unsubscribe by <a href="" style={{ color: color_warning, textDecoration: "none" }}>clicking here.</a>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td height="35" style={{ lineHeight: "35px" }}>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </>
    );
};

export default ProductTemplate6;
