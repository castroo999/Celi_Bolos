import { motion } from "motion/react";

const directions = {
  up: { y: 34, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;
  const offset = directions[direction] || directions.up;

  return (
    <MotionTag
      className={className}
      {...props}
      initial={{ opacity: 0, ...offset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
