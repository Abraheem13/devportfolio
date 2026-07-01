import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

import SEO from "components/SEO";
import { neuraX } from "portfolio.js";
import styles from "styles/NeuraXPage.module.css";

export default function NeuraXPage({ theme }) {
  return (
    <>
      <SEO
        title="Neura-X | Digitalisation with AI"
        desc="Neura-X is a research-grounded AI venture founded by Raja Abraheem Rashid. Now operating in London, we build practical AI frameworks at the intersection of applied AI and enterprise digitalisation."
        url="neura-x"
      />
      <div className={styles["page"]}>
        {/* HERO */}
        <Fade direction="up" duration={1000} triggerOnce>
          <div className={styles["hero"]}>
            <p
              className={styles["eyebrow"]}
              style={{ color: theme.imageHighlight }}
            >
              {neuraX.badge} · London
            </p>
            <h1 className={styles["title"]} style={{ color: theme.text }}>
              {neuraX.title}
            </h1>
            <p className={styles["tagline"]} style={{ color: theme.text }}>
              {neuraX.tagline}
            </p>
            <p
              className={styles["short-intro"]}
              style={{ color: theme.secondaryText }}
            >
              {neuraX.shortIntro}
            </p>
          </div>
        </Fade>

        {/* LONDON ANNOUNCEMENT */}
        <Fade direction="up" duration={1000} triggerOnce>
          <div
            className={styles["announcement"]}
            style={{ borderColor: "rgba(14, 107, 168, 0.25)" }}
          >
            <span
              className={styles["announcement-tag"]}
              style={{
                background: theme.imageHighlight,
                color: theme.body,
              }}
            >
              {neuraX.londonAnnouncement.tag}
            </span>
            <h2
              className={styles["announcement-heading"]}
              style={{ color: theme.text }}
            >
              {neuraX.londonAnnouncement.heading}
            </h2>
            <p
              className={styles["announcement-body"]}
              style={{ color: theme.secondaryText }}
            >
              {neuraX.londonAnnouncement.body}
            </p>
          </div>
        </Fade>

        {/* THE STORY */}
        <section className={styles["section"]}>
          <h2 className={styles["section-heading"]} style={{ color: theme.text }}>
            The story
          </h2>
          <p className={styles["prose"]} style={{ color: theme.text }}>
            {neuraX.description}
          </p>
        </section>

        {/* APPROACH */}
        <section className={styles["section"]}>
          <h2 className={styles["section-heading"]} style={{ color: theme.text }}>
            How we work
          </h2>
          <div className={styles["approach-grid"]}>
            {neuraX.approach.map((item, i) => (
              <Fade key={i} direction="up" duration={900} triggerOnce>
                <div
                  className={styles["approach-card"]}
                  style={{ borderLeftColor: theme.imageHighlight }}
                >
                  <h3
                    className={styles["approach-title"]}
                    style={{ color: theme.text }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={styles["approach-body"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {item.body}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* PILLARS */}
        <section className={styles["section"]}>
          <h2 className={styles["section-heading"]} style={{ color: theme.text }}>
            Where we go deep
          </h2>
          <div className={styles["pillars-grid"]}>
            {neuraX.pillars.map((pillar, i) => (
              <Fade key={i} direction="up" duration={900} triggerOnce>
                <div className={styles["pillar-card"]}>
                  <div
                    className={styles["pillar-dot"]}
                    style={{ backgroundColor: theme.imageHighlight }}
                  />
                  <h3
                    className={styles["pillar-title"]}
                    style={{ color: theme.text }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={styles["pillar-desc"]}
                    style={{ color: theme.secondaryText }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* WORK WITH US */}
        <Fade direction="up" duration={1000} triggerOnce>
          <div className={styles["cta"]}>
            <h2 className={styles["cta-heading"]} style={{ color: theme.text }}>
              Work with us
            </h2>
            <p
              className={styles["cta-body"]}
              style={{ color: theme.secondaryText }}
            >
              We are selective about the engagements we take on. If you are building
              something at the frontier of applied AI, agentic systems, or trustworthy
              ML, and you want a team that treats every project like a research
              contribution, get in touch.
            </p>
            <div className={styles["cta-row"]}>
              <a
                href={`mailto:${neuraX.contactEmail}`}
                className={styles["cta-primary"]}
                style={{
                  background: theme.text,
                  color: theme.body,
                }}
              >
                Email Neura-X →
              </a>
              <Link href="/contact">
                <a
                  className={styles["cta-secondary"]}
                  style={{ color: theme.text, borderColor: theme.text }}
                >
                  Full contact page
                </a>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
