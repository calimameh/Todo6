const express = require('express');
const TodoItem = require('../../../domain/entity/TodoItem');
const db = require('../../../infrastructure/db');

const router = express.Router();
const routeBase = '/todo-item';

router.post('/', async (req, res) => {
  try {
    const todoItem = new TodoItem(req.body);
    await db.insert('todoItems', todoItem.toJSON());
    res.status(201).json(todoItem.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const todoItems = await db.findAll('todoItems');
    res.status(200).json(todoItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const todoItem = await db.findById('todoItems', req.params.id);
    if (!todoItem) {
      return res.status(404).json({ error: 'Todo Item not found' });
    }
    res.status(200).json(todoItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTodoItem = new TodoItem({ ...req.body, todoID: req.params.id });
    await db.update('todoItems', req.params.id, updatedTodoItem.toJSON());
    res.status(200).json(updatedTodoItem.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.remove('todoItems', req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { routerBase, router };