const db = require('../../infrastructure/db/index');

class UpdateOrderCommand {
  static async execute({ orderID, menuItem, quantity, specialInstructions }) {
    const order = await db.findById('orders', orderID);
    if (!order) {
      throw new Error('Order not found');
    }
    // Update order logic here
    order.menuItem = menuItem;
    order.quantity = quantity;
    order.specialInstructions = specialInstructions;
    await db.update('orders', orderID, order);
    return order;
  }
}

module.exports = UpdateOrderCommand;