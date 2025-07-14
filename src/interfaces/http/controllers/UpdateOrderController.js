const express = require('express');
const router = express.Router();
const UpdateOrderCommand = require('../../../domain/command/UpdateOrderCommand');

router.post('/:orderID', async (req, res) => {
  try {
    const result = await UpdateOrderCommand.execute({ orderID: req.params.orderID, ...req.body });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  routeBase: '/update-order',
  router
};