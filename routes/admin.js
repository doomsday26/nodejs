const express= require('express')

const router= express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send( '<form action="/admin/add-product" method="POST" ><input type="text" name="title"/><br /><input type="text" name="title2"/><button type="submit" >submit</button>  </form>')
  
  })
  
  router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.title2);
    res.redirect('/shop/');
  
  })



module.exports=router;