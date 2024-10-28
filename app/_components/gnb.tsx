"use client";

import Link from "next/link";
import useWindowSizeCustom from "../_hooks/useWindowSizeCustom";
import { useEffect, useState } from "react";

const Gnb = ({ currentPage }: { currentPage: number }) => {
  const menuItems = ["about", "project", "skill", "contact"];

  const [isDropdown, setIsDropdown] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisibilityAnimation, setIsVisibilityAnimation] = useState(false);

  const toggleMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const { width, height } = useWindowSizeCustom();

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
        <Link href="/" className="gnb-container__brand">
          pthwan27
        </Link>
        <ul
          className={`gnb-container__navbar
            ${isDropdown ? "visible" : "hidden"} `}
        >
          {menuItems.map((menu, idx) => (
            <li key={menu + idx} className={currentPage === idx + 1 ? "active" : ""}>
              <Link href={menu}>{menu}</Link>
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
              <li key={menu + idx} className={currentPage === idx ? "active" : ""}>
                <Link href={menu}>{menu}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Gnb;
