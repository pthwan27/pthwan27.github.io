"use client";

import { useState } from "react";
import FullPageScrollContainer from "@/app/_container/fullPageScrollConatiner";
import Gnb from "@/app/_components/gnb";
import AboutContainer from "@/app/_container/about";
import ProjectContainer from "@/app/_container/project";
import SkillContainer from "@/app/_container/skill";
import ContactContainer from "@/app/_container/contact";
import AnimatedLogoSvg from "./_components/animatedLogoSvg";

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleLinkClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="pBlack">
      <Gnb currentPage={currentPage} onLinkClick={handleLinkClick} />
      <FullPageScrollContainer
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        prioritizeChildScroll={true}
      >
        <AboutContainer />
        <ProjectContainer />
        <SkillContainer />
        <ContactContainer />
      </FullPageScrollContainer>
      <div className="svg-container">
        <AnimatedLogoSvg currentPage={currentPage} />
      </div>
    </div>
  );
};

export default MainPage;
