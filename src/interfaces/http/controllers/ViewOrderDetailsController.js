const express = require('express');
const router = express.Router();
const ViewOrderDetailsReadModel = require('../../../domain/readmodel/ViewOrderDetailsReadModel');

router.get('/', async (req, res) => {
  try {
    const orderDetails = await ViewOrderDetailsReadModel.query();
    res.json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/view-order-details',
  router
};