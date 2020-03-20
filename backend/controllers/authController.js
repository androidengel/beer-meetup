const passport = require('passport');

// exports.login = passport.authenticate('local', {
//   successRedirect: '/',
//   successFlash: 'You are now logged in!',
//   failureRedirect: '/signin',
//   failureFlash: 'Failed Login',
// });

exports.login = () => [
  (req, res, next) => {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body);
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    req.flash('success', 'You are now authenticated!');
    const userInfo = {
      username: req.user.firstName,
      session: req.session,
    };
    res.send(userInfo);
  },
];
