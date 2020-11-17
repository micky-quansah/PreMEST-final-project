const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  videoFile: String,
  noteFile: String,
  notes: String,
  uploadDate: Date,
  courseName: String,
  schoolIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'School',
    },
  ],
});

module.exports = mongoose.model('Course', resourceSchema);
