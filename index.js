
const express=require("express");
const mongoose=require("mongoose");
const path = require('path');
const app=express();

mongoose.connect('mongodb+srv://xomaradwanx:55Jana55!@cluster0.2dtovr6.mongodb.net/codezone');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

const listRoutes=require('./routes/route.js');

app.use(listRoutes)


app.get('/',(req,res)=>{
    res.send("in");
})



