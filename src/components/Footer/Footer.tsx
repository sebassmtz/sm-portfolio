import Link from "next/link";
import styles from "./style.module.css";
import { useTranslations } from "next-intl";

import logo from "../../../public/images/profile/logo.png"
import Image from "next/image";

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
          <Image
          className={styles.logo}
            src={logo}
            alt="Logo"
          />
          {/* {t("brand")} */}
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
