"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import styles from "./style.module.css";

import DetailsEdu from "@/subComponents/Details/DetailsEdu";

interface EducationItem {
  title: string;
  place: string;
  time: string;
  info: string;
}

interface EducationData {
  title: string;
  details: EducationItem[];
}

function Education({ title, details }: EducationData) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={styles.containerExperience}
        ref={ref}
      >
        <motion.div
          className={styles.lineMotion}
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <ul className={styles.listExperience}>
          {/* Education */}
          {
            details.map((item, index) => (
              <DetailsEdu
                key={index}
                title={item.title}
                place={item.place}
                time={item.time}
                info={item.info}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}
export default Education;
