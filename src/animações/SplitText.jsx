import "./SplitText.css";
import { motion } from "motion/react";

export default function SplitText({
  text,
  className = "",
  tag = "h1",
  delay = 0.03,
  duration = 0.6,
   delayStart = 0,
}) {
  const Tag = tag;
  const words = text.split(" ");

  let index = 0;

  return (
    <Tag className={`split-title ${className}`}>
      {words.map((word, wordIndex) => (
        <span className="split-word" key={wordIndex}>
          {word.split("").map((letter, letterIndex) => {
            const currentIndex = index++;

            return (
              <motion.span
                key={letterIndex}
                className="split-letter"
                initial={{
                  opacity: 0,
                  y: 45,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{
                  duration,
                  delay: delayStart + currentIndex * delay,
                  ease: "easeOut",
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