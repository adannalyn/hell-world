const http = require("http");
const app = require("./app");
const server = http.createServer(app);

require('events').EventEmitter.prototype._maxListeners = 100;

require('dotenv/config');
const connectDB = require('./config/db_connect');
connectDB();

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;

