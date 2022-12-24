const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

app.get('/', (req, res) => {
  res.send('We are on home');
});

mongoose.connect(process.env.DB_CONNECT, mongoose.set('strictQuery', true),() =>{
    console.log('connected to DB! ');
})

app.listen(8080);