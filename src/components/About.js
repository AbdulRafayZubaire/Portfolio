import React from "react";
import { aboutMe, intro } from "../portfolioData";

const About = () => {
  return (
    <div id="about" className="about-head bg-dark w-full h-screen pt-[26px]">
      <div className="px-10 container flex flex-col justify-center items-center h-full max-w-[1000px] text-white">
        <div className="content w-full flex justify-start sm:justify-center items-center my-8">
          <p className="inline font-bold text-5xl border-b-[3px] border-brightYellow p-3 my-4">
            About
          </p>
        </div>

        <div className="content w-full flex flex-row gap-10 justify-center items-center">
          {/* Flex item 1 */}
          <div className="info basis-1/4">
            <p className="text-4xl sm:text-left px-1">
              {intro}
            </p>
          </div>

          {/* Flex item 2 */}
          <div className="text-2xl leading-10 basis-3/4">
            "{aboutMe}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
