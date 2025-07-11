const express = require('express');
const router = express.Router();
const UpdateTodoItemCommand = require('../../../domain/command/UpdateTodoItemCommand');

router.post('/:todoID', async (req, res) => {
  try {
    const result = await UpdateTodoItemCommand.execute(req.params.todoID, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  routeBase: '/update-todo-item',
  router
};