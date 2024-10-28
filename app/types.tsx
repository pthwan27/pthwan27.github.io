import { PropsWithChildren } from "react";

export type TfullPageScroll = {
  onLoad?: (limit: number) => void;
  onPageChange?: (page: number) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
} & PropsWithChildren;

export type TDot = {
  index: number;
  currentIdx: number;
  onClick: (idx: number) => void;
};

export type TDots = {
  limit: number;
  currentIdx: number;
  onDotClick: (idx: number) => void;
};
