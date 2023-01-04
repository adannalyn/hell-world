const express = require("express");
const app = express();;
// parse requests of content-type - application/json
app.use(express.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cors = require ('cors');
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const { adminAuth, userAuth } = require("./middleware/auth.js");

const corsOptions = {
  origin: "http://localhost:8081",
  optionsSuccessStatus: 200 
}

// Test
app.get('/api/welcome', cors(corsOptions), (req, res) => {
  res.status(200).send(" Welcome to Jobinairee 🙌 web app 🚀... ");
});

// Routes
app.use("/api/auth", require("./Auth/route"));

app.get("/", (req, res) => res.render("home"));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});
app.get("/admin", adminAuth, (req, res) => res.render("admin"));
app.get("/basic", userAuth, (req, res) => res.render("user"));

// Reset Password3
const passwordReset = require("./routes/passwordReset");
app.use("/api/password-reset", passwordReset);

const users = require("./routes/users");
app.use("/api/users", users);

module.exports = app;

