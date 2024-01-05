"use client";
import { useTheme } from "next-themes";
import { useEffect, ReactNode } from "react";

import styles from "./styles.module.css";

import { SunIcon, MoonIcon } from "@/subComponents/Icons/Icons";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function ThemeSwitcherSelect() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (
      typeof window !== "undefined" &&
      localStorage.getItem("theme") === "system"
    ) {
      setTheme(isDarkMode ? "dark" : "light");
    }
  }, [setTheme]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`${styles.button}
        ${resolvedTheme === "dark" ? styles.buttonDark : styles.buttonLight}
      `}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className={`${styles.icon} ${styles.iconFill}`} />
      ) : (
        <SunIcon className={`${styles.icon} ${styles.iconFill}`} />
      )}
    </button>
  );
}
