"use client";
import Link from "next/link";

import { motion } from "framer-motion";

import styles from "./style.module.css";

function Logo() {
  return (
    <motion.div
    className={styles.container}
    >
      <Link
        href={"/"}
        className={styles.logo}
      >
        SM
      </Link>
    </motion.div>
  );
}
export default Logo;
