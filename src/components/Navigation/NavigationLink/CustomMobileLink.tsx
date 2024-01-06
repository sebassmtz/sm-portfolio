"use client";
import NavigationLink from "./NavigationLink";
import styles from "./style.module.css";

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

  return (
    <NavigationLink
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
