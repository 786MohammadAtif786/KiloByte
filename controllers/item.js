const { ItemService } = require('../services/index');
const response = require('../utlis/response');


class ItmeControllers {
  constructor() {
    this.itemService = new ItemService();
  }
  createItem() {
    return( req, res) => {
      this.itemService.createItem(req.body)
      .then((itemDoc) => {
        return response(res, 'succes', itemDoc)
      })
      .catch((err) => {
        return response(res, 'error', null, 'unable to create item', 4000)
      })
    }
  }
}

module.exports = ItmeControllers;

