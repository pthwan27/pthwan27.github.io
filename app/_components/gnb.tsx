"use client";

import Image from "next/image";
import useWindowSizeCustom from "../_hooks/useWindowSizeCustom";
import { useEffect, useState } from "react";
import useMousePositionDebounce from "../_hooks/useMousePositionDebounce";

const Gnb = ({
  currentPage,
  onLinkClick,
}: {
  currentPage: number;
  onLinkClick: (idx: number) => void;
}) => {
  const menuItems = ["about", "project", "skill", "contact"];

  const [isShowGnb, setIsShowGnb] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);

  const HomeImage = "/images/profile.jpg";

  const handleLinkClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    onLinkClick(index);
  };

  const { width } = useWindowSizeCustom();
  const mouseY = useMousePositionDebounce(100);

  useEffect(() => {
    if (width && width < 1024) {
      // setIsDropdown(false);
      // setIsDropdownOpen(false);
    } else {
      setIsDropdown(true);
    }
  }, [width]);

  useEffect(() => {
    if (mouseY !== null && (mouseY <= 50 || currentPage === 0)) {
      setIsShowGnb(true);
    } else {
      setIsShowGnb(false);
    }
  }, [mouseY, currentPage]);

  return (
    <nav className="gnb gnb-light">
      <div className={`gnb-container ${isShowGnb ? "" : "invisible"}`}>
        <a href="" className="gnb-container__brand" onClick={(e) => handleLinkClick(0, e)}>
          <span className="about">
            <Image width={80} height={80} quality={100} src={HomeImage} alt="" />
          </span>
        </a>
        <ul
          className={`gnb-container__navbar
            ${isDropdown ? "visible" : "hidden"} `}
        >
          {menuItems.map((menu, idx) => (
            <li key={menu + idx} className={currentPage === idx + 1 ? "active" : ""}>
              <a href={`#${menu}`} onClick={(e) => handleLinkClick(idx + 1, e)}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Gnb;
