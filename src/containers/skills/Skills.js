import React from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./Skills.module.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className={styles["main"]} id="skills">
      <div className={styles["skills-header-div"]}>
        <Fade direction="up" duration={1200} distance="20px" triggerOnce>
          <h1 className={styles["skills-header"]} style={{ color: theme.text }}>
            How I Work
          </h1>
          <p
            className={styles["skills-description"]}
            style={{ color: theme.secondaryText }}
          >
            My research and engineering work sits across three intersecting areas, 
            foundational machine learning, large language models and agentic systems, 
            and the infrastructure that lets ideas move from notebooks to production.
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
