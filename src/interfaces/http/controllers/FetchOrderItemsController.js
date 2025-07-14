const express = require('express');
const router = express.Router();
const FetchOrderItemsReadModel = require('../../../domain/readmodel/FetchOrderItemsReadModel');

router.get('/', async (req, res) => {
  try {
    const orderItems = await FetchOrderItemsReadModel.query();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/fetch-order-items',
  router
};