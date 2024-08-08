import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed flex h-full w-[50%] items-center justify-center">
      <div className="flex h-[500px] w-[75%] flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-5xl font-bold text-white">Hokeun Lee</p>
          <p className="text-xl text-white">I'm a Front-End Developer</p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            ad. Mollitia, numquam? Ad tempora, ipsum repudiandae aspernatur
            optio reprehenderit unde veniam corporis magnam dolor nemo maxime
            voluptates sit inventore alias?
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          <Link
            spy={true}
            smooth={true}
            to="about"
            className="group flex w-fit cursor-pointer items-center gap-2"
          >
            <div className="h-0.5 w-5 flex-grow bg-gray-400 duration-300 group-hover:w-10 group-hover:bg-white" />
            <p className="text-sm tracking-widest text-gray-400 duration-300 group-hover:text-white">
              ABOUT
            </p>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            className="group flex w-fit cursor-pointer items-center gap-2"
          >
            <div className="h-0.5 w-5 flex-grow bg-gray-400 duration-300 group-hover:w-10 group-hover:bg-white" />
            <p className="text-sm tracking-widest text-gray-400 duration-300 group-hover:text-white">
              PROJECT
            </p>
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            className="group flex w-fit cursor-pointer items-center gap-2"
          >
            <div className="h-0.5 w-5 flex-grow bg-gray-400 duration-300 group-hover:w-10 group-hover:bg-white" />
            <p className="text-sm tracking-widest text-gray-400 duration-300 group-hover:text-white">
              EXPERIENCE
            </p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="group flex w-fit cursor-pointer items-center gap-2"
          >
            <div className="h-0.5 w-5 flex-grow bg-gray-400 duration-300 group-hover:w-10 group-hover:bg-white" />
            <p className="text-sm tracking-widest text-gray-400 duration-300 group-hover:text-white">
              CONTACT
            </p>
          </Link>
        </ul>

        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
