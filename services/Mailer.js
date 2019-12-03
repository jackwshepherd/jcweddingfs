const sendgrid = require('@sendgrid/mail');
const keys = require('../config/keys');

sendgrid.setApiKey(keys.sendGrid);

module.exports = async ({ email, name, subject, html }) => {
  const msg = {
    to: sendFakeEmails ?
      `${name} <${email}>` : 'Jack Shepherd <panoramical@gmail.com>',
    from: 'Charlie and Jack <charlieandjack11@gmail.com>',
    subject: subject,
    html: html
  };

  sendgrid.send(msg);
}

/*form.map((item, key) => {
  const typeOfPrefix = (form.length - 2) === key ? ' and ' : ', ';
  const prefix = (form.length - 1) === key ? false : typeOfPrefix;
  `${item.firstname} ${item.lastname}${prefix}`
}).join(),*/
