const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.json({ limit: "50mb" }));

const cors = require ('cors');
app.use(cors());

require('dotenv/config');
const dbConnect = require('./config/db_connect');
dbConnect();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const auth = require("./middleware/auth");
app.use(auth);

const corsOptions = {
  origin: 'http://github.com/lyndatcd/Hell-world.git',
  optionsSuccessStatus: 200 
}

// Test
app.get('/api/welcome', cors(corsOptions), auth, (req, res) => {
  res.status(200).send("Welcome to Jobinaire 🙌 ");
});

// user signup & login
const authRoute = require('./routes/authentication');
app.use('/api/auth', authRoute);

// job_search
const searchRoute = require('./routes/job_search');
app.use('/api/jobs/search', searchRoute);

// job_filter
const filterRoute = require('./routes/job_filter');
app.use('/api/jobs/filter', filterRoute);

// Reset Password
const passwordReset = require("./routes/passwordReset");
const users = require("./routes/users");

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

module.exports = app;
