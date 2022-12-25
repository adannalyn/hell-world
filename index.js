const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

require("dotenv").config();
const passwordReset = require("./routes/passwordReset");
const users = require("./routes/users");
const connection = require("./db");
const express = require("express");
const app = express();

connection();

app.use(express.json());

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

