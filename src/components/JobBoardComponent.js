import React from "react";

const JobBoardComponent = ({
  job: {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level];

  if (languages) {
    tags.push(...languages);
  }

  if (tools) {
    tags.push(...tools);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-16 p-6 rounded ${
        featured && "border-l-8 border-black border-solid"
      } sm:flex-row sm:my-4 `}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {company}
          {isNew && (
            <span className="text-teal-100 bg-teal-500 font-bold m-2 py-1 px-2 rounded-full uppercase text-sm">
              New
            </span>
          )}
          {featured && (
            <span className="text-white bg-gray-800 font-bold m-2 py-1 px-2  rounded-full uppercase text-sm">
              Featured
            </span>
          )}
        </h3>

        <h2 className="font-bold text-xl my-2">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 ">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
