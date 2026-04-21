import React, { Component } from "react";
import { Zoom } from "react-awesome-reveal";

import SEO from "components/SEO";
import ExperienceAccordion from "containers/experienceAccordion/ExperienceAccordion.js";
import { experience } from "portfolio.js";
import ExperienceImg from "atoms/ExperienceImg";
import styles from "styles/Experience.module.css";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <SEO
          title="Experience | Raja Abraheem Rashid"
          desc="AI/ML research and engineering experience spanning Curium, Neura-X, IQ Center, TRL at IBA, and Pakistan's NCERT, from autonomous systems to national-scale cybersecurity AI."
          url="experience"
        />
        <div className={styles["experience-main"]}>
          <div className={styles["basic-experience"]}>
            <Zoom duration={1000} triggerOnce>
              <div className={styles["experience-heading-div"]}>
                <div className={styles["experience-heading-img-div"]}>
                  <ExperienceImg theme={theme} />
                </div>
                <div className={styles["experience-heading-text-div"]}>
                  <h1
                    className={styles["experience-heading-text"]}
                    style={{ color: theme.text }}
                  >
                    {experience.title}
                  </h1>
                  <h3
                    className={styles["experience-heading-sub-text"]}
                    style={{ color: theme.text }}
                  >
                    {experience["subtitle"]}
                  </h3>
                  <p
                    className={styles["experience-header-detail-text"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {experience["description"]}
                  </p>
                </div>
              </div>
            </Zoom>
          </div>
          <ExperienceAccordion
            sections={experience["sections"]}
            theme={theme}
          />
        </div>
      </>
    );
  }
}

export default Experience;
