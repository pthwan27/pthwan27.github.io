import Divider from "./deivider";
import Tags from "./tags";

const AboutMe = () => {
  const skills = ["react", "javascript", "typescript"];
  const introduce = (
    <>
      프로그래밍이라는 수단을 통해 생각을 표현하고
      <br />
      사용자의 문제를 해결할 수 있는 개발자
      <br />
      제가 추구하는 개발자의 모습입니다.
      <br />
      <br />
      여러 번의 팀 프로젝트를 통해 협업, 커뮤니케이션을 경험하였고,
      <br />
      새로운 기술, 언어들에 도전하며 FrontEnd 개발 역량을 길렀습니다.
      <br />
      앞으로도 계속해서 학습하며 목표하는 개발자로 나아가겠습니다.
    </>
  );

  return (
    <div className="desc flex column">
      <div className="desc_intro flex row wrap">
        <div className="introduce pl-12 py-4">
          <Divider title="introduce" />
          <div className="py-8 px-16">
            <span className="text-24 pExtraThin">{introduce}</span>
          </div>
        </div>

        <div className="tag pl-12 py-4">
          <Divider title="tag" />
          <div className="px-16">
            <Tags skills={skills} />
          </div>
        </div>
      </div>

      <div className="desc_info flex row">
        <div className="info pl-12 py-4">
          <Divider title="info" />
        </div>
      </div>

      <div className="desc_fe-stack flex row">
        <div className="fe-stack pl-12 py-4">
          <Divider title="Frontend Stack" />
        </div>
      </div>

      <div className="desc_etc-stack flex row">
        <div className="etc-stack pl-12 py-4">
          <Divider title="Etc Stack" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
