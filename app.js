const express = require ('express');
const app = express();
app.use(express.json());

app.use(express.static('public'))

const jwt = require('jsonwebtoken');

const cors = require ('cors');
app.use(cors());

require('dotenv/config');
const dbConnect = require('./config/db_connect');
dbConnect();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

// user signup & login
const authRoute = require('./routes/authentication');
app.use('/api/auth', authRoute);

// job_search
const searchRoute = require('./routes/job_search');
app.use('/api/jobs/search', searchRoute);

// job_posts
const postRoute = require('./routes/job_posts');
app.use('/api/jobs/posts', postRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));