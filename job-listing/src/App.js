import { useState, useEffect } from "react";
import React from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

// console.log(data);

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => setJobs(data), []);

  console.log(jobs);
  return (
    <div className="App">
      <header className="bg-teal-500, mb-12">
        <img src="/images/bg-header-desktop.svg" alt="bg-img" />
      </header>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
