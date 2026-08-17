import { motion } from "motion/react";
import "./SpotlightCard.css";

export default function SpotlightCard({
  children,
  className = "",
  as = "div",
  ...props
}) {
  const MotionTag = motion[as] || motion.div;

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  return (
    <MotionTag
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4, scale: 1.004 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
