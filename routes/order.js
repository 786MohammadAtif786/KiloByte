const express = require('express');
const { isLogdin } = require('../utlis/auth');
const { OrderController } = require('../controllers/index');

const route = express.Router();
const orderController = new OrderController();

route.post('/order', isLogdin(), orderController.orderCreate());
route.get('/order',isLogdin(), orderController.getOrder())

module.exports = route