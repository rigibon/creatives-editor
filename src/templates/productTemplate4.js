import React, { useEffect } from "react";

const ProductTemplate4 = ({
    logo,
    logoSize,
    product_img,
    product_imgSize,
    text_1,
    product_title,
    text_2,
    color_text2,
    text_3,
    text_4,
    button_text,
    color_button,
    color_text_button,
    border_radius,
    bg_color,
    color_text,
    code,
    passBodyRef
}) => {
    return (
        <>
            <style>           
 {`
      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%; 
      }
      body {
        background-size: cover;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%; 
      }
      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }
        table td {
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top; 
      }

      .body {
        background-size: cover;
        width: 100%; 
      }
      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px; 
      }
      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 505px;
        padding: 30px; 
        background-color: #fff;
        background-size: 0%;
        background-repeat: no-repeat;
        background-position: center bottom;
        border: 3px solid #000;
      }

      .main {

        border-radius: 3px;
        width: 100%; 
      }
      .wrapper {
        box-sizing: border-box;
        padding: 20px; 
      }
      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;

      }
      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%; 
      }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px!important;
          text-align: center; 
      }

      h1,
      h2,
      h3,
      h4 {
        color: #000;
        font-family: sans-serif;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 30px; 
      }
      h2 {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 10px;
      }
      p,
      ul,
      ol {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px;
      }
        p li,
        ul li,
        ol li {
          list-style-position: inside;
          margin-left: 5px; 
      }
      a {
        color: #3498db;
        text-decoration: underline; 
      }

      .btn {
        box-sizing: border-box;
        width: 100%; }
        .btn > tbody > tr > td {
          padding-bottom: 15px; }
        .btn table {
          width: auto; 
      }
        .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center; 
      }
        .btn a {
          background-color: #d4141f;
          border: solid 0px #9f0000;
          border-radius: 5px;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize; 
      }
      .btn-primary table td {
          
      }
      .btn-primary a {
        border-color: #3498db;
        color: #fff;
      }


      .last {
        margin-bottom: 0; 
      }
      .first {
        margin-top: 0; 
      }
      .align-center {
        text-align: center; 
      }
      .align-right {
        text-align: right; 
      }
      .align-left {
        text-align: left; 
      }
      .clear {
        clear: both; 
      }
      .mt0 {
        margin-top: 0; 
      }
      .mb0 {
        margin-bottom: 0; 
      }
      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0; 
      }
      .powered-by a {
        text-decoration: none; 
      }
      .presentation p {
        text-align: center;
        font-size: 18px;
      }

      hr {
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        margin: 20px 0; 
      }

      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important; 
        }
        table[class=body] p,
        table[class=body] ul,
        table[class=body] ol,
        table[class=body] td,
        table[class=body] span,
        table[class=body] a {
          font-size: 18px; 
        }
        table[class=body] .wrapper,
        table[class=body] .article {
          padding: 10px !important; 
        }
        table[class=body] .content {
          padding: 0 !important; 
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important; 
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important; 
        }
        table[class=body] .btn table {
          width: 100% !important; 
        }
        table[class=body] .btn a {
          width: 100% !important; 
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important; 
        }
      }

      @media all {
        .ExternalClass {
          width: 100%; 
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%; 
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important; 
        }
        .btn-primary table td:hover {

        }
        .btn-primary a:hover {

        }
        .button_style {
          background: #fefd02; 
          background-color:#3498db;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          padding: 15px!important;
          max-width: 420px;
          min-width: 140px;
        }
      }
      `}</style>
            <span className="preheader"></span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" className="body">
                <tr>
                    <td>&nbsp;</td>
                    <td className="container">
                        <div
                            style={{
                                backgroundColor: bg_color,
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                maxWidth: '420px'
                            }}
                            className="content"
                        >
                            {/* START CENTERED WHITE CONTAINER */}
                            <table role="presentation" className="main">
                                {/* START MAIN CONTENT AREA */}
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <img style={{ maxWidth: '200px', marginTop: '20px', width:logoSize}} src={logo} alt="Logo" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="wrapper">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td className="presentation" style={{ textAlign: 'center' }}>
                                                    <h2>{text_1}</h2>
                                                    <img
                                                        style={{ maxWidth: '250px', marginTop: '20px', width:product_imgSize}}
                                                        src={product_img}
                                                        alt="Product"
                                                    />
                                                    <p>
                                                        <br />
                                                        <span style={{ color: color_text, fontWeight: 'bold', fontSize: '20px' }}>
                                                            Reward: {product_title}
                                                            <br />
                                                        </span>
                                                        <br />
                                                        <span style={{ color: color_text2, fontWeight: 'bold', fontSize: '16px' }}>
                                                            {text_2}
                                                            <br />
                                                        </span>
                                                        {text_3}
                                                    </p>
                                                    <p style={{color: color_text}}>
                                                        <span
                                                            style={{
                                                                fontWeight: 'bold',
                                                                color: color_text,
                                                                border: 'none',
                                                                padding: '10px'
                                                            }}
                                                        >
                                                            {code}
                                                        </span>
                                                    </p>
                                                    <br />
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" className="btn btn-primary">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center">
                                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <a
                                                                                        href=""
                                                                                        style={{
                                                                                            borderRadius: border_radius,
                                                                                            backgroundColor: color_button,
                                                                                            color: color_text_button,
                                                                                            padding: '10px 20px',
                                                                                            textDecoration: 'none',
                                                                                            display: 'inline-block'
                                                                                        }}
                                                                                    >
                                                                                        {button_text}
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <p
                                            style={{
                                                textAlign: 'center',
                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                fontSize: '13px',
                                                lineHeight: '1px',
                                                color: '#000',
                                                padding: '50px',
                                                margin: '-50px'
                                            }}
                                        >
                                            <a href="" style={{ color: color_text, textDecoration: 'none' }}>
                                                Unsubscribe
                                            </a>
                                        </p>
                                    </td>
                                </tr>
                                {/* END MAIN CONTENT AREA */}
                            </table>
                            {/* END CENTERED WHITE CONTAINER */}

                            {/* START FOOTER */}
                            <div className="footer">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td className="content-block"></td>
                                    </tr>
                                </table>
                            </div>
                            {/* END FOOTER */}
                        </div>
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </>
    );
};

export default ProductTemplate4;
