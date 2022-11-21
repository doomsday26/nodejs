const express= require ('express')
const bodyParser= require('body-parser')
const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
  res.send( '<form action="/product" method="POST" ><input type="text" name="title"/><br /><input type="text" name="title2"/><button type="submit" >submit</button>  </form>'    )

})

app.post('/product',(req,res,next)=>{
  console.log(req.body);
  console.log(req.body.title);
  console.log(req.body.title2);
  res.redirect('/');

})

app.use('/call',(req,res,next)=>{
  console.log("not in the middleware");
  res.send( "no mprning call")

})

app.use('/',(req,res,next)=>{
    console.log("in the middleware");
    res.send( "good morning")
  
})



app.listen(3000);



