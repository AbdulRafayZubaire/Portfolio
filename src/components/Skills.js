import React from "react";
import { skills } from "../portfolioData";
import Card from "./SkillCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const heading = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    //transition
    transition: {
      duration: 1,
      // when: "beforeSibling",
    },
  },
};

const slideEffect = {
  hidden: {
    x: "-40vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    //transition
    transition: {
      duration: 2,
    },
  },
};

const Skills = () => {
  return (
    <div id="skills" className="skills w-full bg-dark text-white px-10 ">
      <div className="container h-full flex flex-col justify-center items-center max-w-[1000px] m-auto pt-20">
        <motion.div
          className="w-full text-left"
          variants={heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <SectionHeader heading="Experience" />
        </motion.div>
        <div className="w-full text-xl text-left">
          <h1>I acquire experirience and expertise in the following technolgies. </h1>
        </div>
        <motion.div
          className="grid py-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-fit gap-10 sm:gap-10"
          variants={slideEffect}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <Card key={index} item={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
