"use client";
import { useRef } from "react";
import LiIcon from "@/subComponents/Lilcon/LiIcon";

type DetailsProps = {
  title: string;
  time: string;
  place: string;
  info: string;
};

import styles from "./style.module.css";

import {motion} from "framer-motion";

const DetailsExp = ({ title, time, place, info }: DetailsProps) => {
  const ref = useRef(null);

  return (
    <li className={styles.tag} ref={ref}>
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y: 50}}
      whileInView={{y: 0}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className={styles.title_h3}>
          {title}&nbsp;
        </h3>
        <span className={styles.timeSpan}>
          {time} | {place}
        </span>
        <p className={styles.paragraph}>{info}</p>
      </motion.div>
    </li>
  );
};

export default DetailsExp;