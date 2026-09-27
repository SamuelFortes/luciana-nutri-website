"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const REVEAL_OFFSET = 12;
const REVEAL_DURATION = 0.35;
const REVEAL_EASE = [0.33, 1, 0.68, 1] as const;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
  },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
  },
};

/**
 * Conteúdo nasce visível por padrão (SEO/crawlers/no-JS): `initial={false}` faz
 * a Framer Motion renderizar já no estado final e só anima a progressão quando
 * a seção entra na viewport. `prefers-reduced-motion` pula a animação inteira.
 */
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

  const { x, y } = offsets[direction];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
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
      initial={false}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
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
    <motion.div initial={false} variants={staggerItemVariants} className={className}>
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

export { motion, fadeUpVariants, staggerContainerVariants, staggerItemVariants };
