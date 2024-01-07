import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { locales } from "../../i18n-config";
import "../globals.css";

import Providers from "./Providers";
import NavBar from "@/components/Navigation/NavBar";

import styles from "./style.module.css";
import Footer from "@/components/Footer/Footer";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={styles.mainContainer}>
        <Providers>
          <NavBar />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
