import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import SEO from "components/SEO";
import styles from "styles/Blog.module.css";
import { blogs } from "../../portfolio";

const BlogPost = ({ theme }) => {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogs.section.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles["blogs-page"]}>
        <div className={styles["not-found"]} style={{ color: theme.text }}>
          <p>Post not found.</p>
          <Link href="/blogs">
            <a style={{ color: theme.imageHighlight }}>← Back to writing</a>
          </Link>
        </div>
      </div>
    );
  }

  // split text on blank lines into paragraphs; render markdown-style **bold** inside
  const paragraphs = post.text.split(/\n\s*\n/);

  const renderParagraph = (text, idx) => {
    // simple **bold** handler
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={idx} className={styles["article-paragraph"]} style={{ color: theme.text }}>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} style={{ color: theme.text }}>
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </p>
    );
  };

  return (
    <>
      <SEO
        title={`${post.title} | Raja Abraheem Rashid`}
        desc={post.tagline}
        url={`blogs/${post.slug}`}
      />
      <div className={styles["blogs-page"]}>
        <Fade direction="up" duration={1000} triggerOnce>
          <article className={styles["article"]}>
            <Link href="/blogs">
              <a className={styles["back-link"]} style={{ color: theme.secondaryText }}>
                ← All writing
              </a>
            </Link>

            <div className={styles["article-meta"]}>
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

            <h1 className={styles["article-title"]} style={{ color: theme.text }}>
              {post.title}
            </h1>

            <p
              className={styles["article-tagline"]}
              style={{ color: theme.secondaryText }}
            >
              {post.tagline}
            </p>

            <div className={styles["article-body"]}>
              {paragraphs.map((p, i) => renderParagraph(p, i))}
            </div>

            <div className={styles["article-footer"]}>
              <p style={{ color: theme.secondaryText }}>
               , Raja Abraheem Rashid
              </p>
            </div>
          </article>
        </Fade>
      </div>
    </>
  );
};

export default BlogPost;
