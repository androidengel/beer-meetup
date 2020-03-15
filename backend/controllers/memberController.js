const mongoose = require('mongoose');
const { check, validationResult, body } = require('express-validator');

const Member = mongoose.model('Member');

exports.requestMember = (req, res) => {
  // res.send(req.body);
};

// validation rules for first time sign up
exports.signupRules = () => [
  body('fname', 'First name is required').not().isEmpty(),
  body('lname', 'Last name is required').not().isEmpty(),
  body('email', 'Please provide a valid email').isEmail().normalizeEmail(),
  body('password', 'Please provide a password').not().isEmpty(),
  body('pwconfirm', 'Please provide a confirmed password').not().isEmpty(),
  body('pwconfirm').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    // Indicates the success of this synchronous custom validator
    return true;
  }),
];

exports.registerSignup = (req, res, next) => {
  // const validation = validationResult(req);
  // const { errors } = validation;
  // if (errors.length) {
  //   console.log(errors);
  // } else {
  //   console.log('No Errors!');
  // }
  console.log('No Errors!');
};
