const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => { res.send('It\'s working!!!'); });
router.get('/beers', (req, res, next) => { res.send('List of Beers!!'); });

module.exports = router;
