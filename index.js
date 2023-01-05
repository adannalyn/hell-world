const http = require("http");
const app = require("./app");
const serve = http.createServer(app);

require('events').EventEmitter.prototype._maxListeners = 100;

require('dotenv/config');
const connectDB = require('./config/db_connect');
connectDB();

const createServer = require('http').createServer;
const axios = require ('axios');
const chalk = require('chalk');
const url = require ('url');
const config = require ('./config');

const server = createServer((req, res) => {
  const requestURL = url.parse(req.url);
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const { search, location, country = 'gb' }  = decodedParams;

  const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${config.APP_ID}&app_key=${config.API_KEY}&what=${search}&where=${location}`;
    if (req.method === 'GET') {
      console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
      axios.get(targetURL)
        .then(response => {
          res.writeHead(200, headers);
          res.end(JSON.stringify(response.data));
        })
        .catch(response => {
          console.log(chalk.red(response));
          res.writeHead(500, headers);
          res.end(JSON.stringify(response));
        });
    } 
});

const decodeParams = searchParams => Array
  .from(searchParams.keys())
  .reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key) }), {});

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

serve.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = serve;

