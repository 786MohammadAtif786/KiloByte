const { Router } = require('express');
const { ItemController } = require('../controllers/index');
const { isLogdin } = require('../utlis/auth');

const route = Router();
const itemController = new ItemController();

route.post('/item', isLogdin(), itemController.createItem());


module.exports = route;
