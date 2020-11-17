const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// const session = require('express-session');
// const uuid = require('uuid');
// const MongoStore = require('connect-mongo')(session);
// const homeRouter = require('./routes/homeRoute');
const accountsRouter = require('./routes/accountsRoute');
const loginRouter = require('./routes/loginRoute');
const createCourseRouter = require('./routes/createCourseRoute');
// const schoolRouter = require('./routes/schoolsRoute');
const configuration = require('./config/index');

const { localUrl, mongooseConfig } = configuration;

const app = express();

// eslint-disable-next-line no-unused-vars
const dbconnection = mongoose.createConnection(localUrl, mongooseConfig);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// init gfs
let gfs;
dbconnection.once('open', () => {
  // init stream
  // eslint-disable-next-line no-unused-vars
  gfs = new mongoose.mongo.GridFSBucket(dbconnection.db, {
    bucketName: 'uploads',
  });
});

// app.use('/school', schoolRouter);
app.use('/login', loginRouter);
app.use('/accounts', accountsRouter);
app.use('/upload', createCourseRouter);
// app.use('/', homeRouter);

module.exports = app;
