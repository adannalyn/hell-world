const axios = require('axios');
const config = require ('./config');
//const axios = require('axios/dist/node/axios.cjs');

axios.get(config.url, {
	params: { query: 'Python developer in lagos, ng', page: '4', num_pages: '5', date_posted: 'month', remote_jobs_only: 'true', employment_types: 'fulltime', job_requirements: 'no_experience', job_titles: 'product_design' },               headers: {
		'X-RapidAPI-Key': config.RapidAPIKey,
		'X-RapidAPI-Host': config.RapidAPIHost,
	},
})
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
