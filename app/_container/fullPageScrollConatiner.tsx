"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TfullPageScroll } from "../types";
import Dots from "../_components/dots";

const FullPageScrollContainer: React.FC<TfullPageScroll> = ({
  children,
  onLoad = () => {},
  onPageChange = () => {},
  currentPage,
  setCurrentPage,
}) => {
  const outerDivRef = useRef<HTMLDivElement>(null);

  const canScrollRef = useRef<boolean>(true);
  const [childCnt, setChildCnt] = useState<number>(0);

  const oldTouchYRef = useRef<number>(0);

  const scrollTo = useCallback(
    (page: number) => {
      const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;

      if (outerDivRef.current && pageHeight) {
        outerDivRef.current.scrollTo({
          top: pageHeight * page,
          left: 0,
          behavior: "smooth",
        });

        canScrollRef.current = false;
        setTimeout(() => (canScrollRef.current = true), 500);

        setCurrentPage(page);
        onPageChange(page);
      }
    },
    [onPageChange, setCurrentPage]
  );

  const scrollDown = useCallback(() => {
    if (currentPage < childCnt - 1) {
      scrollTo(currentPage + 1);
    }
  }, [currentPage, scrollTo, childCnt]);

  const scrollUp = useCallback(() => {
    if (currentPage > 0) {
      scrollTo(currentPage - 1);
    }
  }, [currentPage, scrollTo]);

  const wheelHandler = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      if (canScrollRef && !canScrollRef.current) return;
      if (e.deltaY > 0) {
        scrollDown();
      } else if (e.deltaY < 0) {
        scrollUp();
      }
    },
    [scrollDown, scrollUp]
  );

  const scrollHandler = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  const touchHandler = useCallback(
    (e: TouchEvent) => {
      if (e.type === "touchstart") {
        oldTouchYRef.current = e.touches[0].clientY;
      } else if (e.type === "touchend") {
        const currentTouchY = e.changedTouches[0].clientY;

        if (oldTouchYRef.current - currentTouchY > 0) {
          scrollDown();
        } else {
          scrollUp();
        }
      }
    },
    [scrollDown, scrollUp]
  );

  useEffect(() => {
    const outer = outerDivRef.current;

    if (!outer) return;

    setChildCnt(outer.childElementCount);
    onLoad(outer.childElementCount);

    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    outer.addEventListener("touchstart", touchHandler);
    outer.addEventListener("touchend", touchHandler);

    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", touchHandler);
      outer.removeEventListener("touchend", touchHandler);
    };
  }, [wheelHandler, scrollHandler, touchHandler, onLoad]);

  const movePageTo = useCallback(
    (index: number) => {
      if (index > currentPage) {
        for (let i = 0; i < index - currentPage; i++) scrollDown();
      } else if (index < currentPage) {
        for (let i = 0; i < currentPage - index; i++) scrollUp();
      }
    },
    [currentPage, scrollDown, scrollUp]
  );

  return (
    <>
      <div className="fullps-container" ref={outerDivRef}>
        {children}
      </div>

      <Dots
        limit={outerDivRef.current?.childElementCount || 0}
        currentIdx={currentPage}
        onDotClick={movePageTo}
      />
    </>
  );
};

export default FullPageScrollContainer;
