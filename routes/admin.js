const express= require('express')
const path = require('path');
const router= express.Router();
const admincontroller=require('../controllers/admin')
const rootDir = require('../util/path')

router.get('/add-product',admincontroller.adminget)
 
  router.post('/add-product',admincontroller.adminpost)




module.exports=router;