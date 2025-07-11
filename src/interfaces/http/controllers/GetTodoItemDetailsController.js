const express = require('express');
const router = express.Router();
const GetTodoItemDetailsReadModel = require('../../../domain/readmodel/GetTodoItemDetailsReadModel');

router.get('/', async (req, res) => {
  try {
    const { todoId } = req.body;
    const todoDetails = await GetTodoItemDetailsReadModel.query(todoId);
    res.json(todoDetails);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/get-todo-item-details',
  router
};