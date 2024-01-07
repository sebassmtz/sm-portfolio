"use client";

import { useState, useMemo } from "react";
import styles from "./style.module.css";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  GithubIcon,
  InstagramIcon,
  Twitter,
  LinkedInIcon,
} from "@/subComponents/Icons/Icons";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import CustomMobileLink from "../NavigationLink/CustomMobileLink";
import SoundBar from "@/subComponents/SoundBar/SoundBar";
import { OpenContext } from "./OpenContext";

const MotionLink = motion(Link);

interface Link {
  href: "/about" | "/projects" | "/contact" | "/";
  title: string;
}

interface Props {
  title: string;
  data: Link[];
}

function NavBarMobile(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openContext = useMemo(
    () => ({ isOpen, setIsOpen }),
    [isOpen, setIsOpen]
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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
      {isOpen ? (
        <motion.div
          className={styles.divIsOpen}
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {/* My navigation */}
          <OpenContext.Provider value={openContext}>
            <nav className={styles.navLink}>
              {
                props.data.map((link, index) => (
                  <CustomMobileLink
                    key={index}
                    href={link.href}
                    title={link.title}
                  />
                ))
              }
            </nav>
          </OpenContext.Provider>

          {/* Social Icons */}
          <nav className={styles.navSocial}>
            <MotionLink
              target={"_blank"}
              href={""}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={styles.link}
            >
              <GithubIcon className={styles.icon} />
            </MotionLink>
            <MotionLink
              target={"_blank"}
              href={""}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={styles.link}
            >
              <LinkedInIcon className={styles.icon} />
            </MotionLink>
            <MotionLink
              target={"_blank"}
              href={""}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={styles.link}
            >
              <Twitter className={styles.icon} />
            </MotionLink>
            <MotionLink
              target={"_blank"}
              href={""}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={styles.link}
            >
              <InstagramIcon className={styles.icon} />
            </MotionLink>
          </nav>
          <nav className={styles.navSwitcher}>
            <SoundBar />
            <ThemeSwitcher />
            <LocaleSwitcher />
          </nav>
        </motion.div>
      ) : null}
    </>
  );
}
export default NavBarMobile;
