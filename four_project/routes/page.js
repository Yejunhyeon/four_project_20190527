const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Team =require('../models').Team;
const Japan =require('../models').Japan;
const Question =require('../models').Question;
const router = express.Router();



router.get('/join' ,(req,res)=>{
  res.render('join',{
    title:'regist',
    user: req.user,
    joinError: req.flash('joinError'),
  });
});

router.get('/',(req,res,next)=>{
  res.render('login',{
    title:'login',
    user:req.user,
    loginError:req.flash('loginError'),
  });
});

router.get('/getteam',(req,res,next)=>{
  Team.findAll()
    .then((teams)=>{
      res.json(teams); //Team테이블에서 모든 정보를 찾아서 teams라는 객체로 반환
    })      //teams[0].name
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});
router.get('/getjapan',(req,res,next)=>{
  Japan.findAll()
    .then((japan)=>{
      res.json(japan);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

router.get('/main',function(req,res){
  res.render('main',{
    title:'main',
    loginError:req.flash('loginError'),
  })
});

router.get('/qna',(req,res,next)=>{
  Question.findAll()
    .then((questions)=>{
      res.render('question',{
        title:'Q&A',
        user:req.user,
        questions:questions,
        loginError:req.flash('loginError'),
      });
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

router.get('/member',(req,res)=>{
  res.render('member',{
      user: req.user,
      title:'member',
      loginError:req.flash('loginError'),
  });
});

router.get('/japan',(req, res)=>{
  res.render('japan',{
      user: req.user,
      title:'japan',
  });
});

router.get('/question',(req, res)=>{
  res.render('question',{
      user: req.user,
      title:'question',
  });
});


module.exports = router;
