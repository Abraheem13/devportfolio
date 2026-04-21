import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./CollaborationCard.module.css";

class CollaborationCard extends Component {
  getInitials(name) {
    if (!name || name === "TBD") return "?";
    const parts = name.replace("Dr. ", "").replace("Prof. ", "").split(" ");
    if (parts.length === 1) return parts[0][0];
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  render() {
    const { professor, theme } = this.props;
    const initials = this.getInitials(professor.name);

    const CardContent = (
      <div
        className={styles["collab-card"]}
        style={{ borderTop: `4px solid ${professor.color}` }}
      >
        <div
          className={styles["collab-avatar"]}
          style={{ backgroundColor: professor.color }}
        >
          {initials}
        </div>
        <h3 className={styles["collab-name"]} style={{ color: theme.text }}>
          {professor.name}
        </h3>
        <p
          className={styles["collab-role"]}
          style={{ color: professor.color }}
        >
          {professor.role}
        </p>
        <p
          className={styles["collab-affiliation"]}
          style={{ color: theme.secondaryText }}
        >
          {professor.affiliation}
        </p>
        <p
          className={styles["collab-description"]}
          style={{ color: theme.secondaryText }}
        >
          {professor.description}
        </p>
      </div>
    );

    return (
      <Fade direction="up" duration={1200} triggerOnce>
        {professor.link && professor.link !== "#" ? (
          <a
            href={professor.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["collab-card-link"]}
          >
            {CardContent}
          </a>
        ) : (
          CardContent
        )}
      </Fade>
    );
  }
}

export default CollaborationCard;
