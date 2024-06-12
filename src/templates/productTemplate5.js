const ProductTemplate5 = ({
    background_image,
    background_color,
    logo,
    second_background_color,
    product_title,
    product_image,
    icon1,
    icon2,
    color_text_free,
    button_color_1,
    button_color_text_1,
    button_color_2,
    button_color_text_2,
    color_text_2,
}) => {
    return (
        <body style={{ backgroundColor: '#f5f5f5', paddingTop: '10px' }}>
            <table width="100%">
                <tbody>
                    <tr>
                        <td className="wrapper" width="550" align="center">
                            <table width="550" className="section header" align="center">
                                <tbody>
                                    <tr>
                                        <td align="center" bgcolor={second_background_color} data="image_bg" background={background_image} className="bg-wrap" style={{ backgroundColor: background_color }}>
                                            <div className="logo-wrap">
                                                <img border="0" src={logo} alt="logo" className="logo" />
                                            </div>
                                            <p className="intro">A Gift for<br />your thoughts...</p>
                                            <p className="answer">Just answer a few questions to win</p>
                                            <p className="product-name">{product_title}</p>
                                            <a href="" className="cta"><span style={{ backgroundColor: button_color_1, color: button_color_text_1 }} className="cta-text">GET STARTED</span><img border="0" alt="image" src="https://686.efuserassets.com/686/offers/14221/c/41396/assets/cta-icon.png" className="cta-icon" /></a>
                                            <a href=""><img border="0" src={product_image} alt="product image" className="feature-img" /></a>
                                            <div className="wrap">
                                                <p style={{ color: color_text_2 }} className="cta-title">Loyalty pays off! <span className="cta-para">You have been chosen to participate in our Loyalty Program for <strong>FREE!</strong> It will take you only a minute to receive this fantastic prize.</span></p>
                                                <p className="free-label">
                                                    <img border="0" alt="image" src={icon1} width="100%" />
                                                    <span style={{ color: color_text_free }} className="free">FREE</span>
                                                </p>
                                            </div>
                                            <a href="" className="cta"><span style={{ backgroundColor: button_color_2, color: button_color_text_2 }} className="cta-text cta-2">START SURVEY</span></a>
                                            <p className="feature-para">Hurry up. The number of prizes to be won is limited! Confirm Now! <img border="0" alt="image" src={icon2} width="12" /></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="15" style={{ lineHeight: '15px' }}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="center">
                            <p style={{ fontSize: '11px', color: '#797979', maxWidth: '550px', lineHeight: '1.4' }}>
                                If you no longer wish to receive these emails, you may unsubscribe by <a href="" style={{ color: '#666', textDecoration: 'none' }}>clicking here.</a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td height="35" style={{ lineHeight: '35px' }}>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </body>
    );
};

export default ProductTemplate5;
