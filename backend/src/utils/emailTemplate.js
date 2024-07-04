exports.bookingEmailTemplate = (booking, imgUrls, dateFormatted) => ( `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title></title>
<!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]-->
<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body>
<div dir="ltr" class="es-wrapper-color">
<!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ffffff"></v:fill>
    </v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td class="esd-email-paddings" valign="top">
                <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                                    <tbody>
                                        <tr>
                                            <td class="esd-structure es-p20t es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href=""><img src="https://i.postimg.cc/J4DR0BZG/logo.png" alt style="display: block;" width="165"></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text" bgcolor="#ffffff">
                                                                                <h1 style="color: #f26823;">Booking Successfully</h1>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text es-p5t es-p5b" bgcolor="#ffffff">
                                                                                <p style="color: #f26823;">Come as a Guest and Leave as Family.</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="${imgUrls.bannerImg}" alt style="display: block;" width="455"></a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
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
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                                    <tbody>
                                        <tr>
                                            <td class="esd-structure es-p20t" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text" bgcolor="#ffffff">
                                                                                <h2 style="line-height: 150%; color: #f26823; font-size: 16px;">BOOKING ID #${booking.bookingId}</h2>
                                                                                <p style="line-height: 150%; color: #f26823; font-size: 16px;"><strong>Date of Reservation&nbsp;&nbsp;${dateFormatted}</strong></p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text es-m-txt-c es-p20t" bgcolor="#ffffff">
                                                                                <p style="color: #f26823; font-size: 16px;"><strong>Order Summary</strong></p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
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
                                        <tr>
                                            <td class="esd-structure esdev-adapt-off es-p20" align="left">
                                                <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esdev-mso-td" valign="top">
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="295" class="esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="${imgUrls.productImg}" alt style="display: block;" height="200" width-"150"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="20"></td>
                                                            <td class="esdev-mso-td" valign="top">
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="245" align="left" class="esd-container-frame">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text">
                                                                                                <p style="font-size: 18px; color: #f26823;"><strong>${booking.bookingTitle}</strong><br></p>
                                                                                                <p style="font-size: 18px; color: #f26823;"><br></p>
                                                                                               ${booking.prefrence && `<p style="font-size: 18px; color: #f26823;"><strong>${booking.prefrence} </strong></p>` }
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
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
                                        <tr>
                                            <td class="esd-structure es-p20r es-p20l" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
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
                                        <tr>
                                            <td class="esd-structure es-p5" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="590" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text">
                                                                                <p style="color: #f26823; font-size: 20px;"><strong>Payment Summary</strong></p>
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
                                        <tr>
                                            <td class="esd-structure es-p20r es-p20l" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
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
                                        ${booking.adultCount ? `
                                            <tr>
                                                <td class="esd-structure esdev-adapt-off es-p10t es-p10b es-p20r es-p20l" align="left">
                                                    <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="267" class="esd-container-frame" align="left">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="left" class="esd-block-text">
                                                                                                    <p style="font-size: 16px; color: #f26823;"><strong>Adult X ${booking.adultCount}</strong></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="20"></td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="273" align="left" class="esd-container-frame">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="right" class="esd-block-text">
                                                                                                    <p style="font-size: 16px; color: #f26823;"><strong>MYR ${booking.adultTotal}</strong></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
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
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            ` : ""
                                        }

                                        ${booking.childCount ? `
                                            <tr>
                                                <td class="esd-structure esdev-adapt-off es-p10t es-p10b es-p20r es-p20l" align="left">
                                                    <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="267" class="esd-container-frame" align="left">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="left" class="esd-block-text">
                                                                                                    <p style="font-size: 16px; color: #f26823;"><strong>Child X ${booking.childCount}</strong></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td width="20"></td>
                                                                <td class="esdev-mso-td" valign="top">
                                                                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="273" align="left" class="esd-container-frame">
                                                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="right" class="esd-block-text">
                                                                                                    <p style="font-size: 16px; color: #f26823;"><strong>MYR ${booking.childTotal}</strong></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
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
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            ` : ""
                                        }

                                        <tr>
                                            <td class="esd-structure esdev-adapt-off es-p10" align="left">
                                                <table width="580" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esdev-mso-td" valign="top">
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="280" class="esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text">
                                                                                                <p style="font-size: 16px; color: #f26823;"><strong>Total</strong></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="20"></td>
                                                            <td class="esdev-mso-td" valign="top">
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="280" align="left" class="esd-container-frame">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="right" class="esd-block-text">
                                                                                                <p style="font-size: 16px; color: #f26823;"><strong>MYR ${booking.totalAmount}</strong></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
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
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="esd-structure" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text">
                                                                                <p style="font-size: 20px; color: #f26823;"><strong>Customer Details</strong></p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
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
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-stripe" align="center" esd-custom-block-id="343277" bgcolor="#ffffff" style="background-color: #ffffff;">
                                <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;" bgcolor="#ffffff">
                                    <tbody>
                                        <tr>
                                            <td class="esd-structure es-p20t es-p20r es-p20l esdev-adapt-off" align="left">
                                                <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esdev-mso-td" valign="top">
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="270" class="esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="right" class="esd-block-text">
                                                                                                <p style="line-height: 200%; font-size: 16px; color: #f26823;"><strong>Name :&nbsp;</strong></p>
                                                                                                <p style="line-height: 200%; font-size: 16px; color: #f26823;"><strong>Email :&nbsp;</strong></p>
                                                                                                <p style="line-height: 200%; font-size: 16px; color: #f26823;"><strong>Mobile:&nbsp;</strong></p>
                                                                                                <p style="line-height: 200%; color: #f26823;"><br></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="20"></td>
                                                            <td class="esdev-mso-td" valign="top">
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="270" align="left" class="esd-container-frame">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left" class="esd-block-text">
                                                                                                <p style="line-height: 200%; font-size: 16px; color: #f26823;"><strong>${booking.name}</strong></p>
                                                                                                <p style="line-height: 200%; font-size: 16px; color: #f26823;"><strong>${booking.email}</strong></p>
                                                                                                <p style="line-height: 200%; font-size: 16px; color: #f26823;"><strong>${booking.mobileNumber}</strong></p>
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
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="left" class="esd-block-text es-p10" esd-links-color="#14a0f6">
                                                                                <p style="color: #000000; line-height: 200%; font-size: 15px;">We're delighted to confirm your booking! Your official e-ticket is on its way to your email shortly. In case you don't receive it, please don't hesitate to get in touch with us.</p>
                                                                                <p style="color: #000000; line-height: 200%; font-size: 15px;">Contact details:<br>Tel: +6017-2018194, +60173078194, +60193058194<br>Email: <a href="mailto:support@malaysia-experience.com" target="_blank" style="font-size: 15px; color: #14a0f6;">support@malaysia-experience.com</a></p>
                                                                                <p style="color: #000000; line-height: 200%; font-size: 15px;">Thank you for choosing Malaysia Experience. We look forward to serving you.</p>
                                                                                <p style="color: #000000; line-height: 200%; font-size: 15px;">Best regards,<br>Support Team<br>Malaysia Experience</p>
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
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</div>
</body>
</html>
    `
)