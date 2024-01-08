import { useRef } from "react";
import LiIcon from "@/subComponents/Lilcon/LiIcon";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

import styles from "./style.module.css";

import {motion} from "framer-motion";

const DetailsExp = ({ position, company, companyLink, time, address, work }: DetailsProps) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className={styles.link}
          >
            @{company}
          </a>
        </h3>
        <span className={styles.timeSpan}>
          {time} | {address}
        </span>
        <p className={styles.paragraph}>{work}</p>
      </motion.div>
    </li>
  );
};

export default DetailsExp;