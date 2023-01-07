import axios from 'axios';
export default async function handler(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: 'https://jsearch.p.rapidapi.com/search',
			params: { query: 'Python developer in lagos, ng', page: '4', num_pages: '5', date_posted: 'month', remote_jobs_only: 'true', employment_types: 'fulltime', job_requirements: 'no_experience', job_titles: 'product_design' },
			headers: {
				'x-rapidapi-host': 'jsearch.p.rapidapi.com',
				'x-rapidapi-key': 'eadb9f1502msh1e3560b5e5f5c76p17603djsn1713211a9b62',
			}
		};
		axios
			.request(options)
			.then(function (response) {
				res.status(200).json(response.data);
			})
			.catch(function (error) {
				console.error(error);
				res.status(response.status);
			});
	} else {
		res.status(400);
	}
}
