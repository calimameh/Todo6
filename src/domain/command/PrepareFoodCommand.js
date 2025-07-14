const db = require('../../infrastructure/db/index');

class PrepareFoodCommand {
  static async execute({ orderID, preparationTime, chefName }) {
    const order = await db.findById('orders', orderID);
    if (!order) {
      throw new Error('Order not found');
    }
    // Prepare food logic here
    order.preparationTime = preparationTime;
    order.chefName = chefName;
    await db.update('orders', orderID, order);
    return order;
  }
}

module.exports = PrepareFoodCommand;