const db = require('../../infrastructure/db');

class ViewOrderDetailsReadModel {
  static async query() {
    return await db.findAll('orderDetails');
  }
}

module.exports = ViewOrderDetailsReadModel;