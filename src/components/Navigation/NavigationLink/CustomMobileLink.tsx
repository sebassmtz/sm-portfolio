"use client";
import NavigationLink from "./NavigationLink";
import styles from "./style.module.css";

import { useContext } from "react";

import { OpenContext } from "../NavigationMobile/OpenContext";

import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  // Agregar las demas URLS
  href: "/" | "/contact" | "/about" | "/projects";
  title: string;
  className?: string;
};

function CustomMobileLink({ href, title, className = "" }: Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  const { isOpen, setIsOpen } = useContext(OpenContext);

  return (
    <NavigationLink
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      href={href}
      className={`${styles.navLinkMobile} ${className}`}
    >
      {title}
      <span
        className={`${styles.spanLinkMobile}
      ${pathname === href ? styles.w_100 : styles.w_0}
      `}
      >
        &nbsp;
      </span>
    </NavigationLink>
  );
}
export default CustomMobileLink;
