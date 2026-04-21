import React, { Component } from "react";

import styles from "./Certifications.module.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={styles["awards-wrapper"]} id="awards">
        <h2
          className={styles["awards-header"]}
          style={{ color: theme.text }}
        >
          Honours & Awards
        </h2>
        <div className={styles["awards-body"]}>
          {certifications.certifications.map((cert, index) => (
            <CertificationCard key={index} certificate={cert} theme={theme} />
          ))}
        </div>
      </div>
    );
  }
}

export default Certifications;
