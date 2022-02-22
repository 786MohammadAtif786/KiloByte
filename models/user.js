const { Schema, model, ObjectId } = require('mongoose');

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    trim:true,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: Number,
    trim:true,
    required: true,
  },
  Address: {
    type: String,
    required: true
  },
  userType: {
    trim: true,
    type: String,
    enum: ["Admin", "Customer", "Delivery Person"],
    default: "Customer",
    required: true,
  },
  order: {
    type: ObjectId,
    ref: 'Order'
  },
  item: {
    type: ObjectId,
    ref: 'Item'
  }
})

module.exports = model('User', customerSchema)