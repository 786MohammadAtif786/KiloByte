const { Schema, model, ObjectId } = require('mongoose');

const itemSchema = new Schema({
  categoryName: {
    itme: ['Chips', 'Disprin'],
    type: String,
    required: true
  },
  location: [
    {
          type: String,
          coordinates: [ 12.25, 40.84],
          indexes: '2dsphere'
      },
      {
        type: String,
        coordinates: [ 10.25, 43.84],
        indexes: '2dsphere'
      }
  ],
  customer: {
    type:ObjectId,
    ref: 'Customer'
  }, 
  deliverPerson: {
    type: ObjectId,
    ref: 'deliverPerson'
  },
  order: {
    type: ObjectId,
    ref: 'Order'
  }
});

module.exports = model('Item', itemSchema);