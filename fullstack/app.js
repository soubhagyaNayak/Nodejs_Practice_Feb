const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
let fs=require('fs');
const PORT = process.env.PORT || 5678;
const app = express();

let morgan=require('morgan');
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}));

app.use(express.static(__dirname+'/public'))
//html file path
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
})
const categoryRouter = require("./src/controller/categoryRouter.js");
const productRouter = require("./src/controller/productRouter.js");
// const { StreamDescription } = require('mongodb');
app.use('/category', categoryRouter);
app.use('/product', productRouter);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT} successfully`);
});
