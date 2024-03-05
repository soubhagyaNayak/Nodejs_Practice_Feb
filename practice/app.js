let express = require('express');
let dotenv = require('dotenv');
let fs = require('fs');
dotenv.config();
let port = process.env.PORT || 5689;
let app = express();
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');
let morgan = require('morgan');

app.use(morgan('common', { stream: fs.createWriteStream('./app.log') }));

//static file path
app.use(express.static(__dirname+"/public"));
app.set('views',"./src/views");
app.set('view engine','ejs');


app.get('/', (req, res) => {
    res.render('index',{title:'Home Page'});
});

app.use('/category', categoryRouter);
app.use('/products', productRouter);

app.listen(port, (err) => {
    if (err) throw err;
    else
        console.log(`server listening successfully on port ${port}`);
});
