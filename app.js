require('events').EventEmitter.prototype._maxListeners = 100;
const dbConnect = require('./config/db_connect');
dbConnect();
const express = require("express");
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

const bcrypt = require("bcryptjs");

const auth = require("./middleware/auth");

const corsOptions = {
  origin: 'http://github.com/lyndatcd/Hell-world.git',
  optionsSuccessStatus: 200 // for some legacy browsers
}

app.get('/api/welcome', cors(corsOptions), auth, (req, res) => {
  res.status(200).send("Welcome to Jobinnaire 🙌 ");
});


app.use(express.json({ limit: "50mb" }));

// importing user context
const User = require("./model/user");



// Login
app.post("/api/login", async (req, res) => {

  // Our login logic starts here
   try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

      // save user token
      user.token = token;

      // user
      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentials");
    
  // Our login logic ends here
}catch (err) {
    console.log(err);
}
});


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

module.exports = app;