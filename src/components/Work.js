import React from "react";
import {projectData as projects} from "../portfolioData";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const Work = () => {

  return (
    <div id="work" className="work md:h-fit bg-dark">
      <div className="container px-10 py-10 max-w-[1000px] h-full w-full flex flex-col justify-center items-center text-white">
        <div className="w-full my-10 text-left">
          <SectionHeader heading="Work" />
          <p className="text-xl my-4">Check out some of my recent work</p>
        </div>

        <div className="projects grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index)=>(

            <ProjectCard key={index} item={project}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
