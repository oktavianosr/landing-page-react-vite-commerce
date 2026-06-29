import type { Variants } from 'framer-motion';

/** Reusable framer-motion variants (typed port of the original utility). */

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
});

export const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
});

export const fadeRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
});

/** Stagger container — animates children in sequence. */
export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Shared viewport config for scroll-triggered sections. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
