const http = require("http");
const app = require("./app");


require('events').EventEmitter.prototype._maxListeners = 100;

require('dotenv/config');
const db = require('./config/db_connect');
db();

const server = http.createServer(app);

const { API_PORT = 8081 } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = {server};

