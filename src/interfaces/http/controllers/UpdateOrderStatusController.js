const express = require('express');
const router = express.Router();
const UpdateOrderStatusCommand = require('../../../domain/command/UpdateOrderStatusCommand');

router.post('/:orderID', async (req, res) => {
  try {
    const result = await UpdateOrderStatusCommand.execute({ orderID: req.params.orderID, ...req.body });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  routeBase: '/update-order-status',
  router
};