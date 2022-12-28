const axios = require("axios");
const express = require("express");
const router = express.Router();

const options = {
  'Access-Control-Allow-Method': 'GET',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  url: 'https://jsearch.p.rapidapi.com/search-filters',
  params: {query: 'Python developer in Texas, USA'},
  headers: {
    'X-RapidAPI-Key': process.env.RapidKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	 //console.log(response.data);
}).catch(function (error) {
	 //console.error(error);
});

router.get('/', (req, res) =>{
	res.send('https://jsearch.p.rapidapi.com/search-filters');
}),
module.exports = router;
