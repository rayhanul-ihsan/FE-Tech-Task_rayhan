import React from "react";
import dataLogo from "../../../assets/Data.svg";
import techLogo from "../../../assets/Tech.svg";
import serviceLogo from "../../../assets/service.svg";

const Product: React.FC = () => {
  return (
    <div className="container mx-auto mb-36">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-[35px]">Why choose us?</h1>
        <p className="text-[16px]">
          We provide to you the best choiches for you. The leading political
          campaign intelligence platform
        </p>
      </div>
      <div className="flex gap-8 items-center justify-center mx-auto mb-14">
        <a
          href="#"
          className="flex flex-col justify-center gap-2 items-start w-[300px] h-[330px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700 "
        >
          <img src={dataLogo} alt="dataLogo" />
          <h5 className="mb-2 text-[24px] font-bold ">Data</h5>
          <p className="font-normal text-[16px] text-gray-700 dark:text-gray-400">
            The biggest regional data, development, and POI data.
          </p>
        </a>
        <a
          href="#"
          className="flex flex-col justify-center gap-2 items-start w-[300px] h-[330px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700 "
        >
          <img src={techLogo} alt="techLogo" />
          <h5 className="mb-2 text-[24px] font-bold ">Technology</h5>
          <p className="font-normal text-[16px] text-gray-700 dark:text-gray-400">
            Geospatial platform with advanced analysis that suit your neetds.
          </p>
        </a>
        <a
          href="#"
          className="flex flex-col justify-center gap-2 items-start w-[300px] h-[330px] p-6 bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700 "
        >
          <img src={serviceLogo} alt="serviceLogo" />
          <h5 className="mb-2 text-[24px] font-bold ">Services</h5>
          <p className="font-normal text-[16px] text-gray-700 dark:text-gray-400">
            An expert team help you to analyze your poltical power.
          </p>
        </a>
      </div>
      <div className="flex justify-center">
        <button className="rounded-full p-4 w-[192px] text-blue-500 border border-blue-500 font-bold">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Product;
