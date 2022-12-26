const axios = require("axios");
const express = require("express");               const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();       

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search-filters',
  params: {query: 'Python developer in Texas, USA'},
  headers: {
    'X-RapidAPI-Key': process.env.RapidKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

module.exports = router;
