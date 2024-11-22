import { PropsWithChildren } from "react";

export type TfullPageScroll = {
  onLoad?: (limit: number) => void;
  onPageChange?: (page: number) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  prioritizeChildScroll: boolean;
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

export type Stack = {
  stack: string;
  icon: React.FC;
};

export type TimeLine = {
  start: string;
  end: string;
  title: string;
  content: string;
};
export type Project = {
  id: number;
  title: string;
  component: string;
};
