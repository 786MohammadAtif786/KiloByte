const jwt = require('jsonwebtoken');
const config = require('../config/index');

class Jwt {
  generateToken(payload) {
   return jwt.sign(payload, config.token.key, { expiresIn: '1h' });
  }
  verfiyToken(token) {
    return jwt.verify(token, config.token.key);
  }
}

module.exports = Jwt
