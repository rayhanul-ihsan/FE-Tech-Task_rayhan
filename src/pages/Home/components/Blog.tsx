import React from "react";
import overView1 from "../../../assets/Overview1.png";
import overView2 from "../../../assets/Overview2.png";
import overView3 from "../../../assets/Overview3.png";

const Blog: React.FC = () => {
  return (
    <div className=" p-12 mb-36 bg-[#2161D5]">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex gap-14 mb-36">
          <img
            src={overView1}
            alt="overview1"
            className="w-[345px] h-[440px] mt-[-100px]"
          />
          <div className="flex flex-col max-w-[528px] mt-[100px] gap-4">
            <h1 className="text-[35px] font-bold text-white">App Overview 1</h1>
            <p className="text-[16px] text-white">
              Advanced spatial analysis to understand where and why things
              happen, identify the target constituency, and optimize the
              campaign.{" "}
            </p>
            <button className="rounded-full p-4 w-[192px] text-white border border-white font-bold">
              learn more
            </button>
          </div>
        </div>
        <div className="flex gap-14 mb-36">
          <div className="flex flex-col max-w-[528px] mt-[100px] gap-4">
            <h1 className="text-[35px] font-bold text-white">App Overview 1</h1>
            <p className="text-[16px] text-white">
              Advanced spatial analysis to understand where and why things
              happen, identify the target constituency, and optimize the
              campaign.{" "}
            </p>
            <button className="rounded-full p-4 w-[192px] text-white border border-white font-bold">
              learn more
            </button>
          </div>
          <img
            src={overView2}
            alt="overview2"
            className="w-[500px] h-[450px] mt-[-100px]"
          />
        </div>
        <div className="flex gap-14 ">
          <img
            src={overView3}
            alt="overview3"
            className="w-[500px] h-[240px] "
          />
          <div className="flex flex-col max-w-[528px] mt-[50px] gap-4">
            <h1 className="text-[35px] font-bold text-white">App Overview 1</h1>
            <p className="text-[16px] text-white">
              Advanced spatial analysis to understand where and why things
              happen, identify the target constituency, and optimize the
              campaign.{" "}
            </p>
            <button className="rounded-full p-4 w-[192px] text-white border border-white font-bold">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
