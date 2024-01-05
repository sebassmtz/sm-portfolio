import styles from "./style.module.css";

import Navigation from "./NavigationDesktop/NavigationDesktop";

import NavBarMobile from "./NavigationMobile/NavBarMobile";

function NavBar() {

  return (
    <header className={styles.header}>
        {/*Mobile */}
        <NavBarMobile />

      {/*Desktop  */}
      <Navigation />

      {/* Logo */}
        <div>

        </div>
    </header>
  );
}
export default NavBar;
