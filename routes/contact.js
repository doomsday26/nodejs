const express = require('express');
const path = require('path');
const app= express();
const router= express.Router();
const rootDir = require('../util/path')



router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html') )
}  )

module.exports= router;