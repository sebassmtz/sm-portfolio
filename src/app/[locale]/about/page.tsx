import PageLayout from "@/components/PageLayout/PageLayout";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import AnimatedText from "@/subComponents/AnimatedText/AnimatedText";

import Image from "next/image";

import styles from "./style.module.css";

import AnimatedNumber from "@/subComponents/AnimatedNumber/AnimatedNumber";

import procfile from "../../../../public/images/profile/developer-pic-2.jpg";
import { useTranslations } from "next-intl";

const Awards = ({number,text}: {number:number, text:string}) => {
return (
  <div className={styles.numberMove}>
  <span
  className={styles.number}
  >
    <AnimatedNumber value={number} />+
  </span>
  <h2
  className={styles.titleNumber}
  >
    {text}
  </h2>
</div>
);
}


function About() {

  const t = useTranslations("AboutPage");


  return (
    <main className={styles.mainPage}>
      <TransitionEffect />
      <PageLayout className={styles.layout}>
        <AnimatedText
          className={styles.title}
          text="Passion Fuels Purpose!"
        />
        <div className={styles.containerAbout}>
          <div className={styles.description}>
            <h2
            className={styles.titleDescription}
            >Biography</h2>
            <p className={styles.paragraph}>
              Hi, Im CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients
              visions to life.
            </p>
            <p className={styles.paragraph}>
              Hi, Im CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients
              visions to life.
            </p>
            <p className={styles.paragraph}>
              Hi, Im CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients
              visions to life.
            </p>
          </div>
          <div className={styles.containerImage}>
          <div
          className={styles.decoratorImage}
          />
          <Image
                src={procfile}
                alt="as"
                className={styles.image}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
          </div>
          {/* Numbes */}
          <div className={styles.containerAwards}>
          {
            [1,2,3].map((item, index) => (
              <Awards
              key={index}
              number={item}
              text="asdasd"
              />
            ))
          }
          </div>
        </div>
      </PageLayout>
    </main>
  );
}
export default About;
