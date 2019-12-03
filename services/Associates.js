const keys = require('../config/keys');
const mongoose = require('mongoose');

const Guest = mongoose.model('guests');

module.exports = async (id) => {
  const guest = await Guest.findOne({ _id: id }, 'email -_id');
  const invite = await Guest.find({ email: guest.email }, 'firstname lastname email');
  const inviteObject = invite.reduce((acc, curr, key) => {
    if(key === 0) {
      return { [curr.id]: curr };
    } else {
      return { ...acc, [curr.id]: curr };
    }
  }, invite[0])
  return inviteObject;
};
