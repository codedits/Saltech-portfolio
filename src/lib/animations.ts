import { Transition } from "framer-motion";

export const SPRING: Transition = { type: "spring", stiffness: 100, damping: 15 } as Transition;
export const SPRING_SOFT: Transition = { type: "spring", stiffness: 90, damping: 15 } as Transition;
export const SPRING_FAST: Transition = { type: "spring", stiffness: 120, damping: 12 } as Transition;
export const SPRING_GENTLE: Transition = { type: "spring", stiffness: 50, damping: 20 } as Transition;
export const EASE_OUT: Transition = { duration: 0.6, ease: "easeOut" } as Transition;
