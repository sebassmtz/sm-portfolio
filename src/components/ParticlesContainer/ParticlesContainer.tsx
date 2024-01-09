"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import styles from "./style.module.css";
import { useTheme } from "next-themes";

import {
  ParticlesConfigSpaceArrow,
  ParticlesConfigSpaceManArrow,
} from "@/config/particle-conf";

const ParticlesContainer = ({moving}: {moving: boolean}) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container?: Container) => {
    return Promise.resolve();
  };

  const { theme } = useTheme();

  const optionSpaceMan = ParticlesConfigSpaceManArrow(
    theme === "dark" ? "#fff" : "#000",
    theme === "dark" ? "#000" : "#fff"
  )

  const optionSpace = ParticlesConfigSpaceArrow(
    theme === "dark" ? "#fff" : "#000",
    theme === "dark" ? "#000" : "#fff"
  );

  return (
    <div className={styles.container}>
      <Particles
        style={{ position: "absolute", top: 0 }}
        className={styles.particlesContainer}
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={moving ? optionSpaceMan : optionSpace as any}
      />
    </div>
  );
};

export default ParticlesContainer;
