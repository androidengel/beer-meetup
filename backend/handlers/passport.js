const passport = require('passport');
const mongoose = require('mongoose');

const Member = mongoose.model('Member');

passport.use(Member.createStrategy()); // createStragety method from passportLocalMongoose

passport.serializeUser(Member.serializeUser());
passport.deserializeUser(Member.deserializeUser());
