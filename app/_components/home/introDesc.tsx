const IntroDesc = ({ descText }: { descText: string }) => {
  return (
    <div className="home-container__desc">
      <span className="text first-text">
        I&apos;m a&nbsp;
        <span className="text sec-text">
          {descText}
          <span className="cursor"></span>
        </span>
      </span>
    </div>
  );
};

export default IntroDesc;
