import { useState, useEffect, React } from "react";
import { NavItem } from "react-bootstrap";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { certificates } from "../portfolioData";

const Certificates = () => {

  return (
    <div id="certificates" className="h-fit w-full bg-dark text-white px-10 ">
      <div className="container flex flex-col justify-center items-center h-full py-20">
        <div>
          <h1 className="text-4xl text-brightYellow border-b-[3px] p-2 my-10">
            I have completed the Following certifications as well:{" "}
          </h1>
        </div>

        {/*Certifictes */}
        <div className="w-full h-fit bg-dark">
          <div className="container sm:w-[800px] max-w-[1000px] flex flex-col justify-center items-center">
            {/* Certificate item */}
            {certificates.map((item, index) => (
              <div className="certificate sm:w-[800px] sm:h-[240px] flex flex-col sm:flex-row gap-5 justify-start items-center my-2 sm:px-5 border border-lightYellow py-5">
                {/* certificate image */}
                <div className="image w-[260px] border-3 border-black hover:scale-[200%] cursor-pointer duration-300">
                  <img className="w-full" src={item.image} alt="certificates" />
                </div>

                {/* certificate content */}
                <div className="flex flex-col justify-around sm:items-start items-center sm:w-[60%] w-[300px] h-[80%]">
                  <p className="text-xl text-brightYellow sm:text-left text-center">
                    {item.name}
                  </p>
                  <p className="">{item.description}</p>
                  <div className="w-full sm:text-righ text-center pt-5">
                    <button className="hover:bg-brightYellow sm:mr-[40px] py-1 px-10 border-2 border-brightYellow rounded text-brightYellow hover:text-black font-bold hover:scale-[105%] duration-100 tracking-widest">
                      <a href={item.link}>Link</a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
