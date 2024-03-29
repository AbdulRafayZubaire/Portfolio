import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
    <div
      style={{ backgroundImage: `url(${item.image})`, height:'160px', width: '250px' }}
      className="projectCard w-[300px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto bg-cover"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-xl font-bold text-white tracking-wider">
          {item.application}
        </span>
        <div className="pt-8 text-center">
          <a href={item.link} target="_blank">
            <button className="text-center rounded-lg p-2 m-2 bg-white text-dark font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={item.code} className="grp">
            <button className={` text-center rounded-lg p-2 m-2 bg-white text-dark font-bold text-lg ${item.code == "private" && "cursor-not-allowed"}`}>
              Code
            </button>
            {item.code == "private" &&
            <p className="text-red-600 font-bold">Private Repo</p> 
            }
          </a>
        </div>
      </div>

    </div>
      <div className="p-2 mt-3">
        <h1 className="text">{item.name}</h1>
        <h1 className="text-xl text-brightYellow" >{item.type}</h1>
      </div>
      </div>
  );
};

export default ProjectCard;
