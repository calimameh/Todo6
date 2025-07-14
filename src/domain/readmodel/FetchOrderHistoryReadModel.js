const db = require('../../infrastructure/db');

class FetchOrderHistoryReadModel {
  static async query() {
    return await db.findAll('orderHistory');
  }
}

module.exports = FetchOrderHistoryReadModel;