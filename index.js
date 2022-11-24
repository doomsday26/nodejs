const express= require ('express')
const app= express();
const adminroutes= require('./routes/admin')
const shoproutes= require('./routes/shop')
const bodyParser= require('body-parser')
const contactroutes = require('./routes/contact')
const succcessrouter= require('./routes/success')
const path= require('path');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))
app.use('/admin', adminroutes);
app.use('/shop', shoproutes);
app.use('/contact',contactroutes)
app.use('/success',succcessrouter)
app.use((req,res)=>{
  console.log('error 404:page not found');
  res.status(404).sendFile(path.join(__dirname,"./",'views','error.html'))
})
app.listen(3000);



