import Link from "next/link"

import { CircularText } from "../Icons/Icons"

import styles from "./style.module.css"
function HireMe({title}: {title: string}) {
  return (
    <div  className={styles.container}>
      <div className={styles.hireMe}>
        <CircularText
        className={styles.circularText}
        />
        <Link
        className={styles.linkHireMe}
        href={"https://www.linkedin.com/in/sebas-martinez01/"}
        >
          {title}
        </Link>
      </div>
    </div>
  )
}
export default HireMe