import { ReactNode } from "react"

import styles from './styles.module.css'

type Props = {
  children?: ReactNode;
  className?: string;
};

function PageLayout({ children, className="" }: Props) {

  return (
    <div className={`${className} ${styles.pageContainer}`}>
      {children}
    </div>
  );
}

export default PageLayout