import styles from "./style.module.css";

import Navigation from "./NavigationDesktop/NavigationDesktop";

import NavBarMobile from "./NavigationMobile/NavBarMobile";
import Logo from "@/subComponents/Logo/Logo";
import { useTranslations } from "next-intl";

type Props = {
  href: "/" | "/contact" | "/about" | "/projects";
  title: string;
}[];

function NavBar() {
  const t = useTranslations("Navigation");

  const data: Props = [
    { href: "/", title: `${t("home")}` },
    { href: "/about", title: `${t("about")}` },
    { href: "/projects", title: `${t("projects")}` },
    { href: "/contact", title: `${t("contact")}` },
  ];

  return (
    <header className={styles.header}>
      <Navigation />
      {/*Mobile */}
      <NavBarMobile {...data} />
      {/*Desktop  */}

      {/* Logo */}
      <div className={styles.divLogo}>
        <Logo />
      </div>
    </header>
  );
}
export default NavBar;
