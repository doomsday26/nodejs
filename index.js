const http = require('http')
const fs= require('fs');
const server = http.createServer((req,res)=>{
const url = req.url;
const method= req.method;
if(url==='/'){
  
  fs.readFile('response.txt', 'utf8', (err, data)=>{
      if(err){console.log(err);}
        console.log("fille data",data);

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<h3>${data}</h3> `)
        res.write( '<h2>write message</h2>' )
        res.write(  '<body><form  action="/message" method="POST" ><input type="text" name="message" > <button type="submit" >send</button></form></body>'  )
        res.write('</html>')
        return res.end();

    });
   
    
}



else if(url==='/message' && method==='POST'){
const body=[];
req.on('data',(chunk)=>{console.log(chunk);
body.push(chunk);
console.log("hello1");
});
return req.on('end',()=>{
    const parsebody= Buffer.concat(body).toString();
    const msg= parsebody.split('=')[1];
    fs.writeFile('response.txt',msg, (err)=>{
        res.statusCode=302
      res.setHeader('Location','/')
        return res.end();
    } )
})
}
else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>')
    res.write(  "<body><h1>hello to project server</h1>  </body>"  )
    res.write('</html>')
    res.end();
}

});
server.listen(3000);



