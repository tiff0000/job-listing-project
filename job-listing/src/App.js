import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

// console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(["CSS"]);
  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (languages) {
      tags.push(...languages);
    }

    if (tools) {
      tags.push(...tools);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
      <header className="bg-teal-500, mb-12">
        <img src="/images/bg-header-desktop.svg" alt="bg-img" />
      </header>
      {filters.length > 0 && (
        <div className="flex bg-white shadow-md my-16 mx-10 p-10 rounded">
          {filters.length > 0 &&
            filters.map((filter) => (
              <span onClick={() => handleFilterClick(filter)}>
                <span className="text-teal-500 bg-teal-100 cursor-pointer font-bold mr-0 mb-4 p-2 rounded sm:mb-0">
                  {filter}
                </span>
                <span className="bg-teal-300 text-teal-100 p-2">x</span>
              </span>
            ))}
        </div>
      )}
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoardComponent
            job={job}
            key={job.id}
            handleTagClick={handleTagClick}
          />
        ))
      )}
    </div>
  );
}

export default App;
