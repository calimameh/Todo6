const express = require('express');
const router = express.Router();
const ViewOrderQueueReadModel = require('../../../domain/readmodel/ViewOrderQueueReadModel');

router.get('/', async (req, res) => {
  try {
    const orderQueue = await ViewOrderQueueReadModel.query();
    res.json(orderQueue);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/view-order-queue',
  router
};