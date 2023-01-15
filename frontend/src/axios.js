const goForAxios = () => {
  setFromFetch(false);
  setLoading(true);
  axios.get((`https://jsearch.p.rapidapi.com/search`, {
    headers: { 'Content-Type': 'application/json', 'x-rapidapi-host': 'jsearch.p.rapidap.com', 'x-rapidapi-key': 'eadb9f1502msh1e3560b5e5f5c76p17603djsn1713211a9b62',},
    params: { query: 'Python developer in lagos, ng', page: '4', num_pages: '5', date_posted: 'month', remote_jobs_only: 'true', employment_types: 'fulltime', job_requirements: 'no_experience', job_titles: 'product_design' },)
    .then(response => {
      console.log('getting data from axios',
      response.data);
      setTimeout(() => {
        setLoading(false);
        setAxiosData(response.data);
        
      }, 2000)
      
    })
    .catch(error => {
      console.log(error);
      
    });
    
  }
