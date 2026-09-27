"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const REVEAL_OFFSET = 12;
const REVEAL_DURATION = 0.35;
const REVEAL_EASE = [0.33, 1, 0.68, 1] as const;

/**
 * Opacidade nunca é usada como portão de visibilidade: o valor de repouso (sem
 * JS, no SSR, na primeira pintura) é sempre opacity 1. A única coisa que se
 * anima é a posição (`x`/`y`), então o pior caso — JS desabilitado, crawler,
 * `useInView`/`useReducedMotion` ainda não resolvidos no hidratamento — é
 * conteúdo já visível no lugar final, nunca invisível.
 */
const restingTransform = { x: 0, y: 0 };

const staggerItemVariants: Variants = {
  settled: { x: 0, y: 0, transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE } },
  offset: { x: 0, y: REVEAL_OFFSET },
};

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const offsets = {
    up: { y: REVEAL_OFFSET, x: 0 },
    left: { y: 0, x: -REVEAL_OFFSET },
    right: { y: 0, x: REVEAL_OFFSET },
    none: { y: 0, x: 0 },
  };

  if (shouldReduceMotion || direction === "none") {
    return <div className={className}>{children}</div>;
  }

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ x, y }}
      animate={isInView ? restingTransform : { x, y }}
      transition={{ duration: REVEAL_DURATION, ease: REVEAL_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "settled" : "offset"}
      variants={{
        offset: {},
        settled: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export function FloatAnimation({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion, staggerItemVariants };
