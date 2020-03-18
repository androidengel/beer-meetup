const express = require('express');
const { validationResult } = require('express-validator');

const router = express.Router();
const memberController = require('../controllers/memberController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

// validation middleware used after applying validation rules in each controller
const validate = (req, res, next) => {
  const validation = validationResult(req);
  const { errors } = validation;
  if (errors.length) {
    // todo need to enter a flash or toast message output
    console.log(errors);
    return;
  }
  next();
};

/* GET home page. */
router.get('/', (req, res) => { res.send('It\'s working!!!'); });
router.get('/beers', (req, res, next) => { res.send('List of Beers!!'); });

router.post('/members/add', memberController.requestMember);
// todo update route to use a :token param instead of 1234
router.post('/register/1234',
  memberController.registrationRules(),
  validate,
  catchErrors(memberController.register),
  authController.login);

module.exports = router;
