import PageLayout from "@/components/PageLayout/PageLayout";
import Link from "next/link";
import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.layout}>
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
        <div className={styles.container}>
          Built with
          <span className={styles.span}>&#9825;</span>
          by&nbsp;
          <Link href="https://github.com/sebassmtz"
          className={styles.link}
          >Sebassmtz</Link>
        </div>
        <Link
          href="/"
          className={styles.link}
        >
          Coming Soon
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
