const passport = require('passport');

exports.login = () => [
  (req, res, next) => {
    console.log('routes/user.js, login, req.body: ');
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    req.flash('success', 'Login Successful!');
    const userInfo = {
      username: req.user.firstName,
      session: req.session,
    };
    res.send(userInfo);
  },
];
