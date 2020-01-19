const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/beers', (req, res, next) => { res.send('List of Beers!!'); });

module.exports = router;
