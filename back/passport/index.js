const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 브라우저에 전달할 cookie + user id 정보만 서버에서 들고 있음
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      // id 정보로 user 정보 복원
      const user = await User.findOne({ where: { id } });
      done(null, user); // req.user
    } catch (e) {
      console.error(e);
      done(e);
    }
  });

  local();
};
