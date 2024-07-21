import React from "react";
import { FigureData } from "../moks";

const Figure: React.FC = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className="flex flex-col items-center justify-center text-center gap-2 mb-16 ">
        <h1 className="text-[35px] font-bold">What Political Figure Say</h1>
        <div className="w-[555px] px-4">
          <p className="text-[16px]">
            These are the stories of political figure who have joined us with
            great pleasure when using this crazy feature.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        {FigureData.map((figure, index) => (
          <div
            className="w-[400px] h-[230px] p-4 bg-white border border-gray-200 hover:border-blue-500 rounded-lg shadow"
            key={index}
          >
            <div className="flex flex-col p-4">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={figure.image}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 ">
                    {figure.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {figure.position}
                  </p>
                </div>
              </div>
              <p className="text-[16px] text-[#0B132A]">{figure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figure;
