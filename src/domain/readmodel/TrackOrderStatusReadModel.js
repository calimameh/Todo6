const db = require('../../infrastructure/db');

class TrackOrderStatusReadModel {
  static async query() {
    return await db.findAll('orderStatus');
  }
}

module.exports = TrackOrderStatusReadModel;