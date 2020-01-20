const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const meetingSchema = new Schema({
  created: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: Schema.ObjectId,
    ref: 'Member',
    required: 'You must be signed in',
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  beers: [{
    type: Schema.ObjectId,
    ref: 'Beer',
  }],
});

module.exports = mongoose.model('Meeting', meetingSchema);
