"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import styles from "./style.module.css";
import { GithubIcon } from "../Icons/Icons";

const FramerImage = motion(Image);

type Props = {
  title: string;
  img: any;
  link: string;
  github: string;
  type: string;
  summary: string;
  visit: string;
};

const FeaturedProject = ({
  title,
  img,
  link,
  github,
  type,
  summary,
  visit,
}: Props) => {
  return (
    <div className={styles.col_span}>
      <article className={styles.article}>
        <div className={styles.divAbsolute} />
        <Link
          href={link}
          className={styles.linkImage}
          target={"_blank"}
        >
          <FramerImage
            className={styles.image}
            width={500}
            height={300}
            src={img}
            alt={title}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div
        className={styles.containerText}
        >
          <span
          className={styles.type}
          >{type}</span>
          <Link
            target={"_blank"}
            className={styles.linkTitle}
            href={link}
          >
            <h2 className={styles.title}>{title}</h2>
          </Link>
          <p className={styles.paragraph}>{summary}</p>
          <div className={styles.containerLinks}>
            <Link
              className={styles.linkGithub}
              href={github}
              target={"_blank"}
            >
              <GithubIcon
              className={styles.iconGithub}
              />
            </Link>
            <Link
              href={link}
              target={"_blank"}
              className={styles.linkVisit}
            >
              {visit}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturedProject;
