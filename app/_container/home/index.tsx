"use client";

import Overlay from "@/app/_components/home/overlay";
import useTypingText from "@/app/hooks/useTypingText";

const Home = () => {
  const descText = useTypingText(["개발자 A", "개발자 B", "생각을 표현하는"], 1500, 700);

  return (
    <div className="home-container">
      <Overlay />
      <div className="home-container__name">
        <p className="first-text">HEY! I AM</p>
        <p className="sec-text">박태환</p>
      </div>
      <div className="home-container__desc">
        <span className="text first-text">
          I&apos;m a&nbsp;
          <span className="text sec-text">
            {descText}
            <span className="cursor"></span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Home;
