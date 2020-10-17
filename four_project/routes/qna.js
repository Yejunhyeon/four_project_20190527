var express = require('express');
var Question = require('../models').Question;
var Comment = require('../models').Comment;

var router = express.Router();

router.get('/q', function(req, res, next) {
  Question.findAll()
  .then((questions) => {
    res.json(questions);
  }).catch((err) => {
    console.error(err);
    next(err);
  });
});

router.post('/q',function(req,res,next){
  Question.create({
    nick: req.body.nick,
    context: req.body.context,
    password: req.body.password,
    })
    .then((result)=>{
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

router.patch('/q/:id', function(req,res,next){
  Question.update(
    {context: req.body.context}
  , {where: { id: req.params.id } })
  .then((result)=>{
    res.json(result);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

router.delete('/q/:id', function(req,res,next){
  Comment.destroy({
    where: {commenter:req.params.id}
  })
  .then(Question.destroy(
    { where: {id:req.params.id}
  })
  ).then((result)=>{
    res.json(result);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

//comment 

router.get('/a/:id', function(req, res, next) {
  Comment.findAll({
    include:{
      model: Question,
      where: {id:req.params.id},
    },
      order:[['id','DESC']],
  })
  .then((comments)=>{
    res.json(comments);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});


router.post('/a',function(req,res,next){
  Comment.create({
    nick: req.body.nick,
    context: req.body.context,
    password: req.body.password,
    commenter: req.body.id,
    })
    .then((result)=>{
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

router.patch('/a/:id', function(req,res,next){
  Comment.update(
    {context: req.body.context},
    {where: { id: req.params.id },
   })
   .then((result)=>{
     res.json(result);
   })
   .catch((err)=>{
     console.error(err);
     next(err);
  });
});


router.delete('/a/:id', function(req,res,next){
  Comment.destroy({ where: {id:req.params.id}})
  .then((result)=>{
    res.json(result);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;
