const IntroDesc = ({ descText }: { descText: string }) => {
  return (
    <div className="intro__desc">
      <span className="text first-text">
        <span className="text sec-text">
          {descText}
          <span className="cursor"></span>
        </span>
      </span>
    </div>
  );
};

export default IntroDesc;
