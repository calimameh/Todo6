const db = require('../../infrastructure/db');

class ViewOrderQueueReadModel {
  static async query() {
    return await db.findAll('orderQueue');
  }
}

module.exports = ViewOrderQueueReadModel;