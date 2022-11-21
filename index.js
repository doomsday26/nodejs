const http = require('http')
const express= require ('express')


const app= express();

app.use((req,res,next)=>{
    console.log("in middleware");
  next(); // allows to continue to next middleware  
})


app.use((req,res,next)=>{
    console.log("in the middleware");

    res.send( { key1: "value" })

})


const server = http.createServer(app);
server.listen(3000);



