const mongoose = require('mongoose');
const config = require('../config/index');

mongoose.connect(config.mongo.url)
  .then(() => {
    console.log('MongoDB connection is succesfully.');
  })
  .catch(() => {
    console.log('Unable to connectd mongodb');
  })