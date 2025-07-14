const db = require('../../infrastructure/db');

class ReviewOrderSummaryReadModel {
  static async query() {
    return await db.findAll('orderSummary');
  }
}

module.exports = ReviewOrderSummaryReadModel;