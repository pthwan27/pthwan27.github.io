import IntroDesc from "./intro/introDesc";
import Profile from "./intro/profile";

const Intro = ({ greetings, descText }: { greetings: string[]; descText: string }) => {
  return (
    <div className="block">
      <div className="flex wrap">
        <Profile />
        <div className="intro__name pl-20 pb-20">
          <p className="first-text">{greetings[0]}</p>
          <IntroDesc descText={descText} />
          <span className="sec-text">{greetings[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
