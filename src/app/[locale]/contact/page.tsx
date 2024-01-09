import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n-config";
import spaceman from "../../../../public/images/profile/spaceman.png";

import Image from "next/image";

import styles from "./style.module.css";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import ParticlesContainer from "@/components/ParticlesContainer/ParticlesContainer";
type Props = {
  params: { locale: string };
};

function Contact({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  // Enable static rendering
  unstable_setRequestLocale(locale);
  return (
    <main className={styles.container}>
      <TransitionEffect />
      <div className={styles.containerAbout}>
        <div className={styles.test}>
          <ParticlesContainer moving={true} />
        </div>
        <div className={styles.spaceman}>
          <Image
            className={styles.image}
            src={spaceman}
            alt="Spaceman"
          />
        </div>
        <div className={styles.contact}>
          Im a front-end developer located in India. I love to create simple yet
          beautiful websites with great user experience.
          <br /> <br />
          Im interested in the whole frontend stack Like trying new things and
          building great projects. Im an independent freelancer and blogger. I
          love to write blogs and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </div>
      </div>
    </main>
  );
}
export default Contact;
