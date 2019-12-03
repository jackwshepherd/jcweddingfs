const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

require('./models/Guest');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

require('./routes/guestRoutes.js')(app);
console.log('hurrah');

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('cli/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'cli', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
