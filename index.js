const http = require('http')
const server = http.createServer((req,res)=>{
res.setHeader('Content-Type','text/html')
res.write('<html>')   
res.write('<head><title>First page </title>   </head>' )
res.write('<body><h1> welcome tyo node js tutorial </h1>   </body>' )    
res.write('</html>');
res.end();

});
server.listen(4000);



