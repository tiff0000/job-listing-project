import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

// console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
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

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className="bg-teal-500, mb-12">
        <img
          className="w-full"
          src="/images/bg-header-desktop.svg"
          alt="bg-img"
        />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div className="flex bg-white shadow-md my-12 mx-16 p-6 rounded">
            {filters.length > 0 &&
              filters.map((filter) => (
                <span
                  className="cursor-pointer font-bold py-2 mr-4 rounded"
                  onClick={() => handleFilterClick(filter)}
                >
                  <span className="text-teal-500 bg-teal-100 p-2 rounded sm:mb-0">
                    {filter}
                  </span>
                  <span className="bg-teal-500 text-teal-100 p-2 rounded">
                    x
                  </span>
                </span>
              ))}
            <button
              onClick={clearFilters}
              className="font-bold text-gray-700 ml-auto"
            >
              Clear
            </button>
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
    </>
  );
}

export default App;
