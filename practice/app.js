let express=require('express');
let dotenv=require('dotenv');
dotenv.config();
let port=process.env.PORT || 5689;
let app=express();
let categoryRouter=require('./src/controller/categoryRouter');
let productRouter=require('./src/controller/productRouter');

app.get('/',(req,res)=>{
    res.send('Hii babuni');
});

app.use('/category',categoryRouter);
app.use('/products',productRouter);

app.listen(port,(err)=>{
    if (err) throw err;
    else
    console.log(`server listening successfully on port ${port}`);
});
