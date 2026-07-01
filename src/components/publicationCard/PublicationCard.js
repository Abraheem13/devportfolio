import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./PublicationCard.module.css";

// Distinct colors per publication status
const STATUS_COLORS = {
  Published: "#1B7A3D",     // green
  Accepted: "#0E6BA8",      // blue
  "Under Review": "#B5651D", // amber/brown
  "In Preparation": "#6C6C6C", // grey
};

class PublicationCard extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  toggle = () => this.setState((s) => ({ expanded: !s.expanded }));

  render() {
    const { publication, theme } = this.props;
    const { expanded } = this.state;
    const isJournal = publication.type === "Journal";
    const statusColor = STATUS_COLORS[publication.status] || theme.secondaryText;
    const links = publication.links || {};
    const hasLinks = links.paper || links.researchGate || links.scholar;

    const stop = (e) => e.stopPropagation();

    return (
      <Fade direction="up" duration={900} triggerOnce>
        <div
          className={styles["pub"]}
          onClick={this.toggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              this.toggle();
            }
          }}
        >
          <div className={styles["meta-row"]}>
            <div className={styles["badges"]}>
              <span
                className={styles["type-badge"]}
                style={{
                  color: isJournal ? "#0E6BA8" : "#8D0801",
                  borderColor: isJournal ? "#0E6BA8" : "#8D0801",
                }}
              >
                {publication.type || "Paper"}
              </span>
              <span
                className={styles["status-badge"]}
                style={{ color: "#fff", background: statusColor }}
              >
                {publication.status}
              </span>
            </div>
            <span
              className={styles["year"]}
              style={{ color: theme.secondaryText }}
            >
              {publication.year}
            </span>
          </div>

          <h3 className={styles["title"]} style={{ color: theme.text }}>
            {publication.title}
          </h3>

          <p className={styles["authors"]} style={{ color: theme.text }}>
            {publication.authors}
          </p>

          <p className={styles["venue"]} style={{ color: theme.secondaryText }}>
            {publication.venue}
          </p>

          {/* Published paper links */}
          {hasLinks && (
            <div className={styles["links"]} onClick={stop}>
              {links.paper && (
                <a
                  href={links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-pill"]}
                  style={{ borderColor: statusColor, color: statusColor }}
                >
                  Paper
                </a>
              )}
              {links.researchGate && (
                <a
                  href={links.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-pill"]}
                  style={{ borderColor: statusColor, color: statusColor }}
                >
                  ResearchGate
                </a>
              )}
              {links.scholar && (
                <a
                  href={links.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-pill"]}
                  style={{ borderColor: statusColor, color: statusColor }}
                >
                  Google Scholar
                </a>
              )}
            </div>
          )}

          {publication.areas && publication.areas.length > 0 && (
            <div className={styles["tags"]}>
              {publication.areas.map((area, i) => (
                <span
                  key={i}
                  className={styles["tag"]}
                  style={{ color: theme.secondaryText }}
                >
                  {area}
                </span>
              ))}
            </div>
          )}

          <div
            className={
              expanded
                ? `${styles["description"]} ${styles["expanded"]}`
                : styles["description"]
            }
            style={{ color: theme.secondaryText }}
          >
            {publication.description}
          </div>

          <div
            className={styles["toggle"]}
            style={{ color: theme.imageHighlight }}
          >
            {expanded ? "Show less" : "Read more →"}
          </div>
        </div>
      </Fade>
    );
  }
}

export default PublicationCard;
