import React from "react";
import quote from "../../../assets/quote.png";
import { AdvisorsData } from "../moks";

const Advisors: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[946px] mb-16">
      <div className="flex flex-col items-center mb-24 text-center px-32">
        <img src={quote} alt="quote" />
        <p className="text-[24px]">
          In just small steps you’ll connected directly to our technology.
          Knowledge about your own-power, your rivals, your voters, and your
          region in Election.
        </p>
      </div>

      <h1 className="text-center text-[40px] font-bold mb-8">Our Advisors</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {AdvisorsData.map((advisors, index) => (
          <div
            className="w-[270px] h-[262px] flex flex-col items-center justify-center text-center bg-transparent"
            key={index}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={advisors.image}
                alt="advisor1"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-[22px] font-bold ">{advisors.name}</h5>
              </a>
              <p className="mb-3 text-[14px] font-normal text-gray-700">
                {advisors.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advisors;
