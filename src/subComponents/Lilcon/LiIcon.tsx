"use client";
import { motion, useScroll } from "framer-motion";

import styles from "./style.module.css";

function LiIcon({ reference }: any) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className={styles.figure}>
      <svg
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className={styles.svg}
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className={styles.circle1}
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className={styles.circle2}
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className={styles.circle3}
        />
      </svg>
    </figure>
  );
}
export default LiIcon;
