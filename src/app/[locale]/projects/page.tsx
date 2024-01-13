import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n-config";

import Link from "next/link";

import styles from "./style.module.css";
import AnimatedText from "@/subComponents/AnimatedText/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

import FeaturedProject from "@/subComponents/Projects/FeaturedProject";

import Project from "@/subComponents/Projects/Projects";

// Import Projects
import project1 from "../../../../public/images/projects/project1.png";
import project2 from "../../../../public/images/projects/project2.png";
import project3 from "../../../../public/images/projects/project3.png";

import ParticlesContainer from "@/components/ParticlesContainer/ParticlesContainer";
import MiniProject from "@/subComponents/Projects/MiniProject";

type Props = {
  params: { locale: string };
};

function Projects({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("ProjectsPage");

  return (
    <main className={styles.container}>
      <TransitionEffect />
      <ParticlesContainer moving={false} />
      <div className={styles.pageContainer}>
        <AnimatedText
          className={styles.title}
          text={t("title")}
        />
        <div className={styles.containerProjects}>
          {/* Projects */}
          <FeaturedProject
            title={t("project_1_title")}
            img={project1}
            link="https://frontend-stockpro.vercel.app/"
            github="https://github.com/sebassmtz/frontend-stockpro"
            type={t("project_1_type")}
            summary={t("project_1_summary")}
            visit={t("visit")}
            skills={t("project_1_skills")}
          />
          <Project
            title={t("project_2_title")}
            img={project2}
            link="https://microservices-is-2.vercel.app/"
            github="https://github.com/sebassmtz/microservices-IS2"
            type={t("project_2_type")}
            summary={t("project_2_summary")}
            visit={t("visit")}
            skills={t("project_2_skills")}
          />
          <Project
            title={t("project_3_title")}
            img={project3}
            link="https://api-cnn-birds.vercel.app/"
            github="https://github.com/sebassmtz/API-CNN-Birds"
            type={t("project_3_type")}
            visit={t("visit")}
            skills={t("project_3_skills")}
          />
        </div>
        <h2 className={styles.otherTitle}>Other projects</h2>
        <div className={styles.containerOther}>
          {/* Other Articles */}
          <MiniProject
            title="Psico manages appointments with psychologists."
            link="https://github.com/sebassmtz/psico-frontend"
          />
          <MiniProject
            title="Microservices in java and python to manage voting"
            link="https://github.com/sebassmtz/Votaciones-MisionTic2022"
          />
        </div>
      </div>
    </main>
  );
}
export default Projects;
