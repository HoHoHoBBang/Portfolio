import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex h-[500px] w-full items-center justify-center"
    >
      <div className="flex h-full w-[75%] flex-col items-center justify-center max-md:w-full">
        <p className="w-full p-5 text-xl font-bold text-white">ABOUT</p>
        <p className="p-5 text-sm tracking-widest text-gray-400">
          비전공자이지만 <span className="text-white">다양한 직무 경험</span>을
          통해 습득한 <span className="text-white">문제 해결 능력</span>과
          <span className="text-white">커뮤니케이션 스킬</span>을 바탕으로,
          개발자로서 새로운 <span className="text-white">도전</span>을 준비하고
          있습니다. <br />
          <br /> 독학과 프로젝트 실습을 통해 프로그래밍 역량을 키웠으며, 최신
          기술과 트렌드를 빠르게 습득하고 적용하는 데{" "}
          <span className="text-white">열정</span>을 가지고 있습니다.
          <br />
          <br />
          비록 실무 경험은 없지만, 이론과 실습을 통해 기본적인 개발 역량을
          갖추었으며, 실무 환경에서 빠르게 적응하고{" "}
          <span className="text-white">성장</span>할 자신이 있습니다.
          <br />
          <br /> <span className="text-white">신입 개발자</span>로서 팀의 목표를
          달성하기 위해 협력하며 적극적으로 기여하겠습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
