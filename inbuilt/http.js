let http =require('http');
let server= http.createServer((req,res)=>{
   res.write('<h1>This is Nodejs Code server</h1>');
    res.end();
});
server.listen(9700);