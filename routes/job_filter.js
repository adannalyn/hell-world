const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search-filters',
  params: {query: 'Python developer in Texas, USA'},
  headers: {
    'X-RapidAPI-Key': '79961a3597mshd4c28761b6c729dp193d39jsn3e6e912e6b95',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});