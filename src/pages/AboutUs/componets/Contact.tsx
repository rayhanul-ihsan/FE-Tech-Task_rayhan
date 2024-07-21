import React from "react";
import strip from "../../../assets/strip.png";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#2161D5] mb-24">
      <div className="container mx-auto h-[100vh] flex justify-center items-center">
        <div className="relative">
          <img src={strip} alt="strip" className=" h-screen" />
          <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center  mx-auto text-center">
            <h1 className="text-[60px] font-semibold text-white">About Us</h1>
            <p className="text-[16px] text-white max-w-[563px]">
              A small company offering data-driven solutions for campaign
              effectiveness using spatial data and detailed analysis of target
              audience (voters). Use technology that unites spatial data science
              and political science.
            </p>
            <button className="rounded-full p-4 w-[192px] text-[#2161D5] bg-white font-bold shadow shadow-white mt-8">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
