"use client";

import { useState } from "react";
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

const MotionLink = motion(Link);

type Props = {
  href: "/" | "/contact" | "/about" | "/projects";
  title: string;
}[];

function NavBarMobile(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
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
          <nav className={styles.navLink}>
            {Object.values(props).map((item, index) => (
              <CustomMobileLink
                key={index}
                href={item.href}
                title={item.title}
              />
            ))}
          </nav>
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
            <LocaleSwitcher />
            <ThemeSwitcher />
          </nav>
        </motion.div>
      ) : null}
    </div>
  );
}
export default NavBarMobile;
