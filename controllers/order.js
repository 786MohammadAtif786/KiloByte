const  { OrderService } = require('../services/index');
const { OrderValidator } = require('../validators/index');
const response = require('../utlis/response');

class OrderController {
  constructor() {
    this.orderService = new OrderService()
    this.orderValidator = new OrderValidator();
  }
  orderCreate() {
    return (req, res) => {
      const orderData = req.body;
      const validator = this.orderValidator.create(orderData);
      if (validator.error) {
        response(res, 'error', null, validator.error.details[0].message);
        return false;
      }
      this.orderService.create(validator.value)
      .then((orderDoc) => {
        return response(res, 'success', orderDoc)
      })
      .catch((err) => {
        console.error(new Date(), ' OrderController - getOrder ', err);
        return response(res, 'error', null, 'Internal server error', 500)
      });
    }
  }
  getOrder() {
    return(req, res) => {
      const query = {
        user: req.user._id
      }
      this.orderService.findById(query)
      .then((orderList) => {
        return response(res, 'success', orderList);
      })
      .catch((err) => {
        console.error(new Date(), ' OrderController - getOrder ', err);
        return response(res, 'error', null, 'Internal server error', 500)
      })
    }
  }
}

module.exports = OrderController;