const express = require('express');
const router = express.Router();
const TrackOrderStatusReadModel = require('../../../domain/readmodel/TrackOrderStatusReadModel');

router.get('/', async (req, res) => {
  try {
    const orderStatus = await TrackOrderStatusReadModel.query();
    res.json(orderStatus);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/track-order-status',
  router
};