const db = require('../../infrastructure/db/index');

class UpdateOrderStatusCommand {
  static async execute({ orderID, newStatus, timestamp }) {
    const order = await db.findById('orders', orderID);
    if (!order) {
      throw new Error('Order not found');
    }
    // Update order status logic here
    order.newStatus = newStatus;
    order.timestamp = timestamp;
    await db.update('orders', orderID, order);
    return order;
  }
}

module.exports = UpdateOrderStatusCommand;