import { useTranslations } from "next-intl";
import LocaleSwitcher from "../../LocaleSwitcher/LocaleSwitcher";

import styles from "./style.module.css";
import CustomLink from "../NavigationLink/CustomLink";

import dynamic from 'next/dynamic'
import SocialIcons from "@/subComponents/SocialIcons/SocialIcons";
import SoundBar from "@/subComponents/SoundBar/SoundBar";

// Only loads ThemeSwitcher client-side
const ThemeSwitcher = dynamic(
  () => import('@/components/ThemeSwitcher/ThemeSwitcher'),
  { ssr: false }
)

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
        <SoundBar/>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </nav>
      <SocialIcons/>
    </div>
  );
}
