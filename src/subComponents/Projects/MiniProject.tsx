"use client";
import Link from "next/link";

import { motion } from "framer-motion";

import styles from "./style.module.css";
import { GithubIcon } from "../Icons/Icons";

type Props = {
  title: string;
  link: string;
};

function MiniProject({ title,  link }: Props) {

  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className={styles.miniProjectContainer}
    >
      <Link
        href={link}
        className={styles.linkMiniProject}
      >
        <h2 className={styles.titleMiniProject}>{title}</h2>
      </Link>
      <Link className={styles.linkGithub}
      href={link}>
      <GithubIcon className={styles.iconGithub} />
        </Link>
    </motion.div>
  );
}
export default MiniProject;
