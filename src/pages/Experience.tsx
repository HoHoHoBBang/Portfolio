import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex h-fit w-full items-center justify-center"
    >
      <div className="flex h-full w-[75%] flex-col items-center justify-center">
        <p className="w-full p-5 text-xl font-bold text-white">EXPERIENCE</p>
        <ul className="w-full">
          <li className="flex min-h-32 gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg">
            <div className="flex-1">
              <p className="text-sm tracking-widest text-gray-400">
                2021.04 - 2023.10
              </p>
            </div>
            <div className="flex flex-[2.5] flex-col">
              <div>
                <p className="font-bold tracking-widest text-white">
                  디자인 공감 인테리어
                </p>
                <p className="text-sm tracking-widest text-gray-400">
                  현장 관리, 고객 상담
                </p>
              </div>
            </div>
          </li>
          <li className="flex min-h-32 gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg">
            <div className="flex-1">
              <p className="text-sm tracking-widest text-gray-400">
                2020.04 - 2021.03
              </p>
            </div>
            <div className="flex flex-[2.5] flex-col">
              <div>
                <p className="font-bold tracking-widest text-white">
                  에스케이패션
                </p>
                <p className="text-sm tracking-widest text-gray-400">
                  원단 생산 및 관리, 시장 조사 및 분석
                </p>
              </div>
            </div>
          </li>
          <li className="flex min-h-32 gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg">
            <div className="flex-1">
              <p className="text-sm tracking-widest text-gray-400">
                2013.11 - 2016.12
              </p>
            </div>
            <div className="flex flex-[2.5] flex-col">
              <div>
                <p className="font-bold tracking-widest text-white">신성통상</p>
                <p className="text-sm tracking-widest text-gray-400">
                  원단 생산 및 관리, 하청 업체 관리, 시장 조사 및 분석
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
