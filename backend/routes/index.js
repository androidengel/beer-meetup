const express = require('express');
const memberController = require('../controllers/memberController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => { res.send('It\'s working!!!'); });
router.get('/beers', (req, res, next) => { res.send('List of Beers!!'); });


router.post('/members/add', memberController.requestMember);

// todo update route to use a :token param instead of 1234
router.post('/register/1234',
  memberController.registrationRules(),
  memberController.validate,
  catchErrors(memberController.register),
  authController.login());

module.exports = router;
