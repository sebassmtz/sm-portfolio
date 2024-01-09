import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n-config";

import Link from "next/link";

import styles from "./style.module.css";
import AnimatedText from "@/subComponents/AnimatedText/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

import FeaturedProject from "@/subComponents/Projects/FeaturedProject";

// Import Projects
import project1 from "../../../../public/images/projects/crypto-screener-cover-image.jpg"

type Props = {
  params: { locale: string };
};

function Projects({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main className={styles.container}>
      <TransitionEffect />
      <div className={styles.pageContainer}>
        <AnimatedText
          className={styles.title}
          text="Mis Proyectos 🚀"
        />
        <div className={styles.containerProjects}>
          {/* Projects */}
          <FeaturedProject
            title="Crypto Screener Application"
            img={project1}
            link="https://portfolio-ten-umber.vercel.app/"
            github="/"
            type="Featured Project"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                local currency."
            visit="Visitar Proyecto"
          />
        </div>
      </div>
    </main>
  );
}
export default Projects;
