import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../i18n-config";
import PageLayout from "@/components/PageLayout/PageLayout";

import Image from "next/image";

import styles from "./style.module.css";

import profilePic from "../../../public/images/profile/Avatar.png";

import AnimatedText from "@/subComponents/AnimatedText/AnimatedText";

import Link from "next/link";

import { LinkArrow, YinYang } from "@/subComponents/Icons/Icons";

import HireMe from "@/subComponents/HireMe/HireMe";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import CustomLink from "@/components/Navigation/NavigationLink/CustomLink";
import Gemini from "@/components/Gemini/Gemini";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const localeURL = useLocale();

  const t = useTranslations("IndexPage");

  return (
    <main className={styles.mainPage}>
      <TransitionEffect />
      <PageLayout className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              width={300} // Ajusta el ancho según tus necesidades
              height={400} // Ajusta la altura según tus necesidades
              priority
              src={profilePic}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              alt="Picture of the portfolio developer"
            />
          </div>
          <div className={styles.containerText}>
            <AnimatedText
              text={t("title")}
              className={styles.animatedText}
            />
            {/* <p className={styles.par}>{t("description")}</p> */}
            <div className={styles.gemini}>
              <Gemini
              questionBot={t("questionBot")}
              questionUser={t("questionUser")}
              sendButton={t("sendButton")}
              sendingButton={t("sendingButton")}
              />
            </div>
            <div className={styles.contacts}>
              <Link
                href={` ${
                  localeURL === "en"
                    ? "https://drive.google.com/file/d/1QWK0W86Q_c0bjYsTw5o-B-xZ9uso2fsS/view?usp=sharing"
                    : "https://drive.google.com/file/d/1YQ0PmYkJXL_Kzn5rNEgF8ZduKbfJDUtO/view?usp=sharing"
                }
                  }`}
                target={"_blank"}
                className={styles.resumeLink}
              >
                {t("resume")}
                <LinkArrow className={styles.arrow} />
              </Link>
              <CustomLink
                href="/contact"
                title={t("contact")}
                className={styles.contactLink}
              />
            </div>
          </div>
        </div>
      </PageLayout>

      <HireMe title={t("hireMe")} />
      <div className={styles.yinYan}>
        {/* <YinYang className={styles.moveYin} /> */}
      </div>
    </main>
  );
}
