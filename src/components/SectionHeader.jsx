import React from "react";

const SectionHeader = ({heading}) => {
  return (
    <h1 className="font-Sonsie lg:text-4xl sm:text-3xl text-2xl text-brightYellow border-b-[1px] w-fit py-4 mb-5">
      {heading}
    </h1>
  );
};

export default SectionHeader;
