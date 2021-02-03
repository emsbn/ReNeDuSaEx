const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const passport = require('passport');

const router = express.Router();

router.post('/login', (req, res, next) => {
  // 미들웨어 확장
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      console.error(error);
      next(error);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    // passport login
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post('/', async (req, res, next) => {
  console.log('post /user/ 요청');

  // Post /user/
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12); // 10~13
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('ok');
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

module.exports = router;
