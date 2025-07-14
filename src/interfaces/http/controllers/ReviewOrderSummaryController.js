const express = require('express');
const router = express.Router();
const ReviewOrderSummaryReadModel = require('../../../domain/readmodel/ReviewOrderSummaryReadModel');

router.get('/', async (req, res) => {
  try {
    const orderSummary = await ReviewOrderSummaryReadModel.query();
    res.json(orderSummary);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/review-order-summary',
  router
};