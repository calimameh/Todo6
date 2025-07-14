const express = require('express');
const router = express.Router();
const CreateOrderCommand = require('../../../domain/command/CreateOrderCommand');

router.post('/', async (req, res) => {
  try {
    const result = await CreateOrderCommand.execute(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  routeBase: '/create-order',
  router
};