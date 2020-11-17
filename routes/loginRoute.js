const express = require('express');
const School = require('../models/schoolModel');
const loggingIn = require('../services/login');

const loginRouter = express.Router();

/* loginRouter.use(session({
  genid: (req) => {
    console.log('Inside the session middleware');
    console.log(req.sessionID);
    return uuid(); // use UUIDs for session IDs
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
})); */

loginRouter
  .post('/', async (req, res) => {
    const { body } = req;

    const user = loggingIn(body, School);

    return res.status(200).json((await user).onsuccess);
  });

module.exports = loginRouter;
