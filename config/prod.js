module.exports = { 
  port: process.env.PORT || 3000,
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27107/kilobytes'
  }
 };
 