import useTypingText from "@/app/_hooks/useTypingText";

const IntroDesc = () => {
  const descText = useTypingText(
    ["FrontEnd", "사용자를 생각하는", "문제를 해결하는"],
    1500,
    700
  );

  return (
    <div className="intro__desc relative mt-1">
      <span className="text first-text">
        <span className="text sec-text text-3xl mt-1">
          {descText}
          <span className="cursor relative ml-1"></span>
        </span>
      </span>
    </div>
  );
};

export default IntroDesc;
