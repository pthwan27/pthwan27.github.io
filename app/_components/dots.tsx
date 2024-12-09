import Image from "next/image";
import { TDot, TDots } from "../_types/types";

const Dots: React.FC<TDots> = ({ menus, currentIdx, onDotClick }) => {
  return (
    <div className="dots-container fixed">
      <div className="dots-container-bg relative center">
        <div className="dots-container-items flex-col center">
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
      className={`dot-item-container center ${selected ? "selected" : ""}`}
      onClick={() => onClick(index)}
    >
      <span
        className={`dot-item-inner relative center cursor-pointer ${
          selected ? "selected" : ""
        }`}
      >
        <div className={`absolute ${selected ? "selected" : ""}`}></div>
        <Image src={`/icons/${menu}.svg`} width={26} height={26} alt="" />
      </span>
    </div>
  );
};
export default Dots;
