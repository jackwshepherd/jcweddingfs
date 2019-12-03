const mongoose = require('mongoose');
const { Schema } = mongoose;

const guestSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  dateSent: Date,
  dateReplied: Date,
  dietary: String,
  song: String,
  rsvp: Boolean
});

mongoose.model('guests', guestSchema);
