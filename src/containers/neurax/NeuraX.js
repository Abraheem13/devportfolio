import React from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./NeuraX.module.css";
import { neuraX } from "portfolio";

export default function NeuraX({ theme }) {
  return (
    <div className={styles["wrapper"]}>
      <Fade direction="up" duration={1200} triggerOnce>
        <div
          className={styles["card"]}
          style={{ borderColor: "rgba(14, 107, 168, 0.2)" }}
        >
          <div className={styles["left"]}>
            <span
              className={styles["badge"]}
              style={{
                color: theme.imageHighlight,
                borderColor: theme.imageHighlight,
              }}
            >
              {neuraX.badge} · Neura-X
            </span>
            <h2 className={styles["title"]} style={{ color: theme.text }}>
              {neuraX.tagline}
            </h2>
            <p
              className={styles["description"]}
              style={{ color: theme.secondaryText }}
            >
              {neuraX.description}
            </p>
            <p className={styles["role"]} style={{ color: theme.text }}>
              {neuraX.role}
            </p>
          </div>
          <div className={styles["pillars"]}>
            {neuraX.pillars.map((pillar, i) => (
              <div key={i} className={styles["pillar"]}>
                <div
                  className={styles["pillar-dot"]}
                  style={{ backgroundColor: theme.imageHighlight }}
                />
                <h4
                  className={styles["pillar-title"]}
                  style={{ color: theme.text }}
                >
                  {pillar.title}
                </h4>
                <p
                  className={styles["pillar-desc"]}
                  style={{ color: theme.secondaryText }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
