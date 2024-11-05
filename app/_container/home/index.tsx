"use client";
import IntroDesc from "@/app/_components/home/introDesc";
import IntroName from "@/app/_components/home/introName";
import Overlay from "@/app/_components/home/overlay";
import useTypingText from "@/app/_hooks/useTypingText";

const HomeContainer = () => {
  const name = "박태환";
  const descText = useTypingText(
    ["사용자의 입장에서 생각하는", "생각을 표현하는", "프론트엔드 개발자입니다."],
    1500,
    700
  );

  return (
    <div className="home-container section">
      <IntroName name={name} />
      <IntroDesc descText={descText} />
      <Overlay />
    </div>
  );
};

export default HomeContainer;
