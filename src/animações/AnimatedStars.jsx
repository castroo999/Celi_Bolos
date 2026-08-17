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
            scale: 0.86,
            y: 4,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.07,
            duration: 0.34,
            ease: [0.22, 1, 0.36, 1],
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
