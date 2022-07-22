import React from "react";
import { aboutMe, intro } from "../portfolioData";

const About = () => {
  return (
    <div id="about" className="about-head bg-dark w-full h-fit pt-[5rem]">
      <div className="px-10 container flex flex-col justify-center items-center h-full max-w-[1000px] text-white">
        <div className="content w-full  my-8">
          <p className="inline text-brightYellow text-5xl border-b-[1px] border-brightYellow  my-4">
            About
          </p>
        </div>

        <div className="content w-full flex md:flex-row flex-col gap-10 justify-center items-center">
          {/* Flex item 1 */}
          <div className="info basis-[30%]">
            <p className="text-3xl sm:text-left pr-10 text-brightYellow py-20 border-r-[1px]">
              {intro}
            </p>
          </div>

          {/* Flex item 2 */}
          <div className="text-xl leading-10 basis-3/4">
            "{aboutMe}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
