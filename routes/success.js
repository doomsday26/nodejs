const express = require('express');
const app = express();
const router=express.Router();
const successrouter = require('../controllers/success')


router.post('/',successrouter.success )

module.exports= router;