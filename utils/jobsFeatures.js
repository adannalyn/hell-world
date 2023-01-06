const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Python developer in lagos, ng',
    page: '4',
    num_pages: '5',
    date_posted: 'month',
    remote_jobs_only: 'true',
    employment_types: 'fulltime',
    job_requirements: 'no_experience',
    job_titles: 'product_design'
  },
  headers: {
    'X-RapidAPI-Key': 'eadb9f1502msh1e3560b5e5f5c76p17603djsn1713211a9b62',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Python developer in lagos, ng',
    page: '4',
    num_pages: '5',
    date_posted: 'month',
    remote_jobs_only: 'true',
    employment_types: 'fulltime',
    job_requirements: 'no_experience',
    job_titles: 'product_design'
  },
  headers: {
    'X-RapidAPI-Key': 'eadb9f1502msh1e3560b5e5f5c76p17603djsn1713211a9b62',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});