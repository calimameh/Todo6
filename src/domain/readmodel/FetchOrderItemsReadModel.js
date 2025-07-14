const db = require('../../infrastructure/db');

class FetchOrderItemsReadModel {
  static async query() {
    return await db.findAll('orderItems');
  }
}

module.exports = FetchOrderItemsReadModel;