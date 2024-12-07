import Image from "next/image";
import { TDot, TDots } from "../_types/types";

const Dots: React.FC<TDots> = ({ menus, currentIdx, onDotClick }) => {
  return (
    <div className="dots-container">
      <div className="dots-container-bg">
        <div className="dots-container-items">
          {menus.map((menu, idx) => (
            <Dot
              key={idx}
              menu={menu}
              index={idx}
              currentIdx={currentIdx}
              onClick={onDotClick}
            ></Dot>
          ))}
        </div>
      </div>
    </div>
  );
};
const Dot: React.FC<TDot> = ({ menu, index, currentIdx, onClick }) => {
  const selected = index === currentIdx;
  return (
    <div
      className={`dot-item-container ${selected ? "selected" : ""}`}
      onClick={() => onClick(index)}
    >
      <span className={`dot-item-inner ${selected ? "selected" : ""}`}>
        <div className={selected ? "selected" : ""}></div>
        <Image src={`/icons/${menu}.svg`} width={20} height={20} alt="" />
      </span>
    </div>
  );
};
export default Dots;
