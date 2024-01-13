"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./style.module.css";

import { FaJava, FaSass, FaAngular, FaVuejs, FaNpm } from "react-icons/fa";
import {
  SiSpring,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiExpress,
  SiNestjs,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiCsharp,
  SiDotnet,
  SiReact,
  SiTailwindcss,
  SiReactquery,
  SiBootstrap,
  SiRedux,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiArchlinux,
  SiGitlab,
  SiPostman,
  SiSwagger,
  SiYarn,
  SiStrapi,
  SiVite,
  SiPrisma,
  SiFigma,
  SiCanva,
  SiNextdotjs,
  SiFramer,
  SiJest,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiAmazonaws,
  SiZod,
} from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

import { useState } from "react";

type Props = {
  title: string;
  skillHeaders: string[];
};

function Skills({ title, skillHeaders }: Props) {
  const aboutData = [
    {
      title: skillHeaders[0],
      icons: [
        {
          icon: <FaJava />,
          name: "Java",
        },
        {
          icon: <SiSpring />,
          name: "Spring",
        },
        {
          icon: <SiPython />,
          name: "Python",
        },
        {
          icon: <SiFlask />,
          name: "Flask",
        },
        {
          icon: <SiDjango />,
          name: "Django",
        },
        {
          icon: <SiFastapi />,
          name: "FastAPI",
        },
        {
          icon: <SiNodedotjs />,
          name: "Node.js",
        },
        {
          icon: <SiExpress />,
          name: "Express.js",
        },
        {
          icon: <SiNestjs />,
          name: "Nest.js",
        },
        {
          icon: <SiCsharp />,
          name: "C#",
        },
        {
          icon: <SiDotnet />,
          name: ".NET",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
        },
        {
          icon: <SiPostgresql />,
          name: "PostgreSQL",
        },
        {
          icon: <SiOracle />,
          name: "Oracle",
        },
      ],
    },
    {
      title: skillHeaders[1],
      icons: [
        {
          icon: <SiHtml5 />,
          name: "HTML5",
        },
        {
          icon: <SiCss3 />,
          name: "CSS3",
        },
        {
          icon: <SiJavascript />,
          name: "JavaScript",
        },
        {
          icon: <SiTypescript />,
          name: "Typescript",
        },
        {
          icon: <SiReact />,
          name: "React",
        },
        {
          icon: <FaVuejs />,
          name: "Vue.js",
        },
        {
          icon: <FaAngular />,
          name: "Angular",
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
        },
        {
          icon: <SiBootstrap />,
          name: "Bootstrap",
        },
        {
          icon: <FaSass />,
          name: "Sass",
        },
        {
          icon: <SiReactquery />,
          name: "React Query",
        },
        {
          icon: <SiRedux />,
          name: "Redux",
        },
        {
          icon: <SiFramer />,
          name: "Framer Motion",
        },
      ],
    },

    {
      title: skillHeaders[2],
      icons: [
        {
          icon: <SiGit />,
          name: "Git",
        },
        {
          icon: <SiGithub />,
          name: "Github",
        },
        {
          icon: <SiGitlab />,
          name: "Gitlab",
        },
        {
          icon: <SiPostman />,
          name: "Postman",
        },
        {
          icon: <SiSwagger />,
          name: "Swagger",
        },
        {
          icon: <SiDocker />,
          name: "Docker",
        },
        {
          icon: <SiLinux />,
          name: "Linux",
        },
        {
          icon: <SiArchlinux />,
          name: "Arch Linux",
        },
        {
          icon: <SiYarn />,
          name: "Yarn",
        },
        {
          icon: <FaNpm />,
          name: "NPM",
        },
      ],
    },
    {
      title: skillHeaders[3],
      icons: [
        {
          icon: <SiPrisma />,
          name: "Prisma",
        },
        {
          icon: <SiStrapi />,
          name: "Strapi",
        },
        {
          icon: <SiVite />,
          name: "Vite",
        },
        {
          icon: <SiFigma />,
          name: "Figma",
        },
        {
          icon: <SiCanva />,
          name: "Canva",
        },
        {
          icon: <SiJest />,
          name: "Jest",
        },
        {
          icon: <TbBrandCypress />,
          name: "Cypress",
        },
        {
          icon: <SiVercel />,
          name: "Vercel",
        },
        {
          icon: <SiNetlify />,
          name: "Netlify",
        },
        {
          icon: <SiRailway />,
          name: "Railway",
        },
        {
          icon: <SiAmazonaws />,
          name: "AWS",
        },
        {
          icon: <SiZod />,
          name: "Zod",
        },
      ],
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        <div className={styles.buttons}>
          {aboutData.map((item, indexItem) => {
            return (
              <div
                className={`
                  ${index === indexItem && styles.active}
                  ${styles.button}`}
                onClick={() => setIndex(indexItem)}
                key={indexItem}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className={styles.tool_box}>
          {aboutData[index].icons.map((item, indexItem) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.tool_box_item}
                key={indexItem}
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Skills;
