const { User } = require('../models/index');

class UserService {
  create(userdata) {
    const user = new User(userdata);
    return user.save();
  }
  findByPhone(phone) {
    const query = {
      phone
    }
    return User.findOne(query)
  }
  findById(id) {
    const query = {
      _id: id
    }
    return User.findOne(query).select('-password -__v');
  }
}

module.exports = UserService;