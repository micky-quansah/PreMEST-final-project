require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dataUrl: process.env.MONGO_URL,
  localUrl: process.env.LOCAL_DATABASE,
  secretKey: process.env.SECRET,
  mongooseConfig: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
};
