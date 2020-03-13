const mongoose = require('mongoose');

const Member = mongoose.model('Member');

exports.requestMember = (req, res) => {
  // res.send(req.body);
};

exports.validateRegister = (req, res, next) => {
  res.send('Booya');
  console.log('success!!');
};
