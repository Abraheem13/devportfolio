import React from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./Greeting.module.css";
import SocialMedia from "components/socialMedia/SocialMedia";
import { greeting, socialMediaLinksHome } from "portfolio";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade direction="bottom" duration={1200} triggerOnce distance="30px">
      <div className={styles["greet-main"]} id="greeting">
        {/* HERO */}
        <div className={styles["hero"]}>
          <div className={styles["hero-text"]}>
            <p
              className={styles["eyebrow"]}
              style={{ color: theme.imageHighlight }}
            >
              AI/ML Researcher · London
            </p>
            <h1
              className={styles["hero-title"]}
              style={{ color: theme.text }}
            >
              {greeting.title}
            </h1>
            <p
              className={styles["hero-subtitle"]}
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>

            <div className={styles["hero-actions"]}>
              <a
                className={styles["primary-btn"]}
                href="/research"
                style={{
                  background: theme.text,
                  color: theme.body,
                  borderColor: theme.text,
                }}
              >
                Read my research →
              </a>
              <a
                className={styles["ghost-btn"]}
                href="/collaborations"
                style={{ color: theme.text, borderColor: theme.text }}
              >
                Collaborations
              </a>
            </div>

            <div className={styles["social-row"]}>
              <SocialMedia
                theme={theme}
                socialMediaLinks={socialMediaLinksHome}
              />
            </div>
          </div>

          <div className={styles["hero-image-wrapper"]}>
            <div
              className={styles["hero-image-ring"]}
              style={{ borderColor: theme.imageHighlight }}
            >
              <img
                src="/images/abraheem.png"
                alt="Raja Abraheem Rashid"
                className={styles["hero-image"]}
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
