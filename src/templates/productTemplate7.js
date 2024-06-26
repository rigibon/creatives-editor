import React from "react";

const ProductTemplate7 = ({
  color_text_1,
  text_1,
  product_title,
  text_2,
  text_3,
  bg_color_t3,
  color_product_text,
  logo,
  logoSize,
  bg_image,
  bg_color,
  color_text,
  product_img,
  product_imgSize,
  color_button,
  color_text_button,
  stars_button,
  unsuscribe_text_color,
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
            color: #8D7156;
          }
          .logo-wrap {
            height: 60px;
            margin-top: 0px;
            margin-bottom: 120px;
          }
          .logo {
            max-width: 300px;
            max-height: 190px;
          }
          .wrap{
            height: 170px;
          }
          .title-para {
            font-size: 26px;
            padding-bottom: 5px;
          }
          .title {
            font-size: 42px;
            color: #4B3D30;
            padding-bottom: 5px;
          }
          .cta {
            font-size: 28px;
            font-weight: bold;
            line-height: 1;
            text-transform: uppercase;
            background: #737C06;
            color: #FDF8EC;
            display: inline-block;
            min-width: 280px;
            padding: 20px;
            text-decoration: none;
            border-radius: 20px;
            margin: 20px 0px;
          }
          .cta-icon{
            width: 24px;
            vertical-align: middle;
          }
          .cta-2 {
            background-color: #7E6C09;
            min-width: 65%;
          }
          .product-image-wrap {
            display: grid;
            place-items: center;
            height: 300px;
            width: 75%;
            margin-top: 10px;
          }
          .feature-img {
            margin-top: -40px;
            width: 90%;
            margin-bottom: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .answer {
            font-size: 27px;
            width: 75%;
            margin-top: 40px;
            margin-bottom: 5px;
          }
          .free{
            text-transform: uppercase;
            font-size: 28px;
            margin-top: 20px;
            color: #000;
            margin-bottom: 40px;
          }
          .feature-para {
            font-size: 15px;
            max-width: 80%;
            margin-bottom: 30px;
            color: #000;
          }
          .bg-wrap {
            background-repeat: no-repeat;
            background-size: 100%;
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
            .logo-wrap {
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .logo{
              max-height: 50px;
              max-width: 190px;
            }
            .wrap {
              height: 140px;
            }
            .title-para {
              font-size: 22px;
              padding-bottom: 0px;
            }
            .title {
              font-size: 32px;
            }
            .product-image-wrap {
              height: 230px;
              width: 85%;
            }
            .feature-img {
              max-height: 230px;
            }
            .cta {
              min-width: 250px;
              padding: 18px;
              font-size: 23px;
              margin-top: 10px;
              margin-bottom: 0px;
            }
            .answer {
              font-size: 20px;
              margin-top: 10px;
              margin-bottom: 0;
            }
            .free {
              font-size: 18px;
              margin-top: 16px;
              margin-bottom: 30px;
            }
          }
        `}
      </style>

      <body style={{ backgroundColor: bg_color, paddingTop: 10 }}>
        <table width="100%">
          <tbody>
            <tr>
              <td className="wrapper" width="550" align="center">
                <table width="550" className="section header" align="center">
                  <tbody>
                    <tr>
                      <td
                        style={{ backgroundColor: bg_color, color: color_text }}
                        align="center"
                        bgcolor="#fdf8ec"
                        data="image_bg"
                        background={bg_image}
                        className="bg-wrap"
                      >
                        <div className="logo-wrap">
                          <img
                            style={{ width: logoSize }}
                            border="0"
                            src={logo}
                            alt="logo"
                            className="logo"
                          />
                        </div>
                        <div className="wrap">
                          <p style={{ color: color_text }} className="title-para">
                            Your Shot at a
                          </p>
                          <p className="title">
                            <span style={{ color: color_text_1, fontWeight: "bold" }}>
                              {text_1}
                            </span>{" "}
                            {product_title}
                          </p>
                          <p className="title-para">
                            {text_2}{" "}
                            <span style={{ backgroundColor: bg_color_t3, padding: 5 }}>
                              {text_3}
                            </span>
                          </p>
                        </div>
                        <a
                          style={{ backgroundColor: color_button, color: color_text_button }}
                          href=""
                          className="cta"
                        >
                          <img
                            border="0"
                            alt="image"
                            src={stars_button}
                            className="cta-icon"
                          />{" "}
                          GET STARTED{" "}
                          <img
                            border="0"
                            alt="image"
                            src={stars_button}
                            className="cta-icon"
                          />
                        </a>
                        <div className="product-image-wrap">
                          <img
                            style={{ width: product_imgSize }}
                            border="0"
                            src={product_img}
                            alt="product image"
                            className="feature-img"
                          />
                        </div>
                        <p style={{ color: color_text }} className="answer">
                          Just answer a few questions,
                          <br />
                          Win a{" "}
                          <strong>
                            <span
                              style={{
                                color: color_product_text,
                                fontWeight: "bold",
                              }}
                            >
                              {product_title}
                            </span>
                          </strong>
                          . It is that Simple!
                        </p>
                        <a
                          href=""
                          style={{ backgroundColor: color_button, color: color_text_button }}
                          className="cta cta-2"
                        >
                          <img
                            border="0"
                            alt="image"
                            src={stars_button}
                            className="cta-icon"
                          />{" "}
                          GET STARTED{" "}
                          <img
                            border="0"
                            alt="image"
                            src={stars_button}
                            className="cta-icon"
                          />
                        </a>
                        <p style={{ color: color_text }} className="free">
                          No Catch, No Cost.
                          <br />
                          Win in Minutes!
                        </p>
                        <p style={{ color: color_text }} className="feature-para">
                          You have been chosen to participate in our Loyalty Program for{" "}
                          <strong>FREE!</strong> It will take you only a minute to receive this
                          fantastic prize.
                        </p>
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
                <p
                  style={{
                    fontSize: 11,
                    color: unsuscribe_text_color,
                    maxWidth: 550,
                    lineHeight: 1.4,
                  }}
                >
                  If you no longer wish to receive these emails, you may unsubscribe by{" "}
                  <a
                    href=""
                    style={{ color: unsuscribe_text_color, textDecoration: "none" }}
                  >
                    clicking here.
                  </a>
                </p>
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

export default ProductTemplate7;
