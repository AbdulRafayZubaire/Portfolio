import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="home w-full h-screen bg-dark">
      <motion.div
        className="container max-w-[1000px] h-full px-10 flex flex-col justify-center pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-brightYellow text-2xl">Hi, my name is </p>
        <h1 className="font-Sonsie py-2 text-5xl sm:text-5xl font-bold text-white my-5 leading-tight">
          Abdul Rafay Zubairi
        </h1>
        <motion.h2
          className="text-4xl sm:text-6xl text-paleYellow tracking-widest z-0"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 1, delay: 0.5 }}
        >
          I am a full Stack Developer
        </motion.h2>
        <p className="py-4 max-w-[700px] text-brightYellow my-2 text-xl tracking-widest">
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
      </motion.div>
    </div>
  );
};

export default Home;
