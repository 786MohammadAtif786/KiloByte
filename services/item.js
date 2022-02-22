const { Item } = require('../models/index');

class itemService {
  createItem(itemData) {
    const item = new Item(itemData);
    return item.save();
  }
  findById(id) {
    return Item.findById(id).select('-__v').populate('User', 'name phone')
  }
}

module.exports = itemService;