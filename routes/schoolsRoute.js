// const methodOverride = require('method-override');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const config = require('../config/index');

const storage = new GridFsStorage({
  url: config.localUrl,
  // eslint-disable-next-line arrow-body-style
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        // eslint-disable-next-line no-undef
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

const upload = multer({ storage });

module.exports = upload;
