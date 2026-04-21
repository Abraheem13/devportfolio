import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import SEO from "components/SEO";
import Educations from "containers/education/Educations";
import Certifications from "containers/certifications/Certifications";
import styles from "styles/Education.module.css";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <SEO
          title="Education | Raja Abraheem Rashid"
          desc="Academic background and honours, MSc AI at Brunel London and BEng Electrical Engineering (AI Specialisation) at COMSATS."
          url="education"
        />
        <div className={styles["education-main"]}>
          <div className={styles["basic-education"]}>
            <Fade direction="up" duration={1000} triggerOnce>
              <div className={styles["heading-div"]}>
                <div className={styles["heading-text-div"]}>
                  <h1
                    className={styles["heading-text"]}
                    style={{ color: theme.text }}
                  >
                    Education
                  </h1>
                  <h3
                    className={styles["heading-sub-text"]}
                    style={{ color: theme.secondaryText }}
                  >
                    Academic Background, Honours & Awards
                  </h3>
                </div>
              </div>
            </Fade>
            <Educations theme={theme} />
            <Certifications theme={theme} />
          </div>
        </div>
      </>
    );
  }
}

export default Education;
