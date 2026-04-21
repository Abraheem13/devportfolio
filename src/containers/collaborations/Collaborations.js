import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import { collaborations } from "../../portfolio";
import styles from "./Collaborations.module.css";

const INITIAL_PROFS = 6;
const INITIAL_PROJECTS = 3;

class Collaborations extends Component {
  state = {
    showAllProfs: false,
    showAllProjects: false,
  };

  getInitials = (name) => {
    if (!name || name === "TBD") return "?";
    const clean = name.replace(/^Dr\.\s+|^Prof\.\s+/i, "").trim();
    const parts = clean.split(/\s+/);
    if (parts.length === 1) return parts[0][0];
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  toggleProfs = () => this.setState((s) => ({ showAllProfs: !s.showAllProfs }));
  toggleProjects = () => this.setState((s) => ({ showAllProjects: !s.showAllProjects }));

  render() {
    const theme = this.props.theme;
    const cta = collaborations.linkedInCTA;
    const { showAllProfs, showAllProjects } = this.state;

    const profsToShow = showAllProfs
      ? collaborations.professors
      : collaborations.professors.slice(0, INITIAL_PROFS);

    const projectsToShow = showAllProjects
      ? collaborations.supervisedProjects
      : collaborations.supervisedProjects.slice(0, INITIAL_PROJECTS);

    const profsRemaining = collaborations.professors.length - INITIAL_PROFS;
    const projectsRemaining = collaborations.supervisedProjects.length - INITIAL_PROJECTS;

    return (
      <div className={styles["collab-main"]} id="collaborations">
        {/* Stats */}
        <section className={styles["section"]}>
          <div className={styles["stats-row"]}>
            {collaborations.stats.map((stat, i) => (
              <Fade key={i} direction="up" duration={900} triggerOnce>
                <div className={styles["stat"]}>
                  <div
                    className={styles["stat-value"]}
                    style={{ color: theme.text }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={styles["stat-label"]}
                    style={{ color: theme.text }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className={styles["stat-caption"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {stat.caption}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* LinkedIn CTA */}
        {cta && (
          <section className={styles["section"]}>
            <div
              className={styles["linkedin-cta"]}
              style={{ borderColor: "rgba(14, 107, 168, 0.25)" }}
            >
              <div className={styles["cta-left"]}>
                <h3
                  className={styles["cta-heading"]}
                  style={{ color: theme.text }}
                >
                  {cta.heading}
                </h3>
                <p
                  className={styles["cta-body"]}
                  style={{ color: theme.secondaryText }}
                >
                  {cta.body}
                </p>
              </div>
              <div className={styles["cta-right"]}>
                <a
                  href={cta.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["cta-btn"]}
                  style={{ background: "#0077B5", color: "#fff" }}
                >
                  {cta.linkText}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Professor Grid */}
        <section className={styles["section"]}>
          <h2 className={styles["section-heading"]} style={{ color: theme.text }}>
            Academic Collaborators
          </h2>
          <p
            className={styles["section-note"]}
            style={{ color: theme.secondaryText }}
          >
            Researchers and professors I have collaborated with across institutions.
          </p>

          <div className={styles["professors-grid"]}>
            {profsToShow.map((prof, i) => (
              <Fade key={i} direction="up" duration={900} triggerOnce>
                <div className={styles["prof-card"]}>
                  <div className={styles["prof-header"]}>
                    <div
                      className={styles["prof-avatar"]}
                      style={{ backgroundColor: prof.color }}
                    >
                      {this.getInitials(prof.name)}
                    </div>
                    <div className={styles["prof-ident"]}>
                      <h3
                        className={styles["prof-name"]}
                        style={{ color: theme.text }}
                      >
                        {prof.name}
                      </h3>
                      <p
                        className={styles["prof-role"]}
                        style={{ color: prof.color }}
                      >
                        {prof.role}
                      </p>
                    </div>
                  </div>
                  <p
                    className={styles["prof-affiliation"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {prof.affiliation}
                  </p>
                  <p
                    className={styles["prof-description"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {prof.description}
                  </p>
                  <div className={styles["prof-links"]}>
                    {prof.scholarUrl && (
                      <a
                        className={styles["prof-link"]}
                        href={prof.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: theme.imageHighlight }}
                      >
                        Google Scholar →
                      </a>
                    )}
                    {prof.profileUrl && prof.profileUrl !== "#" && (
                      <a
                        className={styles["prof-link"]}
                        href={prof.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: theme.imageHighlight }}
                      >
                        Profile →
                      </a>
                    )}
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {profsRemaining > 0 && (
            <div className={styles["show-more-wrap"]}>
              <button
                onClick={this.toggleProfs}
                className={styles["show-more-btn"]}
                style={{ borderColor: theme.text, color: theme.text }}
              >
                {showAllProfs
                  ? "Show less"
                  : `Show ${profsRemaining} more collaborator${profsRemaining > 1 ? "s" : ""}`}
              </button>
            </div>
          )}
        </section>

        {/* Supervised Projects */}
        <section className={styles["section"]}>
          <h2 className={styles["section-heading"]} style={{ color: theme.text }}>
            Research Supervision
          </h2>
          <p
            className={styles["section-note"]}
            style={{ color: theme.secondaryText }}
          >
            Co-supervising {collaborations.supervisedProjects.length} undergraduate
            research projects at the Institute of Business Administration (IBA),
            Karachi alongside Dr. Faisal Iradat, targeting Q1 journals and A* conferences.
          </p>

          <div className={styles["projects-grid"]}>
            {projectsToShow.map((project, i) => (
              <Fade key={i} direction="up" duration={900} triggerOnce>
                <div className={styles["project-card"]}>
                  <h3
                    className={styles["project-title"]}
                    style={{ color: theme.imageHighlight }}
                  >
                    {project.title}
                  </h3>
                  <h4
                    className={styles["project-subtitle"]}
                    style={{ color: theme.text }}
                  >
                    {project.subtitle}
                  </h4>
                  <p
                    className={styles["project-description"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {project.description}
                  </p>
                </div>
              </Fade>
            ))}
          </div>

          {projectsRemaining > 0 && (
            <div className={styles["show-more-wrap"]}>
              <button
                onClick={this.toggleProjects}
                className={styles["show-more-btn"]}
                style={{ borderColor: theme.text, color: theme.text }}
              >
                {showAllProjects
                  ? "Show less"
                  : `Show ${projectsRemaining} more project${projectsRemaining > 1 ? "s" : ""}`}
              </button>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Collaborations;
