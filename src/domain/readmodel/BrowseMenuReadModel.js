const db = require('../../infrastructure/db');

class BrowseMenuReadModel {
  static async query() {
    return await db.findAll('menu');
  }
}

module.exports = BrowseMenuReadModel;