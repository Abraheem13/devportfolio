import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import SEO from "components/SEO";
import styles from "styles/Blog.module.css";
import { blogs } from "../../portfolio";

const BlogsIndex = ({ theme }) => {
  return (
    <>
      <SEO
        title="Writing | Raja Abraheem Rashid"
        desc="Technical writing on nested learning, federated learning, trustworthy AI, and the engineering that makes them real."
        url="blogs"
      />
      <div className={styles["blogs-page"]}>
        <Fade direction="up" duration={1000} triggerOnce>
          <div className={styles["blogs-header"]}>
            <p
              className={styles["eyebrow"]}
              style={{ color: theme.imageHighlight }}
            >
              Writing
            </p>
            <h1 className={styles["page-title"]} style={{ color: theme.text }}>
              {blogs.title}
            </h1>
            <p
              className={styles["page-description"]}
              style={{ color: theme.secondaryText }}
            >
              {blogs.subtitle}
            </p>
            <div
              className={styles["sunday-banner"]}
              style={{
                borderColor: theme.imageHighlight,
                background: "rgba(14, 107, 168, 0.06)",
              }}
            >
              <span
                className={styles["banner-dot"]}
                style={{ backgroundColor: theme.imageHighlight }}
              />
              <span
                className={styles["banner-text"]}
                style={{ color: theme.text }}
              >
                {blogs.tagline}
              </span>
            </div>
          </div>
        </Fade>

        <div className={styles["blogs-layout"]}>
          {/* MAIN: post list */}
          <div className={styles["posts-col"]}>
            {blogs.section.map((post, i) => (
              <Fade key={i} direction="up" duration={900} triggerOnce>
                <Link href={`/blogs/${post.slug}`}>
                  <a className={styles["post-link"]}>
                    <article className={styles["post-card"]}>
                      <div className={styles["post-meta"]}>
                        <span
                          className={styles["category"]}
                          style={{
                            color: theme.imageHighlight,
                            borderColor: theme.imageHighlight,
                          }}
                        >
                          {post.category}
                        </span>
                        <span
                          className={styles["date"]}
                          style={{ color: theme.secondaryText }}
                        >
                          {post.date} · {post.readTime} read
                        </span>
                      </div>
                      <h2
                        className={styles["post-title"]}
                        style={{ color: theme.text }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className={styles["post-tagline"]}
                        style={{ color: theme.secondaryText }}
                      >
                        {post.tagline}
                      </p>
                      <span
                        className={styles["read-more"]}
                        style={{ color: theme.imageHighlight }}
                      >
                        Read the post →
                      </span>
                    </article>
                  </a>
                </Link>
              </Fade>
            ))}
          </div>

          {/* SIDEBAR: featured papers */}
          <aside className={styles["sidebar"]}>
            <div className={styles["sidebar-inner"]}>
              <h3
                className={styles["sidebar-heading"]}
                style={{ color: theme.text }}
              >
                Featured Papers
              </h3>
              <p
                className={styles["sidebar-note"]}
                style={{ color: theme.secondaryText }}
              >
                A selection of papers, recent and classic, that have shaped my research.
              </p>
              <ul className={styles["papers-list"]}>
                {blogs.featuredPapers.map((paper, i) => (
                  <li key={i} className={styles["paper-item"]}>
                    <h4
                      className={styles["paper-title"]}
                      style={{ color: theme.text }}
                    >
                      {paper.title}
                    </h4>
                    <p
                      className={styles["paper-meta"]}
                      style={{ color: theme.secondaryText }}
                    >
                      {paper.authors} · <em>{paper.venue}</em>
                    </p>
                    <p
                      className={styles["paper-note"]}
                      style={{ color: theme.secondaryText }}
                    >
                      {paper.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {blogs.communityCTA && (
              <div
                className={styles["community-card"]}
                style={{ borderColor: "rgba(228, 64, 95, 0.3)" }}
              >
                <h3
                  className={styles["community-heading"]}
                  style={{ color: theme.text }}
                >
                  {blogs.communityCTA.heading}
                </h3>
                <p
                  className={styles["community-body"]}
                  style={{ color: theme.secondaryText }}
                >
                  {blogs.communityCTA.body}
                </p>
                <a
                  href={blogs.communityCTA.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["community-link"]}
                  style={{ background: "#E4405F", color: "#fff" }}
                >
                  {blogs.communityCTA.linkText}
                </a>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogsIndex;
