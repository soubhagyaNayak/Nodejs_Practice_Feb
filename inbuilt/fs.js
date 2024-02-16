let fs=require('fs');

// fs.writeFile('mycode.txt','This is the data about nodejs',(err)=>{
//     if(err) throw err;
//     console.log('Task Done');
// })

// fs.appendFile('mycode.txt','Soubhagya Ranjan Nayak \n',(err)=>{
//     if(err) throw err;
//     console.log('Task done')
// })

// fs.readFile('city.json','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })


fs.rename('mycode.txt','myfile.xml',()=>{
    console.log('File renamed');
})

