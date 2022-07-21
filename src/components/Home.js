import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="home w-full h-screen bg-dark">
      <div className="container max-w-[1000px] h-full px-10 flex flex-col justify-center">
        <p className="text-brightYellow text-2xl">Hi, my name is </p>
        <h1 className="py-2 text-5xl sm:text-6xl font-bold text-white">
          Abdul Rafay Zubairi
        </h1>
        <h2 className="text-4xl sm:text-7xl text-paleYellow">
          I am a full Stack Developer
        </h2>
        <p className="py-4 max-w-[700px] text-brightYellow my-2 text-xl">
          I am a full stack developer having expertise in building exceptional
          digital experiences. Curently, I am focused on buiding responsive full
          stack web Applications.
        </p>
        <Link to="work" smooth={true} duration={1000}>
          <button className="group text-white border-2 w-[130px] p-2 text-center flex justify-around items-center hover:bg-white hover:text-dark hover: cursor-pointer">
            view Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
