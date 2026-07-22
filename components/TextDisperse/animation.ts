import type { Variants } from "framer-motion";

type Transform = {
  x: number;
  y: number;
  rotationZ: number;
};

export const transforms: Transform[] = [
  { x: -0.4, y: -0.3, rotationZ: -12 },
  { x: -0.1, y: -0.2, rotationZ: -3 },
  { x: -0.03, y: 0.05, rotationZ: 5 },
  { x: -0.03, y: -0.05, rotationZ: -4 },
  { x: -0.05, y: 0.25, rotationZ: 2 },
  { x: 0, y: -0.05, rotationZ: 4 },
  { x: 0, y: 0.08, rotationZ: -5 },
  { x: 0, y: 0.08, rotationZ: -7 },
  { x: 0, y: -0.3, rotationZ: 4 },
  { x: 0.05, y: 0.2, rotationZ: 5 },
  { x: 0, y: -0.08, rotationZ: -4 },
  { x: 0.1, y: 0.08, rotationZ: 5 },
  { x: 0.4, y: 0.3, rotationZ: 8 },
];

const easing = [0.33, 1, 0.68, 1] as const;

export const disperse: Variants = {
  open: (i: number) => ({
    x: `${transforms[i].x}em`,
    y: `${transforms[i].y}em`,
    rotateZ: transforms[i].rotationZ,
    transition: { duration: 0.75, ease: easing },
    zIndex: 1,
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0,
    transition: { duration: 0.75, ease: easing },
    zIndex: 0,
  },
};
