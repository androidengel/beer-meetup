const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const memberSchema = new Schema({
  firstName: {
    type: String,
    required: 'Please supply a first name.',
    trim: true,
  },
  lastName: {
    type: String,
    required: 'Please supply a last name.',
    trim: true,

  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email address'],
    required: 'Please supply an email address.',
  },
});

module.exports = mongoose.model('Member', memberSchema);
