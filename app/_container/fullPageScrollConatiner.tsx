"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TfullPageScroll } from "@/app/_types/types";
import Dots from "@/app/_components/dots";
import { throttle } from "lodash";

const FullPageScrollContainer: React.FC<TfullPageScroll> = ({
  children,
  onLoad = () => {},
  onPageChange = () => {},
  currentPage,
  setCurrentPage,
  prioritizeChildScroll = false,
}) => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const [menus, setMenus] = useState<string[]>([]);

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

  const memoizedFindScrollableParent = useMemo(() => {
    const cache = new WeakMap();
    return (element: HTMLElement | null) => {
      if (!element) return null;
      if (cache.has(element)) return cache.get(element);
      const result = findScrollableParent(element);
      cache.set(element, result);
      return result;
    };
  }, []);

  const findScrollableParent = (element: HTMLElement | null) => {
    while (element) {
      if (
        !element.classList.contains("non-scrollable") &&
        element.scrollHeight > element.clientHeight
      ) {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  };

  const wheelHandler = useCallback(
    (e: WheelEvent) => {
      if (canScrollRef && !canScrollRef.current) return;

      const target = e.target as HTMLElement;
      const scrollableParent = memoizedFindScrollableParent(target);

      if (prioritizeChildScroll && scrollableParent && scrollableParent !== outerDivRef.current) {
        return;
      }

      if (e.deltaY > 0) {
        scrollDown();
      } else if (e.deltaY < 0) {
        scrollUp();
      }
    },
    [scrollDown, scrollUp, prioritizeChildScroll, memoizedFindScrollableParent]
  );

  const throttleWheelHandler = useMemo(() => {
    return throttle(wheelHandler, 500);
  }, [wheelHandler]);

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
    scrollTo(currentPage);
  }, [currentPage, scrollTo]);

  useEffect(() => {
    const outer = outerDivRef.current;

    if (!outer) return;

    setChildCnt(outer.childElementCount);
    onLoad(outer.childElementCount);

    outer.addEventListener("wheel", throttleWheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    outer.addEventListener("touchmove", scrollHandler);
    outer.addEventListener("touchstart", touchHandler);
    outer.addEventListener("touchend", touchHandler);

    return () => {
      outer.removeEventListener("wheel", throttleWheelHandler);
      throttleWheelHandler.cancel(); // throttle 함수 취소

      outer.removeEventListener("scroll", scrollHandler);
      outer.removeEventListener("touchmove", scrollHandler);
      outer.removeEventListener("touchstart", touchHandler);
      outer.removeEventListener("touchend", touchHandler);
    };
  }, [throttleWheelHandler, scrollHandler, touchHandler, onLoad]);

  useEffect(() => {
    const menus: string[] = [];

    if (!outerDivRef.current) return;

    Array.from(outerDivRef.current.children).forEach((e) => {
      menus.push(e.classList[0].split("-")[0]);
    });

    setMenus(menus);
  }, []);
  const movePageTo = (index: number) => {
    setCurrentPage(index);
    onPageChange(index);
  };

  return (
    <>
      <div className="fullps-container" ref={outerDivRef}>
        {children}
      </div>

      <Dots menus={menus} currentIdx={currentPage} onDotClick={movePageTo} />
    </>
  );
};

export default FullPageScrollContainer;
