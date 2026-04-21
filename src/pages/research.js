import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import SEO from "components/SEO";
import Research from "containers/research/Research";
import { research } from "portfolio.js";
import styles from "styles/Research.module.css";

class ResearchPage extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <SEO
          title="Research | Raja Abraheem Rashid"
          desc="Research areas and publications, nested learning, federated learning, trustworthy AI, agentic AI, and applied ML for security."
          url="research"
        />
        <div className={styles["research-page"]}>
          <Fade direction="up" duration={1000} triggerOnce>
            <div className={styles["page-header"]}>
              <p
                className={styles["page-eyebrow"]}
                style={{ color: theme.imageHighlight }}
              >
                {research.subtitle}
              </p>
              <h1 className={styles["page-title"]} style={{ color: theme.text }}>
                {research.title}
              </h1>
              <p
                className={styles["page-description"]}
                style={{ color: theme.secondaryText }}
              >
                {research.description}
              </p>
            </div>
          </Fade>
          <Research theme={theme} />
        </div>
      </>
    );
  }
}

export default ResearchPage;
