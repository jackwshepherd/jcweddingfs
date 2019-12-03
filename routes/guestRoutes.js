const keys = require('../config/keys');
const mongoose = require('mongoose');
const mailer = require('../services/Mailer');
const associates = require('../services/Associates');
const parseNames = require('../services/ParseNames');

const Guest = mongoose.model('guests');

const guestData = require('../data/Guests.json')
const initialGuests = Object.values(guestData)
  .map(({ firstname, lastname, email }) => ({ firstname, lastname, email }));

module.exports = (app) => {

  app.get('/api/initialize', async (req, res) => {
    try {
      const areGuests = await Guest.find({});
      if(areGuests.length > 0) return res.send('Guests already exist');
      const addGuests = await Guest.collection.insert(initialGuests);
      res.send(addGuests);
    } catch(error) {
       return res.send(error);
    }
  });

  app.get('/api/guests', async (req, res) => {
    try {
      const guestData = await Guest.find({});
      if(guestData.length <= 0) return res.status(500).send('No guests could be found');
      res.send(guestData);
      return true;
    } catch(error) {
      console.log(error);
      return res.send(error);
    }
  });

  app.get('/api/get_invite/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const allGuests = await associates(id);
        res.send(allGuests);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  app.post('/api/send_invite', async (req, res) => {

    const { id } = req.body;

    try {
      const allGuests = await associates(id);
      const email = allGuests[id].email;
      // Send them an email
      await mailer({
        to: 'panoramical@gmail.com',
        subject: 'Please come to our wedding',
        html: require('../services/email-templates/Invite')({
          names: parseNames(Object.values(allGuests)),
          id: id
        })
      });

      await Object.values(allGuests).forEach(async item => {
        const record = await Guest.findOne({ _id: item._id });
        record.dateSent = new Date();
        await record.save();
      })
      res.send(allGuests);
    } catch(error) {
      res.status(500).send(error);
    }
  });

  app.post('/api/save_user', async (req, res) => {
    const form = Object.values(req.body.form);
    try {
      const updateAll = await form.forEach(async item => {
        const guest = await Guest.findOne({ _id: item._id });
        guest.rsvp = item.rsvp;
        guest.dietary = item.dietary;
        guest.song = item.song;
        guest.dateReplied = new Date();
        await guest.save();
      })
      if(form.filter(({ rsvp }) => rsvp === 1).length) {
        await mailer({
          to: form[0].email,
          subject: 'You\'re going to Jack and Charlie\'s wedding!',
          html: require('../services/email-templates/Confirm')()
        });
      }
      await mailer({
        to: 'panoramical@gmail.com',
        subject: 'Someone has responded to our wedding invite',
        html: require('../services/email-templates/Update')(form)
      });
      res.send('Form updated');
    } catch (error) {
      res.status(422).send(error);
    }
  });


}
