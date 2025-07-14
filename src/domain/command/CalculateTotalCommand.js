const db = require('../../infrastructure/db/index');

class CalculateTotalCommand {
  static async execute({ orderID, menuItemList, itemPrices, discounts, taxes }) {
    const order = await db.findById('orders', orderID);
    if (!order) {
      throw new Error('Order not found');
    }
    // Calculate total logic here
    const totalAmount = itemPrices.reduce((acc, price, index) => acc + price * menuItemList[index].quantity, 0);
    const totalWithDiscounts = totalAmount - discounts;
    const totalWithTaxes = totalWithDiscounts + taxes;
    return { orderID, totalAmount: totalWithTaxes };
  }
}

module.exports = CalculateTotalCommand;