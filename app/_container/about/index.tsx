import AboutMe from "@/app/_components/about/aboutMe";
import Profile from "@/app/_components/about/profile";

const AboutContainer = () => {
  return (
    <div className="about-container section">
      <div className="about-container__frame">
        <Profile />
        <AboutMe />
      </div>
    </div>
  );
};

export default AboutContainer;
