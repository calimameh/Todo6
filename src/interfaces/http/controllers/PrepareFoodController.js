const express = require('express');
const router = express.Router();
const PrepareFoodCommand = require('../../../domain/command/PrepareFoodCommand');

router.post('/:orderID', async (req, res) => {
  try {
    const result = await PrepareFoodCommand.execute({ orderID: req.params.orderID, ...req.body });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  routeBase: '/prepare-food',
  router
};