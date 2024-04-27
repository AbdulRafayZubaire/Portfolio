import React from "react";

const SkillCard = ({ item }) => {

  return (
    <div className="bg-[#FFFFFF20] rounded-xl card shadow-lg shadow-[#040c16] p-5 w-[120px] sm:w-[120px] md:w-[140px] lg:w-[160px] flex justify-center items-center hover:cursor-pointer hover:scale-110 duration-300"
    >
      <div className="flex flex-col justify-center items-center sm:w-[150px] ">
        <img src={item.image} alt="skill logo" className="my-2 "/>
        <div className="card-text text-white text">{item.skill}</div>
      </div>
    </div>
  );
};

export default SkillCard;