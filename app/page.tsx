"use client";

import FullPageScrollContainer from "@/app/_container/fullPageScrollConatiner";

import HomeContainer from "@/app/_container/home/index";
import AboutContainer from "@/app/_container/about";
import Gnb from "./_components/gnb";
import { useState } from "react";
import ProjectContainer from "./_container/project";
import SkillContainer from "./_container/skill";
import ContactContainer from "./_container/contact";

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleLinkClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <>
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
    </>
  );
};

export default MainPage;
