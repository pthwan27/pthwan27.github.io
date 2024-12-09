import IntroDesc from "./intro/introDesc";
import Profile from "./intro/profile";

const Intro = () => {
  const greetings = ["안녕하세요", "개발자 박태환입니다."];

  return (
    <div className="block">
      <div className="flex flex-wrap">
        <Profile />
        <div className="intro__name flex flex-col pl-5 pb-5">
          <p className="first-text text-2xl">{greetings[0]}</p>
          <IntroDesc />
          <span className="sec-text text-2xl">{greetings[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
