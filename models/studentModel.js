const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userName: String,
  fullName: String,
  passwordHash: String,
  school: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'School',
    },
  ],
});

module.exports = mongoose.model('Student', studentSchema);
