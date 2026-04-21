import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import SEO from "components/SEO";
import GithubRepoCard from "components/githubRepoCard/GithubRepoCard";
import Button from "components/button/Button";
import { projectsHeader } from "../portfolio.js";
import ProjectsData from "shared/opensource/projects.json";
import styles from "styles/Projects.module.css";

const INITIAL_PROJECTS = 3;

class Projects extends Component {
  state = { showAll: false };

  toggle = () => this.setState((s) => ({ showAll: !s.showAll }));

  render() {
    const theme = this.props.theme;
    const { showAll } = this.state;

    const total = ProjectsData.data.length;
    const visible = showAll
      ? ProjectsData.data
      : ProjectsData.data.slice(0, INITIAL_PROJECTS);
    const remaining = total - INITIAL_PROJECTS;

    return (
      <>
        <SEO
          title="Projects | Raja Abraheem Rashid"
          desc="Selected AI/ML engineering projects, national-scale LLM infrastructure, agentic pipelines, and applied research systems."
          url="projects"
        />
        <div className={styles["projects-main"]}>
          <div className={styles["basic-projects"]}>
            <Fade direction="up" duration={1000} triggerOnce>
              <div className={styles["projects-heading-text-div"]}>
                <h1
                  className={styles["projects-heading-text"]}
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className={styles["projects-header-detail-text"]}
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </Fade>
          </div>
          <div className={styles["repo-cards-div-main"]}>
            {visible.map((repo, i) => (
              <GithubRepoCard key={`repo_id_${i}`} repo={repo} theme={theme} />
            ))}
          </div>

          {remaining > 0 && (
            <div className={styles["show-more-wrapper"]}>
              <button
                onClick={this.toggle}
                className={styles["show-more-btn"]}
                style={{ borderColor: theme.text, color: theme.text }}
              >
                {showAll
                  ? "Show less"
                  : `Show ${remaining} more project${remaining > 1 ? "s" : ""}`}
              </button>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <Button
              text={"More on GitHub"}
              className={"project-button"}
              href="https://github.com/Abraheem13"
              newTab={true}
              theme={theme}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
