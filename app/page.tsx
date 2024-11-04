"use client";

import { useState } from "react";
import FullPageScrollContainer from "@/app/_container/fullPageScrollConatiner";
import HomeContainer from "@/app/_container/home/index";
import AboutContainer from "@/app/_container/about";
import Gnb from "@/app/_components/gnb";
import ProjectContainer from "@/app/_container/project";
import SkillContainer from "@/app/_container/skill";
import ContactContainer from "@/app/_container/contact";

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleLinkClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div>
      <Gnb currentPage={currentPage} onLinkClick={handleLinkClick} />
      <FullPageScrollContainer
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        <HomeContainer />
        <AboutContainer />
        <ProjectContainer />
        <SkillContainer />
        <ContactContainer />
      </FullPageScrollContainer>
    </div>
  );
};

export default MainPage;
