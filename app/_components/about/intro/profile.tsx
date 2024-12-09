import GithubMark from "@/app/assets/icons/github-mark";
import Image from "next/image";
const ProfileImage = "/images/profile.jpg";

const Profile = () => {
  return (
    <div className="intro__profile flex flex-col pl-5 pb-5">
      <div className="cover flex rounded-full">
        <Image
          src={ProfileImage}
          width={120}
          height={120}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          alt="profile"
        />
      </div>
      <div className="tag flex flex-col justify-center">
        <a className="center py-2" href="https://github.com/pthwan27">
          pthwan27
          <GithubMark />
        </a>
        <div className="pExtraThin rounded-3xl py-1">Frontend</div>
      </div>
    </div>
  );
};

export default Profile;
