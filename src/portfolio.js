/* Portfolio configuration, Raja Abraheem Rashid */

// Website related settings
const settings = {
  isSplash: false,
};

// Home Page
const greeting = {
  title: "Raja Abraheem Rashid",
  logo_name: "Abraheem Rashid",
  nickname: "",
  subTitle:
    "AI/ML Researcher, working on nested learning, federated learning, and trustworthy AI. Building scalable, privacy-preserving intelligent systems across research and industry.",
  resumeLink: "",
  portfolio_repository: "https://github.com/Abraheem13",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Abraheem13",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abraheem-rashid-8b46102a9/",
    fontAwesomeIcon: "fa-linkedin",
    backgroundColor: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abraheem_rashid/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:abraheemrashid@outlook.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const socialMediaLinksHome = [
  {
    name: "Github",
    link: "https://github.com/Abraheem13",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abraheem-rashid-8b46102a9/",
    fontAwesomeIcon: "fa-linkedin",
    backgroundColor: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abraheem_rashid/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:abraheemrashid@outlook.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// ===========================================================================
// NEURA-X, Digitalisation with AI (home page highlight section)
// ===========================================================================
const neuraX = {
  badge: "Founder",
  title: "Neura-X",
  tagline: "Digitalisation with AI",
  description:
    "Alongside my research, I founded Neura-X, a venture focused on building practical AI frameworks at the intersection of applied AI and enterprise digitalisation. Drawing on hands-on experience from Curium (autonomous-vehicle perception) and INK AI, Neura-X develops scalable solutions using frontier AI technologies such as retrieval-augmented generation, agentic pipelines, efficient transformers, and trustworthy ML systems. Our work is deliberately research-grounded: every framework and deployment is shaped by the same rigour that drives my academic publications. Alongside developing proprietary frameworks, we are also working with clients worldwide, from early-stage founders to established enterprises, helping them operationalise AI effectively without paying the hidden costs of poorly engineered machine learning systems.",
  pillars: [
    {
      title: "Agentic & LLM Systems",
      description:
        "Production-grade RAG, multi-agent orchestration, fine-tuning (LoRA/QLoRA), and quantised inference.",
    },
    {
      title: "Computer Vision & Perception",
      description:
        "Industrial monitoring, multi-sensor calibration, and real-time CV pipelines built for edge deployment.",
    },
    {
      title: "Trustworthy ML",
      description:
        "Federated learning, privacy-preserving pipelines, and explainability evaluation under real-world drift.",
    },
  ],
  role: "Founder & Technical Lead",
  link: "#",
};

const skills = {
  data: [
    {
      title: "Machine Learning & Deep Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing deep learning architectures for medical imaging, time-series, and remote-sensing tasks",
        "⚡ Building nested and multi-frequency learning frameworks for scalable, hierarchical representation learning",
        "⚡ Developing physics-informed reinforcement learning systems with hard safety guarantees",
        "⚡ Research spanning computer vision, NLP, reinforcement learning, and statistical learning theory",
      ],
      softwareSkills: [
        { skillName: "PyTorch", fontAwesomeClassname: "logos-pytorch", style: { backgroundColor: "transparent" } },
        { skillName: "TensorFlow", fontAwesomeClassname: "logos-tensorflow", style: { backgroundColor: "transparent" } },
        { skillName: "JAX", fontAwesomeClassname: "simple-icons:jax", style: { color: "#5C2D91" } },
        { skillName: "scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn", style: { color: "#F7931E" } },
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
        { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy", style: { color: "#013243" } },
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "XGBoost", fontAwesomeClassname: "simple-icons:xgboost", style: { color: "#0066CC" } },
      ],
    },
    {
      title: "LLMs & Agentic AI",
      fileName: "FullStackImg",
      skills: [
        "⚡ Fine-tuning LLMs using LoRA and QLoRA for domain-specific tasks under compute constraints",
        "⚡ Building agentic multi-agent pipelines for autonomous financial analysis and digital forensics",
        "⚡ Designing production-grade Retrieval-Augmented Generation (RAG) systems with hierarchical orchestration",
        "⚡ Deploying quantised LLMs (INT8/INT4) for low-latency inference at national scale",
      ],
      softwareSkills: [
        { skillName: "Hugging Face", fontAwesomeClassname: "simple-icons:huggingface", style: { color: "#FFD21E" } },
        { skillName: "LangChain", fontAwesomeClassname: "simple-icons:langchain", style: { color: "#1C3C3C" } },
        { skillName: "Qdrant", fontAwesomeClassname: "simple-icons:qdrant", style: { color: "#DC382D" } },
        { skillName: "Elasticsearch", fontAwesomeClassname: "simple-icons:elasticsearch", style: { color: "#005571" } },
        { skillName: "OpenAI", fontAwesomeClassname: "simple-icons:openai", style: { color: "#412991" } },
        { skillName: "Llama", fontAwesomeClassname: "simple-icons:meta", style: { color: "#0467DF" } },
      ],
    },
    {
      title: "MLOps, Distributed & Privacy-Preserving ML",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building distributed training pipelines using DeepSpeed and FSDP for large-scale model training",
        "⚡ Designing federated learning and unlearning frameworks for privacy-preserving distributed intelligence",
        "⚡ Containerising and orchestrating ML workloads with Docker and Kubernetes for reproducible research",
        "⚡ End-to-end MLOps: CI/CD, experiment tracking with MLflow and Weights & Biases, data streaming with Kafka",
      ],
      softwareSkills: [
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
        { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes", style: { color: "#326CE5" } },
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
        { skillName: "MLflow", fontAwesomeClassname: "simple-icons:mlflow", style: { color: "#0194E2" } },
        { skillName: "Weights & Biases", fontAwesomeClassname: "simple-icons:weightsandbiases", style: { color: "#FFBE00" } },
        { skillName: "Kafka", fontAwesomeClassname: "simple-icons:apachekafka", style: { color: "#231F20" } },
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#336791" } },
        { skillName: "Redis", fontAwesomeClassname: "simple-icons:redis", style: { color: "#DC382D" } },
        { skillName: "Linux", fontAwesomeClassname: "simple-icons:linux", style: { color: "#000000" } },
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { color: "#F05032" } },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    { siteName: "Google Scholar", iconifyClassname: "simple-icons:googlescholar", style: { color: "#4285F4" }, profileLink: "" },
    { siteName: "ORCID", iconifyClassname: "simple-icons:orcid", style: { color: "#A6CE39" }, profileLink: "" },
    { siteName: "IEEE", iconifyClassname: "simple-icons:ieee", style: { color: "#00629B" }, profileLink: "" },
    { siteName: "arXiv", iconifyClassname: "simple-icons:arxiv", style: { color: "#B31B1B" }, profileLink: "" },
    { siteName: "Semantic Scholar", iconifyClassname: "simple-icons:semanticscholar", style: { color: "#1857B6" }, profileLink: "" },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Brunel University London",
      subtitle: "MSc in Artificial Intelligence",
      logo_path: "Brunel-logo.png",
      alt_name: "Brunel University London",
      duration: "2025-2026",
      descriptions: [
        "⚡ Dissertation: Agentic AI for Autonomous Financial Analysis, Design, Implementation, and Evaluation of a Fully Functional LLM-Powered Equity Research System.",
        "⚡ Relevant coursework: Advanced Deep Learning, Statistical Learning Theory, Convex Optimization, Information Theory.",
        "⚡ Benchmarking hallucination rates, hierarchical reasoning quality, and factual accuracy of LLM-generated equity research against analyst-produced ground truth.",
      ],
      website_link: "https://www.brunel.ac.uk/",
    },
    {
      title: "COMSATS University Islamabad",
      subtitle: "BEng in Electrical Engineering (AI Specialization)",
      logo_path: "comsats-logo.png",
      alt_name: "COMSATS University Islamabad",
      duration: "2020-2024",
      descriptions: [
        "⚡ Final Year Project: Intelligent Reconfigurable Surfaces for UAV Communications, funded by NESCOM.",
        "⚡ Sole undergraduate recipient of NESCOM Research Funding in the department.",
        "⚡ Specialised coursework in AI, machine learning, signal processing, and wireless communications.",
      ],
      website_link: "https://www.comsats.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    { title: "CISPA Summer School 2026", subtitle: "- Helmholtz Center for Information Security", logo_path: "education.svg", certificate_link: "", alt_name: "CISPA", color_code: "#1F4E79" },
    { title: "Youngest Engineer, National AI Research Team", subtitle: "- NCERT, Government of Pakistan", logo_path: "education.svg", certificate_link: "", alt_name: "NCERT", color_code: "#0E6BA8" },
    { title: "Letter of Appreciation", subtitle: "- Director General, National CERT", logo_path: "education.svg", certificate_link: "", alt_name: "DG NCERT", color_code: "#005F73" },
    { title: "NESCOM Research Funding", subtitle: "- Intelligent UAV Communications (sole UG recipient)", logo_path: "education.svg", certificate_link: "", alt_name: "NESCOM", color_code: "#003049" },
    { title: "Research Leadership & Supervision", subtitle: "- Co-supervising UG research at IBA Karachi", logo_path: "education.svg", certificate_link: "", alt_name: "IBA Karachi", color_code: "#8D0801" },
    { title: "Promoted to AI Researcher & Co-Investigator", subtitle: "- Telecommunications Research Lab, IBA", logo_path: "education.svg", certificate_link: "", alt_name: "TRL IBA", color_code: "#22223B" },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "AI/ML Research & Engineering",
  description:
    "I work at the intersection of machine learning research and real-world deployment. My roles span autonomous systems, federated and trustworthy AI research, national-scale cybersecurity AI, and production-grade ML systems in industry.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Industry",
      experiences: [
        {
          title: "AI/ML Engineer",
          company: "Curium",
          company_url: "#",
          logo_path: "Curium-logo.png",
          duration: "Feb 2026-Present",
          location: "Singapore (Remote)",
          description:
            "Curium pioneers Continuous Dynamic Calibration™ (CDC), a proprietary multi-sensor calibration platform spanning LiDAR, Radar, and Camera modalities, enabling rapid escalation of autonomous systems to Level 4 and 5 automation. I develop ML pipelines and AI algorithms for automated multi-sensor calibration, ensuring accuracy and reliability of perception data across ADAS and autonomous vehicle deployments.",
          color: "#ee3c26",
        },
        {
          title: "Founder",
          company: "Neura-X",
          company_url: "#",
          logo_path: "Neura-X_logo.png",
          duration: "Nov 2024-Present",
          location: "London, UK",
          description:
            "Founded and lead Neura-X, a research-grounded AI consultancy at the intersection of applied AI and enterprise digitalisation. The firm translates frontier AI like RAG, agentic pipelines, efficient transformers, and trustworthy ML into production systems. Delivered engagements spanning computer vision, speech intelligence, and enterprise retrieval-augmented generation. Conducts independent research on efficient transformer architectures for long-context and irregular time-series data in cybersecurity contexts.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "AI Researcher & Co-Investigator",
          company: "Telecommunications Research Lab (TRL), IBA",
          company_url: "https://trl.iba.edu.pk/",
          logo_path: "IBA-logo.png",
          duration: "Jul 2025-Present",
          location: "Pakistan (Remote)",
          description:
            "Promoted from Research Associate to AI Researcher and Co-Investigator within months of joining, in recognition of independent research capability and consistent contribution to the lab's publication pipeline (A* conferences and top-tier IEEE/ACM journals). Designing multi-frequency hierarchical learning frameworks that jointly address scalability, client heterogeneity, and catastrophic forgetting in federated settings. Developing a nested federated unlearning scheme enabling selective knowledge removal without full model retraining. Collaborating with researchers ranked in the top 2% globally based on citation impact; co-authors span the UK, US, UAE, Pakistan, Saudi Arabia, and Oman.",
          color: "#0E6BA8",
        },
        {
          title: "AI Research Engineer",
          company: "National Cyber Emergency Response Team (NCERT)",
          company_url: "#",
          logo_path: "NCERT-logo.png",
          duration: "Feb 2025-Jun 2025",
          location: "Government of Pakistan",
          description:
            "Contributed to the design and development of Pakistan's first AI-powered Security Operations Centre (SOC) toolset, a strategically critical initiative for deployment across all governmental organizations, designed to autonomously process and triage 25 million+ logs per day. Designed an end-to-end AI-powered SIEM pipeline from large-scale log ingestion through LLM-based threat classification to automated alert routing, replacing manual SOC Level 1 analyst operations at national scale. Recognised as the youngest engineer selected for Pakistan's National AI Research Team.",
          color: "#181717",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Selected Projects",
  description:
    "A selection of applied AI/ML systems I have designed and built, from national-scale LLM-powered cybersecurity infrastructure to agentic financial analysis pipelines, on-premise speech intelligence, and enterprise RAG. Each project combines research-level methodology with production-grade engineering.",
  avatar_image_path: "projects_image.svg",
};

// ===========================================================================
// BLOGS
// ===========================================================================
const blogs = {
  title: "Writing",
  subtitle:
    "Technical notes on the research I work on, nested learning, federated learning, trustworthy AI, and the engineering that makes them real.",
  tagline: "New post every Sunday, stay tuned.",
  link: "/blogs",
  avatar_image_path: "blogs_image.svg",
  section: [
    {
      slug: "nested-learning-google",
      title: "Nested Learning, Explained: Why Google's New Paradigm Matters",
      date: "20-04-2026",
      readTime: "9 min",
      category: "Deep Dive",
      tagline: "On Google's recent \"Nested Learning\" paper and the shift from static to hierarchically-updated models.",
      text: `Google's recent Nested Learning paper reframes a problem most of us already felt but couldn't name: deep models today learn at one timescale, yet the world they're deployed in shifts at many. A transformer trained once and frozen is a model that pretends the world is stationary. Nested Learning asks a simple structural question, what if different parts of the model updated at different cadences?

The framing isn't entirely new. Recurrent architectures with multiple timescales have existed for years. What's new is the systematisation. Nested Learning treats the update schedule itself as a design variable, with each "level" of the nest capturing structure at a different rate. The outer levels are slow, they encode durable representations, the things that shouldn't move much. The inner levels are fast, they adapt to drift, personalise, react.

Why does this matter now? Three reasons.

**One: it maps cleanly onto federated settings.** In federated learning we already struggle with the tension between global consistency and local heterogeneity. If you sync everything at the same rate, you either lose personalisation (too fast) or lag (too slow). Nested schedules give us a principled way to decouple which layers sync at which cadence, exactly the problem my recent work on *Nested Federated Learning* tackles.

**Two: it changes what "catastrophic forgetting" means.** Forgetting is mostly a consequence of uniform update schedules colliding with non-uniform data distributions. If the slow layers are structurally protected from fast updates, you get continual learning for free, or at least, with substantially less explicit regularisation.

**Three: it's a bridge to safety.** Safety constraints shouldn't adapt as fast as policies. SafeNest (our recent submission) leans on exactly this, safety-gating policies with nested timescales, where developmental-stage constraints update slowly while interaction strategies adapt quickly.

The interesting question is no longer *whether* nested schedules help. It's *how we pick the nest structure*, and there, we're still mostly guessing. Expect more on this over the coming weeks.`,
      image: "",
      url: "",
    },
    {
      slug: "federated-unlearning",
      title: "Federated Unlearning: The Right-to-Be-Forgotten Problem Nobody Solved",
      date: "13-04-2026",
      readTime: "11 min",
      category: "Technical",
      tagline: "Why data-rights legislation is on a collision course with distributed ML, and what selective unlearning actually looks like.",
      text: `GDPR's Article 17 is nearly a decade old and ML systems still pretend it doesn't exist. Under the right to erasure, a user can request their data be removed from any system processing it. For a centralised model, "removal" is already a loaded word, the training data shaped the weights; deleting the row doesn't unring the bell. In federated settings, it's worse. The user's data never left their device in the first place, but their *gradients* did, and those gradients moved the global model. Where, exactly, do you erase?

The default answer is to retrain from scratch, excluding the departing client. This is both correct and unusable: retraining a production federated model costs days, sometimes weeks, of coordinated compute. Do it every time a user exercises their rights and you've effectively killed the system.

So the research question is: can we *approximately* remove a client's influence without paying the full retraining cost? The honest answer is "yes, but carefully." A few approaches have emerged:

**1. Gradient-based reversal.** Store the aggregated gradients each client contributed; when they leave, subtract their influence back out. Cheap, but it drifts quickly, gradients interact non-linearly through optimisation.

**2. Influence functions.** Estimate how much each client's data shifted specific weights and undo that shift. Principled, but expensive to compute at scale.

**3. Nested / layered unlearning.** My co-authors and I have been exploring this direction. Different layers of a federated model encode different granularities of information, unlearning a client might only need to touch a subset of layers, not the whole stack. Multi-frequency synchronisation already separates layers by update rate; it turns out the same decomposition helps with unlearning.

None of these give you provable forgetting in the cryptographic sense. That's a separate, harder problem. But for regulatory compliance, which just asks "have you made a good-faith effort?", approximate unlearning is increasingly the default.

The uncomfortable truth: the field has spent far more time building federated learning than building federated *unlearning*. That asymmetry is going to hurt when the enforcement actions start.`,
      image: "",
      url: "",
    },
    {
      slug: "explanation-collapse",
      title: "It's Not the Model, It's the Method: How XAI Quietly Breaks Under Drift",
      date: "06-04-2026",
      readTime: "8 min",
      category: "Perspective",
      tagline: "Why explanations stop agreeing, even when the model itself is fine.",
      text: `Most XAI evaluations live in a comfortable fiction: that the data distribution at inference time looks like the data distribution at training time. In security, that fiction has a short lifespan. Malware drifts. Attack patterns evolve. By month three, your explanations are telling you about a world that no longer exists.

In a recent paper (*It's the Method, Not the Model*) we asked a specific question: when explanations diverge under temporal drift, what actually moves, the model, or the explainer? The answer is somewhat uncomfortable for the XAI community: it's the explainer.

We trained multiple models on the same malware corpus, evaluated them monthly against fresh samples, and compared SHAP, LIME, integrated gradients, and attention-based attribution on identical model pairs. The models disagreed with each other less than the *explainers* disagreed among themselves on the same model. In other words: the choice of explanation method contributed more variance to the explanation than the choice of model did.

That has a blunt implication. When you report XAI results with a single explainer on a static dataset, you're not reporting a property of the model, you're reporting a property of the method. Switch the method, switch the story.

What do we do about it? A few practical things:

- Report explanations from at least two structurally different methods.
- Evaluate explanation stability over time, not just faithfulness at a single snapshot.
- Treat explainer disagreement as a drift signal in its own right.

The deeper point: we've been treating XAI as a static property of models, when it's really a dynamic property of the model-explainer-data triple. Drift changes all three, and we haven't built tools that track that.`,
      image: "",
      url: "",
    },
    {
      slug: "agentic-research-limits",
      title: "Agentic Equity Research: Where LLMs Stop Being Analysts",
      date: "30-03-2026",
      readTime: "10 min",
      category: "Applied Research",
      tagline: "Notes from building a multi-agent LLM pipeline for autonomous equity analysis, and where it broke.",
      text: `My MSc dissertation at Brunel was an attempt to build a fully functional agentic pipeline for equity research: live market data retrieval, fundamental and technical analysis, structured report synthesis, and self-evaluated factual consistency. The system works. It also taught me exactly where current LLM-based research agents plateau.

The easy part is the pipeline. Tool use, retrieval, structured generation, these are solved enough to ship. A well-orchestrated multi-agent LLM stack can produce an equity research report that's formatted correctly, cites real data, and reads professionally. The template works.

The hard part is hierarchical reasoning under factual accountability. Analyst-produced reports don't just summarise, they weight evidence, flag inconsistencies between sources, and qualify claims they can't fully defend. LLMs, at the agent level, systematically under-qualify. They don't know what they don't know, and the confidence calibration problem is worse in financial contexts because the wrong answer is rewarded by fluent prose more than by correctness.

We benchmarked against analyst-produced ground truth (a dataset I'm publishing alongside the paper) and found three failure modes that every agent in the pipeline shared:

**1. Anchor-bias on the first retrieved document.** If the first source the agent pulled was wrong or outdated, the final report inherited that bias even when better sources were available later in the pipeline.

**2. Numerical hallucination in synthesis steps.** Retrieval was accurate. Calculations done inside the LLM were not. Any multiplication of two numbers pulled from different sources had a non-trivial error rate.

**3. Hierarchical reasoning collapse.** Three-step arguments held. Five-step arguments broke. This isn't about context length, it's about the agent losing track of what it's already committed to.

What works: structured intermediate outputs, tool-use for every calculation, and explicit self-verification steps between stages. What doesn't: asking the agent to "be rigorous."

I'll publish the benchmark dataset and evaluation framework alongside the companion paper. The hope is that agentic research evaluation becomes a first-class benchmark, not an afterthought.`,
      image: "",
      url: "",
    },
    {
      slug: "trustworthy-ai-research-agenda",
      title: "What a Trustworthy AI Research Agenda Actually Looks Like",
      date: "23-03-2026",
      readTime: "7 min",
      category: "Perspective",
      tagline: "Beyond the buzzword, a working framework for what trustworthy means in practice.",
      text: `"Trustworthy AI" is one of those phrases that's everywhere and nowhere. Everyone agrees it matters. Nobody agrees what it is. In the research I've been involved in over the past two years, I've converged on a working definition that's narrower than the literature but more useful: **a trustworthy system is one whose behaviour degrades predictably.**

That's it. No robustness claims, no safety theatre, no moral reasoning about the model's "values." Just: under realistic perturbations like drift, adversaries, distribution shift, or partial observability, does the system's failure mode match what its designer expected?

Why this framing? Because every real-world failure I've seen in ML systems has the same shape. The system worked in the lab. It worked at launch. It worked for three months. Then *something* changed (data, inputs, users, environment) and the model's outputs stopped being related to its training distribution in any legible way. Nobody predicted the specific failure, but plenty of people could have predicted that failures would happen *somewhere*.

Four concrete research directions follow from this:

**Drift-resilient evaluation.** Most benchmarks report static accuracy. We need benchmarks that report how accuracy evolves under realistic environmental change. This is the point of our malware-drift work: explanation collapse is only a special case.

**Calibrated uncertainty.** Every production system should output confidence, and that confidence should be tight. Most don't, and most isn't.

**Safety by structure, not by prompt.** Prompt-level safety is trivially defeatable. Structural safety, policies gated by architecture, like nested policy learning, is harder to build but harder to break.

**Unlearning as a first-class operation.** If you can't cleanly remove what you shouldn't have learned, you don't have a trustworthy system. You have one you're hoping nobody audits.

None of these are solved. All of them are tractable. Most of what I write going forward will be in one of these four directions.`,
      image: "",
      url: "",
    },
  ],

  featuredPapers: [
    {
      title: "Nested Learning: A New Paradigm for Long-Horizon Learning",
      authors: "Google Research",
      venue: "arXiv, 2025",
      note: "Foundational motivation for my nested learning research programme.",
    },
    {
      title: "Matryoshka Representation Learning",
      authors: "Kusupati et al.",
      venue: "NeurIPS, 2022",
      note: "Directly informs my wearable-to-cloud ECG classification work.",
    },
    {
      title: "Federated Learning: Challenges, Methods, and Future Directions",
      authors: "Li, Sahu, Talwalkar, Smith",
      venue: "IEEE Signal Processing Magazine, 2020",
      note: "The survey that still defines the field's open problems.",
    },
    {
      title: "Tree of Thoughts: Deliberate Problem Solving with LLMs",
      authors: "Yao et al.",
      venue: "NeurIPS, 2023",
      note: "Changed how I design agentic reasoning pipelines.",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "address_image.svg",
    description:
      "Open to job opportunities, research collaborations, joint ventures, PhD discussions, and conversations about machine learning, federated learning, trustworthy AI, and agentic systems. Whether you're a lab looking for a research partner, a company building production ML systems, or a founder exploring a joint venture, I'd like to hear from you. The fastest way to reach me is email or LinkedIn.",
  },
  addressSection: {
    title: "Location",
    subtitle: "London, United Kingdom",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/London",
  },
  phoneSection: { title: "Phone", subtitle: "+44 7459 625289" },
};

// ===========================================================================
// RESEARCH, Research areas and publications
// ===========================================================================
const research = {
  title: "Research",
  subtitle: "Research Areas & Publications",
  description:
    "My research sits at the intersection of scalable learning systems, distributed intelligence, and trustworthy AI. I work on methods that are both scientifically grounded and useful in practice, spanning nested learning, federated learning and unlearning, agentic AI, efficient transformers, and physics-informed reinforcement learning.",
  header_image_path: "experience.svg",

  researchAreas: [
    { title: "Nested Learning", description: "Hierarchical, multi-frequency learning frameworks that capture structure across timescales. Applied to federated optimisation, RL safety, medical imaging, ECG classification, environmental change detection, and 6G network slicing.", color: "#0E6BA8" },
    { title: "Federated Learning & Unlearning", description: "Privacy-preserving distributed intelligence that handles client heterogeneity, catastrophic forgetting, and data-rights compliance, including selective knowledge removal without full model retraining.", color: "#005F73" },
    { title: "Trustworthy & Safe AI", description: "Safety architectures for human-AI interaction, including nested policy learning for developmentally adaptive child-AI safety and hard-constraint reinforcement learning with formal guarantees.", color: "#8D0801" },
    { title: "Agentic AI & LLMs", description: "Multi-agent LLM pipelines for autonomous research and analysis, agentic financial analysis, skill-driven digital forensics orchestration, and benchmarking factual accuracy and hallucination rates.", color: "#22223B" },
    { title: "Efficient Transformers", description: "Transformer architectures optimised for long-context modelling and irregular time-series data, with applications to cybersecurity, log analysis, and wearable-to-cloud continuum learning.", color: "#6A040F" },
    { title: "Applied ML for Security", description: "Pre-encryption ransomware detection, explanation stability under temporal malware drift, LLM-based threat classification, and national-scale SIEM pipelines for government cyber-defence.", color: "#003049" },
  ],

  publications: [
    {
      title: "Nested Multi-Agent Reinforcement Learning for Adaptive Resource Management in 6G Network Slicing: A Multi-Timescale Framework with Convergence Guarantees",
      authors: "R. A. R. Ejaz, F. Iradat, W. Iqbal",
      venue: "IEEE Open Journal of the Communications Society",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["Nested Learning", "Reinforcement Learning", "6G"],
      description:
        "A multi-timescale nested multi-agent RL framework for adaptive resource management in 6G network slicing, with convergence guarantees for the coupled slow/fast update processes. Targets the scalability-stability trade-off in dense 6G deployments.",
    },
    {
      title: "Hierarchical Bayesian Nested Optimisation for Uncertainty-Aware Resource Allocation in 6G Open-RAN",
      authors: "R. A. R. Ejaz, Y. A. Bangash, F. Iradat, W. Iqbal",
      venue: "ICSL-DSGA 2026",
      type: "Conference",
      status: "Under Review",
      year: "2026",
      areas: ["Nested Learning", "Bayesian Methods", "6G"],
      description:
        "Hierarchical Bayesian formulation of the Open-RAN resource-allocation problem with nested optimisation across control timescales, producing uncertainty-aware decisions under partial observability of network state.",
    },
    {
      title: "TEMPEST: Temporal Execution Modeling for Pre-Encryption Ransomware Detection with Timestep-Level Explainability",
      authors: "R. A. R. Ejaz et al.",
      venue: "ICSL-DSGA 2026",
      type: "Conference",
      status: "Under Review",
      year: "2026",
      areas: ["Applied ML for Security", "Explainability"],
      description:
        "TEMPEST models the temporal execution signature of ransomware to detect it pre-encryption, before any file is locked, while maintaining timestep-level explainability so analysts can see why each decision was made.",
    },
    {
      title: "Nested Learning with Attention-Guided Multi-Frequency Supervision for Hepatic Vessel Segmentation",
      authors: "R. A. R. Ejaz, F. Iradat, W. Iqbal, A. Ahmad",
      venue: "Neural Computing and Applications (Q1)",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["Nested Learning", "Medical Imaging"],
      description:
        "Proposes a nested, attention-guided multi-frequency supervision scheme for segmenting hepatic vessels in medical CT. Hierarchical frequency decomposition with attention-gated fusion improves small-vessel recovery and boundary fidelity compared to single-scale baselines.",
    },
    {
      title: "Nested Learning for Multi-Timescale Electric Vehicle Charging Coordination: A Physics-Informed Deep Reinforcement Learning Framework with Hard Voltage Guarantees",
      authors: "R. A. R. Ejaz, N. Aburaed, F. Iradat",
      venue: "IEEE Transactions on Smart Grid",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["Reinforcement Learning", "Nested Learning", "Physics-Informed ML"],
      description:
        "A physics-informed deep-RL controller for large-scale EV charging that operates over nested timescales and provides hard voltage-constraint guarantees, bridging learned policies with provable grid-safety margins.",
    },
    {
      title: "SafeNest: Nested Policy Learning for Multi-Timescale Safety in Child-AI Interaction",
      authors: "R. A. R. Ejaz, Y. A. Bangash, F. Iradat, M. Kumail",
      venue: "Scientific Reports",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["Trustworthy AI", "Reinforcement Learning"],
      description:
        "SafeNest introduces nested policies where safety constraints are gated by developmental stage, enabling child-AI systems to adapt their interaction boundaries at multiple policy timescales rather than applying a single static filter.",
    },
    {
      title: "A Multi-Timescale Safety Architecture for Developmentally Adaptive Child-AI Interaction via Nested Policy Learning",
      authors: "R. A. R. Ejaz, F. Iradat, M. Kumail",
      venue: "UKCI 2026",
      type: "Conference",
      status: "Under Review",
      year: "2026",
      areas: ["Trustworthy AI", "Nested Learning"],
      description:
        "Conference companion to SafeNest presenting the underlying multi-timescale safety architecture and empirical evaluation of developmentally adaptive constraint gating.",
    },
    {
      title: "Nested Learning for Adaptive-Fidelity ECG Classification: Matryoshka Representation Learning Across the Wearable-to-Cloud Continuum",
      authors: "R. A. R. Ejaz, M. W. Iqbal, F. Iradat, M. Kumail",
      venue: "IEEE Xplore / IEEE Journal",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["Nested Learning", "Wearable ML"],
      description:
        "A Matryoshka-style nested representation scheme that allows ECG classifiers to run at reduced fidelity on wearables and expand smoothly to full-fidelity inference on cloud backends without separate model retraining.",
    },
    {
      title: "Pre-Encryption Multi-layered Ransomware Detection Framework",
      authors: "R. A. R. Ejaz, M. Deda, F. Iradat",
      venue: "ARES 2026",
      type: "Conference",
      status: "Under Review",
      year: "2026",
      areas: ["Applied ML for Security"],
      description:
        "A layered detection framework that fires before encryption begins, combining behavioural, API-sequence, and file-entropy signals to stop ransomware earlier than post-encryption detectors.",
    },
    {
      title: "HADES: Hierarchical Autonomous Digital Evidence System Using Skill-Driven Multi-Agent Orchestration for Digital Forensics",
      authors: "R. A. R. Ejaz, Q. M. Waiz, F. Iradat",
      venue: "WI 2026, Linz",
      type: "Conference",
      status: "Under Review",
      year: "2026",
      areas: ["Agentic AI", "Applied ML for Security"],
      description:
        "HADES orchestrates skill-driven agents in a hierarchical forensic pipeline, automating evidence acquisition, triage, and correlation across heterogeneous artefacts while preserving chain-of-custody semantics.",
    },
    {
      title: "Nested Federated Learning: Layer-Wise Multi-Frequency Synchronization for Privacy-Preserving Distributed Intelligence",
      authors: "R. A. R. Ejaz, F. Iradat, W. Iqbal, M. Mansouri",
      venue: "Cognitive Computation",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["Federated Learning", "Nested Learning"],
      description:
        "Introduces layer-wise multi-frequency synchronisation across federated clients, addressing scalability and client heterogeneity by decoupling which layers synchronise at which cadence.",
    },
    {
      title: "It's the Method, Not the Model: Explanation Collapse Under Temporal Malware Drift",
      authors: "R. A. R. Ejaz, F. Iradat, W. Iqbal, M. Mansouri",
      venue: "IEEE Open Journal of the Communications Society",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["Trustworthy AI", "Applied ML for Security"],
      description:
        "Shows empirically that under temporal malware drift, explanation-method choice, not model choice, dominates explanation stability. Has implications for how we evaluate XAI in non-stationary security settings.",
    },
    {
      title: "From AI to Generative AI: How Emerging Technologies Are Reshaping Public Trust",
      authors: "E. Tariq, E. Tariq, I. S. Khan, R. A. R. Ejaz, F. Iradat",
      venue: "WI 2026",
      type: "Conference",
      status: "Under Review",
      year: "2026",
      areas: ["Trustworthy AI", "AI & Society"],
      description:
        "Examines shifts in public trust as AI systems transition from discriminative to generative paradigms, drawing on a cross-region survey of perceived risk, utility, and institutional readiness.",
    },
    {
      title: "The Impact of Female Under-representation in Cybersecurity on Women's Vulnerability to Cybercrime",
      authors: "M. S. Baig, R. A. R. Ejaz, F. Iradat",
      venue: "Gender, Technology and Development",
      type: "Journal",
      status: "Under Review",
      year: "2026",
      areas: ["AI & Society"],
      description:
        "A scoping analysis connecting workforce composition in cybersecurity to downstream vulnerability patterns, with policy recommendations for inclusive threat-modelling and support infrastructure.",
    },
    {
      title: "Nested Federated Unlearning: A Multi-Frequency Optimization Framework for Privacy-Preserving Distributed Intelligence",
      authors: "R. A. R. Ejaz et al.",
      venue: "IEEE Transactions on Artificial Intelligence",
      type: "Journal",
      status: "In Preparation",
      year: "2026",
      areas: ["Federated Learning", "Trustworthy AI"],
      description:
        "A nested, multi-frequency optimisation framework enabling selective client-level knowledge removal in federated settings without full model retraining, a step toward compliance with data-rights legislation at scale.",
    },
    {
      title: "Employment and Job Retention in the AI Era in LMICs, A Scoping Study",
      authors: "R. A. R. Ejaz, F. Iradat",
      venue: "TBD",
      type: "Journal",
      status: "In Preparation",
      year: "2026",
      areas: ["AI & Society"],
      description:
        "Scoping study on how AI adoption is reshaping employment and job-retention patterns in low- and middle-income countries.",
    },
    {
      title: "Psychological and Ethical Factors Affecting Student Acceptance of AI-Generated Academic Work",
      authors: "R. A. R. Ejaz, F. Iradat",
      venue: "TBD",
      type: "Journal",
      status: "In Preparation",
      year: "2026",
      areas: ["AI & Society"],
      description:
        "Empirical study of psychological and ethical factors driving student acceptance of AI-generated academic output, informing teaching-practice and policy design.",
    },
    {
      title: "A Nested Learning-Based Framework for Early Environmental Change Detection Using Multi-Temporal Remote Sensing Data",
      authors: "R. A. R. Ejaz et al.",
      venue: "IEEE JSTARS",
      type: "Journal",
      status: "In Preparation",
      year: "2026",
      areas: ["Nested Learning", "Remote Sensing"],
      description:
        "Applies nested multi-frequency learning to multi-temporal satellite imagery for early-warning detection of environmental change, targeting signals that appear well before they are visible to single-scale detectors.",
    },
    {
      title: "Evaluating LLM-Generated Equity Research: A Benchmark Study of Factual Accuracy, Hierarchical Reasoning Quality, and Hallucination Rates in AI-Driven Financial Reporting",
      authors: "R. A. R. Ejaz et al.",
      venue: "TBD (MSc dissertation companion)",
      type: "Journal",
      status: "In Preparation",
      year: "2026",
      areas: ["Agentic AI", "LLMs", "Benchmarking"],
      description:
        "Open benchmark dataset and reproducible evaluation framework measuring factual accuracy, hierarchical reasoning quality, and hallucination rates of LLM-generated equity research against analyst-produced ground truth.",
    },
  ],
};

// ===========================================================================
// COLLABORATIONS
// ===========================================================================
const collaborations = {
  title: "Collaborations & Supervision",
  subtitle: "Research Network & Students",
  description:
    "My research network spans six countries and multiple institutions. I collaborate with researchers ranked in the top 2% globally by citation impact, and I co-supervise undergraduate research at IBA Karachi alongside Dr. Faisal Iradat, targeting Q1 journals and A* conferences.",

  // LinkedIn CTA, recommendations from these collaborators are on the real LinkedIn profile
  linkedInCTA: {
    heading: "Recommendations on LinkedIn",
    body:
      "Professional recommendations from these collaborators and colleagues, written in their own words, are available on my LinkedIn profile. LinkedIn is the authoritative place for verified endorsements, and I'm always adding new ones as projects complete.",
    linkText: "View recommendations on LinkedIn →",
    linkUrl: "https://www.linkedin.com/in/abraheem-rashid-8b46102a9/",
  },

  stats: [
    { label: "Projects Co-Supervised", value: "4", caption: "Undergraduate research projects at IBA Karachi" },
    { label: "Countries", value: "6", caption: "UK · US · UAE · Pakistan · Saudi Arabia · Oman" },
    { label: "Publications in Pipeline", value: "19+", caption: "Under review & in preparation" },
    { label: "Top-Tier Targeting", value: "Q1 / A*", caption: "IEEE, ACM, and top-tier venues" },
  ],

  professors: [
    {
      name: "Dr. S. M. Faisal Iradat",
      affiliation: "Institute of Business Administration (IBA), Karachi",
      role: "Assistant Professor · Head, TRL",
      description:
        "Head of the Telecommunications Research Lab (TRL) at SMCS, IBA Karachi. 20+ years in cybersecurity, IoT, AI, and wireless communications, with 40+ publications and global collaborative leadership. My primary mentor and co-author on the majority of my submitted work, spanning the nested learning and federated learning programmes.",
      scholarUrl: "",
      profileUrl: "https://trl.iba.edu.pk/",
      color: "#0E6BA8",
    },
    {
      name: "Dr. Haider Abbas",
      affiliation: "Director General, National CERT Pakistan",
      role: "Tamgha-i-Imtiaz · SMIEEE · IET Fellow",
      description:
        "Director General of Pakistan's National Cyber Emergency Response Team and former Tenured Professor of Cybersecurity at MCS-NUST. Awarded the Tamgha-i-Imtiaz for contributions to information technology. Led the national AI-SIEM initiative I contributed to. 8,000+ citations.",
      scholarUrl: "https://scholar.google.com/citations?user=qABFlzgAAAAJ&hl=en",
      profileUrl: "https://mcs.nust.edu.pk/faculty/haider-abbas-1/",
      color: "#005F73",
    },
    {
      name: "Dr. Mian Muhammad Waseem Iqbal",
      affiliation: "Sultan Qaboos University, Muscat · NUST (on leave)",
      role: "Assistant Professor · Top 2% Scientist",
      description:
        "Assistant Professor at Sultan Qaboos University, previously Associate Professor at NUST. Top 2% Scientist globally. 75+ publications in information security, digital forensics, IoT security, and cryptography. Co-author on nested federated learning and wearable ECG classification work.",
      scholarUrl: "https://scholar.google.com/citations?user=8pAhBrYAAAAJ&hl=en",
      profileUrl: "https://mcs.nust.edu.pk/faculty/mian-muhammad-waseem-iqbal/",
      color: "#6A040F",
    },
    {
      name: "Dr. Yawar Abbas Bangash",
      affiliation: "Sunway University, Malaysia · NUST (tenured, on leave)",
      role: "Senior Lecturer · Tenured Associate Professor",
      description:
        "Senior Lecturer at Sunway University Malaysia and tenured Associate Professor at NUST. PhD from Huazhong University of Science and Technology. Research spans SDN security, IoT, wireless sensor networks, and machine learning. Co-author on SafeNest and Bayesian nested optimisation for 6G Open-RAN.",
      scholarUrl: "https://scholar.google.com/citations?user=ugQYOtEAAAAJ&hl=en",
      profileUrl: "https://sunwayuniversity.edu.my/school-of-computing-and-artificial-intelligence/staff-profiles/dr-yawar-abbas-bangash",
      color: "#22223B",
    },
    {
      name: "Dr. Majdi Mansouri",
      affiliation: "Sultan Qaboos University · Texas A&M at Qatar",
      role: "Associate Professor · IEEE Senior Member",
      description:
        "Associate Professor at SQU and formerly Associate Research Scientist at Texas A&M Qatar. 200+ publications in statistical signal processing, fault detection, and applied ML. Co-author of the Elsevier book *Data-Driven and Model-Based Methods for Fault Detection and Diagnosis*. Co-author on federated synchronisation and explanation stability under drift.",
      scholarUrl: "https://scholar.google.com/citations?user=nfeZfuEAAAAJ&hl=en",
      profileUrl: "https://www.squ.edu.om/Portals/18/CVs/ECE_Dr.Majdi_Mansouri_CV.PDF",
      color: "#8D0801",
    },
    {
      name: "Dr. Nour Aburaed",
      affiliation: "University of Dubai, UAE",
      role: "Assistant Professor",
      description:
        "Assistant Professor at the College of Engineering and IT, University of Dubai. PhD from the University of Strathclyde on single-image super-resolution for hyperspectral remote sensing. Previously at the Mohammed Bin Rashid Space Centre. Co-author on physics-informed RL for multi-timescale EV charging.",
      scholarUrl: "https://scholar.google.com/citations?user=E9dGDEEAAAAJ&hl=en",
      profileUrl: "https://ud.ac.ae/ud_members/nour-aburaed/",
      color: "#003049",
    },
    {
      name: "Dr. Awais Ahmad",
      affiliation: "Imam Mohammad Ibn Saud Islamic University (IMSIU), Riyadh",
      role: "Assistant Professor",
      description:
        "Assistant Professor in Information Systems, IMSIU. PhD from Kyungpook National University, South Korea. Previously senior researcher at Università degli Studi di Milano and at Yeungnam University. Research in artificial intelligence, cybersecurity, medical image processing, and IoT. Co-author on hepatic vessel segmentation.",
      scholarUrl: "https://scholar.google.com/citations?user=g93AK6EAAAAJ&hl=en",
      profileUrl: "https://awaisahmad.net/",
      color: "#1F4E79",
    },
  ],

  supervisedProjects: [
    { title: "FedSRIMU", subtitle: "Spectral-Regularised Federated Unlearning for IoT IDS", description: "Spectral-regularised federated unlearning for IoT-based intrusion detection, enabling selective client knowledge removal without full retraining." },
    { title: "Panopticon", subtitle: "Privacy Preservation in Distributed Information Systems", description: "A proposal for privacy preservation in distributed information systems under realistic threat models." },
    { title: "HADES", subtitle: "Hierarchical Autonomous Digital Evidence System", description: "Skill-driven multi-agent orchestration for digital forensics (companion UG work to the HADES paper under review at WI 2026)." },
    { title: "TEMPEST", subtitle: "Temporal Execution Modeling for Pre-Encryption Ransomware", description: "Pre-encryption ransomware detection with timestep-level explainability, targeting stability under temporal drift." },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  socialMediaLinksHome,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  blogs,
  research,
  collaborations,
  neuraX,
};
