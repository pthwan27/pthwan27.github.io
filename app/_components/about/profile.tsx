import GithubMark from "@/app/assets/icons/github-mark";
import Image from "next/image";
// import GithubIcon from "@/app/assets/icons/github-mark.svg";
const ProfileImage = "/images/profile.png";

const Profile = () => {
  return (
    <div className="intro__profile pl-20 pb-20">
      <div className="cover">
        <Image
          src={ProfileImage}
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          alt="profile"
        />
      </div>
      <div className="tag">
        <a href="https://github.com/pthwan27">
          pthwan27
          <GithubMark />
          {/* <GithubIcon
            width="20"
            height="20"
            viewBox="-10 0 120 120"
            fill="black"
            preserveAspectRatio="xMidYMin slice"
          /> */}
        </a>
        <div>Frontend</div>
      </div>
    </div>
  );
};

export default Profile;
