const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url==='/home'){
    res.write('<html><h1> welcome to home</h1> </html>'   )
}
if(req.url==='/about'){
    res.write('<html><h1> welcome to about us</h1> </html>'   )
}
if(req.url==='/node'){
    res.write('<html><h1> welcome to node js project</h1> </html>'   )
}
res.end();

});
server.listen(4000);



