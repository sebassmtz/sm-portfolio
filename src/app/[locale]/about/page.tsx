import { notFound } from "next/navigation";
import {  useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n-config";

import PageLayout from "@/components/PageLayout/PageLayout";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import AnimatedText from "@/subComponents/AnimatedText/AnimatedText";

import Image from "next/image";

import styles from "./style.module.css";

import AnimatedNumber from "@/subComponents/AnimatedNumber/AnimatedNumber";

import procfile from "../../../../public/images/profile/developer-pic-2.jpg";
import Experience from "@/components/Experience/Experience";

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
        <Experience />
      </PageLayout>
    </main>
  );
}
export default About;
