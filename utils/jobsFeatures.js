const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://indeed-indeed.p.rapidapi.com/apisearch',
  params: {
    publisher: 'undefined',
    v: '2',
    format: 'json',
    callback: '<REQUIRED>',
    q: 'java',
    l: 'austin, tx',
    sort: '<REQUIRED>',
    radius: '25',
    st: '<REQUIRED>',
    jt: '<REQUIRED>',
    start: '<REQUIRED>',
    limit: '<REQUIRED>',
    fromage: '<REQUIRED>',
    highlight: '<REQUIRED>',
    filter: '<REQUIRED>',
    latlong: '<REQUIRED>',
    co: '<REQUIRED>',
    chnl: '<REQUIRED>',
    userip: '<REQUIRED>',
    useragent: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': '79961a3597mshd4c28761b6c729dp193d39jsn3e6e912e6b95',
    'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
