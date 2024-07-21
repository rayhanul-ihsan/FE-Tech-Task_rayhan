import React from "react";
import logo from "../../../assets/pic-Home.png";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto my-36">
      <div className="flex">
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-col">
            <h1 className="text-[60px]  font-medium">Observe Your</h1>
            <h1 className="text-[60px] font-bold">Power</h1>
          </div>
          <p className="text-[16px] py-8 w-[541px]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="rounded-full p-4 w-[192px] bg-[#2161D5] hover:bg-blue-500 text-white shadow-custom">
            See a Demo
          </button>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
