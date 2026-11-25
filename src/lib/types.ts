export type IconName =
  | "arrow-up-right"
  | "bell"
  | "bolt"
  | "check"
  | "chevron-down"
  | "clock"
  | "compass"
  | "download"
  | "external"
  | "layers"
  | "lock"
  | "menu"
  | "pulse"
  | "shield"
  | "spark"
  | "target"
  | "trend"
  | "x";

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
};
