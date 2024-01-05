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

import { BsBoxArrowUpRight } from "react-icons/bs";
import HireMe from "@/subComponents/HireMe/HireMe";

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
      <PageLayout className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              priority
              src={profilePic}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              alt="Picture of the portfolio developer"
            />
          </div>
          <div className={styles.containerText}>
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className={styles.animatedText}
            />
            <p className={styles.par}>
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className={styles.contacts}>
              <Link
                href=""
                target={"_blank"}
                className={styles.resumeLink}
              >
                Resume
                <BsBoxArrowUpRight
                  className={styles.arrow}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sebas-martinez01/"
                target={"_blank"}
                className={styles.contactLink}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
      <HireMe/>
      <div>
       {/* YIN YAN */}
      </div>
    </main>
  );
}
