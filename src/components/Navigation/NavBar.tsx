import styles from "./style.module.css";

import Navigation from "./NavigationDesktop/NavigationDesktop";

import NavBarMobile from "./NavigationMobile/NavBarMobile";
import Logo from "@/subComponents/Logo/Logo";

function NavBar() {

  return (
    <header className={styles.header}>
        {/*Mobile */}
        <NavBarMobile />

      {/*Desktop  */}
      <Navigation />

      {/* Logo */}
        <div className={styles.divLogo}>
          <Logo/>
        </div>
    </header>
  );
}
export default NavBar;
