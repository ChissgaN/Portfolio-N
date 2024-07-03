import React from "react";

const Freelancer = () => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-[42px] text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-500 animate-pulse">
          Recent projects that I´ve developed as a freelancer
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-between my-12 md:py-16 md:px-24">
        <div className="border border-red-700">
            <img src="" alt="" />                
        </div>
        <div className="border border-red-700">
            <img src="" alt="" />    
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
