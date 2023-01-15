import React, { useState } from 'react';

const jobs = [
  { title: "JavaScript Developer", location: "New York" },
  { title: "Python Developer", location: "San Francisco" },
  { title: "DevOps Engineer", location: "Remote" },
  { title: "Product Manager", location: "Los Angeles" },
  { title: "Data Scientist", location: "Chicago" }
];

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    setSearchResults(jobs.filter(job => job.title.includes(searchTerm) || job.location.includes(searchTerm)));
  };

  return (
    <div>
      <form>
        <label htmlFor="job-search">Search for a job:</label>
        <input type="text" id="job-search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button type="button" onClick={handleSearch}>Search</button>
      </form>
      <div>
        {searchResults.map((job, index) => (
          <div key={index} className="job-item">
            <h2>{job.title}</h2>
            <p>Location: {job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
