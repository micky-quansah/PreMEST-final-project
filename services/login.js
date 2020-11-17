const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const configuration = require('../config/index');

const { secretKey } = configuration;

const loggingIn = async (body, database) => {
  const { name, password } = body;
  const school = await database.findOne({ name });

  const ifHashed = await bcrypt.compare(password, school.passwordHash);

  const passwordCorrect = school === null
    ? false
    : ifHashed;

  if (!(school && passwordCorrect)) {
    return { onsuccess: 'invalid username or password' };
  }

  const userForToken = {
    username: school.username,
    // eslint-disable-next-line no-underscore-dangle
    id: school._id,
  };

  const onsuccess = 'You are Logged In';

  const token = jwt.sign(userForToken, secretKey);

  return { token, onsuccess };
};

module.exports = loggingIn;
