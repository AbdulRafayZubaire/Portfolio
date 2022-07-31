import { useState, useEffect, React } from "react";
import { NavItem } from "react-bootstrap";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { certificates } from "../portfolioData";
import {motion} from 'framer-motion';


const certificateEffect = {
  hidden: {
    y: "100px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    //transition
    transition: {
      duration:  1
    },
  },
};

const Certificates = () => {

  return (
    <div id="certificates" className="h-fit w-full bg-dark text-white px-10 ">
      <div className="max-w-[1000px] container flex flex-col justify-between items-center h-full py-20">
      <div className="w-full text-left">
          <h1 className="font-Sonsie text-4xl text-brightYellow border-b-[1px] w-fit py-4 mb-5">
            Certifications
          </h1>
        </div>

        {/*Certifictes */}
        <div className="w-full h-fit bg-dark">
          <div className="container sm:w-[800px] max-w-[1000px] flex flex-col justify-center items-center">
            {/* Certificate item */}
            {certificates.map((item, index) => (
              <motion.div className="certificate sm:w-[600px] sm:h-[200px] flex flex-col sm:flex-row gap-5 justify-center items-center my-2 sm:px-5 border-b-[1px] border-b-brightYellow py-5 mb-5 z-0"
              layoutScroll
              variants={certificateEffect}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.2}}
              >
                {/* certificate image */}
                <div className="image w-[200px] border-3 border-black hover:scale-[200%] cursor-pointer duration-300">
                  <img className="" src={item.image} alt="certificates" />
                </div>

                {/* certificate content */}
                <div className="flex flex-col justify-around sm:items-start items-center sm:w-[60%] w-[300px] h-[80%]">
                  <p className=" text-brightYellow sm:text-left text-center">
                    {item.name}
                  </p>
                  <p className="">{item.description}</p>
                  <div className="w-full sm:text-righ text-center pt-5">
                    <button className="hover:bg-brightYellow sm:mr-[40px] py-1 px-5 border-[1px] border-brightYellow rounded text-brightYellow hover:text-black font-bold duration-100 tracking-widest">
                      <a href={item.link}>Link</a>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
