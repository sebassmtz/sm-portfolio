import { useTranslations } from "next-intl";
import LocaleSwitcher from "../../LocaleSwitcher/LocaleSwitcher";
import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";

import styles from "./style.module.css";
import CustomLink from "../NavigationLink/CustomLink";

export default function Navigation() {
  const t = useTranslations("Navigation");
  return (
    <div className={styles.container}>
      <nav>
        <CustomLink
          href="/"
          title={t("home")}
          className={styles.margin_right}
        />
        <CustomLink
          href="/about"
          title={t("about")}
          className={styles.margin_center}
        />
        <CustomLink
          href="/projects"
          title={t("projects")}
          className={styles.margin_center}
        />
        <CustomLink
          href="/contact"
          title={t("contact")}
          className={styles.margin_left}
        />
      </nav>

      <nav className={styles.switcher}>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
