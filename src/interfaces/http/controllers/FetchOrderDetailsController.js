const express = require('express');
const router = express.Router();
const FetchOrderDetailsReadModel = require('../../../domain/readmodel/FetchOrderDetailsReadModel');

router.get('/', async (req, res) => {
  try {
    const orderDetails = await FetchOrderDetailsReadModel.query();
    res.json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/fetch-order-details',
  router
};