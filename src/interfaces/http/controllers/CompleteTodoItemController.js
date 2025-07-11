const express = require('express');
const router = express.Router();
const CompleteTodoItemCommand = require('../../../domain/command/CompleteTodoItemCommand');

router.post('/:todoID', async (req, res) => {
  try {
    const result = await CompleteTodoItemCommand.execute(req.params.todoID, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  routeBase: '/complete-todo-item',
  router
};