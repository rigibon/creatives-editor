import { AutoComplete } from "antd";
import { BlockPicker } from "react-color";

const ProductTemplate5 = ({
    background_image,
    background_color,
    logo,
    logoSize,
    second_background_color,
    product_title,
    product_image,
    product_imgSize,
    icon1,
    icon2,
    color_text_free,
    button_color_1,
    button_color_text_1,
    button_color_2,
    button_color_text_2,
    color_text_2,
    color_warning,
  }) => {
    return (
      <>
        <style>
          {`
            body, table, thead, tbody, tr, td, img {
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
            h1, h2, h3, h4, h5, h6, p, a {
              margin: 0;
              padding: 0;
              padding-bottom: 10px;
              line-height: 1.2;
              font-family: "Arial", sans-serif;
              color: #fff;
            }
            .logo-wrap {
              height: 60px;
              margin-top: 35px;
              margin-bottom: 25px;
            }
            .logo {
              max-width: 220px;
              max-height: 60px;
            }
            .intro {
              font-size: 46px;
              text-shadow: 2px 2px 0px black;
              font-weight: bold;
              padding: 0px;
            }
            .answer {
              font-size: 18px;
              text-shadow: 1px 1px 0px black;
              margin-bottom: 10px;
            }
            .product-name {
              font-size: 27px;
              font-weight: bold;
              text-shadow: 1px 1px 0px black;
              max-width: 70%;
              margin-bottom: 10px;
              text-transform: uppercase;
            }
            .cta-text {
              background-color: #0057AC;
              display: inline-block;
              min-width: 300px;
              padding: 16px;
              font-size: 30px;
              font-weight: bold;
              text-transform: uppercase;
              text-decoration: none;
              border: 3px solid #000;
              margin-right: 20px;
            }
            .cta-icon {
              width: 36px;
              margin-top: 50px;
              margin-left: -60px;
            }
            .feature-img {
              margin-top: -30px;
              width: 80%;
              margin-bottom: 20px;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
            .wrap {
              max-width: 80%;
              text-align: left;
              margin: 30px 0px;
            }
            .cta-title {
              font-size: 22px;
              font-weight: bold;
              color: #EF1B0B;
              display: inline-block;
              width: 65%;
            }
            .cta-para {
              display: block;
              color: #000000;
              font-size: 14px;
              font-weight: normal;
              margin-top: 10px;
            }
            .free-label {
              float: right;
              display: inline-block;
              width: 100px;
              color: #EF1B0B;
              text-align: center;
              font-size: 30px;
              font-weight: bold;
            }
            .cta-2 {
              background-color: #EF1B0B;
              margin-right: 0px;
              font-size: 24px;
              min-width: 55%;
            }
            .feature-para {
              max-width: 90%;
              font-size: 14px;
              color: #56646B;
              margin-top: 30px;
              margin-bottom: 30px;
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
                height: 60px;
                margin-top: 25px;
                margin-bottom: 20px;
              }
              .intro {
                font-size: 36px;
              }
              .answer {
                font-size: 16px;
              }
              .product-name {
                font-size: 22px;
                max-width: 80%;
              }
              .cta-text {
                min-width: 280px;
                font-size: 28px;
              }
              .feature-img {
                max-height: 290px;
              }
              .cta-title {
                width: 100%;
              }
              .free-label {
                display: none;
              }
              .feature-para {
                font-size: 11px;
              }
              .bg-wrap {
                background-repeat: no-repeat;
                background-size: 150%;
                -webkit-text-size-adjust: 150%;
                background-position: top center;
              }
            }
          `}
        </style>
  
        <table width="100%">
          <tbody>
            <tr>
              <td className="wrapper" width="550" align="center">
                <table width="550" className="section header" align="center">
                  <tbody>
                    <tr>
                      <td
                        align="center"
                        bgcolor={second_background_color}
                        data="image_bg"
                        background={background_image}
                        className="bg-wrap"
                        style={{ backgroundColor: background_color }}
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
                        <p className="intro">
                          A Gift for<br />your thoughts...
                        </p>
                        <p className="answer">Just answer a few questions to win</p>
                        <p className="product-name">{product_title}</p>
                        <a href="#" className="cta">
                          <span
                            style={{
                              backgroundColor: button_color_1,
                              color: button_color_text_1,
                            }}
                            className="cta-text"
                          >
                            GET STARTED
                          </span>
                          <img
                            border="0"
                            alt="image"
                            src="https://686.efuserassets.com/686/offers/14221/c/41396/assets/cta-icon.png"
                            className="cta-icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            style={{ width: product_imgSize,
                                     marginTop: -30,
                                     marginBottom: 20,
                                     display: BlockPicker,
                                     marginLeft: AutoComplete,
                                     marginRight:AutoComplete }}
                            border="0"
                            src={product_image}
                            alt="product image"
                            className="feature-img"
                          />
                        </a>
                        <div className="wrap">
                          <p style={{ color: color_text_2 }} className="cta-title">
                            Loyalty pays off!{" "}
                            <span className="cta-para">
                              You have been chosen to participate in our Loyalty
                              Program for <strong>FREE!</strong> It will take you
                              only a minute to receive this fantastic prize.
                            </span>
                          </p>
                          <p className="free-label">
                            <img
                              border="0"
                              alt="image"
                              src={icon1}
                              width="100%"
                            />
                            <span style={{ color: color_text_free }} className="free">
                              FREE
                            </span>
                          </p>
                        </div>
                        <a href="#" className="cta">
                          <span
                            style={{
                              backgroundColor: button_color_2,
                              color: button_color_text_2,
                            }}
                            className="cta-text cta-2"
                          >
                            START SURVEY
                          </span>
                        </a>
                        <p className="feature-para">
                          Hurry up. The number of prizes to be won is limited!
                          Confirm Now!{" "}
                          <img
                            border="0"
                            alt="image"
                            src={icon2}
                            width="12"
                          />
                        </p>
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
                <p
                  style={{
                    fontSize: "11px",
                    color: color_warning,
                    maxWidth: "550px",
                    lineHeight: "1.4",
                  }}
                >
                  If you no longer wish to receive these emails, you may unsubscribe by{" "}
                  <a href="#" style={{ color: color_warning, textDecoration: "none" }}>
                    clicking here.
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td height="35" style={{ lineHeight: "35px" }}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };
  
  export default ProductTemplate5;
  