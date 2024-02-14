let fs=require('fs');

fs.writeFile('mycode.txt','This is the data about nodejs',(err)=>{
    if(err) throw err;
    console.log('Task Done');
})
