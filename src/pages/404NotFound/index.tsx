import React from "react";
import logo from "../../assets/404.svg";
import Navbar from "../../components/Navbar";

const NotFound: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col  flex-1 items-center justify-center">
            <div className="flex flex-col items-start gap-4">
              <div>
                <h2 className="text-[24px] font-semibold">Ooops!</h2>
                <h1 className="text-[24px] font-bold">Page Not Found</h1>
              </div>
              <div>
                <p className="text-[16px]">
                  This page doesn`t exist or was removed{" "}
                </p>
                <p className="text-[16px]">We suggest you back to home</p>
              </div>
              <button className=" rounded-full p-4 w-[192px] bg-[#2161D5] hover:bg-blue-500 text-white">
                Learn More
              </button>
            </div>
          </div>
          <img src={logo} alt="Logo" className="flex-1" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
