"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import styles from "./style.module.css";

import {
  GithubIcon,
  InstagramIcon,
  Twitter,
  LinkedInIcon,
} from "@/subComponents/Icons/Icons";
import React, { useEffect, useState } from "react";

const SocialIcon = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 1, delay: 1 }}
    >
      <Link href={href}>{children}</Link>
    </motion.div>
  );
};

function SocialIcons() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const themeLoc = () => {
      if (typeof window !== "undefined") {
        setTheme(window.localStorage.getItem("theme") || "");
      }
    };

    themeLoc(); // Llama a la función una vez

    // Evita que se ejecute en cada renderizado
  }, []);

  return (
    <div className={styles.container}>
      <SocialIcon href="https://github.com/sebassmtz/">
        <GithubIcon
          className={styles.icon}
        />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com/in/sebas-martinez01/">
        <LinkedInIcon
          className={styles.icon}
          fill2={theme === "dark" ? "#fff" : "#fff"}
        />
      </SocialIcon>
      <SocialIcon href="https://twitter.com/sebassmtz01">
        <Twitter
          className={styles.icon}
        />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/sebassmtz01/">
        <InstagramIcon
          className={styles.icon}
        />
      </SocialIcon>

      <motion.span
        className={styles.span}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </div>
  );
}
export default SocialIcons;
