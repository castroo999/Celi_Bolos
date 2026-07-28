import { motion } from "motion/react";
import { Star } from "lucide-react";
import "./AnimatedStars.css";

export default function AnimatedStars({
  quantity = 5,
  size = 18,
  color = "#D4B26A",
}) {
  return (
    <div className="animated-stars">
      {[...Array(quantity)].map((_, index) => (
        <motion.div
          className="animated-star"
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -90,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.12,
            duration: 0.45,
            ease: "easeOut",
          }}
        >
          <Star
            size={size}
            fill={color}
            color={color}
          />
        </motion.div>
      ))}
    </div>
  );
}