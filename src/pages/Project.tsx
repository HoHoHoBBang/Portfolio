import React from "react";
import portfolioImage from "../assets/images/portfolio.png";
import socialwebImage from "../assets/images/socialweb.png";

const Project = () => {
  return (
    <div
      id="project"
      className="flex min-h-[400px] w-full items-center justify-center"
    >
      <div className="flex h-full w-[75%] flex-col items-center justify-center">
        <p className="w-full p-5 text-xl font-bold text-white">PROJECT</p>
        <ul className="w-full">
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg">
            <div className="flex flex-1 flex-col items-center justify-between">
              <img
                src={portfolioImage}
                alt=""
                className="h-24 w-full rounded-lg border border-gray-500 object-cover"
              />
              <a
                href="https://github.com/HoHoHoBBang/Portfolio"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full bg-gray-700 px-2 py-1 text-xs tracking-widest text-gray-400 duration-300 hover:text-white"
              >
                Github
              </a>
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Portfolio web
                </p>
                <p className="min-h-20 text-sm tracking-widest text-gray-400">
                  개인 포트폴리오 사이트 입니다.
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
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg">
            <div className="flex flex-1 flex-col items-center justify-between">
              <img
                src={socialwebImage}
                alt=""
                className="h-24 w-full rounded-lg border border-gray-500 object-cover"
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
                  개인 프로젝트 소셜 미디어사이트 입니다. <br />
                  로그인, 포스트 업로드, 1 대 1 대화 등 기능을 추가 하였습니다.
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
        </ul>
      </div>
    </div>
  );
};

export default Project;
