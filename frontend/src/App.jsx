import { useEffect } from 'react';
import axios from 'axios';
const App = () => {
    useEffect(() => {
        const getTodo = (req, res) => {
            axios
                .get('https://jsearch.p.rapidapi.com/search', {                                                       params: { query: 'Python developer in lagos, ng', page: '4', num_pages: '5', date_posted: 'month', remote_jobs_only: 'true', employment_types: 'fulltime', job_requirements: 'no_experience', job_titles: 'product_design' },               headers: {
                'X-RapidAPI-Key': 'eadb9f1502msh1e3560b5e5f5c76p17603djsn1713211a9b62',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
})
                .then((response) => {
                    res.send(response.status);
                    res.send(response.data);
                })
                .catch((e) => res.send('something went wrong :(', e));
        };
        getTodo();
    }, []);
    return getTodo;
};
export default App;
