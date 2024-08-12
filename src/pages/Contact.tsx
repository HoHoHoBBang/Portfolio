import {
  faComment,
  faEnvelope,
  faMobileScreen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex h-[500px] w-full items-center justify-center"
    >
      <div className="max flex h-full w-[75%] flex-col justify-center max-md:w-full">
        <p className="w-full p-5 text-xl font-bold text-white">CONTACT</p>
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faUser}
              className="flex w-10 text-2xl text-gray-400"
            />
            <div className="flex items-center gap-5">
              <p className="w-14 font-bold tracking-widest text-gray-400">
                Notion
              </p>
              <a
                href="https://kind-yellowhorn-f11.notion.site/3fd5e253e4ef46c692a940a7f69d9872"
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer tracking-widest text-white"
              >
                Hokeun, Lee's notion
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-10 text-2xl text-gray-400"
            />
            <div className="flex items-center gap-5">
              <p className="w-14 font-bold tracking-widest text-gray-400">
                Email
              </p>
              <a
                href="mailto:gogogoidl@naver.com"
                className="cursor-pointer tracking-widest text-white"
              >
                gogogoidl@naver.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faMobileScreen}
              className="w-10 text-2xl text-gray-400"
            />
            <div className="flex items-center gap-5">
              <p className="w-14 font-bold tracking-widest text-gray-400">
                Phone
              </p>
              <p className="tracking-widest text-white">(+82) 10-4739-6066</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faComment}
              className="w-10 text-2xl text-gray-400"
            />
            <div className="flex items-center gap-5">
              <p className="w-14 font-bold tracking-widest text-gray-400">
                Kakao
              </p>
              <a
                href="https://open.kakao.com/o/sedVWRHg"
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer tracking-widest text-white"
              >
                Open chats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
