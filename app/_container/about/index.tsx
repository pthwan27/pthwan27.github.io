"use client";

import AboutMe from "@/app/_components/about/aboutMe";
import Intro from "@/app/_components/about/intro";
import useTypingText from "@/app/_hooks/useTypingText";

const AboutContainer = () => {
  const greetings = ["안녕하세요", "개발자 박태환입니다."];
  const descText = useTypingText(["FrontEnd", "사용자를 생각하는", "문제를 해결하는"], 1500, 700);

  return (
    <div className="about-container section flex">
      <div className="about-container__intro">
        <Intro greetings={greetings} descText={descText} />
      </div>
      <div className="about-container__about-me shadow-box br-12 px-12 py-24">
        <AboutMe />
      </div>
    </div>
  );
};

export default AboutContainer;
