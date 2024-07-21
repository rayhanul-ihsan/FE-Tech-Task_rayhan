import React from "react";
import GeoLogo from "../../../assets/Geo.svg";
import DemograpLogo from "../../../assets/Demograp.svg";
import PyschoLogo from "../../../assets/Psycho.svg";
import BehaLogo from "../../../assets/Beha.svg";

const Feature: React.FC = () => {
  return (
    <div className="container mx-auto mb-36">
      <div className="flex flex-col gap-8 mx-auto items-center text-center max-w-[464px]">
        <h1 className="text-[35px] font-bold">How it works for you?</h1>
        <p className="text-[16px] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <button className="rounded-full p-4 w-[192px] bg-[#2161D5] hover:bg-blue-500 text-white shadow-custom font-bold">
          See a Demo
        </button>
      </div>

      <div className="flex flex-wrap gap-8 mx-auto items-center text-center max-w-[888px] mt-16">
        <div className="flex flex-col items-center text-center  w-[424px] h-[488px] px-[28px] py-[60px] bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700 ">
          <img src={GeoLogo} alt="GeoLogo" />
          <div>
            <h5 className="mb-2 text-[24px] font-bold ">
              Geographic Segmentation
            </h5>
            <p className="font-normal text-[16px] text-gray-700 dark:text-gray-400">
              Consist of creating differend groups of customers based on
              geographic boundaries
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center  w-[424px] h-[488px] px-[28px] py-[60px] bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700 ">
          <img src={DemograpLogo} alt="DemograpLogo" />
          <div>
            <h5 className="mb-2 text-[24px] font-bold ">
              Demographic Segmentation
            </h5>
            <p className="font-normal text-[16px] text-gray-700 dark:text-gray-400">
              Consist of dividing the market through different variables such as
              age, gender, income, etc
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center  w-[424px] h-[488px] px-[28px] py-[60px] bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700 ">
          <img src={PyschoLogo} alt="PyschoLogo" />
          <div>
            <h5 className="mb-2 text-[24px] font-bold ">
              Psychograpich Segmentation
            </h5>
            <p className="font-normal text-[16px] text-gray-700 dark:text-gray-400">
              Consist of creating differend groups of customers based on
              geographic boundaries
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center  w-[424px] h-[488px] px-[28px] py-[60px] bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700 ">
          <img src={BehaLogo} alt="BehaLogo" />
          <div>
            <h5 className="mb-2 text-[24px] font-bold ">
              Behavorial Segmentation
            </h5>
            <p className="font-normal text-[16px] text-gray-700 dark:text-gray-400">
              Consist of creating differend groups of customers based on
              geographic boundaries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
