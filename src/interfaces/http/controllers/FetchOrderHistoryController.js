const express = require('express');
const router = express.Router();
const FetchOrderHistoryReadModel = require('../../../domain/readmodel/FetchOrderHistoryReadModel');

router.get('/', async (req, res) => {
  try {
    const orderHistory = await FetchOrderHistoryReadModel.query();
    res.json(orderHistory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/fetch-order-history',
  router
};