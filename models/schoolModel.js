const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  phoneNumber: Number,
  location: String,
  registrationNumber: String,
  passwordHash: {
    type: String,
    required: true,
  },
  studentIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Student',
    },
  ],
});

module.exports = mongoose.model('School', schoolSchema);
