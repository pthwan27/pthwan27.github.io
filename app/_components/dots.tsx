import { TDot, TDots } from "../types";

const Dot: React.FC<TDot> = ({ index, currentIdx, onClick }) => {
  const selected = index === currentIdx;
  return (
    <div
      className={`dot-item-container ${selected ? "selected" : ""}`}
      onClick={() => onClick(index)}
    >
      <div className="dot-itme-inner"></div>
    </div>
  );
};

const Dots: React.FC<TDots> = ({ limit, currentIdx, onDotClick }) => {
  return (
    <div className="dots-container">
      <div className="dots-container-bg">
        <div className="dots-container-items">
          {Array(limit)
            .fill("")
            .map((_, idx) => (
              <Dot key={idx} index={idx} currentIdx={currentIdx} onClick={onDotClick}></Dot>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Dots;
