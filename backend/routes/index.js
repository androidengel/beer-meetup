const express = require('express');

const router = express.Router();
const memberController = require('../controllers/memberController');

/* GET home page. */
router.get('/', (req, res) => { res.send('It\'s working!!!'); });
router.get('/beers', (req, res, next) => { res.send('List of Beers!!'); });

router.post('/members/add', memberController.addMember);

module.exports = router;
