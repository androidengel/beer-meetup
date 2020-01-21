const mongoose = require('mongoose');

const Member = mongoose.model('Member');

exports.addMember = (req, res) => {
  res.json(req.body);
};
