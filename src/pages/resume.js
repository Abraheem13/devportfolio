import React, { Component } from "react";

import SEO from "components/SEO";
import styles from "styles/Resume.module.css";

class Resume extends Component {
  render() {
    return (
      <>
        <SEO
          title="Resume | Raja Abraheem Rashid"
          desc="CV of Raja Abraheem Rashid, AI/ML Researcher."
          url="resume"
        />
        <iframe
          src="/documents/abraheem_resume.pdf"
          className={styles["iframe-resume"]}
          title="Raja Abraheem Rashid, CV"
        ></iframe>
      </>
    );
  }
}

export default Resume;
