const express= require ('express')
const app= express();
const adminroutes= require('./routes/admin')
const shoproutes= require('./routes/shop')
const bodyParser= require('body-parser')


app.use(bodyParser.urlencoded({extended:false}));


app.use('/admin', adminroutes);
app.use('/shop', shoproutes);

app.use((req,res)=>{
  console.log('error 404:page not found');
  res.status(404).send("errorrr 404")
})
app.listen(3000);



