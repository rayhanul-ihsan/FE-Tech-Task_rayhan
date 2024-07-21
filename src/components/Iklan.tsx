import React from "react";

const Iklan: React.FC = () => {
  return (
    <div className="container mx-auto bg-[#2161D5] p-12 rounded-lg mb-24">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[35px] text-white font-bold max-w-[370px]">
            Subscribe Now for Get Special Features!
          </h1>
          <p className="text-[16px] text-white">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <button className="rounded-lg p-4 w-[192px] text-[#2161D5] bg-white font-bold shadow shadow-white ">Subscribe Now</button>
      </div>
    </div>
  );
};

export default Iklan;
