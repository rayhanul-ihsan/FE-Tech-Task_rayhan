import React from "react";
import PricingLogo from "../../../assets/Pricing.png";

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto mb-36">
      <div className="flex flex-col gap-8 mx-auto items-center text-center max-w-[464px]">
        <h1 className="text-[35px] font-bold">Plans and Pricing</h1>
        <p className="text-[16px] ">
          We provide to you the best choiches for you. The leading political
          campaign intelligence platform
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-16">
        <div className="flex flex-col items-center text-center  w-[330px] h-[720px] px-[28px] py-[60px] bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700">
          <img src={PricingLogo} alt="PricingLogo" />
          <h5 className="mb-4 text-xl font-semibold">Individual Plan</h5>

          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                1 User
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                1 Basic Analysis
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Unlimited Select Services
              </span>
            </li>
          </ul>
          <div className="flex flex-col items-center mt-auto">
            <div className="flex items-center">
              <span className="text-[24px] font-bold">$</span>
              <span className="text-[24px] font-bold ">99</span>
              <span className="ms-1 text-[24px] font-normal text-gray-500">
                / mo
              </span>
            </div>
            <button className="rounded-full p-4 w-[192px] hover:bg-[#2161D5] bg-transparent text-blue-500 hover:text-white border border-blue-500 hover:shadow font-bold">
              Select
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center  w-[330px] h-[720px] px-[28px] py-[60px] bg-white border border-gray-200 rounded-2xl shadow hover:border-blue-700">
          <img src={PricingLogo} alt="PricingLogo" />
          <h5 className="mb-4 text-xl font-semibold">Parties Plan</h5>

          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Unlimited User
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Basic Analysis
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Unlimited Select Services
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Free extend 1 Month
              </span>
            </li>
          </ul>
          <div className="flex flex-col items-center mt-auto">
            <div className="flex items-center">
              <span className="text-[24px] font-bold">$</span>
              <span className="text-[24px] font-bold ">500</span>
              <span className="ms-1 text-[24px] font-normal text-gray-500">
                / mo
              </span>
            </div>
            <button className="rounded-full p-4 w-[192px] hover:bg-[#2161D5] bg-transparent text-blue-500 hover:text-white border border-blue-500 hover:shadow font-bold">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
