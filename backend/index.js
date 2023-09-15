//Dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
//Intializations

const app = express();
const PORT = process.env.PORT_SERVER ;



//Middlewares
app.use(bodyParser.json());
app.use(formidable());
app.use('/users',userRoutes);

//Routes
app.get('/',(req,res)=>{res.json({message:"Working"})})





app.listen(PORT,(req,res)=>{
    console.log(`Server running on ${PORT}`);
})