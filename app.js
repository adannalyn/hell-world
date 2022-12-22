const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


app.get('/', (req,res) => {
  res.send('We are on home');
});
app.get('/', (req, res) => {
  res.send('We are on posts');
});

mongoose.connect(process.env.DB_CONNECT, mongoose.set('strictQuery', true),() =>{
    console.log('connected to DB! ');
})

app.listen(8080);