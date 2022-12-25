const http = require("http");
const app = require("./app");
const server = http.createServer(app);

require('events').EventEmitter.prototype._maxListeners = 100;
app.use(express.json({ limit: "50mb" }));

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

