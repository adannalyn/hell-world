require('events').EventEmitter.prototype._maxListeners = 100;
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static('public'))


const cors = require ('cors');
app.use(cors());

require('dotenv/config');
const dbConnect = require('./config/db_connect');
dbConnect();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const auth = require("./middleware/auth");

const corsOptions = {
  origin: 'http://github.com/lyndatcd/Hell-world.git',
  optionsSuccessStatus: 200 
}

app.get('/api/welcome', cors(corsOptions), auth, (req, res) => {
  res.status(200).send("Welcome to Jobinnaire 🙌 ");
});

app.use(express.json({ limit: "50mb" }));


// user signup & login
const authRoute = require('./routes/authentication');
app.use('/api/auth', authRoute);

// job_search
const searchRoute = require('./routes/job_search');
app.use('/api/jobs/search', searchRoute);

// job_filter
const postRoute = require('./routes/job_posts');
app.use('/api/jobs/posts', postRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;