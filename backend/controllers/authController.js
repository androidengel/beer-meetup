const passport = require('passport');

exports.login = passport.authenticate('local', {
  successRedirect: '/',
  // successFlash: 'You are now logged in!',
  failureRedirect: '/signin',
  // failureFlash: 'Failed Login',
});
