import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../i18n-config";
import PageLayout from "@/components/PageLayout/PageLayout";

import Image from "next/image";

import styles from "./style.module.css";

import profilePic from "../../../public/images/profile/developer-pic-1.png";

import AnimatedText from "@/subComponents/AnimatedText/AnimatedText";

import Link from "next/link";

import { LinkArrow, YinYang } from "@/subComponents/Icons/Icons";

import HireMe from "@/subComponents/HireMe/HireMe";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <main className={styles.mainPage}>
      <TransitionEffect />
      <PageLayout className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              priority
              src={profilePic}
              width={580}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              alt="Picture of the portfolio developer"
            />
          </div>
          <div className={styles.containerText}>
            <AnimatedText
              text={t("title")}
              className={styles.animatedText}
            />
            <p className={styles.par}>
              {t("description")}
            </p>
            <div className={styles.contacts}>
              <Link
                href=""
                target={"_blank"}
                className={styles.resumeLink}
              >
                {t("resume")}
                <LinkArrow className={styles.arrow} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sebas-martinez01/"
                target={"_blank"}
                className={styles.contactLink}
              >
               {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
      <HireMe 
      title={t("hireMe")}
      />
      <div className={styles.yinYan}>
        <YinYang className={styles.moveYin} />
      </div>
    </main>
  );
}
