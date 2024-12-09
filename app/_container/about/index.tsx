"use client";

import AboutMe from "@/app/_components/about/aboutMe";
import Intro from "@/app/_components/about/intro";

const AboutContainer = () => {
  return (
    <div className="about-container section flex relative items-start justify-center">
      <div className="about-container__intro flex-wrap">
        <Intro />
      </div>
      <div className="about-container__about-me relative shadow-box rounded-xl px-3 py-6">
        <AboutMe />
      </div>
    </div>
  );
};

export default AboutContainer;
