import React, { Component } from "react";

import SEO from "components/SEO";
import SocialMedia from "components/socialMedia/SocialMedia";
import Button from "components/button/Button";
import AddressImg from "atoms/AddressImg";
import { Zoom } from "react-awesome-reveal";
import styles from "styles/Contact.module.css";
import { contactPageData, socialMediaLinks } from "../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <SEO
          title="Contact | Raja Abraheem Rashid"
          desc="Get in touch with Raja Abraheem Rashid, AI/ML researcher. Open to research collaborations, PhD discussions, and conversations on federated learning, trustworthy AI, and agentic systems."
          url="contact"
        />
        <div className={styles["contact-main"]}>
          <div className={styles["basic-contact"]}>
            <Zoom duration={1000}>
              <div className={styles["contact-heading-div"]}>
                <div className={styles["contact-heading-img-div"]}>
                  <AddressImg theme={theme} />
                </div>
                <div className={styles["contact-heading-text-div"]}>
                  <h1
                    className={styles["contact-heading-text"]}
                    style={{ color: theme.text }}
                  >
                    {ContactData["title"]}
                  </h1>
                  <p
                    className={styles["contact-header-detail-text"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {ContactData["description"]}
                  </p>
                  <SocialMedia
                    theme={theme}
                    socialMediaLinks={socialMediaLinks}
                  />
                  <div className={styles["resume-btn-div"]}>
                    <Button
                      text="Reach me via email"
                      href="mailto:abraheemrashid@outlook.com"
                      theme={theme}
                    />
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
