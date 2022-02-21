module.exports = {
  host: 'http://localhost:3000',
  port: process.env.PORT || 3000,
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/kilobytes'
  },
  token: {
    key: 'dfogjn034hnew--r'
  }
}