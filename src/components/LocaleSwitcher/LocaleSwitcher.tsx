"use client";
import { useLocale } from "next-intl";

import { useRouter, usePathname } from "../../i18n-navigation";

import styles from "./styles.module.css";

import Image from "next/image";

import ImageEs from "../../../public/Icons/es.png";
import ImageEn from "../../../public/Icons/en.png";

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const handleClick = () => {
    router.replace(pathname, { locale: locale === "en" ? "es" : "en" });
  };

  return (
    <button
      aria-label="Toggle Locale"
      className={`${styles.button} `}
      onClick={handleClick}
    >
      {locale === "en" ? (
        <Image
          src={ImageEs}
          alt="ES"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={ImageEn}
          alt="EN"
          width={24}
          height={24}
        />
      )}
    </button>
  );
}
