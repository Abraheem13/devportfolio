import React, { Component } from "react";
import Link from "next/link";

import { greeting } from "../../portfolio.js";
import styles from "./Header.module.css";

const navLinks = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/education",
    name: "Education",
  },
  {
    url: "/experience",
    name: "Experience",
  },
  {
    url: "/research",
    name: "Research",
  },
  {
    url: "/collaborations",
    name: "Collaborations",
  },
  {
    url: "/blogs",
    name: "Writing",
  },
  {
    url: "/projects",
    name: "Projects",
  },
  {
    url: "/neura-x",
    name: "Neura-X",
  },
  {
    url: "/contact",
    name: "Contact Me",
  },
];

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <header className={styles.header}>
          <Link href="/">
            <a className={styles.logo}>
              <span
                className={styles["logo-name"]}
                style={{ color: theme.text, textDecoration: "none" }}
              >
                {greeting.logo_name}
              </span>
            </a>
          </Link>
          <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
          <label className={styles["menu-icon"]} htmlFor="menu-btn">
            <span className={styles.navicon}></span>
          </label>
          <ul className={styles.menu} style={{ backgroundColor: theme.body }}>
            {navLinks.map((link, index) => (
              <li key={`${link.name}_${index}`}>
                <Link
                  href={link.url}
                  // onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  // onMouseOut={(event) => onMouseOut(event)}
                >
                  <a
                    activestyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
export default Header;
