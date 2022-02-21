const joi = require('joi');

class OrderValidator {
  isFields(Items, deliveryPersonID, CustomerID, pickupLocations) {
    const userObj = {};
    if (Items) {
      userObj.Items = joi.string().min(1).message('Item is required');
    }
    if (deliveryPersonID) {
      userObj.deliveryPersonID = joi.number().min(1).message('Delivery Person ID is requred');
    }
    if (CustomerID) {
      userObj.CustomerID = joi.number().min(1).message('CustomerID is required');
    }
    if (pickupLocations) {
      userObj.pickupLocations = joi.string().min(1).message('pickupLocations is required');
    }
    return userObj;
  }
  create(data) {
    const userObj = this.isFields(true, true, true, true);
    const Schema = joi.object(userObj);
    const result = Schema.validate(data, { presence: 'required'});
    return result;
  }
}


module.exports = OrderValidator;