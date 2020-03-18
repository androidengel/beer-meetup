const mongoose = require('mongoose');
const { body } = require('express-validator');

const Member = mongoose.model('Member');

exports.requestMember = (req, res) => {
  // res.send(req.body);
};

// validation rules for first time sign up
exports.registrationRules = () => [
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

exports.register = async (req, res, next) => {
  const { fname, lname, email, password } = req.body;
  const member = new Member({ firstName: fname, lastName: lname, email });
  await Member.register(member, password); // method from passport-local-mongoose plugin
  next(); // pass to authcontroller to login
};
