const joi = require('joi');

class customerValidator {
  isFields(phone, password, name, Address) {
    const userObj = {};
    if (phone) {
      userObj.phone = joi.number().min(10).message('Phone is required');
    }
    if (password) {
      userObj.password = joi.string().min(1).message('Password is requred');
    }
    if (name) {
      userObj.name = joi.string().min(1).message('Name is requred');
    }
    if (Address) {
      userObj.Address = joi.string().min(1).message('Address is required');
    }
    return userObj;
  }
  register(data) {
    const userObj = this.isFields(true, true, true, true);
    const Schema = joi.object(userObj);
    const result = Schema.validate(data, { presence: 'required'});
    return result;
  }
  login(data) {
    const userObj = this.isFields(true, true);
    const Schema = joi.object(userObj);
    const result = Schema.validate(data, {presence: 'required'});
    return result;
  }
}


module.exports = customerValidator;