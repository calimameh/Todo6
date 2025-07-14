const express = require('express');
const router = express.Router();
const BrowseMenuReadModel = require('../../../domain/readmodel/BrowseMenuReadModel');

router.get('/', async (req, res) => {
  try {
    const menu = await BrowseMenuReadModel.query();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  routeBase: '/browse-menu',
  router
};