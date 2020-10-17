const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');

const router= express.Router();
router.post('/join', isNotLoggedIn, async(req,res,next)=>{
  const { email,nick,password,tel,adr } = req.body;
  try{
    const exUser = await User.findOne({where:{email}});
    const exNick = await User.findOne({where:{nick}});
    if(exUser){
      req.flash('joinError', '이미 가입된 이메일');
      return res.redirect('/join');
    }
    const hash = await bcrypt.hash(password,12);
    await User.create({
      email,
      nick,
      password:hash,
      tel,
      adr,
    });
    return res.redirect('/');
  }catch(error){
      console.error(error);
      return next(error);
  }l
});
router.post('/login', isNotLoggedIn,(req,res,next)=>{
  passport.authenticate('local', (authError, user , info)=>{
    if(authError){
      console.error(authError);
      return next(authError);
    }
    if(!user){
      req.flash('loginError', info.message);
      return res.redirect('/');
    }
    return req.login(user, (loginError)=>{
      if(loginError){
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/main');
    });
  })(req,res,next);
});

router.get('/logout', isLoggedIn,(req,res)=>{
  req.logout();
  req.session.destroy();
  res.redirect('/');
});
module.exports = router;