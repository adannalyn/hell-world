const jobBoard = document.getElementById('job-board');
const jobList = document.getElementById('job-list');
const searchButton = document.getElementById('search-button');
const jobSearch = document.getElementById('job-search');

const jobs = [
  { title: "JavaScript Developer", location: "New York" },
  { title: "Python Developer", location: "San Francisco" },
  { title: "DevOps Engineer", location: "Remote" },
  { title: "Product Manager", location: "Los Angeles" },
  { title: "Data Scientist", location: "Chicago" }
];

searchButton.addEventListener('click', function() {
  const searchTerm = jobSearch.value;
  let searchResults = "";

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].title.includes(searchTerm) || jobs[i].location.includes(searchTerm)) {
      searchResults += `<div class="job-item">
        <h2>${jobs[i].title}</h2>
        <p>Location: ${jobs[i].location}</p>
      </div>`;
    }
  }

  jobList.innerHTML = searchResults;
});
