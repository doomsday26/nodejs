const express= require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("in the middleware");
    res.send( "good morning")
  
})



module.exports=router;