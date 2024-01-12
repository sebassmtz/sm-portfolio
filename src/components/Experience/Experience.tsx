"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import styles from "./style.module.css";

import DetailsExp from "@/subComponents/Details/DetailsExp";

interface ExperienceItem {
  position: string;
  company: string;
  time: string;
  work: string;
  companyLink: string;
  address: string;
}

interface ExperienceData {
  title: string;
  details: ExperienceItem[];
}

function Experience({ title, details }: ExperienceData) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.containerExperience}
      ref={ref}
      >
        <motion.div
          className={styles.lineMotion}
          style={{
            scaleY: scrollYProgress,
          }}
        />
        <ul className={styles.listExperience}>
          {/* Experience */}
          {
            details.map((item, index) => (
              <DetailsExp
                key={index}
                position={item.position}
                company={item.company}
                time={item.time}
                work={item.work}
                companyLink={item.companyLink}
                address={item.address}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}
export default Experience;
