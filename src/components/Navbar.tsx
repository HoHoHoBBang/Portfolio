import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed flex h-full w-[50%] items-center justify-center">
      <div className="flex h-[500px] w-[75%] flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-5xl font-bold text-white">Hokeun Lee</p>
          <p className="text-xl text-white">I'm a Front-End Developer</p>
          <p className="text-sm text-gray-400">
            창의적 문제 해결 능력과 커뮤니케이션 스킬을 바탕으로 성장하는
            프론트엔드 개발자입니다. <br /> 새로운 도전에 열정적이며, 협업을
            통해 최고의 결과를 추구합니다.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            className="flex w-fit cursor-pointer items-center gap-2 py-2"
          >
            <div className="h-0.5 w-10 flex-grow bg-gray-400 duration-300 group-hover:w-20 group-hover:bg-white" />
            <p className="w-full text-sm tracking-widest text-gray-400 duration-300 group-hover:text-white">
              ABOUT
            </p>
          </Link>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            className="group flex w-fit cursor-pointer items-center gap-2 py-2"
          >
            <div className="h-0.5 w-10 flex-grow bg-gray-400 duration-300 group-hover:w-20 group-hover:bg-white" />
            <p className="w-full text-sm tracking-widest text-gray-400 duration-300 group-hover:text-white">
              PROJECT
            </p>
          </Link>
          <Link
            to="experience"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            className="group flex w-fit cursor-pointer items-center gap-2 py-2"
          >
            <div className="h-0.5 w-10 flex-grow bg-gray-400 duration-300 group-hover:w-20 group-hover:bg-white" />
            <p className="w-full text-sm tracking-widest text-gray-400 duration-300 group-hover:text-white">
              EXPERIENCE
            </p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            className="group flex w-fit cursor-pointer items-center gap-2 py-2"
          >
            <p className="w-full rounded-full bg-gray-500 px-2 py-1 text-sm tracking-widest text-gray-300 duration-300 group-hover:text-white">
              CONTACT ME
            </p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
