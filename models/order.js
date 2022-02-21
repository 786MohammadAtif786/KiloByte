const { Schema, model, ObjectId } = require('mongoose');

const orderSchema = new Schema({
  Items: [{
      type: String,
      required: true
  }],
  deliveryPersonID: {
    type: Number,
    unique: true,
    required: true
  },
  CustomerID :{
    type: Number,
    unique: true,
    required: true
  },
  pickupLocations: {
    type: String,
    required: true
  },
  customer: {
    type: String,
    ref: 'User'
  },
  deliverPerson: {
    type: String,
    ref: 'User'
  },
})

module.exports = model('Order', orderSchema)