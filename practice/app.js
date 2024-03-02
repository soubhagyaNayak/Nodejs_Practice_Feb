let express=require('express');
let dotenv=require('dotenv');
dotenv.config();
let port=process.env.PORT || 5689;
let app=express();
app.get('/',(req,res)=>{
    res.send('Hii express');
});
app.get('/test',(req,res)=>{
    res.send('Test route');
});
app.listen(port,(err)=>{
    if (err) throw err;
    else
    console.log(`server listening successfully on port ${port}`)
})
