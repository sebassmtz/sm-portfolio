"use client";
import { motion } from "framer-motion";

import styles from "./style.module.css";
function TransitionEffect() {
  return (
    <>
      <motion.div
        className={`${styles.main} ${styles.main1}`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%, 100%"], width: ["0%, 100%"] }}
      />
      <motion.div
        className={`${styles.main} ${styles.main2}`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.main} ${styles.main3}`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}
export default TransitionEffect;
