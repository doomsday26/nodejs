const express = require('express');
const path = require('path');
const app= express();
const router= express.Router();
const rootDir = require('../util/path')
const contactcontroller= require('../controllers/admin')


router.get('/',contactcontroller.contactget )

module.exports= router;