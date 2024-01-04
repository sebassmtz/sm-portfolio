"use client";
import { motion } from "framer-motion";

import styles from "./style.module.css";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singelWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type Props = {
  text: string;
  className?: string;
};

function AnimatedText({ text, className = "" }: Props) {
  return (
    <div className={styles.container}>
      <motion.h1
        className={`${className} ${styles.h1}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index+'-'+word}
              className={styles.span}
              variants={singelWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
}
export default AnimatedText;
