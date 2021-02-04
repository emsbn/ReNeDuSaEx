const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    // id 정보만 들고 있음
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      // id 정보로 user 정보 복원
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (e) {
      console.error(e);
      done(e);
    }
  });

  local();
};
