import React from "react";

const Project = () => {
  return (
    <div id="project" className="flex h-fit w-full items-center justify-center">
      <div className="flex h-full w-[75%] flex-col items-center justify-center">
        <p className="w-full p-5 text-xl font-bold text-white">PROJECT</p>
        <ul className="w-full">
          <li className="flex min-h-32 cursor-pointer gap-2 rounded-lg p-5 duration-200 hover:bg-gray-800 hover:shadow-lg">
            <div className="flex-1">
              <img
                src=""
                alt=""
                className="h-24 w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Portfolio web
                </p>
                <p className="text-sm tracking-widest text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, rerum cupiditate consequuntur laudantium ratione
                  non tempora corrupti quod aliquid magnam accusantium, optio
                  tempore in voluptatum laborum vero expedita nisi voluptatibus.
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
            <div className="flex-1">
              <img
                src=""
                alt=""
                className="h-24 w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-[2.5] flex-col gap-3">
              <div>
                <p className="font-bold tracking-widest text-white">
                  Social media web
                </p>
                <p className="text-sm tracking-widest text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, rerum cupiditate consequuntur laudantium ratione
                  non tempora corrupti quod aliquid magnam accusantium, optio
                  tempore in voluptatum laborum vero expedita nisi voluptatibus.
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
