//Dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
//Intializations

const app = express();
const PORT = process.env.PORT_SERVER ;



//Middlewares
app.use(bodyParser.json());
app.use('/users',userRoutes);

//Routes
app.get('/',(req,res)=>{res.json({message:"Working"})})

app.post('/', (req, res)=> {
    username = req.body.username;
    res.json({message: username+ " Registered"});
})

app.post('/users/create', (req, res) => {
    username = req.body.username;
    res.json({message: username+" Registered"});
})

app.listen(PORT,(req,res)=>{
    console.log(`Server running on ${PORT}`);
})