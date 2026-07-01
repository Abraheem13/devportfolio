import Head from "next/head";

const SEO = ({
  desc = "Raja Abraheem Rashid, AI/ML researcher working on nested learning, federated learning, trustworthy AI, and agentic LLM systems. AI/ML Software Engineer at EMS, AI Researcher & Co-Investigator at TRL, IBA, and founder of Neura-X.",
  author = "Raja Abraheem Rashid",
  meta,
  title = "Raja Abraheem Rashid | AI/ML Researcher",
  url = "",
}) => {
  const metaData = [
    {
      name: `description`,
      content: desc,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: desc,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:site_name`,
      content: `Raja Abraheem Rashid`,
    },
    {
      property: `og:url`,
      content: `/${url}`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: desc,
    },
    {
      property: `twitter:url`,
      content: `/${url}`,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="raja abraheem rashid, abraheem rashid, ai researcher, machine learning researcher, nested learning, federated learning, federated unlearning, trustworthy ai, agentic ai, llm, large language models, efficient transformers, reinforcement learning, physics-informed rl, deep learning, brunel msc ai, curium ai, iba trl, ncert, phd ai"
      />
      {metaData.map(({ name, content, property }, i) =>
        property ? (
          <meta key={i} property={property} content={content} />
        ) : (
          <meta key={i} name={name} content={content} />
        )
      )}
    </Head>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

export default SEO;
