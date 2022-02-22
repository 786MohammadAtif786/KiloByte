const { Router } = require('express');
const { UserController } = require('../controllers/index');
const { ItemController } = require('../controllers/index');
const { isLogdin } = require('../utlis/auth');

const route = Router();

const userController = new UserController()

route.post('/register', userController.register());
route.post('/login', userController.login());

route.get('/customer', isLogdin(), userController.getUserById())


module.exports = route
