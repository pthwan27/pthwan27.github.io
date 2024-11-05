import { PropsWithChildren } from "react";

export type TfullPageScroll = {
  onLoad?: (limit: number) => void;
  onPageChange?: (page: number) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
} & PropsWithChildren;

export type TDot = {
  menu: string;
  index: number;
  currentIdx: number;
  onClick: (idx: number) => void;
};

export type TDots = {
  menus: string[];
  currentIdx: number;
  onDotClick: (idx: number) => void;
};
