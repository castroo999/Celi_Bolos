import { motion } from "motion/react";

const directions = {
  up: { y: 18, x: 0 },
  down: { y: -14, x: 0 },
  left: { x: 18, y: 0 },
  right: { x: -18, y: 0 },
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
      initial={{ opacity: 0, ...offset, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22, margin: "-6% 0px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
