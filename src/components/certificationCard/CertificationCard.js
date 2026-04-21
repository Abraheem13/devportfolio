import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./CertificationCard.module.css";

class CertificationCard extends Component {
  render() {
    const cert = this.props.certificate;
    const theme = this.props.theme;

    const hasLink = cert.certificate_link && cert.certificate_link !== "";

    const cardBody = (
      <div
        className={styles["award-card"]}
        style={{ borderLeftColor: cert.color_code || theme.imageHighlight }}
      >
        <h3 className={styles["award-title"]} style={{ color: theme.text }}>
          {cert.title}
        </h3>
        <p
          className={styles["award-subtitle"]}
          style={{ color: theme.secondaryText }}
        >
          {cert.subtitle}
        </p>
      </div>
    );

    return (
      <Fade direction="up" duration={900} triggerOnce>
        {hasLink ? (
          <a
            href={cert.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["card-link"]}
          >
            {cardBody}
          </a>
        ) : (
          cardBody
        )}
      </Fade>
    );
  }
}

export default CertificationCard;
