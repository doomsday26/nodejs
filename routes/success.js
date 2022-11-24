const express = require('express');
const app = express();
const router=express.Router();



router.post('/',(req,res)=>{
    console.log(req.body);
    res.send(`${req.body.name} your data has been submitted successfully with email id of ${req.body.email} `   )
}  )

module.exports= router;