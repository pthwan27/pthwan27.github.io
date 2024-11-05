import Image from "next/image";

const Profile = () => {
  const ProfileImage = "/images/profile2.jpg";

  return (
    <div className="about-container__profile">
      <Image
        src={ProfileImage}
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        alt="profile"
      />
    </div>
  );
};

export default Profile;
