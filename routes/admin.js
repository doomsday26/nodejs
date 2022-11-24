const express= require('express')
const path = require('path');
const router= express.Router();
const rootDir = require('../util/path')


router.get('/add-product',(req,res,next)=>{
res.sendFile(path.join(rootDir,"views","add-product.html"))
  })
 
  router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.title2);
    res.redirect('/shop');
  
  })



module.exports=router;