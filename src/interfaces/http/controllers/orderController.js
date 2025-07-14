const express = require('express');
const Order = require('../../../domain/entity/Order');
const db = require('../../../infrastructure/db');

const router = express.Router();
const routeBase = '/order';

router.post('/', async (req, res) => {
  try {
    const orderData = req.body;
    const order = new Order(orderData);
    await db.insert('orders', order.toJSON());
    res.status(201).json(order.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { router, routeBase };