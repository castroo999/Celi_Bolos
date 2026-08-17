import "./SplitText.css";
import { motion } from "motion/react";

export default function SplitText({
  text,
  className = "",
  tag = "h1",
  delay = 0.012,
  duration = 0.48,
  delayStart = 0,
}) {
  const Tag = tag;
  const words = text.split(" ");

  let index = 0;

  return (
    <Tag className={`split-title ${className}`}>
      {words.map((word, wordIndex) => (
        <span className="split-word" key={`${word}-${wordIndex}`}>
          {word.split("").map((letter, letterIndex) => {
            const currentIndex = index++;

            return (
              <motion.span
                key={`${letter}-${letterIndex}`}
                className="split-letter"
                initial={{
                  opacity: 0,
                  y: 14,
                  filter: "blur(3px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration,
                  delay: delayStart + currentIndex * delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            );
          })}

          <span className="split-space">&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
}
