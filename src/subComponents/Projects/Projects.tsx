"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { GithubIcon } from "../Icons/Icons";

import styles from "./style.module.css";

const FramerImage = motion(Image);

type Props = {
  title: string;
  img: any;
  link: string;
  github: string;
  type: string;
  visit: string;
  skills: string;
  summary?: string;
};

const Project = ({
  title,
  img,
  link,
  github,
  type,
  visit,
  skills,
  summary,
}: Props) => {
  return (
    <div className={styles.col_span_6}>
      <article className={`${styles.article} ${styles.flex}`}>
        <div className={styles.divAbsolute} />
        <Link
          href={link}
          target={"_blank"}
          className={styles.linkImageProject}
        >
          <FramerImage
            src={img}
            alt={title}
            className={styles.image}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className={styles.containerProject}>
          <span className={styles.type}>{type}</span>
          <Link
            href={link}
            target={"_blank"}
            className={styles.linkTitle}
          >
            <h2 className={styles.title}>{title}</h2>
          </Link>
          <p className={styles.paragraph}>{summary}</p>
          <span className={styles.skills}>{skills}</span>
          <div className={styles.containerLinksProject}>
            <Link
              className={styles.linkVisit}
              href={link}
              target={"_blank"}
            >
              {visit}
            </Link>
            <Link
              href={github}
              target={"_blank"}
              className={styles.linkGithub}
            >
              <GithubIcon className={styles.iconGithub} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;
