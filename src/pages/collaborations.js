import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import SEO from "components/SEO";
import Collaborations from "containers/collaborations/Collaborations";
import { collaborations } from "portfolio.js";
import styles from "styles/Collaborations.module.css";

class CollaborationsPage extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <SEO
          title="Collaborations | Raja Abraheem Rashid"
          desc="Research collaborations, academic network, and supervised student projects, spanning the UK, US, UAE, Pakistan, Saudi Arabia, and Oman."
          url="collaborations"
        />
        <div className={styles["collab-page"]}>
          <Fade direction="up" duration={1000} triggerOnce>
            <div className={styles["page-header"]}>
              <p
                className={styles["page-eyebrow"]}
                style={{ color: theme.imageHighlight }}
              >
                {collaborations.subtitle}
              </p>
              <h1 className={styles["page-title"]} style={{ color: theme.text }}>
                {collaborations.title}
              </h1>
              <p
                className={styles["page-description"]}
                style={{ color: theme.secondaryText }}
              >
                {collaborations.description}
              </p>
            </div>
          </Fade>
          <Collaborations theme={theme} />
        </div>
      </>
    );
  }
}

export default CollaborationsPage;
