module.exports = (data) => {
  return (`
    <!doctype html>
    <html>
    <head>
    <title></title>
    <style type="text/css">
    /* CLIENT-SPECIFIC STYLES */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }

    /* RESET STYLES */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }

      .max-width {
        max-width: 100% !important;
      }

      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }

      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }

    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] { margin: 0 !important; }

    .titleText {
      display: none;
      font-size: 1px;
      color: #fefefe;
      line-height: 1px;
      font-family: Open Sans, Helvetica, Arial, sans-serif;
      max-height: 0px;
      max-width: 0px;
      opacity: 0;
      overflow: hidden;
    }

    .titleTextColor {
      color: #fefefe
    }

    .nameText {
      max-width: 140px;
      height: 70px;
      color: #000;
      max-height: 70px;
      overflow: hidden;
      margin-left: -10px;
      vertical-align: middle
    }

    .logoDark {
      display: none
    }

    .logoLight {
      display: block
    }

    .envelopeBackground {
      padding: 0px 0px 0 0px 0;
      background-image: url('https://firebasestorage.googleapis.com/v0/b/charlie-and-jack-wedding.appspot.com/o/envelope.png?alt=media&token=bad77486-0692-4479-8627-df3bac2307d9');
      background-size: 90% auto;
      height: 600;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0;
      padding: 0 0 40px 0;
      font-family: Courier;
      font-size: 12px;
      width: 375px;
      min-width: 375px;
      background-size: 375px;
    }


    @media (prefers-color-scheme: dark ) {
      .titleTextColor {
        color: #ffffff
      }
      .nameText {
        max-width: 140px;
        height: 70px;
        color: #000 !important;
        max-height: 70px;
        overflow: hidden;
        margin-left: -10px;
        vertical-align: middle
      }
      .logoLight {
        display: none !important
      }
      .logoDark {
        display: block !important
      }
      .envelopeBackground {
        padding: 0px 0px 0 0px 0;
        background-image: url('https://firebasestorage.googleapis.com/v0/b/charlie-and-jack-wedding.appspot.com/o/envelope-dark.png?alt=media&token=39c745e3-1ebb-4004-a1e4-66e02cde3c12');
        background-size: 90% auto;
        height: 600;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0;
        padding: 0 0 40px 0;
        font-family: Courier;
        font-size: 12px;
        width: 375px;
        min-width: 375px;
        background-size: 375px;
      }
    }
    </style>
    </head>
    <body style="margin: 0 !important; padding: 0; !important background-color: #ffffff;" bgcolor="#ffffff">

    <!-- HIDDEN PREHEADER TEXT -->
    <div class="titleText titleTextColor">
      Your invitation to Charlie and Jack's wedding!
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" valign="top" width="100%" bgcolor="#ffffff" style="background: #ffffff, padding: 50px 15px;" class="mobile-padding">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td
                          align="center"
                          valign="center"
                          height="340"
                          width="375"
                          class="envelopeBackground">
                            <div class="nameText">
                            ${data.names}
                            </div>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding: 25px 0 25px 0;">
                            <table border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center" style="border-radius: 28px;" bgcolor="rgb(19, 40, 82)">
                                        <a href="${data.url}/Form/${data.id}" target="_blank" style="font-size: 18px; font-family: Georgia; color: #ffffff; text-decoration: none; border-radius: 28px; background-color: #75b6c9; padding: 16px 28px; border: 1px solid #75b6c9; display: block;">Click here to RSVP</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" style="padding: 0; font-family: Open Sans, Helvetica, Arial, sans-serif;">
                          <div class="logoLight">
                            <img src="https://firebasestorage.googleapis.com/v0/b/charlie-and-jack-wedding.appspot.com/o/charlie.png?alt=media&token=924e7d06-766b-44ee-a598-002e959ace5a" width="200" border="0" style="display: block;">
                          </div>
                          <div class="logoDark">
                            <img src="https://firebasestorage.googleapis.com/v0/b/charlie-and-jack-wedding.appspot.com/o/charlie-dark.png?alt=media&token=9a0f2424-74d9-4ce2-ba41-7524aedadf2c" width="200" border="0" style="display: block;">
                          </div>
                        </td>
                    </tr>


                      <tr>
                        <td align="center" valign="top" width="375" style="font-family: Open Sans, Helvetica, Arial, sans-serif; padding-top: 60px; borderTop: 1px solid #999, max-width: 375px; width: 375px; ">

                          <p style="width: 375px; color: #132852; font-family: Georgia; font-size: 14px; margin-top: 60;">
                              We are getting married at Ufton Court, Green Lane, Ufton Nervet, Reading, RG7 4HD. We would love you to join us for our special day.
                            </p>
                          <p style="width: 375px; color: #132852; font-family: Georgia; font-size: 14px; margin-top: 60;"><strong>Please respond by 29 February 2020</strong></p>

                        </td>
                      </tr>

                      <tr>
                      <td align="center">
                      <p style="font-family: Georgia; font-size: 14px; color: #132852">For more details, <a href="https://charlieandjack.co.uk" style="text-decoration: none; font-weight: bold">visit our website at https://charlieandjack.co.uk</a></p>
                      </tr>
                      </td>


                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>
    </body>
    </html>

  `);
};
