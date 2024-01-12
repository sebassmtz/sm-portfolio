import Link from "next/link";
import styles from "./style.module.css";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("FooterPage");
  return (
    <footer className={styles.footer}>
      <div className={styles.layout}>
        <span>
          {new Date().getFullYear()} &copy; {t("rights")}
        </span>
        <div className={styles.container}>
          {t("madeWith")}
          <span className={styles.span}>&#9825;</span>
          {t("by")}&nbsp;
          <Link
            href="https://github.com/sebassmtz"
            className={styles.link}
          >
            Sebassmtz
          </Link>
        </div>
        <span>
          {t("inspired")} CodeBucks
        </span>
        <Link
          href="/"
          className={styles.link}
        >
          {t("brand")}
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
