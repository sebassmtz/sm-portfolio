import styles from "./style.module.css";

import Navigation from "./NavigationDesktop/NavigationDesktop";

import NavBarMobile from "./NavigationMobile/NavBarMobile";
import Logo from "@/subComponents/Logo/Logo";
import { useTranslations } from "next-intl";

interface Link {
  href: "/about" | "/projects" | "/contact" | "/";
  title: string;
}

interface Props {
  title: string;
  data: Link[];
}

function NavBar() {
  const t = useTranslations("Navigation");

  const props: Props = {
    title: "paths",
    data: [
      { href: "/", title: `${t("home")}` },
      { href: "/about", title: `${t("about")}` },
      { href: "/projects", title: `${t("projects")}` },
      { href: "/contact", title: `${t("contact")}` },
    ],
  };

  return (
    <div className={styles.header}>
      <Navigation />
      {/*Mobile */}
      <NavBarMobile {...props} />
      {/*Desktop  */}

      {/* Logo */}
      <div className={styles.divLogo}>
        <Logo />
      </div>
    </div>
  );
}
export default NavBar;
