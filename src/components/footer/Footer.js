import React from "react";
import styles from "./Footer.module.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <div className={styles["footer-div"]}>
      <p className={styles["footer-text"]} style={{ color: props.theme.secondaryText }}>
        © {year} Raja Abraheem Rashid · London
      </p>
    </div>
  );
}
