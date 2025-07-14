const db = require('../../infrastructure/db');

class FetchOrderDetailsReadModel {
  static async query() {
    return await db.findAll('orderDetails');
  }
}

module.exports = FetchOrderDetailsReadModel;