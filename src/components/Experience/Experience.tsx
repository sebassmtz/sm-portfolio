"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import styles from "./style.module.css";

import DetailsEdu from "@/subComponents/Details/DetailsEdu";

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
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
          <DetailsEdu
            position="Software Engineer"
            company="Google"
            companyLink="https://google.com"
            time="2019 - Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum."
          />
          <DetailsEdu
            position="Software Engineer"
            company="Google"
            companyLink="https://google.com"
            time="2019 - Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum."
          />
          <DetailsEdu
            position="Software Engineer"
            company="Google"
            companyLink="https://google.com"
            time="2019 - Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum."
          />
        </ul>
      </div>
    </div>
  );
}
export default Experience;
