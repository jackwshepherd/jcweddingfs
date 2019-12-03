module.exports = (form) => {
  console.log(form);
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
        </style>
        </head>
        <body style="margin: 0 !important; padding: 0; !important background-color: #ffffff;" bgcolor="#ffffff">

        <!-- HIDDEN PREHEADER TEXT -->
        <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
          Your invitation to Charlie and Jack's wedding
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
                              style="padding-top: 20px"
                              >
                                <img src="https://firebasestorage.googleapis.com/v0/b/charlie-and-jack-wedding.appspot.com/o/Oval.png?alt=media&token=7b9f5191-8263-4e27-ab63-b02c41e12f30" alt="" width="375"/>

                            </td>
                        </tr>



                          <tr>
                            <td align="center" valign="top" width="375" style="font-family: Open Sans, Helvetica, Arial, sans-serif; padding-top: 30px; borderTop: 1px solid #999, max-wdith: 375px; width: 375px; ">

                              ${form.map(({ firstname, lastname, rsvp, dietary, song }) => (`
                                <p>
                                <h1>${firstname} ${lastname}</h2>
                                <h2>${rsvp ? '<span style="color: green">Can come</span>' : '<span style="color: red">Can\'t make it</span>'}</h2>
                                </p>
                              `)).join("")}

                            </td>
                        </tr>
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
