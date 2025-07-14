const db = require('../../infrastructure/db/index');

class ConfirmOrderCommand {
  static async execute({ orderID, paymentMethod, confirmationCode }) {
    const order = await db.findById('orders', orderID);
    if (!order) {
      throw new Error('Order not found');
    }
    // Confirm order logic here
    order.paymentMethod = paymentMethod;
    order.confirmationCode = confirmationCode;
    await db.update('orders', orderID, order);
    return order;
  }
}

module.exports = ConfirmOrderCommand;