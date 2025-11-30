/**
 * Animation presets for Framer Motion
 * These presets ensure consistent animations across the entire website
 *
 * Usage: <motion.div {...fadeInUp}>Content</motion.div>
 */

// Fade in from bottom (20px)
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Fade in from bottom (30px) - larger movement
export const fadeInUpLarge = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Simple fade in (no movement)
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

// Fade in with custom duration
export const fadeInCustom = (duration = 0.6) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration }
});

// Staggered children animation
export const staggerChildren = (delay = 0.1) => ({
  transition: { duration: 0.6, delay }
});

// Scale and fade in (for modals, cards)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 }
};

// Slide in from left
export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Slide in from right
export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// For dropdown menus
export const dropdownAnimation = {
  initial: { opacity: 0, y: -10, scaleY: 0.95 },
  animate: { opacity: 1, y: 0, scaleY: 1 },
  exit: { opacity: 0, y: -10, scaleY: 0.95 },
  transition: { duration: 0.2, ease: "easeOut" }
};

// For lightbox/overlay
export const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
