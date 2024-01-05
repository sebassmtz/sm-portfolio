"use client";

import { useState } from "react";

import styles from "./style.module.css";
import ThemeSwitcherSelect from "../ThemeSwitcher/ThemeSwitcher";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <header className={styles.header}>
      {/* Button Mobile */}
      <button
        className={styles.buttonMobile}
        onClick={handleClick}
      >
        <span
          className={`${styles.spanButton}
        ${isOpen ? styles.span1ButtonOpen : styles.span1ButtonNoOpen}`}
        ></span>
        <span
          className={`${styles.spanButton} ${styles.margin}
        ${isOpen ? styles.span2ButtonOpen : styles.span2ButtonNoOpen}`}
        ></span>
        <span
          className={`${styles.spanButton}
        ${isOpen ? styles.span3ButtonOpen : styles.span3ButtonNoOpen}`}
        ></span>
      </button>

      {/* Menu Mobile */}
      {isOpen ? <div>Hola</div> : null}
    </header>
  );
}
export default NavBar;
