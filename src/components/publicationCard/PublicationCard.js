import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./PublicationCard.module.css";

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
              className={styles["status"]}
              style={{ color: theme.secondaryText }}
            >
              {publication.status} · {publication.year}
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
