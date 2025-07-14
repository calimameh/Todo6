class Order {
  constructor({
    orderID,
    customerName,
    contactNumber,
    deliveryAddress,
    menuItem,
    quantity,
    specialInstructions,
    totalAmount,
    paymentMethod,
    confirmationCode,
    newStatus
  }) {
    if (!orderID) throw new Error('Order ID is required');
    this.orderID = orderID;
    this.customerName = customerName;
    this.contactNumber = contactNumber;
    this.deliveryAddress = deliveryAddress;
    this.menuItem = menuItem;
    this.quantity = quantity;
    this.specialInstructions = specialInstructions;
    this.totalAmount = totalAmount;
    this.paymentMethod = paymentMethod;
    this.confirmationCode = confirmationCode;
    this.newStatus = newStatus;
  }

  toJSON() {
    return {
      orderID: this.orderID,
      customerName: this.customerName,
      contactNumber: this.contactNumber,
      deliveryAddress: this.deliveryAddress,
      menuItem: this.menuItem,
      quantity: this.quantity,
      specialInstructions: this.specialInstructions,
      totalAmount: this.totalAmount,
      paymentMethod: this.paymentMethod,
      confirmationCode: this.confirmationCode,
      newStatus: this.newStatus
    };
  }
}

module.exports = Order;