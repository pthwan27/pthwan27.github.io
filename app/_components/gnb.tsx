"use client";

import Link from "next/link";
import useWindowSizeCustom from "../_hooks/useWindowSizeCustom";
import { useEffect, useState } from "react";

const Gnb = ({
  currentPage,
  onLinkClick,
}: {
  currentPage: number;
  onLinkClick: (idx: number) => void;
}) => {
  const menuItems = ["about", "project", "skill", "contact"];

  const [isDropdown, setIsDropdown] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setIsVisibilityAnimation] = useState(false);

  const handleLinkClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    onLinkClick(index);
  };

  const toggleMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const { width } = useWindowSizeCustom();

  useEffect(() => {
    if (width && width < 1024) {
      // setIsDropdown(false);
      // setIsDropdownOpen(false);
    } else {
      setIsDropdown(true);
    }
  }, [width]);

  useEffect(() => {
    if (isDropdownOpen) {
      setIsVisibilityAnimation(true);
    } else {
      const timer = setTimeout(() => setIsVisibilityAnimation(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isDropdownOpen]);

  return (
    <nav className="gnb gnb-light">
      <div className="gnb-container">
        <a href="" onClick={(e) => handleLinkClick(0, e)} className="gnb-container__brand">
          pthwan27
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

        <button
          className={`${isDropdown ? "hidden" : "visible"} gnb-container__navbar dropdown_button`}
          onClick={toggleMenu}
        >
          Menu
        </button>

        <div className="gnb-container__dropdown-menu">
          <ul>
            {menuItems.map((menu, idx) => (
              <li key={menu + idx} className={currentPage === idx + 1 ? "active" : ""}>
                <a href={`#${menu}`} onClick={(e) => handleLinkClick(idx + 1, e)}>
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Gnb;
