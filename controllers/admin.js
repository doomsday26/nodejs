
const path = require('path')
const rootDir= require('../util/path')

exports.adminget = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.adminpost = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  console.log(req.body.title2);
  res.redirect("/shop");
};

exports.shopget= (req,res,next)=>{
    res.sendFile(path.join(rootDir ,'views','shop.html') )
  
}

exports.contactget= (req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html') )
} 


exports.error=(req,res)=>{
    console.log('error 404:page not found');
    res.status(404).sendFile(path.join(rootDir,'views','error.html'))
  }