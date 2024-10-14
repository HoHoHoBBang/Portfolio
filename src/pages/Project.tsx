import React from "react";
import portfolioImage from "../assets/images/portfolio.png";
import socialwebImage from "../assets/images/socialweb.png";
import rouletteImage from "../assets/images/roulette.png";
import ecommerceImage from "../assets/images/ecommerce.png";

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
                  React.js를 사용하여 컴포넌트 기반의 사용자 인터페이스를 구현
                  <br /> TailwindCSS를 통해 반응형 디자인과 모던한 UI를 구현
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
                  React.js를 사용하여 컴포넌트 기반의 사용자 인터페이스를 구현
                  <br /> TailwindCSS를 통해 반응형 디자인과 모던한 UI를 구현
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
                  React.js를 사용하여 사용자 인터페이스를 설계 <br /> Firebase를
                  이용해 실시간 데이터베이스와 사용자 인증을 구현 <br />
                  게시글 작성, 댓글, 좋아요 등 다양한 소셜 미디어 기능을 구현{" "}
                  <br />
                  TailwindCSS를 활용해 반응형 디자인을 구현
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
                  React.js를 사용하여 사용자 인터페이스를 설계 <br />
                  룰렛 회전 에니메이션 및 베팅 프로세스 구현
                  <br />
                  TailwindCSS를 활용해 반응형 디자인을 구현
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
        </ul>
      </div>
    </div>
  );
};

export default Project;
