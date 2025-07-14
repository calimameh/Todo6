const db = require('../../infrastructure/db/index');

class ReceiveOrderCommand {
  static async execute({ orderID, customerName, deliveryFeedback }) {
    const order = await db.findById('orders', orderID);
    if (!order) {
      throw new Error('Order not found');
    }
    // Receive order logic here
    order.customerName = customerName;
    order.deliveryFeedback = deliveryFeedback;
    await db.update('orders', orderID, order);
    return order;
  }
}

module.exports = ReceiveOrderCommand;