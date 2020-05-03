const express = require('express');

const app = express();
const mongoose =require('mongoose');

//Routes
app.get('/',(req,res) => {
    res.send('we are on home');
});

app.get('/posts',(req,res) => {
    res.send('we are on posts');
});
mongoose.connect('mongodb://localhost:27017/amtsv' ,
    { useNewUrlParser: true }, () =>
    console.log('connected to DB!')
);
//How to we start listening to the server
app.listen(3000);