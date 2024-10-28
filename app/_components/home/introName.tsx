const IntroName = ({ name }: { name: string }) => {
  return (
    <div className="home-container__name">
      <p className="first-text">HEY! I AM</p>
      <p className="sec-text">{name}</p>
    </div>
  );
};

export default IntroName;
