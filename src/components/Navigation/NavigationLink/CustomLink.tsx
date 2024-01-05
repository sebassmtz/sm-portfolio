import NavigationLink from "./NavigationLink";
import styles from "./style.module.css";

import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  // Agregar las demas URLS
  href: "/" | "/contact" | "/about";
  title: string;
  className?: string;
};

function CustomLink({ href, title, className = "" }: Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  return (
    <NavigationLink
      href={href}
      className={` ${styles.navLink}${className}`}
    >
      {title}
      <span className={`${styles.spanLink}
      ${pathname === href ? styles.w_100 : styles.w_0}
      `}>&nbsp;</span>
    </NavigationLink>
  );
}
export default CustomLink;
