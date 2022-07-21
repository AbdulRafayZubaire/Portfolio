import React from "react";
import {skills} from "../portfolioData";
import Card from "./SkillCard";
import {AiOutlineArrowRight} from 'react-icons/ai'

const Skills = () => {
  return (
    <div
      id="skills"
      className="skills w-full bg-dark text-white py-10 px-10 md:h-fit"
    >
      <div className="container h-full flex flex-col justify-center items-center max-w-[1000px] m-auto py-20">
        <div className="w-full text-left">
          <h1 className="text-4xl text-brightYellow border-b-[3px] w-fit py-4 mb-5">
            Experience
          </h1>
        </div>
        <div className="w-full text-2xl text-left">
          <h1>These are the technologies I've worked on and love working </h1>
        </div>
        <div className="grid sm:grid-cols-4 py-10 grid-cols-2 h-fit gap-10 sm:gap-10">
          {skills.map((skill, index) => (
            <Card key={index} item={skill} />
          ))}
        </div>

        <div className="w-full my-10 py-10">
          <ul>
            <li className="text-2xl w-fit p-2 text-brightYellow border-b-[2px] text-left">
              I aquire expertise in the following technologies :
            </li>
            <li className="text-xl my-2 p-2 text-white  text-left pl-10 mt-10 tracking-widest">
              <AiOutlineArrowRight className="inline text-brightYellow mx-5"/>React (hooks), React-router-Redux, Redux-Thunk
            </li>
            <li className="text-xl my-2 p-2 text-white  text-left pl-10 tracking-widest">
              <AiOutlineArrowRight className="inline text-brightYellow mx-5"/>HTML5 / CSS3 / Bootstrap / jQuery / LESS / SASS/Ajax/Json/XML
            </li>
            <li className="text-xl my-2 p-2 text-white  text-left pl-10 tracking-widest">
              <AiOutlineArrowRight className="inline text-brightYellow mx-5"/>React.js, Next.js, Express.js, Bootstrap 4, Node.js
            </li>
            <li className="text-xl my-2 p-2 text-white  text-left pl-10 tracking-widest">
              <AiOutlineArrowRight className="inline text-brightYellow mx-5"/>Mongo DB
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
