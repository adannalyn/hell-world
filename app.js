const express = require('express');
const app = express();
const bodyParser = require("body-parser");
mongoose = require("mongoose");
require("dotenv").config();
const port = 3000;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to Database Successfully')
});

app.use(async (req, res, next) => {
 if (req.headers["x-access-token"]) {
  const accessToken = req.headers["x-access-token"];
  const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
  // Check if token has expired
  if (exp < Date.now().valueOf() / 1000) { 
   return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
  } 
  res.locals.loggedInUser = await User.findById(userId); next(); 
 } else { 
  next(); 
 } 
});

const authRoute = require ("./routes/userRoutes");
app.use('/api/auth', authRoute);
 
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});
