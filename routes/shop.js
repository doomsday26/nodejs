const express= require('express');
const path= require('path');
const rootDir = require('../util/path')
const router = express.Router();
const shopcontroller = require('../controllers/admin')
//path.join(__dirname,'views','shop.html') 
router.get('/',shopcontroller.shopget)



module.exports=router;