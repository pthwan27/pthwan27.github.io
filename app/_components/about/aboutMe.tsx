import Divider from "./aboutMe/divider";
import Tags from "./aboutMe/tags";
import Experience from "./aboutMe/timeLine";
import Stacks from "./aboutMe/stacks";

import ReactIcon from "@/app/assets/icons/react-icon";
import JSIcon from "@/app/assets/icons/js-icon";
import TSIcon from "@/app/assets/icons/ts-icon";
import GitIcon from "@/app/assets/icons/github-icon";

const AboutMe = () => {
  const skills = ["React", "Javascript", "Typescript"];
  const feStack = [
    {
      stack: "React",
      icon: ReactIcon,
    },
    { stack: "JavaScript", icon: JSIcon },
    { stack: "Typescript", icon: TSIcon },
  ];
  const etcStack = [
    {
      stack: "Github",
      icon: GitIcon,
    },
  ];
  const timeLineData = [
    {
      start: "2015.03.02",
      end: "2022.02.15",
      title: "한라대학교",
      content: "Description for event",
    },
    {
      start: "2021.08.02",
      end: "2022.01.27",
      title: "GST 인턴",
      content: "Description for event",
    },
    {
      start: "2022.07.13",
      end: "2023.06.16",
      title: "SSAFY 8기",
      content: "Description for event",
    },
  ];

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
      새로운 기술, 언어들에 도전하며{" "}
      <span className="pSemiBold" style={{ color: "Blue" }}>
        FrontEnd
      </span>{" "}
      개발 역량을 길렀습니다.
      <br />
      앞으로도 계속해서 학습하며 목표하는 개발자로 나아가겠습니다.
    </>
  );

  return (
    <div className="desc flex column pLight">
      <div className="desc_intro flex row wrap">
        <div className="introduce pl-12 py-4">
          <Divider title="Introduce" />
          <div className="py-4 px-16">
            <span className="text-24">{introduce}</span>
          </div>
        </div>

        <div className="tag pl-12 py-4">
          <Divider title="Tags" />
          <div className="text-20 py-4 px-16">
            <Tags skills={skills} />
          </div>
        </div>
      </div>

      <div className="desc_info flex row wrap">
        <div className="experience pl-12 py-4">
          <Divider title="Experience" />
          <Experience data={timeLineData} />
        </div>
        <div className="certification pl-12 py-4">
          <Divider title="Certification" />
        </div>
      </div>

      <div className="desc_fe-stack flex row">
        <div className="fe-stack pl-12 py-4">
          <Divider title="Frontend Stack" />
          <Stacks data={feStack}></Stacks>
        </div>
      </div>

      <div className="desc_etc-stack flex row">
        <div className="etc-stack pl-12 py-4">
          <Divider title="Etc Stack" />
          <Stacks data={etcStack}></Stacks>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
