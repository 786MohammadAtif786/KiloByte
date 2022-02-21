const { Order } = require('../models/index');

class OrderService {
  create(orderData) {
    const order = new Order(orderData);
    return order.save();
  }
  findById(id) {
    return Order.findById(id).select('-__v')
  }
}

module.exports = OrderService;