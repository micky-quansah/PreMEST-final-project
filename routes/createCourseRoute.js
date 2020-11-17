const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const config = require('../config/index');

const createCourseRouter = express.Router();

const storage = new GridFsStorage({
  url: config.localUrl,
  // eslint-disable-next-line arrow-body-style
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename,
          bucketName: 'uploads',
        };
        return resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage }).single('file');
/*
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('file'); */

createCourseRouter
  .get('/', (req, res) => {
    res.send('working');
  })
  .post('/', upload, (req, res, next) => {
    const { file } = req;
    if (!file) {
      const error = new Error('Please upload a file');
      error.httpStatusCode = 400;
      return next(error);
    }
    return res.send(file);
  });

module.exports = createCourseRouter;
