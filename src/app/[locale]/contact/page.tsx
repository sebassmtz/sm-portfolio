import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n-config";
import spaceman from "../../../../public/images/profile/spaceman.png";

import Image from "next/image";

import styles from "./style.module.css";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import ParticlesContainer from "@/components/ParticlesContainer/ParticlesContainer";
import Form from "./Form";
type Props = {
  params: { locale: string };
};

function Contact({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("ContactPage");

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
        <h1 className={styles.bigTtitle}>{t("title")}</h1>
        <div className={styles.contact}>
          <Form
            name={t("form.name")}
            placeholderName={t("form.placeholder_name")}
            email={t("form.email")}
            placeholderEmail={t("form.placeholder_email")}
            message={t("form.message")}
            placeholderMessage={t("form.placeholder_message")}
            buttonSend={t("form.send")}
            messageError={t("sendError")}
            sendSucess={t("sendSucess")}
          />
        </div>
      </div>
    </main>
  );
}
export default Contact;
