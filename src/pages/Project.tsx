import React from "react";
import portfolioImage from "../assets/images/portfolio.png";
import socialwebImage from "../assets/images/socialweb.png";
import rouletteImage from "../assets/images/roulette.png";
import ecommerceImage from "../assets/images/ecommerce.png";
import weatherImage from "../assets/images/weather.png";
import flightImage from "../assets/images/flightschedule.png";

const Project = () => {
  return (
    <div
      id="project"
      className="flex min-h-[600px] w-full items-center justify-center"
    >
      <div className="flex h-full w-[75%] flex-col items-center justify-center max-md:w-full">
        <p className="top-0 w-full bg-gray-900/80 p-5 text-xl font-bold text-white max-lg:sticky">
          PROJECT
        </p>
        <ul className="w-full">
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg max-sm:flex-col">
            <div className="flex flex-1 flex-col items-center justify-between max-sm:gap-5">
              <img
                src={flightImage}
                alt=""
                className="h-20 w-32 rounded-lg border border-gray-500 object-cover max-sm:h-full max-sm:w-full"
              />
              <div className="flex gap-2">
                <a
                  href="https://github.com/HoHoHoBBang/FlightSchedule-project"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Github
                </a>
                <a
                  href="https://flightschedule-99e4b.web.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Flight Schedule app
                </p>
                <p className="min-h-20 text-sm tracking-widest text-gray-400">
                  공공데이터 API를 통해 실시간 운항기 데이터 연동하여 확인할 수
                  있는 운항기 스케쥴 앱 입니다.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  React.JS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  Vite
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  TailwindCSS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  OpenAPI
                </p>
              </div>
            </div>
          </li>
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg max-sm:flex-col">
            <div className="flex flex-1 flex-col items-center justify-between max-sm:gap-5">
              <img
                src={weatherImage}
                alt=""
                className="h-20 w-32 rounded-lg border border-gray-500 object-cover max-sm:h-full max-sm:w-full"
              />
              <div className="flex gap-2">
                <a
                  href="https://github.com/HoHoHoBBang/WeatherApp-project"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Github
                </a>
                <a
                  href="https://weatherapp-15c1e.web.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Weather app
                </p>
                <p className="min-h-20 text-sm tracking-widest text-gray-400">
                  Weather API를 통해 실시간 데이터를 반영한 날씨 확인 앱 입니다.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  React.JS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  Vite
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  TailwindCSS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  OpenAPI
                </p>
              </div>
            </div>
          </li>
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg max-sm:flex-col">
            <div className="flex flex-1 flex-col items-center justify-between max-sm:gap-5">
              <img
                src={ecommerceImage}
                alt=""
                className="h-20 w-32 rounded-lg border border-gray-500 object-cover max-sm:h-full max-sm:w-full"
              />
              <div className="flex gap-2">
                <a
                  href="https://github.com/HoHoHoBBang/Ecommerce-project"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Github
                </a>
                <a
                  href="https://ecommerce-dbc54.web.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Ecommerce web
                </p>
                <p className="min-h-20 text-sm tracking-widest text-gray-400">
                  제품 검색, 필터링, 장바구니 등의 기능을 구현한 이커머스 사이트
                  입니다.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  React.JS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  Vite
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  TailwindCSS
                </p>
              </div>
            </div>
          </li>
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg max-sm:flex-col">
            <div className="flex flex-1 flex-col items-center justify-between max-sm:gap-5">
              <img
                src={rouletteImage}
                alt=""
                className="h-20 w-32 rounded-lg border border-gray-500 object-cover max-sm:h-full max-sm:w-full"
              />
              <div className="flex gap-2">
                <a
                  href="https://github.com/HoHoHoBBang/Roulette-project"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Github
                </a>
                <a
                  href="https://roulette-55839.web.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Roulette Game
                </p>
                <p className="min-h-20 text-sm tracking-widest text-gray-400">
                  React.js 로 제작한 룰렛 게임입니다. table tag 를 이용한 베팅
                  테이블을 제작하였고 룰렛 모션, 베팅 룰 기능을 구현하였습니다.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  React.JS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  Vite
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  TailwindCSS
                </p>
              </div>
            </div>
          </li>
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg max-sm:flex-col">
            <div className="flex flex-1 flex-col items-center justify-between max-sm:gap-5">
              <img
                src={socialwebImage}
                alt=""
                className="h-20 w-32 rounded-lg border border-gray-500 object-cover max-sm:h-full max-sm:w-full"
              />
              <div className="flex gap-2">
                <a
                  href="https://github.com/HoHoHoBBang/social-web-project"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Github
                </a>
                <a
                  href="https://social-app-fd0bf.web.app/login"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Social media web
                </p>
                <p className="min-h-20 text-sm tracking-widest text-gray-400">
                  Firebase 를 통해 게시글 작성, 댓글, 좋아요, 1대1 채팅 등
                  다양한 기능을 구현한 소셜 미디어 사이트 입니다.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  React.JS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  TailwindCSS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  Firebase
                </p>
              </div>
            </div>
          </li>
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg max-sm:flex-col">
            <div className="flex flex-1 flex-col items-center justify-between max-sm:gap-5">
              <img
                src={portfolioImage}
                alt=""
                className="h-20 w-32 rounded-lg border border-gray-500 object-cover max-sm:h-full max-sm:w-full"
              />
              <div className="flex gap-2">
                <a
                  href="https://github.com/HoHoHoBBang/Portfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Github
                </a>
                <a
                  href="https://portfolio-aa8d4.web.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Portfolio web
                </p>
                <p className="min-h-20 text-sm tracking-widest text-gray-400">
                  React.js를 사용하여 제작한 개인 포트폴리오 사이트 입니다.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  React.JS
                </p>
                <p className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400">
                  TailwindCSS
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
