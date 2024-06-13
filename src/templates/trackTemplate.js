import React, { useEffect } from "react";

const TrackTemplate = ({ mainColor, secondaryColor, logoImg, logoImgSize, productImg, productImgSize, text01, text02, text03, buttonText, unsubscribeText }) => {
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
    color: #000;
    }
    .logo {
    margin-top: 20px;
         width: 80%;
         margin-bottom: 20px;
         display: block;
         margin-left: 50;
         margin-right: auto;
    }
    .top-bar{
    color: #5D5D5D;
    padding: 10px;
    font-size: 14px;
    text-decoration: underline;
    }
    .imagef {
        margin-top: 20px;
         width: 80%;
         margin-bottom: 20px;
         display: block;
         margin-left: auto;
         margin-right: auto;
    }
    .order-number{
    margin-top: 30px;
    padding-bottom: 0px;
    }
    .title-heading {
    font-size: 30px;
    line-height: 1.1;
    text-transform: uppercase;
    color: white;
    padding-bottom: 0px;
    }
    .title-heading span {
    font-size: 44px;
    font-weight: bold;
    }
    .title-para-sub {
    margin-top: 8px;
    margin-bottom: 20px;
    color: #fa6908;
    font-size: 22px;
    }
    .confirm-para{
    margin-top: 30px;
    color: #fff;
    }
    .section-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 60px;
    margin-left: 75px;
    max-width: 60%;
    }
    .feature-para {
    font-size: 14px;
    margin-left: 80px;
    max-width: 70%;
    margin-top: 15px;
    margin-bottom: 10px;
    }
    .cta {
    background-color: #fa6908;
    padding: 15px 20px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    display: inline-block;
    min-width: 290px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
    border-radius: 2px;
    }
    .cta-t {
    background-color: #000;
    } 
    @media only screen and (max-width: 480px) {
    .wrapper .section {
    width: 100%;
    }
    .wrapper .column {
    width: 100%;
    display: block;
    }
    .section-title {
    max-width: 64%;
    margin-left: 45px;
    font-size: 15px;
    margin-top: 33px;
    }
    .top-bar {
    font-size: 11px;
    }
    .feature-para {
    font-size: 10px;
    margin-left: 43px;
    max-width: 70%;
    margin-top: 5px;
    margin-bottom: 0px;
    }
    .cta-t {
    background-color: #000;
    font-size: 13px;
    min-width: auto;
    margin-top: 0px;
    margin-bottom: 20px;
    }
    .title-heading {
    font-size: 24px;
    } 
    }
    `}
               </style>
               <body style={{ backgroundColor: "#e3e2e2" }}>
                    <table width="100%">
                         <tbody>
                              <tr>
                                   <td className="wrapper" align="center" style={{ paddingTop: "30px" }}>
                                        <table id="main-section" width="600" className="section" style={{ backgroundColor: mainColor }}>
                                             <tr>
                                                  <td bgcolor="#fff" align="center"></td>
                                             </tr>
                                             <tr>
                                                  <td align="center">
                                                       <table>
                                                            <tbody>
                                                                 <tr>
                                                                      <td className="column" width="50%" style={{ paddingLeft: "30px" }}>
                                                                           <a href="">
                                                                                <img border="0" src={logoImg} style={{ width: logoImgSize }} alt="logo" className="logo" />{" "}
                                                                           </a>
                                                                           <p className="title-heading">{text01}</p>
                                                                           <p className="title-para-sub">
                                                                                <strong style={{ color: secondaryColor }}>{text02}</strong>
                                                                           </p>
                                                                      </td>
                                                                      <td className="column" width="50%" align="center">
                                                                           <p className="imagef">
                                                                                <img border="0" alt="image" src={productImg} style={{ width: productImgSize }} />
                                                                           </p>
                                                                      </td>
                                                                 </tr>
                                                            </tbody>
                                                       </table>
                                                       <p className="confirm-para">{text03}</p>
                                                       <a href="" style={{ backgroundColor: secondaryColor }} className="cta">
                                                            {buttonText} <img border="0" alt="image" src="https://686.efuserassets.com/686/offers/13540/c/38076/assets/cta-icon-1.png" width="22" />
                                                       </a>
                                                  </td>
                                             </tr>
                                        </table>
                                        <table id="end" width="600" className="section header" align="center">
                                             <tbody>
                                                  <tr>
                                                       <td align="center">
                                                            <p style={{ fontSize: "11px", color: "#797979", maxWidth: "550px", lineHeight: "1.4", padding: "0" }}>{unsubscribeText}</p>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                       <td height="35">&nbsp;</td>
                                                  </tr>
                                             </tbody>
                                        </table>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </body>
          </>
     );
};

export default TrackTemplate;
