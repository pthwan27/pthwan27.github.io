import GithubMark from "@/app/assets/icons/github-mark";
import Image from "next/image";
const ProfileImage = "/images/profile.jpg";

const Profile = () => {
  return (
    <div className="intro__profile pl-20 pb-20">
      <div className="cover br-full">
        <Image
          src={ProfileImage}
          width={120}
          height={120}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          alt="profile"
        />
      </div>
      <div className="tag">
        <a className="center py-2" href="https://github.com/pthwan27">
          pthwan27
          <GithubMark />
        </a>
        <div className="pExtraThin br-20 py-2">Frontend</div>
      </div>
    </div>
  );
};

export default Profile;
