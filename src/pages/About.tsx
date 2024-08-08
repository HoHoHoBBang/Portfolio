import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex h-[500px] w-full items-center justify-center"
    >
      <div className="flex h-full w-[75%] flex-col items-center justify-center">
        <p className="w-full p-5 text-xl font-bold text-white">ABOUT</p>
        <p className="p-5 text-sm text-gray-400">
          비전공자지만 다양한 직무 경험을 통해 습득한 문제 해결 능력과
          커뮤니케이션 스킬을 바탕으로 개발자로서 새로운 도전을 준비하고
          있습니다. <br /> 독학과 프로젝트 실습을 통해 프로그래밍 역량을
          키웠습니다. <br /> 새로운 기술을 배우고 적용하는 데 열정적이며,
          팀원들과 협력하여 함께 성장하고자 합니다.
        </p>
      </div>
    </div>
  );
};

export default About;
