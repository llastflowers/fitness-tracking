const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  stretchName: {
    type: String,
    required: true
  },
  seconds: {
    type: Number,
    required: true
  },
  notes: String
});

module.exports = mongoose.model('Stretch', schema);
