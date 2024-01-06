"use client";
import { useTheme } from "next-themes";
import { useEffect, ReactNode, useState } from "react";

import styles from "./styles.module.css";
import { SunIcon, MoonIcon } from "@/subComponents/Icons/Icons";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function ThemeSwitcherSelect() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(resolvedTheme === "dark");

  useEffect(() => {
    setMounted(true); // Mounted
  }, []);

  useEffect(() => {
    if (mounted) {
      {
        const isDarkMode = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        if (
          typeof window !== "undefined" &&
          localStorage.getItem("theme") === "system"
        ) {
          setTheme(isDarkMode ? "dark" : "light");
        }
      }
    }
  }, [mounted, setTheme]);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`${styles.button}
        ${resolvedTheme === "dark" ? styles.buttonDark : styles.buttonLight}
      `}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <MoonIcon className={`${styles.icon}`} />
      ) : (
        <SunIcon className={`${styles.icon}`} />
      )}
    </button>
  );
}
