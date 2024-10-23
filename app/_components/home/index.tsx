"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [descText, setDescText] = useState<string>("개발자");

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setDescText("개발자 A");
      }, 0);

      setTimeout(() => {
        setDescText("개발자 B");
      }, 4000);

      setTimeout(() => {
        setDescText("개발자 C");
      }, 8000);
    };

    textLoad();
    setInterval(textLoad, 12000);
  }, []);

  return (
    <div className="home-container">
      <div className="home-container__name">
        <p className="first-text">HEY! I AM</p>
        <p className="sec-text">박태환</p>
      </div>
      <div className="home-container__desc">
        <span className="text first-text">I&apos;m a&nbsp;</span>
        <span className="text sec-text">{descText}</span>
      </div>
    </div>
  );
};

export default Home;
