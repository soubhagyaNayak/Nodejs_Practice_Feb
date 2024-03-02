let http=require('http');
let server=http.createServer((req,res)=>{
    res.write('<h1> Hello India </h1>');
});
server.listen(8090);