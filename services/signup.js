const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const configuration = require('../config/index');

const { secretKey } = configuration;

const signingUp = async (details, School) => {
  const {
    name, email, phoneNumber, location, registrationNumber, password,
  } = details.userInfo;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const userForToken = {
    name,
    // eslint-disable-next-line no-underscore-dangle
    id: School._id,
  };

  const token = jwt.sign(userForToken, secretKey);

  const signInInfo = new School({
    name,
    email,
    phoneNumber,
    location,
    registrationNumber,
    passwordHash,
  });

  signInInfo.save();

  return token;
};

module.exports = signingUp;
