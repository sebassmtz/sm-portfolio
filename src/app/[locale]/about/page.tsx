import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n-config";

import PageLayout from "@/components/PageLayout/PageLayout";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import AnimatedText from "@/subComponents/AnimatedText/AnimatedText";

import Image from "next/image";

import styles from "./style.module.css";

import AnimatedNumber from "@/subComponents/AnimatedNumber/AnimatedNumber";

import procfile from "../../../../public/images/profile/profile.jpg";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";


const Awards = ({ number, text }: { number: number; text: string }) => {
  return (
    <div className={styles.numberMove}>
      <span className={styles.number}>
        <AnimatedNumber value={number} />+
      </span>
      <h2 className={styles.titleNumber}>{text}</h2>
    </div>
  );
};

type Props = {
  params: { locale: string };
};

function About({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutPage");

  const awards = [
    { number: 1, text: `${t("experience")}` },
    { number: 10, text: `${t("projects")}` },
    { number: 7, text: `${t("clients")}` },
  ];
  const propsSkills = {
    title: `${t("skills")}`,
    skillHeaders: [
      `${t("backend")}`,
      `${t("frontend")}`,
      `${t("tools")}`,
      `${t("others")}`,
    ],
  };

  const education = {
    title : `${t("education")}`,
    details: [
      {
        title: `${t("education_1_title")}`,
        place: `${t("education_1_place")}`,
        time: `${t("education_1_time")}`,
        info: `${t("education_1_info")}`,
      },
      {
        title: `${t("education_2_title")}`,
        place: `${t("education_2_place")}`,
        time: `${t("education_2_time")}`,
        info: `${t("education_2_info")}`,
      },
      {
        title: `${t("education_3_title")}`,
        place: `${t("education_3_place")}`,
        time: `${t("education_3_time")}`,
        info: `${t("education_3_info")}`,
      },
    ]
  }

  const experience = {
    title : `${t("experience_title")}`,
    details: [
      {
        position: `${t("experience_1_position")}`,
        company: `${t("experience_1_company")}`,
        time: `${t("experience_1_time")}`,
        work: `${t("experience_1_work")}`,
        companyLink:"https://www.freelancer.com.co/",
        address:"Boyaca, Colombia"
      },
      {
        position: `${t("experience_2_position")}`,
        company: `${t("experience_2_company")}`,
        time: `${t("experience_2_time")}`,
        work: `${t("experience_2_work")}`,
        companyLink:"https://www.freelancer.com.co/",
        address:"Boyaca, Colombia"
      },
    ]
  }

  return (
    <main className={styles.mainPage}>
      <TransitionEffect />
      <PageLayout className={styles.layout}>
        <AnimatedText
          className={styles.title}
          text={t("title")}
        />
        <div className={styles.containerAbout}>
          <div className={styles.description}>
            <h2 className={styles.titleDescription}>{t("biography")}</h2>
            <p className={styles.paragraph}>{t("paragraph1")}</p>
            <p className={styles.paragraph}>{t("paragraph3")}</p>
            <p className={styles.paragraph}>{t("paragraph2")}</p>
          </div>
          <div className={styles.containerImage}>
            <div className={styles.decoratorImage} />
            <Image
              src={procfile}
              alt="as"
              className={styles.image}
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
          </div>
          {/* Numbes */}
          <div className={styles.containerAwards}>
            {awards.map((item, index) => (
              <Awards
                key={index}
                number={item.number}
                text={item.text}
              />
            ))}
          </div>
        </div>
        <Skills {...propsSkills} />
        <Experience 
        {...experience}
        />
        <Education 
        {...education}
        />
      </PageLayout>
    </main>
  );
}
export default About;
