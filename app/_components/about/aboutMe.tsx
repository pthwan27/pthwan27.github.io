import Divider from "./deivider";
import Tags from "./tags";

const AboutMe = () => {
  const skills = ["react", "javascript", "typescript"];

  return (
    <div className="desc flex column">
      <div className="desc_intro flex row wrap">
        <div className="introduce px-12 py-4">
          <Divider title="introduce" />
          <span className="aggroL">
            자기소개 문구자기소개 문구자기소개 문구자기소개 문구자기소개 문구자기소개 문구
          </span>
        </div>

        <div className="tag px-12 py-4">
          <Divider title="tag" />
          <Tags skills={skills} />
        </div>
      </div>
      <div className="desc_fe-stack flex row">
        <div className="fe-stack px-12 py-4">
          <Divider title="Frontend Stack" />
        </div>
      </div>

      <div className="desc_etc-stack flex row">
        <div className="etc-stack px-12 py-4">
          <Divider title="etc Stack" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
