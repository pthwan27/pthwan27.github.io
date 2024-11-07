"use client";

import IntroDesc from "@/app/_components/about/introDesc";
import Profile from "@/app/_components/about/profile";
import useTypingText from "@/app/_hooks/useTypingText";

const AboutContainer = () => {
  const hi = "안녕하세요";
  const name = "개발자 박태환입니다.";
  const descText = useTypingText(["FrontEnd", "생각을 표현하는", "문제를 해결하는"], 1500, 700);

  return (
    <div className="about-container section flex">
      <div className="about-container__intro">
        <div className="block">
          <div className="flex wrap">
            <Profile></Profile>
            <div className="intro__name pl-20 pb-20">
              <p className="first-text">{hi}</p>
              <IntroDesc descText={descText} />
              <span className="sec-text">{name}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container__about-me"></div>
    </div>
  );
};

export default AboutContainer;
