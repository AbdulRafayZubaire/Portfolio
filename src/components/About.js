import { React, useState } from "react";
import { aboutMe, intro } from "../portfolioData";
import { motion } from "framer-motion";

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
const aboutIntro = {
  hidden: {
    x: "-30vw",
    opacity: 0
  },
  visible: {
    opacity: 1,
    x: 0,

    //transition
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};
const aboutMeDetail = {
  hidden: {
    x: "50vw",
    opacity: 0
  },
  visible: {
    opacity: 1,
    x: 0,

    //transition
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

const About = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      id="about"
      className="about-head bg-dark w-full h-fit pt-[5rem] overflow-hidden"
    >
      <div className="px-10 container flex flex-col justify-center items-center h-full max-w-[1000px] text-white">
        <motion.div
          className=" content w-full my-8 relative"
          // key={0}
          variants={heading}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          <p className="font-Sonsie inline text-brightYellow text-5xl border-b-[1px] border-brightYellow  my-4">
            About
          </p>
        </motion.div>

        <div className="content w-full flex md:flex-row flex-col gap-10 justify-center items-center">
          {/* Flex item 1 */}

            <motion.div
              className="info basis-[30%]"
              variants={aboutIntro}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <p className="text-3xl sm:text-left pr-10 text-brightYellow py-20 border-r-[1px]">
                {intro}
              </p>
            </motion.div>

          {/* Flex item 2 */}

            <motion.div
              className="text-xl leading-10 basis-3/4"
              variants={aboutMeDetail}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              "{aboutMe}"
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
