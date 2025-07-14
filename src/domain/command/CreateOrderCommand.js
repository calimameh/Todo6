const db = require('../../infrastructure/db/index');

class CreateOrderCommand {
  static async execute({ customerName, contactNumber, deliveryAddress, menuItem, quantity, specialInstructions }) {
    const order = {
      customerName,
      contactNumber,
      deliveryAddress,
      menuItem,
      quantity,
      specialInstructions
    };
    await db.insert('orders', order);
    return order;
  }
}

module.exports = CreateOrderCommand;