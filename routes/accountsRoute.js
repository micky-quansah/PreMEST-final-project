const express = require('express');
const signingUp = require('../services/signup');
const School = require('../models/schoolModel');

const accountsRouter = express.Router();

accountsRouter
  .get('/schools', (req, res) => {
    School.find();
    res.send('200');
  })
  .post('/signUp', async (req, res) => {
    const { body } = req;

    const userToken = await signingUp(body, School);

    res.json(userToken);
  });

module.exports = accountsRouter;
