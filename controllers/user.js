const { UserService } = require('../services/index');
const { UserValidator } = require('../validators/index');
const Jwt = require('../utlis/jwt');
const response = require('../utlis/response');


class UserController {
  constructor() {
    this.userService = new UserService();
    this.userValidator = new UserValidator();
    this.jwt = new Jwt()
  }
  register() {
    return (req, res) => {
      const userData = req.body;
      const validator = this.userValidator.register(userData);
      if (validator.error) {
        return response(res, 'error', null, validator.error.details[0].message, 400);
      }
      this.userService.create(validator.value)
        .then((data) => {
          response(res, 'success', data, 'Registration was successful.');
        })
        .catch((err) => {
          console.error(new Date(), 'UserControllers - register', err);
          response(res, 'error', null, 'Unable to create', 401);
        });
    }
  }
  login() {
    return (req, res) => {
      const userData = req.body;
      const validator = this.userValidator.login(userData);
      if (validator.error) {
        return response(res, 'error', null, validator.error.details[0].message, 400);
      }
      this.userService.findByPhone(validator.value.phone)
      .then((userDoc) => {
        if (userDoc) {
          const userObj = userDoc.toObject();
          const token = this.jwt.generateToken(userObj);
          userObj.token = token;
          delete userObj.password
          return response(res, 'success', userObj, 'Login sucessfully');
        } else {
          return response(res, 'error', null, 'Invalid email and password', 400);
        }
      })
      .catch((err) => {
        console.error(new Date(), 'UserControllers - login', err);
        response(res, 'error', null, 'Invalid email and password', 400);
      });
    }
  }
  getUserById() {
    return (req, res) => {
      const userId = req.user._id;
      if (!userId) {
        return response(res, 'error', null, 'You are not authorized.', 401);
      }
      this.userService.findById(userId)
      .then((userDoc) => {
        response(res, 'success', userDoc, 'find successfully.');
      })
      .catch((err) => {
        console.error(new Date(), 'UserControllers - getUserById', err);
        response(res, 'error', null, 'Unbale to find user.', 404);
      });
    }
  }
}

module.exports = UserController;