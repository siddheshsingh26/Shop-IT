const express=require('express');
require('colors');
const {errorHandler}=require('./middlewares/errorMiddleware');
const products = require('./data/products');
const dotenv=require('dotenv');
const connectDb =require('./config/config');
const productsRoutes=require('./routes/productsRoute');

// dotenv config
dotenv.config();
//connecting to mongodb database
connectDb();
const app =express();

app.get('/',(req,res)=>{ 
    res.send('<h1>Welcome to Node Server</h1>')
});

app.use('/api',productsRoutes)
app.use(errorHandler);
const PORT=8080;
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`.inverse);
});




