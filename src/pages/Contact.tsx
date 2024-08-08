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
      className="flex h-[300px] w-full items-center justify-center"
    >
      <div className="flex h-full w-[75%] flex-col items-center justify-center">
        <p className="w-full p-5 text-xl font-bold text-white">CONTACT</p>
        <div className="flex flex-col p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faUser}
              className="flex w-10 text-2xl text-gray-400"
            />
            <div className="flex flex-col">
              <p className="font-bold tracking-widest text-gray-400">Notion</p>
              <p className="text-sm tracking-widest text-gray-400">
                Hokeun, Lee's notion
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-10 text-2xl text-gray-400"
            />
            <div className="flex flex-col">
              <p className="font-bold tracking-widest text-gray-400">Email</p>
              <p className="text-sm tracking-widest text-gray-400">
                gogogoidl@naver.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faMobileScreen}
              className="w-10 text-2xl text-gray-400"
            />
            <div className="flex flex-col">
              <p className="font-bold tracking-widest text-gray-400">Phone</p>
              <p className="text-sm tracking-widest text-gray-400">
                (+82) 10-4739-6066
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faComment}
              className="w-10 text-2xl text-gray-400"
            />
            <div className="flex flex-col">
              <p className="font-bold tracking-widest text-gray-400">Kakao</p>
              <p className="text-sm tracking-widest text-gray-400">
                Open chats
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
