import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import PublicationCard from "../../components/publicationCard/PublicationCard";
import { research } from "../../portfolio";
import styles from "./Research.module.css";

class Research extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "All" };
  }

  setFilter = (filter) => this.setState({ filter });

  render() {
    const theme = this.props.theme;
    const { filter } = this.state;

    const pubs = research.publications;
    const count = (key) => {
      if (key === "All") return pubs.length;
      if (key === "Journal" || key === "Conference")
        return pubs.filter((p) => p.type === key).length;
      return pubs.filter((p) => p.status === key).length;
    };

    const filters = ["All", "Published", "Accepted", "Under Review", "In Preparation", "Journal", "Conference"];

    const filtered = pubs.filter((p) => {
      if (filter === "All") return true;
      if (filter === "Journal" || filter === "Conference") return p.type === filter;
      return p.status === filter;
    });

    return (
      <div className={styles["research-main"]} id="research">
        {/* TRL Milestone Banner */}
        {research.milestone && (
          <Fade direction="up" duration={1000} triggerOnce>
            <div
              className={styles["milestone-banner"]}
              style={{ borderColor: "rgba(14, 107, 168, 0.28)" }}
            >
              <div className={styles["milestone-inner"]}>
                <span
                  className={styles["milestone-tag"]}
                  style={{
                    background: theme.imageHighlight,
                    color: theme.body,
                  }}
                >
                  {research.milestone.tag}
                </span>
                <h2
                  className={styles["milestone-heading"]}
                  style={{ color: theme.text }}
                >
                  {research.milestone.heading}
                </h2>
                <p
                  className={styles["milestone-body"]}
                  style={{ color: theme.secondaryText }}
                >
                  {research.milestone.body}
                </p>
                {research.milestone.ctaLink && (
                  <a
                    href={research.milestone.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["milestone-cta"]}
                    style={{ color: theme.imageHighlight }}
                  >
                    {research.milestone.ctaLabel}
                  </a>
                )}
              </div>
            </div>
          </Fade>
        )}

        {/* Research Areas */}
        <section className={styles["section"]}>
          <h2 className={styles["section-heading"]} style={{ color: theme.text }}>
            Research Areas
          </h2>
          <div className={styles["areas-grid"]}>
            {research.researchAreas.map((area, i) => (
              <Fade key={i} direction="up" duration={900} triggerOnce>
                <div
                  className={styles["area-card"]}
                  style={{ borderLeftColor: area.color }}
                >
                  <h3
                    className={styles["area-title"]}
                    style={{ color: theme.text }}
                  >
                    {area.title}
                  </h3>
                  <p
                    className={styles["area-desc"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {area.description}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className={styles["section"]}>
          <div className={styles["section-header"]}>
            <h2
              className={styles["section-heading"]}
              style={{ color: theme.text }}
            >
              Publications
            </h2>
            <p
              className={styles["section-note"]}
              style={{ color: theme.secondaryText }}
            >
              Click any paper to expand a description of its contribution.
            </p>
          </div>

          <div className={styles["filter-bar"]}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => this.setFilter(f)}
                className={
                  filter === f
                    ? `${styles["filter-btn"]} ${styles["filter-active"]}`
                    : styles["filter-btn"]
                }
                style={
                  filter === f
                    ? {
                        backgroundColor: theme.text,
                        color: theme.body,
                        borderColor: theme.text,
                      }
                    : {
                        color: theme.secondaryText,
                        borderColor: "rgba(0,0,0,0.15)",
                      }
                }
              >
                {f} <span className={styles["count"]}>({count(f)})</span>
              </button>
            ))}
          </div>

          <div className={styles["pubs-list"]}>
            {filtered.map((pub, i) => (
              <PublicationCard
                key={`${pub.title}-${i}`}
                publication={pub}
                theme={theme}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Research;
