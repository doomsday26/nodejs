const express= require ('express')
const app= express();
const adminroutes= require('./routes/admin')
const shoproutes= require('./routes/shop')
const bodyParser= require('body-parser')
const contactroutes = require('./routes/contact')
const succcessrouter= require('./routes/success')
const path= require('path');
const errorcontroller= require('./controllers/admin')
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))
app.use('/admin', adminroutes);
app.use('/shop', shoproutes);
app.use('/contact',contactroutes)
app.use('/success',succcessrouter)
app.use(errorcontroller.error)
app.listen(3000);



