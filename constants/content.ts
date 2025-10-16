import { Content } from '../types';

export const content: Record<'en' | 'gr', Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      blog: "Blog",
    },
    home: {
      name: "Petros Lambropoulos",
      title: "I help startups launch SaaS products in weeks.",
      subtitle: "Discovery, build, and delivery of production-ready features so you can ship faster and win the market.",
      specialties: "Rapid discovery sprints, investor-ready SaaS builds, and resilient cloud infrastructure.",
      cta: "Schedule a discovery call",
      servicesTitle: "Services snapshot",
      services: [
        { title: "AI Discovery Sprint", description: "1–2 week validation to reveal the fastest path to value.", slug: "ai-discovery" },
        { title: "AI MVP Launch", description: "1–3 month build of investor-ready AI SaaS foundations.", slug: "ai-mvp" },
        { title: "AI Feature Add-On", description: "2–6 week integration of production-ready AI capabilities.", slug: "ai-feature-add-on" },
        { title: "Grant-Funded Crypto, AI & Deep-Tech Sprint", description: "2–4 week partnership to package your crypto, AI, and deep-tech roadmap plus compliance plan for funding calls.", slug: "grant-funded-sprint" },
      ],
      credibility: "Trusted by Workable, NannyML, Orfium, Dikaio.ai, and resilience engagements like Brain Metrics Initiative.",
    },
    about: {
      title: "About Me",
      greeting: "Hi, I’m Petros Lambropoulos (Peter Lamb)",
      intro: "I partner with founder-led teams to turn product ideas into production-ready SaaS in weeks, combining rapid validation with dependable delivery.",
      howIHelpTitle: "How I help founders",
      howIHelpIntro: "Choose the engagement that fits your stage—every collaboration stays anchored to measurable outcomes.",
      howIHelp: [
        "Map the highest-leverage product opportunities through focused discovery, user interviews, and technical spikes.",
        "Ship investor-ready MVPs with production-grade Python backends, data flows, and polished product features.",
        "Embed new capabilities into existing products while equipping your team for monitoring, rollout, and iteration."
      ],
      experienceTitle: "Experience",
      experience: [
        "Led generative AI discovery-to-launch cycles at Workable and NannyML, translating prototypes into production features for hiring and ML monitoring products.",
        "Built and scaled Python microservices and event-driven backends that keep hiring, music-tech, and legal SaaS platforms reliable under growth.",
        "Designed analytics pipelines and search infrastructure that surface insight from hundreds of millions of events for faster decision-making.",
        "Coached founders and cross-functional teams so product strategy, engineering execution, and launch readiness stay in lockstep.",
      ],
      skillsTitle: "Technical Skills",
      skills: [
        { title: "Product & Leadership", items: ["Stakeholder alignment", "Product storytelling", "Executive communication", "Mentoring", "Resilience engagements"] },
        { title: "GenAI & MLOps", items: ["Generative AI delivery", "LangChain", "OpenAI APIs", "Agents", "Pinecone", "MLflow", "NLP evaluations"] },
        { title: "Data Platforms", items: ["AWS (EKS, EC2, S3, RDS)", "Kubernetes", "Terraform", "Airflow", "Redis", "Elasticsearch", "PostgreSQL", "MySQL"] },
        { title: "Software Stack", items: ["Python", "FastAPI", "Django", "Flask", "PySpark", "Pandas", "NumPy", "PyTorch", "TypeScript/React"] },
        { title: "Delivery Excellence", items: ["CI/CD automation", "Microservices architecture", "Scalable data pipelines", "Observability", "Incident response"] },
      ],
      educationTitle: "Education",
      education: [
        "MSc, Computer Science - University of Edinburgh (thesis with distinction on parallel MapReduce operators)",
        "BSc, Physics - National and Kapodistrian University of Athens (applied CS and physics focus)",
        "Erasmus Exchange - University of Bonn",
      ],
      languagesTitle: "Languages",
      languages: "English (professional), Greek (native), German (limited working).",
      resumeButton: "Download resume",
      resumeLabel: "Choose a version",
      resumeNote: "Default pick: best all-around profile.",
      resumeOptions: [
        { value: "resume2025.pdf", label: "2025 Resume — Best all-around" },
        { value: "resume2025_hyped.pdf", label: "2025 Resume — Hyped" },
        { value: "resume2025_hyped_gr.pdf", label: "2025 Resume — Hyped (Greek)" },
        { value: "resume2025_conservative.pdf", label: "2025 Resume — Conservative (Spartan)" },
      ],
    },
    services: {
      title: "Services",
      intro: "Choose the engagement that matches your urgency: discovery, MVP build, feature acceleration, or grant-backed delivery planning.",
      readCaseStudies: "Read Case Studies",
      backToServices: "Back to Services",
      ctaTitle: "Need to choose the right engagement?",
      ctaDescription: "Book a 30-minute call to map your goals, timelines, and constraints. You'll leave with a recommended tier and a clear next-step checklist.",
      ctaButton: "Schedule a discovery call",
      categories: [
        {
          title: "AI Discovery Sprint",
          slug: "ai-discovery",
          intro: "Co-design a 1–2 week sprint that uncovers the highest-leverage AI opportunities, de-risks delivery, and produces decision-ready next steps.",
          businessProse: `This sprint gives founders clarity before committing serious budget. Together we align on outcomes, test data readiness, and pressure-test promising use cases with fast prototypes.

### Engagement Flow
* Kick-off workshop to frame user pains, success metrics, and responsible AI guardrails.
* Stakeholder conversations and customer interviews to validate desirability and operational fit.
* Technical spikes across LLMs, retrieval, or automation patterns to prove feasibility and surface constraints.

### Deliverables
* Opportunity map ranking AI bets by value, effort, and risk.
* Technical discovery pack covering data requirements, architecture sketches, and vendor/tooling recommendations.
* Executive-ready brief outlining go/no-go decision, timeline, and next steps.

### Pricing
* Fixed fee €2K–€4K depending on scope and number of personas involved.`,
          items: [
            "Best for founders validating AI use cases before green-lighting build.",
            "Timeline: 1–2 week sprint blending research, spikes, and prototype demos.",
            "Deliverables: opportunity map, technical discovery pack, executive brief.",
            "Investment: €2K–€4K fixed fee."
          ],
          caseStudies: [
            {
              company: "Dikaio.ai",
              challenge: "Validate whether retrieval-augmented generation could automate Greek-law document drafting ahead of a pre-seed raise.",
              solution: [
                "Mapped founder goals to a shortlist of viable document workflows and responsible AI guardrails.",
                "Delivered a clickable prototype and RAG reference implementation that informed investor conversations."
              ],
              technologies: ["OpenAI", "Retrieval-Augmented Generation", "Product Discovery"]
            },
            {
              company: "Langaware",
              challenge: "Assess feasibility of applied NLP models for cognitive health screening before committing clinical spend.",
              solution: [
                "Ran evaluation spikes across transformer baselines to determine achievable accuracy.",
                "Packaged findings into a go/no-go narrative with data requirements and compliance considerations."
              ],
              technologies: ["Python", "BERT", "Applied NLP"]
            },
            {
              company: "Beat",
              challenge: "Explore demand-forecasting features for the Lima ride-hailing market without derailing core roadmap.",
              solution: [
                "Delivered a forecasting prototype backed by real ridership data to prove value within two weeks.",
                "Outlined phased rollout options and instrumentation required for ongoing iteration."
              ],
              technologies: ["Python", "Time-Series Forecasting", "Data Storytelling"]
            }
          ],
          engagementTitle: "Plan your Discovery Sprint",
          engagementDescription: "Book a 30-minute call to confirm fit, align on the sprint outcomes, and lock the agenda within 48 hours.",
          engagementChecklistTitle: "Bring to the call:",
          engagementChecklist: [
            "Top 2–3 product bets or workflows you want to validate.",
            "Any data sources, customer research, or compliance notes we should review.",
            "Key team members and availability for the sprint workshops."
          ],
          engagementCtaLabel: "Book the Discovery Sprint call"
        },
        {
          title: "AI MVP Launch",
          slug: "ai-mvp",
          intro: "Ship an investor-ready AI SaaS MVP in 1–3 months with production-grade backend, data, and generative experiences.",
          businessProse: `Move from validated concept to a market-ready product without losing momentum. I lead the build, integrate with your existing team, and keep momentum through weekly demos.

### What We Build
* Secure Python/FastAPI or Django foundations with multi-tenant architecture and clean APIs.
* Data ingestion, orchestration, and monitoring pipelines sized for early-scale needs.
* Generative AI or predictive workflows (RAG, summarisation, recommendations) wired into your product UX.

### Delivery Cadence
* Weekly roadmap reviews and demo sessions with founders and stakeholders.
* Paired working blocks with your designers, PMs, or fractional specialists.
* Launch readiness checklist covering QA, observability, and runbook docs.

### Pricing
* €8K–€20K depending on scope, integrations, and team composition. Phased retainers available.`,
          items: [
            "Best for founder-led teams who need an AI SaaS product in market fast.",
            "Timeline: 1–3 month build with weekly demos and roadmap checkpoints.",
            "Deliverables: production-grade backend, AI workflows, deployment runbook.",
            "Investment: €8K–€20K depending on scope and integrations."
          ],
          caseStudies: [
            {
              company: "NannyML",
              challenge: "Launch a monitoring SaaS for production ML models while headcount was constrained.",
              solution: [
                "Led Python backend and UI integrations that delivered the first investor-ready release.",
                "Productionised Kubernetes deployment with Helm and observability so the internal team could scale confidently."
              ],
              technologies: ["Python", "SaaS", "MLOps", "AWS EKS", "Kubernetes", "Helm"]
            },
            {
              company: "Orfium",
              challenge: "Stand up a royalty management platform capable of handling high-traffic music data pipelines.",
              solution: [
                "Architected Django/Postgres services using twelve-factor patterns for scale and maintainability.",
                "Implemented licensing workflows and reporting that underpinned the platform’s commercial launch."
              ],
              technologies: ["Python", "Django", "PostgreSQL", "Heroku"]
            },
            {
              company: "NeuroPublic S.A.",
              challenge: "Deliver a precision agriculture SaaS with complex agronomy logic inside an aggressive timeline.",
              solution: [
                "Led backend services that processed agronomic data and surfaced recommendations for growers.",
                "Collaborated with agronomists and product leads to ship the platform from zero to launch."
              ],
              technologies: ["Python", "Backend Development", "Web Applications"]
            }
          ],
          engagementTitle: "Kick off your AI MVP build",
          engagementDescription: "Use a 30-minute call to confirm scope, integrations, and launch timeline so you receive a delivery plan within two business days.",
          engagementChecklistTitle: "Have ready:",
          engagementChecklist: [
            "The launch window or fundraising milestones you're targeting.",
            "Must-have workflows, integrations, and success metrics.",
            "An overview of your current stack, repositories, or design assets."
          ],
          engagementCtaLabel: "Schedule the MVP scoping call"
        },
        {
          title: "AI Feature Add-On",
          slug: "ai-feature-add-on",
          intro: "Add a revenue-driving AI capability to your existing product in 2–6 weeks without disrupting core delivery.",
          businessProse: `When you already have customers, every new feature must land smoothly. I integrate with your stack, harden the AI workflow, and ensure your team can run it after hand-off.

### Integration Playbook
* Success metric alignment to tie the feature to activation, retention, or expansion goals.
* Architecture design that respects your current stack, compliance needs, and data contracts.
* Experimentation plan plus rollout guardrails (feature flags, observability, fallback strategies).

### Deliverables
* Production-ready feature implementation with clean interfaces and documentation.
* Monitoring and alerting hooks so your team can measure quality and intervene quickly.
* Playbooks for customer success, support, and marketing to communicate the new capability.

### Pricing
* €4K–€10K depending on integrations, data preparation, and rollout complexity.`,
          items: [
            "Best for scale-ups adding AI value to an existing product surface.",
            "Timeline: 2–6 week integration alongside your in-house team.",
            "Deliverables: production feature, monitoring plan, go-to-market playbook.",
            "Investment: €4K–€10K depending on complexity."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Introduce generative AI to hiring workflows without compromising reliability or compliance.",
              solution: [
                "Delivered PoCs into hardened microservices that powered new recruiter-facing experiences.",
                "Established MLOps practices (monitoring, testing, rollout) so the internal ML team could iterate safely."
              ],
              technologies: ["Python", "Generative AI", "OpenAI", "LangChain", "Pinecone", "MLOps"]
            },
            {
              company: "ENCODE (Cybersecurity)",
              challenge: "Expose near real-time threat analytics via a performance-critical API for enterprise customers.",
              solution: [
                "Engineered analytics services that blended Spark pipelines with an optimized Flask API.",
                "Implemented caching and instrumentation to keep latency low while surfacing new intelligence."
              ],
              technologies: ["Python", "Flask", "SQLAlchemy", "Splunk", "Redis", "MySQL"]
            },
            {
              company: "Brain Metrics Initiative",
              challenge: "Harden resilience tooling during a live DDoS surge while keeping customer dashboards online.",
              solution: [
                "Shipped Cloudflare automations and operational runbooks that neutralised the attack path.",
                "Captured learnings in a resilience roadmap with scoped AI-driven detection enhancements."
              ],
              technologies: ["Cloudflare", "Incident Response", "Resilience Engineering"]
            }
          ],
          engagementTitle: "Launch your AI feature",
          engagementDescription: "Grab a 30-minute call to map the rollout, dependencies, and guardrails so you receive a tailored implementation plan within 48 hours.",
          engagementChecklistTitle: "Before we meet:",
          engagementChecklist: [
            "The success metric or KPI this feature must move.",
            "Relevant repositories, APIs, or schemas we'll integrate with.",
            "Rollout, compliance, or customer commitments we need to protect."
          ],
          engagementCtaLabel: "Book the feature planning call"
        },
        {
          title: "Grant-Funded Crypto, AI & Deep-Tech Sprint",
          slug: "grant-funded-sprint",
          intro: "Package your crypto, AI, and automation roadmap into a fundable plan in 2–4 weeks, aligning proposal criteria, milestones, and delivery confidence.",
          businessProse: `Funding bodies and ecosystems expect precise impact narratives, compliance readiness, and measurable deliverables. This sprint pairs your crypto, AI, or deep-tech grant strategy with actionable technical planning so evaluators see a credible path from award to impact.

The highlights below are composite scenarios drawn from repeated grant-support work so you can see the typical deliverables without disclosing client-confidential details.

### When It Fits
* You're preparing a grant or accelerator proposal and need a stronger execution plan.
* You've secured conditional funds and must show the technical roadmap before release.
* You need to reconcile founder vision, partner obligations, and compliance constraints fast.

### What We Package
* Milestone-based roadmap with engineering, data, and hiring implications for each phase.
* Compliance and governance checklist covering security, privacy, and reporting obligations.
* Prototype or architectural spike that demonstrates feasibility for reviewers and partners.

### Funding Enablement Extras
* Support on budgeting ranges and vendor selections tied to the delivery plan.
* Prep materials for committee reviews, including exec summaries and demo scripts.
* Optional hand-off into MVP or feature delivery once the grant is awarded.

### Pricing
* €3K–€6K depending on programme complexity, number of stakeholders, and required prototypes.`,
          items: [
            "Ideal for founders chasing EU, civic, or crypto grants that require evidence of execution.",
            "Timeline: 2–4 weeks blending roadmap design, compliance prep, and rapid prototyping.",
            "Deliverables: milestone plan, governance checklist, reviewer-ready summary pack.",
            "Investment: €3K–€6K aligned to grant complexity and prototype depth."
          ],
          caseStudies: [
            {
              company: "Composite EU CivicTech Founder",
              challenge: "Prepare an NGI Zero Commons application for a privacy-preserving analytics tool with strict data-sovereignty criteria.",
              solution: [
                "Co-authored the proposal narrative, work packages, and milestone budget so the submission matched NGI evaluation rubrics.",
                "Bundled compliance evidence (data residency matrix, DPIA outline, responsible AI commitments) alongside a lightweight prototype demo."
              ],
              technologies: ["Grant Proposal Design", "Data Governance", "Privacy Engineering"]
            },
        {
          company: "Composite Web3 Collective",
          challenge: "Pursue a blockchain ecosystem grant to validate AI-driven contributor tooling for a DAO.",
          solution: [
            "Mapped eligibility criteria, scoring rubrics, and milestone expectations across leading foundation programmes to shape a compliant submission.",
            "Packaged the proposal narrative, technical explainer, UX mockups, and community rollout plan to demonstrate market readiness and governance alignment."
          ],
          technologies: ["Grant Storytelling", "Ecosystem Research", "Product Strategy"]
        },
            {
              company: "Composite Resilience Lab",
              challenge: "Pursue an EU cascade funding call focused on critical infrastructure resilience while balancing regulatory obligations.",
              solution: [
                "Translated incident-response learnings into a phased roadmap with measurable MTTR targets and governance milestones.",
                "Developed supporting artifacts (risk register, stakeholder map, compliance tracker) required for the cascade call submission."
              ],
              technologies: ["Resilience Engineering", "Risk Management", "Compliance Documentation"]
            }
          ],
          engagementTitle: "Prep your grant-backed sprint",
          engagementDescription: "Use a 30-minute working session to align on grant goals, programme constraints, and decision dates so we can scope the engagement within 48 hours.",
          engagementChecklistTitle: "Bring to the call:",
          engagementChecklist: [
            "Grant brief or accelerator outline plus key deadlines.",
            "Any draft proposal sections, budget assumptions, or reviewer feedback.",
            "Stakeholder list and compliance requirements we must account for."
          ],
          engagementCtaLabel: "Schedule the funding sprint call"
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      intro: "Selected work and case studies:",
      projects: [
        { 
          slug: "dance-school-saas",
          title: "Dance School Management SaaS",
          description: "Full-stack development of a scheduling and billing tool for performing arts schools.",
          technologies: ["Django", "React", "PostgreSQL", "Stripe API", "AWS"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Project Overview
This project is a comprehensive SaaS platform built to serve the specific needs of dance and performing arts schools. The primary goal was to create a centralized system for managing class schedules, student registrations, automated billing, and parent communications.

### Challenges
The primary challenges were designing a flexible database schema to accommodate complex scheduling rules (e.g., bi-weekly classes, term-based schedules), implementing a secure and reliable recurring payment system with Stripe, and ensuring the user interface was intuitive for non-technical studio owners.

### Solutions Implemented
*   **Database:** I designed a relational database schema using Django's ORM that elegantly handled students, classes, schedules, and enrollments, allowing for complex queries without sacrificing performance.
*   **Billing:** I integrated the Stripe API, building robust webhooks to handle subscription statuses, failed payments, and automated invoicing. This decoupled the billing logic from the main application, increasing reliability.
*   **Frontend:** A responsive UI was built with React, featuring an interactive calendar for scheduling and a clear registration portal for parents, which significantly reduced administrative workload for the schools.

### My Role & Technical Contributions
As the sole full-stack developer, I was responsible for the entire project from conception to deployment. My key contributions included:
*   Developing the backend REST API with Django Rest Framework.
*   Designing and implementing the PostgreSQL database schema.
*   Building the recurring billing and subscription management system with Stripe.
*   Developing the frontend application using React.
*   Deploying and managing the application on AWS EC2 with Gunicorn and Nginx.
`
        },
        { 
          slug: "alzheimers-text-classification",
          title: "Alzheimer’s Text Classification",
          description: "NLP prototype for early diagnosis support using linguistic markers.",
          technologies: ["Python", "Scikit-learn", "Pandas", "NLTK", "Flask"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Project Overview & Goals
This research prototype aimed to explore the potential of Natural Language Processing (NLP) for the early detection of Alzheimer's disease. The goal was to train a machine learning model to analyze transcripts of patient interviews and identify subtle linguistic patterns that correlate with cognitive decline.

### Challenges
The main challenges were dealing with the inherent noise in transcribed speech, engineering features that could capture subtle linguistic decay (beyond simple word counts), and selecting a model that was both accurate and interpretable to understand which features were most predictive.

### Solutions Implemented & Methodology
*   **Preprocessing Pipeline:** I built a robust text preprocessing pipeline using NLTK and SpaCy to clean the data, perform part-of-speech tagging, and syntactic parsing.
*   **Feature Engineering:** Over 50 linguistic features were extracted, including lexical richness (e.g., type-token ratio), syntactic complexity (e.g., average sentence length, clause density), and hesitation markers.
*   **Modeling:** I trained and evaluated various classifiers (SVM, Logistic Regression, Random Forest) using Scikit-learn. A Logistic Regression model was chosen for its strong performance and interpretability. Feature importance analysis confirmed that syntactic complexity was a key differentiator.

### My Role & Technical Contributions
I was the sole developer and researcher on this project. My contributions included:
*   Conducting the literature review to identify relevant linguistic markers.
*   Developing the entire NLP and feature extraction pipeline in Python.
*   Training, tuning, and evaluating the machine learning models.
*   Wrapping the final model in a simple Flask API to serve predictions and demonstrate its capabilities.
`
        },
        { 
          slug: "taxi-demand-forecasting",
          title: "Taxi Demand Forecasting",
          description: "Predictive model using time-series analysis to forecast taxi demand in urban areas.",
          technologies: ["Python", "PySpark", "Prophet", "MLflow", "AWS S3"],
          content: `
### Project Overview
The goal of this project was to build a model that could accurately forecast taxi demand in New York City on a hyperlocal level (by neighborhood) for the upcoming week. This information helps taxi companies optimize fleet allocation and reduce passenger wait times.

### Challenges
The key challenges were the massive scale of the historical trip data (billions of records), the need to generate hundreds of independent forecasts (one for each neighborhood) efficiently, and accurately capturing complex seasonal patterns and holiday effects.

### Solutions Implemented
*   **Data Processing:** I built a data pipeline using PySpark on AWS to process and aggregate the raw trip data from S3 into time-series format suitable for modeling. This distributed approach was essential for handling the data volume.
*   **Modeling at Scale:** Instead of one monolithic model, I designed a system to train hundreds of individual time-series models in parallel using Facebook's Prophet library, which excels at capturing multiple seasonalities.
*   **Reproducibility:** I used MLflow to meticulously track all experiments, including model parameters, performance metrics, and model artifacts. This ensured reproducibility and facilitated easy comparison between different modeling approaches.

### My Role & Technical Contributions
As the lead data engineer on this project, my responsibilities were:
*   Designing and implementing the scalable data processing pipeline with PySpark.
*   Developing the parallelized model training and forecasting framework.
*   Integrating MLflow for experiment tracking and model management.
*   Analyzing model performance and identifying key drivers of demand.
`
        },
        { 
          slug: "flask-ml-server",
          title: "Flask ML Server",
          description: "A lightweight, production-ready server for deploying TensorFlow/Keras models.",
          technologies: ["Flask", "TensorFlow", "Docker", "Gunicorn", "Nginx"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Project Overview & Goal
This project provides a boilerplate template for deploying machine learning models as a production-ready REST API. The goal was to create a lightweight, performant, and easily containerizable starting point to bridge the gap between a trained model and a live, scalable service.

### The Problem (Challenge)
Many data scientists are excellent at building models in notebooks but struggle with the software engineering practices required for production deployment. Setting up a robust web server, managing dependencies, and containerizing the application can be a significant hurdle.

### The Solution & Architecture
This template provides a clean and minimal solution using a proven stack:
*   **Flask:** A lightweight web framework to create API endpoints for prediction and health checks.
*   **Gunicorn:** A production-grade WSGI server to run the Flask application concurrently.
*   **Nginx:** Used as a reverse proxy for performance and security.
*   **Docker:** The entire application is containerized with a multi-stage Dockerfile for a small, secure final image.

### Key Technical Contributions
I created this template from scratch, focusing on best practices. My contributions include:
*   Writing a clean, well-documented Flask application structure.
*   Creating an optimized, multi-stage Dockerfile.
*   Providing clear configuration files for Gunicorn and Nginx.
*   Writing a comprehensive README to guide users through setup and deployment.
`
        },
        { 
          slug: "cybersecurity-platforms",
          title: "Cybersecurity Platforms",
          description: "Data analytics for large-scale intrusion detection for enterprise clients.",
          technologies: ["Python", "Elasticsearch", "Spark", "Kafka", "Django"],
          content: `
### Project Overview
This represents my work with several enterprise clients (under NDA) in the cybersecurity sector. The primary focus was on building high-throughput data analytics platforms for Network Intrusion Detection Systems (NIDS) and Security Information and Event Management (SIEM).

### Core Challenges
The platforms had to process terabytes of network log and event data daily in near real-time. The core challenges included designing a system with extremely high data ingestion rates, providing low-latency query capabilities for security analysts, and implementing complex, stateful detection logic at scale.

### Solutions & Architecture
*   **Data Ingestion:** We built a real-time data pipeline using Kafka as a distributed message bus to handle massive data streams without data loss.
*   **Real-time Processing:** Spark Streaming was used to process and enrich the data from Kafka, applying initial filtering and transformation rules.
*   **Analytics & Storage:** Elasticsearch was the core of the analytics engine. Its powerful indexing and aggregation capabilities allowed analysts to perform complex queries over vast datasets with response times in seconds.

### My Role & Technical Contributions
As a Senior Backend Engineer, I was a key contributor to the data pipeline and analytics engine. My specific contributions included:
*   Developing custom Spark Streaming jobs in Python for data enrichment and threat detection.
*   Designing Elasticsearch mappings and indexing strategies to optimize query performance.
*   Building REST APIs using Django and FastAPI to expose analytics results to dashboards and to allow analysts to manage detection rules.
*   Optimizing critical data processing jobs to reduce latency and resource consumption.
`
        },
      ],
      githubCta: "See more on GitHub",
      readCaseStudy: "Read Case Study",
      backToPortfolio: "Back to Portfolio",
      technologiesUsed: "Technologies Used",
      liveDemo: "Live Demo",
      viewOnGithub: "View on GitHub",
    },
    contact: {
      title: "Contact",
      intro: "Let’s talk about your project.",
      detailsTitle: "Contact Details",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      scheduleTitle: "Prefer to jump straight to a call?",
      scheduleDescription: "Reserve a 30-minute discovery session to align on goals, scope, and timelines. You’ll get follow-up notes and next steps within 48 hours.",
      scheduleButton: "Schedule a discovery call",
      formIntro: "Or send a message directly through the form below.",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formSubmit: "Send Message",
    },
    blog: {
      title: "Blog",
      intro: "Thoughts on software, AI, and consulting.",
      readMore: "Read More",
      backToBlog: "Back to Blog",
      postedOn: "Posted on",
      prevPage: "Previous",
      nextPage: "Next",
      searchPlaceholder: "Search posts...",
      noResults: "No posts found matching your search.",
    },
    footer: {
      copyright: "© 2025 Petros Lambropoulos. All rights reserved.",
      availability: "Available for international consulting & freelance projects.",
    },
    announcements: {
      languageChanged: "Language set to English",
    },
    ariaLabels: {
      mainNav: "Main navigation",
      socialNav: "Social media links",
      switchToEnglish: "Switch to English",
      switchToGreek: "Switch to Greek",
    },
    actions: {
      scheduleLink: "https://calendly.com/petroslamb-dev/30min",
      scheduleAriaLabel: "Opens the scheduling tool in a new tab",
    }
  },
  gr: {
    nav: {
      home: "Αρχική",
      about: "Σχετικά",
      services: "Υπηρεσίες",
      portfolio: "Portfolio",
      contact: "Επικοινωνία",
      blog: "Blog",
    },
    home: {
      name: "Πέτρος Λαμπρόπουλος",
      title: "Βοηθάω startups να λανσάρουν SaaS προϊόντα μέσα σε εβδομάδες.",
      subtitle: "Discovery, υλοποίηση και παράδοση λειτουργιών έτοιμων για παραγωγή ώστε να κυκλοφορείτε πιο γρήγορα και να κερδίζετε την αγορά.",
      specialties: "Γρήγορα discovery sprints, SaaS builds έτοιμα για επενδυτές και ανθεκτική cloud υποδομή.",
      cta: "Κλείσε ένα discovery call",
      servicesTitle: "Υπηρεσίες με μια ματιά",
      services: [
        { title: "AI Discovery Sprint", description: "Σπριντ 1–2 εβδομάδων για να χαρτογραφήσουμε τη γρηγορότερη πορεία αξίας.", slug: "ai-discovery" },
        { title: "AI MVP Launch", description: "Κατασκευή 1–3 μηνών για MVP AI SaaS έτοιμο για επενδυτές.", slug: "ai-mvp" },
        { title: "AI Feature Add-On", description: "Ενσωμάτωση 2–6 εβδομάδων ενός παραγωγικού AI χαρακτηριστικού.", slug: "ai-feature-add-on" },
        { title: "Grant-Funded Crypto, AI & Deep-Tech Sprint", description: "Συνεργασία 2–4 εβδομάδων για να πακετάρουμε crypto, AI και deep-tech roadmap μαζί με συμμόρφωση για grant προκηρύξεις.", slug: "grant-funded-sprint" },
      ],
      credibility: "Με έχουν εμπιστευτεί οι Workable, NannyML, Orfium, Dikaio.ai και αποστολές ανθεκτικότητας όπως το Brain Metrics Initiative.",
    },
    about: {
      title: "Σχετικά με εμένα",
      greeting: "Γεια σας, είμαι ο Πέτρος Λαμπρόπουλος (Peter Lamb)",
      intro: "Συνεργάζομαι με ομάδες ιδρυτών για να μετατρέπω ιδέες προϊόντων σε παραγωγικά SaaS μέσα σε εβδομάδες, συνδυάζοντας γρήγορο validation με αξιόπιστη παράδοση.",
      howIHelpTitle: "Πώς βοηθώ τους founders",
      howIHelpIntro: "Επιλέγουμε το engagement που ταιριάζει στο στάδιό σας — κάθε συνεργασία έχει σαφή, μετρήσιμα αποτελέσματα.",
      howIHelp: [
        "Χαρτογραφούμε τις πιο κρίσιμες ευκαιρίες προϊόντος μέσα από στοχευμένα discovery sessions, συνεντεύξεις χρηστών και τεχνικά spikes.",
        "Παραδίδω MVPs έτοιμα για επενδυτές με production-grade Python backends, data flows και καλοδουλεμένες λειτουργίες προϊόντος.",
        "Ενσωματώνω νέες δυνατότητες σε υπάρχοντα προϊόντα και προετοιμάζω την ομάδα για monitoring, rollout και συνεχή βελτίωση."
      ],
      experienceTitle: "Εμπειρία",
      experience: [
        "Ηγήθηκα κύκλων discovery-to-launch σε Workable και NannyML, μετατρέποντας prototypes σε παραγωγικά χαρακτηριστικά για προϊόντα πρόσληψης και ML monitoring.",
        "Δόμησα και κλιμάκωσα Python microservices και event-driven backends που κρατούν αξιόπιστες πλατφόρμες SaaS για hiring, music-tech και νομικές εφαρμογές.",
        "Σχεδίασα pipelines analytics και υποδομές αναζήτησης που εξάγουν γρήγορη γνώση από εκατοντάδες εκατομμύρια events.",
        "Καθοδηγώ founders και διεπιστημονικές ομάδες ώστε στρατηγική προϊόντος, τεχνική υλοποίηση και readiness για λανσάρισμα να μένουν συγχρονισμένα.",
      ],
      skillsTitle: "Τεχνικές Δεξιότητες",
      skills: [
        { title: "Product & Ηγεσία", items: ["Συντονισμός ενδιαφερόμενων", "Product storytelling", "Επικοινωνία με διοίκηση", "Mentoring", "Εμπλοκές ανθεκτικότητας"] },
        { title: "GenAI & MLOps", items: ["Generative AI delivery", "LangChain", "OpenAI APIs", "Agents", "Pinecone", "MLflow", "NLP αξιολογήσεις"] },
        { title: "Data Platforms", items: ["AWS (EKS, EC2, S3, RDS)", "Kubernetes", "Terraform", "Airflow", "Redis", "Elasticsearch", "PostgreSQL", "MySQL"] },
        { title: "Software Stack", items: ["Python", "FastAPI", "Django", "Flask", "PySpark", "Pandas", "NumPy", "PyTorch", "TypeScript/React"] },
        { title: "Delivery Excellence", items: ["CI/CD automation", "Αρχιτεκτονική microservices", "Scalable data pipelines", "Observability", "Incident response"] },
      ],
      educationTitle: "Σπουδές",
      education: [
        "MSc Computer Science - University of Edinburgh (διπλωματική με διάκριση στους parallel MapReduce operators)",
        "BSc Φυσικής - ΕΚΠΑ (εστίαση στην εφαρμοσμένη πληροφορική και φυσική)",
        "Πρόγραμμα Erasmus - University of Bonn",
      ],
      languagesTitle: "Γλώσσες",
      languages: "Αγγλικά (επαγγελματικά), Ελληνικά (μητρική), Γερμανικά (βασική επαγγελματική χρήση).",
      resumeButton: "Λήψη επιλεγμένου βιογραφικού",
      resumeLabel: "Επιλέξτε έκδοση",
      resumeNote: "Προεπιλογή: ισορροπημένο προφίλ.",
      resumeOptions: [
        { value: "resume2025.pdf", label: "Βιογραφικό 2025 — Ισορροπημένο" },
        { value: "resume2025_hyped.pdf", label: "Βιογραφικό 2025 — Δυναμικό" },
        { value: "resume2025_hyped_gr.pdf", label: "Βιογραφικό 2025 — Δυναμικό (Ελληνικά)" },
        { value: "resume2025_conservative.pdf", label: "Βιογραφικό 2025 — Συντηρητικό (Σπαρτιατικό)" },
      ],
    },
    services: {
      title: "Υπηρεσίες",
      intro: "Διάλεξε το engagement που ταιριάζει στην ανάγκη σου: discovery, MVP, επέκταση χαρακτηριστικών ή grant-backed planning.",
      readCaseStudies: "Δείτε τα Case Studies",
      backToServices: "Επιστροφή στις Υπηρεσίες",
      ctaTitle: "Χρειάζεσαι βοήθεια για να διαλέξεις engagement;",
      ctaDescription: "Κλείσε ένα 30λεπτο call για να χαρτογραφήσουμε στόχους, χρονοδιάγραμμα και περιορισμούς. Θα φύγεις με προτεινόμενο tier και συγκεκριμένο πλάνο επόμενων ενεργειών.",
      ctaButton: "Κλείσε discovery call",
      categories: [
        {
          title: "AI Discovery Sprint",
          slug: "ai-discovery",
          intro: "Σχεδιάζουμε ένα σπριντ 1–2 εβδομάδων που αναδεικνύει τις πιο αποδοτικές AI ευκαιρίες, μειώνει το ρίσκο και αφήνει ξεκάθαρα επόμενα βήματα.",
          businessProse: `Το σπριντ προσφέρει στους founders σαφήνεια πριν δεσμεύσουν σημαντικό budget. Μαζί ορίζουμε το επιθυμητό αποτέλεσμα, ελέγχουμε την ετοιμότητα των δεδομένων και δοκιμάζουμε υποσχόμενα use cases με γρήγορα prototypes.

### Ροή Συνεργασίας
* Kick-off workshop για να χαρτογραφήσουμε pains, στόχους επιτυχίας και responsible AI guardrails.
* Συζητήσεις με stakeholders και συνεντεύξεις χρηστών για να επιβεβαιώσουμε την επιθυμητότητα και την επιχειρησιακή καταλληλότητα.
* Τεχνικά spikes σε LLMs, retrieval ή automation patterns ώστε να αποδείξουμε τη βιωσιμότητα και να αναδείξουμε περιορισμούς.

### Παραδοτέα
* Opportunity map που κατατάσσει τα AI bets με βάση αξία, προσπάθεια και ρίσκο.
* Τεχνικό discovery pack με απαιτήσεις δεδομένων, σκίτσα αρχιτεκτονικής και προτάσεις εργαλείων/προμηθευτών.
* Executive-ready brief με go/no-go απόφαση, χρονοδιάγραμμα και επόμενα βήματα.

### Κόστος
* Σταθερή αμοιβή €2K–€4K ανάλογα με scope και αριθμό εμπλεκόμενων personae.`,
          items: [
            "Ιδανικό για founders που θέλουν να επικυρώσουν AI use cases πριν προχωρήσουν σε ανάπτυξη.",
            "Χρονοδιάγραμμα: σπριντ 1–2 εβδομάδων με έρευνα, spikes και prototype demos.",
            "Παραδοτέα: opportunity map, τεχνικό discovery pack, executive brief.",
            "Επένδυση: €2K–€4K σταθερή αμοιβή."
          ],
          caseStudies: [
            {
              company: "Dikaio.ai",
              challenge: "Να επιβεβαιωθεί αν η retrieval-augmented generation μπορεί να αυτοματοποιήσει νομικά έγγραφα ελληνικού δικαίου πριν το pre-seed.",
              solution: [
                "Χαρτογράφησα τους στόχους των founders σε shortlist βιώσιμων ροών εγγράφων και responsible AI κανόνων.",
                "Παρέδωσα clickable prototype και RAG reference implementation που τροφοδότησαν τις συζητήσεις με επενδυτές."
              ],
              technologies: ["OpenAI", "Retrieval-Augmented Generation", "Product Discovery"]
            },
            {
              company: "Langaware",
              challenge: "Αξιολόγηση βιωσιμότητας NLP μοντέλων για έλεγχο γνωστικής υγείας πριν επενδυθούν κλινικοί πόροι.",
              solution: [
                "Εκτέλεσα evaluation spikes σε transformer baselines για να μετρήσω επιτεύξιμη ακρίβεια.",
                "Σύνταξα go/no-go αφήγηση με απαιτήσεις δεδομένων και θέματα συμμόρφωσης."
              ],
              technologies: ["Python", "BERT", "Applied NLP"]
            },
            {
              company: "Beat",
              challenge: "Εξερεύνηση χαρακτηριστικών πρόβλεψης ζήτησης για τη Λίμα χωρίς να εκτροχιαστεί το βασικό roadmap.",
              solution: [
                "Παρέδωσα prototype forecasting με πραγματικά δεδομένα επιβατών μέσα σε δύο εβδομάδες για να αποδείξω αξία.",
                "Πρότεινα phased rollout και instrumentation που απαιτείται για συνεχή βελτίωση."
              ],
              technologies: ["Python", "Forecasting", "Data Storytelling"]
            }
          ],
          engagementTitle: "Οργάνωσε το Discovery Sprint",
          engagementDescription: "Κλείσε ένα 30λεπτο call για να επιβεβαιώσουμε το fit, να ευθυγραμμίσουμε τα outcomes και να κλειδώσουμε την ατζέντα μέσα σε 48 ώρες.",
          engagementChecklistTitle: "Για το call:",
          engagementChecklist: [
            "Τα 2–3 κορυφαία bets ή workflows που θέλεις να επικυρώσεις.",
            "Δεδομένα, έρευνες πελατών ή compliance σημειώσεις που πρέπει να δούμε.",
            "Τα μέλη της ομάδας και η διαθεσιμότητά τους για τα sprint workshops."
          ],
          engagementCtaLabel: "Κλείσε το discovery sprint call"
        },
        {
          title: "AI MVP Launch",
          slug: "ai-mvp",
          intro: "Παραδίδω AI SaaS MVP έτοιμο για επενδυτές μέσα σε 1–3 μήνες με production-grade backend, data και generative εμπειρίες.",
          businessProse: `Μετατρέπουμε το επικυρωμένο concept σε προϊόν χωρίς να χαθεί ρυθμός. Ηγούμαι της ανάπτυξης, συνεργάζομαι με την ομάδα σου και κρατώ την πορεία διαφανή με εβδομαδιαία demos.

### Τι Χτίζουμε
* Ασφαλή θεμέλια Python/FastAPI ή Django με multi-tenant αρχιτεκτονική και καθαρά APIs.
* Pipelines συλλογής, ορχήστρωσης και παρακολούθησης δεδομένων για ανάγκες early-scale.
* Generative ή predictive workflows (RAG, summarisation, recommendations) ενσωματωμένα στην εμπειρία χρήστη.

### Ρυθμός Παράδοσης
* Εβδομαδιαία roadmap reviews και demo sessions με founders και stakeholders.
* Collaborative working sessions με designers, PMs ή fractional ειδικούς.
* Launch readiness checklist που καλύπτει QA, observability και runbooks.

### Κόστος
* €8K–€20K ανάλογα με scope, integrations και σύνθεση ομάδας. Διαθέσιμα phased retainers.`,
          items: [
            "Ιδανικό για ομάδες founders που χρειάζονται AI SaaS προϊόν στην αγορά γρήγορα.",
            "Χρονοδιάγραμμα: ανάπτυξη 1–3 μηνών με εβδομαδιαία demos και checkpoints.",
            "Παραδοτέα: production backend, AI workflows, deployment runbook.",
            "Επένδυση: €8K–€20K ανάλογα με integrations."
          ],
          caseStudies: [
            {
              company: "NannyML",
              challenge: "Λανσάρισμα SaaS παρακολούθησης ML μοντέλων με περιορισμένο headcount.",
              solution: [
                "Ηγήθηκα της Python backend ανάπτυξης και των UI integrations που παρέδωσαν την πρώτη έκδοση έτοιμη για επενδυτές.",
                "Productionάρισα Kubernetes deployment με Helm και observability ώστε η εσωτερική ομάδα να κλιμακώσει με σιγουριά."
              ],
              technologies: ["Python", "SaaS", "MLOps", "AWS EKS", "Kubernetes", "Helm"]
            },
            {
              company: "Orfium",
              challenge: "Στήσιμο πλατφόρμας διαχείρισης δικαιωμάτων ικανής να χειριστεί υψηλούς όγκους μουσικών δεδομένων.",
              solution: [
                "Αρχιτεκτόνησα υπηρεσίες Django/Postgres με twelve-factor πρακτικές για κλίμακα και συντήρηση.",
                "Υλοποίησα workflows αδειοδότησης και reporting που στήριξαν το εμπορικό λανσάρισμα."
              ],
              technologies: ["Python", "Django", "PostgreSQL", "Heroku"]
            },
            {
              company: "NeuroPublic S.A.",
              challenge: "Παράδοση SaaS precision agriculture με σύνθετη αγρονομική λογική σε πιεστικό χρονοδιάγραμμα.",
              solution: [
                "Ηγήθηκα υπηρεσιών backend που επεξεργάζονταν αγρονομικά δεδομένα και παρείχαν συστάσεις σε παραγωγούς.",
                "Συνεργάστηκα με αγρονόμους και product leads ώστε η πλατφόρμα να λανσαριστεί από μηδέν σε χρόνο."
              ],
              technologies: ["Python", "Backend Development", "Web Applications"]
            }
          ],
          engagementTitle: "Ξεκίνα το AI MVP build",
          engagementDescription: "Κλείσε 30' για να ελέγξουμε scope, integrations και launch timeline ώστε να λάβεις πλάνο παράδοσης μέσα σε δύο εργάσιμες.",
          engagementChecklistTitle: "Έχε έτοιμα:",
          engagementChecklist: [
            "Το launch window ή τα fundraising milestones που στοχεύεις.",
            "Τα workflows, integrations και KPIs που είναι must-have.",
            "Σύντομη επισκόπηση του τρέχοντος stack, repos ή design assets."
          ],
          engagementCtaLabel: "Κλείσε MVP scoping call"
        },
        {
          title: "AI Feature Add-On",
          slug: "ai-feature-add-on",
          intro: "Προσθέτω παραγωγικό AI χαρακτηριστικό στο υπάρχον προϊόν σου μέσα σε 2–6 εβδομάδες χωρίς να διαταράσσω τον βασικό ρυθμό.",
          businessProse: `Όταν έχεις ήδη χρήστες, κάθε νέο χαρακτηριστικό πρέπει να προσγειώνεται ομαλά. Ενσωματώνομαι στην ομάδα σου, θωρακίζω το AI workflow και παραδίδω τεκμηρίωση για απρόσκοπτο hand-off.

### Playbook Ενσωμάτωσης
* Ευθυγράμμιση success metrics ώστε το χαρακτηριστικό να συνδέεται με ενεργοποίηση, διατήρηση ή επέκταση εσόδων.
* Σχεδιασμός αρχιτεκτονικής που σέβεται το υπάρχον stack, τις απαιτήσεις συμμόρφωσης και τα data contracts.
* Πλάνο πειραματισμού και rollout guardrails (feature flags, observability, fallback στρατηγικές).

### Παραδοτέα
* Έτοιμη για παραγωγή υλοποίηση με καθαρές διεπαφές και τεκμηρίωση.
* Hooks για monitoring και alerting ώστε η ομάδα σου να μετρά ποιότητα και να παρεμβαίνει γρήγορα.
* Playbooks για customer success, support και marketing ώστε να επικοινωνηθεί η νέα δυνατότητα.

### Κόστος
* €4K–€10K ανάλογα με integrations, προετοιμασία δεδομένων και πολυπλοκότητα rollout.`,
          items: [
            "Ιδανικό για scale-ups που θέλουν να προσθέσουν AI αξία σε υπάρχον surface.",
            "Χρονοδιάγραμμα: ενσωμάτωση 2–6 εβδομάδων δίπλα στην in-house ομάδα.",
            "Παραδοτέα: παραγωγικό χαρακτηριστικό, monitoring plan, go-to-market playbook.",
            "Επένδυση: €4K–€10K ανάλογα με την πολυπλοκότητα."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Εισαγωγή generative AI σε hiring workflows χωρίς να θιγεί η αξιοπιστία ή η συμμόρφωση.",
              solution: [
                "Μετέτρεψα PoCs σε θωρακισμένες microservices που τροφοδότησαν νέα recruiter-facing experiences.",
                "Καθιέρωσα MLOps πρακτικές (monitoring, testing, rollout) ώστε η εσωτερική ML ομάδα να επαναλαμβάνει με ασφάλεια."
              ],
              technologies: ["Python", "Generative AI", "OpenAI", "LangChain", "Pinecone", "MLOps"]
            },
            {
              company: "ENCODE (Cybersecurity)",
              challenge: "Παράδοση near real-time analytics μέσω performance-critical API για enterprise πελάτες.",
              solution: [
                "Ανάπτυξα υπηρεσίες analytics που συνδύασαν Spark pipelines με βελτιστοποιημένο Flask API.",
                "Εφάρμοσα caching και instrumentation ώστε η καθυστέρηση να μείνει χαμηλά ενώ παρουσιάζονταν νέες πληροφορίες."
              ],
              technologies: ["Python", "Flask", "SQLAlchemy", "Splunk", "Redis", "MySQL"]
            },
            {
              company: "Brain Metrics Initiative",
              challenge: "Ενίσχυση εργαλείων ανθεκτικότητας κατά τη διάρκεια ενεργού DDoS επίθεσης διατηρώντας dashboards online.",
              solution: [
                "Παρέδωσα Cloudflare automations και operational runbooks που εξουδετέρωσαν το μοτίβο επίθεσης.",
                "Κατέγραψα learning σε resilience roadmap με scoped AI-driven βελτιώσεις ανίχνευσης."
              ],
              technologies: ["Cloudflare", "Incident Response", "Resilience Engineering"]
            }
          ],
          engagementTitle: "Λανσάρισε το AI feature σου",
          engagementDescription: "Κλείσε 30' για να χαρτογραφήσουμε στόχους, εξαρτήσεις και rollout ώστε να λάβεις προσαρμοσμένο implementation plan μέσα σε 48 ώρες.",
          engagementChecklistTitle: "Πριν τη συνάντηση:",
          engagementChecklist: [
            "Το KPI ή metric που πρέπει να βελτιώσει το feature.",
            "Τα repos, APIs ή schemas με τα οποία θα ενσωματωθούμε.",
            "Περιορισμοί rollout, compliance ή commitments προς πελάτες."
          ],
          engagementCtaLabel: "Κλείσε feature planning call"
        },
        {
          title: "Grant-Funded Crypto, AI & Deep-Tech Sprint",
          slug: "grant-funded-sprint",
          intro: "Πακετάρουμε το crypto, AI και automation roadmap σε πλάνο που περνά grant αξιολογήσεις μέσα σε 2–4 εβδομάδες, συνδέοντας κριτήρια, milestones και παράδοση.",
          businessProse: `Οι φορείς χρηματοδότησης και τα οικοσυστήματα απαιτούν σαφή αφήγηση επίδρασης, ετοιμότητα συμμόρφωσης και μετρήσιμα παραδοτέα. Το sprint ευθυγραμμίζει τη στρατηγική χρηματοδότησης crypto, AI ή deep-tech με πρακτικό τεχνικό πλάνο ώστε οι αξιολογητές να δουν αξιόπιστη πορεία από το award έως την υλοποίηση.

Τα παραδείγματα που ακολουθούν είναι σύνθετα σενάρια από επαναλαμβανόμενη grant υποστήριξη ώστε να δεις τα συνήθη deliverables χωρίς να αποκαλύπτονται εμπιστευτικά στοιχεία πελατών.

### Πότε ταιριάζει
* Ετοιμάζεις grant ή accelerator πρόταση και χρειάζεσαι ισχυρό execution plan.
* Έχεις εξασφαλίσει υπό όρους χρηματοδότηση και πρέπει να δείξεις τεχνικό roadmap πριν την εκταμίευση.
* Πρέπει να φέρεις σε ισορροπία όραμα founder, υποχρεώσεις συνεργατών και κανονιστικές απαιτήσεις άμεσα.

### Τι παραδίδουμε
* Roadmap ανά milestone με τεχνικές, data και hiring επιπτώσεις για κάθε φάση.
* Λίστα συμμόρφωσης και διακυβέρνησης για ασφάλεια, ιδιωτικότητα και reporting.
* Prototype ή architectural spike που αποδεικνύει εφικτότητα σε αξιολογητές και συνεργάτες.

### Extras για χρηματοδότηση
* Υποστήριξη σε budgeting ranges και επιλογή vendors συνδεδεμένη με το πλάνο υλοποίησης.
* Υλικό προετοιμασίας για committee reviews, συμπεριλαμβανομένων exec summaries και demo scripts.
* Προαιρετικό hand-off σε MVP ή feature delivery μόλις εγκριθεί το grant.

### Κόστος
* €3K–€6K ανάλογα με την πολυπλοκότητα του προγράμματος, τους stakeholders και τα απαιτούμενα prototypes.`,
          items: [
            "Ιδανικό για founders που κυνηγούν EU, civic ή crypto grants και χρειάζονται αποδεικτικό εκτελεσιμότητας.",
            "Χρονοδιάγραμμα: 2–4 εβδομάδες με συνδυασμό roadmap design, compliance prep και γρήγορων prototypes.",
            "Παραδοτέα: milestone plan, governance checklist, summary pack έτοιμο για αξιολογητές.",
            "Επένδυση: €3K–€6K ανάλογα με το grant και το βάθος του prototype."
          ],
          caseStudies: [
            {
              company: "Σύνθετος EU CivicTech Founder",
              challenge: "Προετοιμασία αίτησης NGI Zero Commons για εργαλείο analytics με αυστηρά κριτήρια προστασίας δεδομένων.",
              solution: [
                "Συνδιαμόρφωσα το proposal narrative, τα work packages και το milestone budget ώστε να ευθυγραμμίζονται με τα NGI evaluation rubrics.",
                "Συγκέντρωσα τεκμήρια συμμόρφωσης (πίνακα data residency, DPIA outline, responsible AI δεσμεύσεις) μαζί με ελαφρύ demo prototype."
              ],
              technologies: ["Σχεδιασμός Προτάσεων Grant", "Data Governance", "Privacy Engineering"]
            },
        {
          company: "Σύνθετο Web3 Collective",
          challenge: "Υποβολή σε grant οικοσυστήματος blockchain για να επικυρωθεί AI tooling για DAO contributors.",
          solution: [
            "Χαρτογράφησα κριτήρια επιλεξιμότητας, scoring rubrics και milestone expectations από κορυφαία προγράμματα ώστε η υποβολή να είναι compliant.",
            "Συσκεύασα proposal narrative, τεχνικό explainer, UX mockups και community rollout plan για να αναδειχθεί το market readiness και η governance ευθυγράμμιση."
          ],
          technologies: ["Grant Storytelling", "Ecosystem Research", "Product Strategy"]
        },
            {
              company: "Σύνθετο Resilience Lab",
              challenge: "Υποβολή σε EU cascade funding για ανθεκτικότητα κρίσιμων υποδομών με παράλληλη κάλυψη ρυθμιστικών απαιτήσεων.",
              solution: [
                "Μετέφρασα incident-response learnings σε phased roadmap με μετρήσιμα MTTR targets και governance milestones.",
                "Ανάπτυξα supporting artifacts (risk register, stakeholder map, compliance tracker) που ζητούσε η προκήρυξη."
              ],
              technologies: ["Resilience Engineering", "Risk Management", "Compliance Documentation"]
            }
          ],
          engagementTitle: "Προετοίμασε το grant-backed sprint σου",
          engagementDescription: "Κλείσε 30' working session για να ευθυγραμμίσουμε στόχους grant, περιορισμούς προγράμματος και deadlines ώστε να κάνουμε scope μέσα σε 48 ώρες.",
          engagementChecklistTitle: "Φέρε στο call:",
          engagementChecklist: [
            "Την προκήρυξη του grant ή το accelerator outline με βασικά deadlines.",
            "Οποιαδήποτε draft sections, budget assumptions ή feedback αξιολογητών.",
            "Λίστα stakeholders και απαιτήσεις συμμόρφωσης που πρέπει να καλύψουμε."
          ],
          engagementCtaLabel: "Κλείσε funding sprint call"
        }
      ],
    },
    portfolio: {
      title: "Portfolio",
      intro: "Επιλεγμένα έργα και case studies:",
      projects: [
        { 
          slug: "dance-school-saas",
          title: "SaaS Διαχείρισης Σχολής Χορού",
          description: "Full-stack ανάπτυξη εργαλείου προγραμματισμού και χρεώσεων για σχολές παραστατικών τεχνών.",
          technologies: ["Django", "React", "PostgreSQL", "Stripe API", "AWS"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Επισκόπηση Έργου
Αυτό το έργο είναι μια ολοκληρωμένη πλατφόρμα SaaS που δημιουργήθηκε για να εξυπηρετήσει τις ειδικές ανάγκες των σχολών χορού και παραστατικών τεχνών. Ο πρωταρχικός στόχος ήταν η δημιουργία ενός κεντρικού συστήματος για τη διαχείριση των ωρολογίων προγραμμάτων, των εγγραφών μαθητών, της αυτοματοποιημένης χρέωσης και της επικοινωνίας με τους γονείς.

### Προκλήσεις
Οι κύριες προκλήσεις ήταν ο σχεδιασμός ενός ευέλικτου σχήματος βάσης δεδομένων για την υποστήριξη πολύπλοκων κανόνων προγραμματισμού (π.χ. μαθήματα ανά δεκαπενθήμερο, τριμηνιαία προγράμματα), η υλοποίηση ενός ασφαλούς και αξιόπιστου συστήματος επαναλαμβανόμενων πληρωμών με το Stripe και η διασφάλιση ότι το περιβάλλον χρήστη ήταν διαισθητικό για ιδιοκτήτες σχολών χωρίς τεχνικές γνώσεις.

### Υλοποιηθείσες Λύσεις
*   **Βάση Δεδομένων:** Σχεδίασα ένα σχεσιακό σχήμα βάσης δεδομένων χρησιμοποιώντας το ORM του Django που διαχειριζόταν κομψά μαθητές, μαθήματα, προγράμματα και εγγραφές, επιτρέποντας πολύπλοκα ερωτήματα χωρίς να θυσιάζεται η απόδοση.
*   **Χρεώσεις:** Ενσωμάτωσα το Stripe API, δημιουργώντας ισχυρά webhooks για τη διαχείριση της κατάστασης των συνδρομών, των αποτυχημένων πληρωμών και της αυτοματοποιημένης τιμολόγησης. Αυτό αποσυνέδεσε τη λογική χρέωσης από την κύρια εφαρμογή, αυξάνοντας την αξιοπιστία.
*   **Frontend:** Δημιουργήθηκε ένα responsive UI με React, με ένα διαδραστικό ημερολόγιο για τον προγραμματισμό και μια σαφή πύλη εγγραφής για τους γονείς, το οποίο μείωσε σημαντικά τον διοικητικό φόρτο εργασίας για τις σχολές.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ως ο μοναδικός full-stack developer, ήμουν υπεύθυνος για ολόκληρο το έργο από τη σύλληψη της ιδέας έως την ανάπτυξη. Οι βασικές μου συνεισφορές περιλάμβαναν:
*   Ανάπτυξη του backend REST API με Django Rest Framework.
*   Σχεδιασμός και υλοποίηση του σχήματος της βάσης δεδομένων PostgreSQL.
*   Δημιουργία του συστήματος επαναλαμβανόμενων χρεώσεων και διαχείρισης συνδρομών με το Stripe.
*   Ανάπτυξη της frontend εφαρμογής με React.
*   Deployment και διαχείριση της εφαρμογής σε AWS EC2 με Gunicorn και Nginx.
`
        },
        { 
          slug: "alzheimers-text-classification",
          title: "Ταξινόμηση Κειμένου για Alzheimer",
          description: "NLP πρωτότυπο για υποστήριξη πρώιμης διάγνωσης με χρήση γλωσσικών δεικτών.",
          technologies: ["Python", "Scikit-learn", "Pandas", "NLTK", "Flask"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Επισκόπηση Έργου & Στόχοι
Αυτό το ερευνητικό πρωτότυπο είχε ως στόχο να διερευνήσει τις δυνατότητες της Επεξεργασίας Φυσικής Γλώσσας (NLP) για την έγκαιρη ανίχνευση της νόσου του Alzheimer. Ο στόχος ήταν η εκπαίδευση ενός μοντέλου μηχανικής μάθησης για την ανάλυση απομαγνητοφωνημένων συνεντεύξεων ασθενών και τον εντοπισμό ανεπαίσθητων γλωσσικών μοτίβων που σχετίζονται με τη γνωστική έκπτωση.

### Προκλήσεις
Οι κύριες προκλήσεις ήταν η διαχείριση του εγγενούς "θορύβου" στην απομαγνητοφωνημένη ομιλία, η δημιουργία χαρακτηριστικών που θα μπορούσαν να συλλάβουν τη λεπτή γλωσσική φθορά (πέρα από την απλή καταμέτρηση λέξεων) και η επιλογή ενός μοντέλου που ήταν ταυτόχρονα ακριβές και ερμηνεύσιμο για να κατανοήσουμε ποια χαρακτηριστικά ήταν τα πιο προγνωστικά.

### Υλοποιηθείσες Λύσεις & Μεθοδολογία
*   **Pipeline Προεπεξεργασίας:** Δημιούργησα ένα ισχυρό pipeline προεπεξεργασίας κειμένου χρησιμοποιώντας NLTK και SpaCy για τον καθαρισμό των δεδομένων, την επισήμανση των μερών του λόγου (part-of-speech tagging) και τη συντακτική ανάλυση.
*   **Feature Engineering:** Εξήχθησαν πάνω από 50 γλωσσικά χαρακτηριστικά, συμπεριλαμβανομένου του λεξιλογικού πλούτου (π.χ. type-token ratio), της συντακτικής πολυπλοκότητας (π.χ. μέσο μήκος πρότασης, πυκνότητα προτάσεων) και δεικτών δισταγμού.
*   **Μοντελοποίηση:** Εκπαίδευσα και αξιολόγησα διάφορους ταξινομητές (SVM, Logistic Regression, Random Forest) χρησιμοποιώντας το Scikit-learn. Επιλέχθηκε ένα μοντέλο Logistic Regression για την ισχυρή του απόδοση και την ερμηνευσιμότητά του. Η ανάλυση της σημασίας των χαρακτηριστικών επιβεβαίωσε ότι η συντακτική πολυπλοκότητα ήταν βασικός διαφοροποιητής.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ήμουν ο μοναδικός προγραμματιστής και ερευνητής σε αυτό το έργο. Οι συνεισφορές μου περιλάμβαναν:
*   Διεξαγωγή βιβλιογραφικής έρευνας για τον εντοπισμό σχετικών γλωσσικών δεικτών.
*   Ανάπτυξη ολόκληρου του pipeline NLP και εξαγωγής χαρακτηριστικών σε Python.
*   Εκπαίδευση, βελτιστοποίηση και αξιολόγηση των μοντέλων μηχανικής μάθησης.
*   Ενσωμάτωση του τελικού μοντέλου σε ένα απλό Flask API για την παροχή προβλέψεων και την επίδειξη των δυνατοτήτων του.
`
        },
        { 
          slug: "taxi-demand-forecasting",
          title: "Πρόβλεψη Ζήτησης Ταξί",
          description: "Προγνωστικό μοντέλο με χρήση ανάλυσης χρονοσειρών για την πρόβλεψη της ζήτησης ταξί.",
          technologies: ["Python", "PySpark", "Prophet", "MLflow", "AWS S3"],
          content: `
### Επισκόπηση Έργου
Ο στόχος αυτού του έργου ήταν η κατασκευή ενός μοντέλου που θα μπορούσε να προβλέψει με ακρίβεια τη ζήτηση ταξί στη Νέα Υόρκη σε υπερ-τοπικό επίπεδο (ανά γειτονιά) για την επόμενη εβδομάδα. Αυτή η πληροφορία βοηθά τις εταιρείες ταξί να βελτιστοποιήσουν την κατανομή του στόλου και να μειώσουν τους χρόνους αναμονής των επιβατών.

### Προκλήσεις
Οι βασικές προκλήσεις ήταν η τεράστια κλίμακα των ιστορικών δεδομένων διαδρομών (δισεκατομμύρια εγγραφές), η ανάγκη για αποδοτική δημιουργία εκατοντάδων ανεξάρτητων προβλέψεων (μία για κάθε γειτονιά) και η ακριβής αποτύπωση πολύπλοκων εποχιακών μοτίβων και επιδράσεων αργιών.

### Υλοποιηθείσες Λύσεις
*   **Επεξεργασία Δεδομένων:** Κατασκεύασα ένα data pipeline χρησιμοποιώντας PySpark σε AWS για την επεξεργασία και τη συγκέντρωση των ακατέργαστων δεδομένων διαδρομών από το S3 σε μορφή χρονοσειρών, κατάλληλη για μοντελοποίηση. Αυτή η κατανεμημένη προσέγγιση ήταν απαραίτητη για τη διαχείριση του όγκου των δεδομένων.
*   **Μοντελοποίηση σε Κλίμακα:** Αντί για ένα μονολιθικό μοντέλο, σχεδίασα ένα σύστημα για την παράλληλη εκπαίδευση εκατοντάδων μεμονωμένων μοντέλων χρονοσειρών χρησιμοποιώντας τη βιβλιοθήκη Prophet του Facebook, η οποία υπερέχει στην αποτύπωση πολλαπλών εποχικοτήτων.
*   **Αναπαραγωγιμότητα:** Χρησιμοποίησα το MLflow για την σχολαστική παρακολούθηung όλων των πειραμάτων, συμπεριλαμβανομένων των παραμέτρων του μοντέλου, των μετρικών απόδοσης και των artifacts. Αυτό εξασφάλισε την αναπαραγωγιμότητα και διευκόλυνε τη σύγκριση μεταξύ διαφορετικών προσεγγίσεων μοντελοποίησης.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ως ο επικεφαλής data engineer σε αυτό το έργο, οι αρμοδιότητές μου ήταν:
*   Σχεδιασμός και υλοποίηση του κλιμακούμενου pipeline επεξεργασίας δεδομένων με PySpark.
*   Ανάπτυξη του πλαισίου παράλληλης εκπαίδευσης και πρόβλεψης μοντέλων.
*   Ενσωμάτωση του MLflow για την παρακολούθηung πειραμάτων και τη διαχείριση μοντέλων.
*   Ανάλυση της απόδοσης του μοντέλου και εντοπισμός των βασικών παραγόντων της ζήτησης.
`
        },
        { 
          slug: "flask-ml-server",
          title: "Flask ML Server",
          description: "Ένας ελαφρύς, production-ready server για την ανάπτυξη μοντέλων TensorFlow/Keras.",
          technologies: ["Flask", "TensorFlow", "Docker", "Gunicorn", "Nginx"],
          githubLink: "https://github.com/petroslamb",
          content: `
### Επισκόπηση Έργου & Στόχος
Αυτό το έργο παρέχει ένα boilerplate template για την ανάπτυξη μοντέλων μηχανικής μάθησης ως ένα production-ready REST API. Ο στόχος ήταν η δημιουργία ενός ελαφριού, αποδοτικού και εύκολα containerizable σημείου εκκίνησης για να γεφυρωθεί το χάσμα μεταξύ ενός εκπαιδευμένου μοντέλου και μιας ζωντανής, κλιμακούμενης υπηρεσίας.

### Το Πρόβλημα (Πρόκληση)
Πολλοί data scientists είναι εξαιρετικοί στη δημιουργία μοντέλων σε notebooks, αλλά δυσκολεύονται με τις πρακτικές μηχανικής λογισμικού που απαιτούνται για την ανάπτυξη σε περιβάλλον παραγωγής. Η δημιουργία ενός στιβαρού web server, η διαχείριση εξαρτήσεων και το containerization της εφαρμογής μπορεί να αποτελέσουν σημαντικό εμπόδιο.

### Η Λύση & Αρχιτεκτονική
Αυτό το template παρέχει μια καθαρή και μινιμαλιστική λύση χρησιμοποιώντας μια δοκιμασμένη στοίβα τεχνολογιών:
*   **Flask:** Ένα ελαφρύ web framework για τη δημιουργία API endpoints για πρόβλεψη και ελέγχους υγείας (health checks).
*   **Gunicorn:** Ένας production-grade WSGI server για την ταυτόχρονη εκτέλεση της εφαρμογής Flask.
*   **Nginx:** Χρησιμοποιείται ως reverse proxy για απόδοση και ασφάλεια.
*   **Docker:** Ολόκληρη η εφαρμογή είναι containerized με ένα multi-stage Dockerfile για μια μικρή και ασφαλή τελική εικόνα.

### Βασικές Τεχνικές Συνεισφορές
Δημιούργησα αυτό το template από το μηδέν, εστιάζοντας στις βέλτιστες πρακτικές. Οι συνεισφορές μου περιλαμβάνουν:
*   Συγγραφή μιας καθαρής, καλά τεκμηριωμένης δομής εφαρμογής Flask.
*   Δημιουργία ενός βελτιστοποιημένου, multi-stage Dockerfile.
*   Παροχή σαφών αρχείων διαμόρφωσης για Gunicorn και Nginx.
*   Συγγραφή ενός περιεκτικού README για να καθοδηγήσει τους χρήστες στην εγκατάσταση και την ανάπτυξη.
`
        },
        { 
          slug: "cybersecurity-platforms",
          title: "Πλατφόρμες Κυβερνοασφάλειας",
          description: "Ανάλυση δεδομένων για ανίχνευση εισβολών μεγάλης κλίμακας για enterprise πελάτες.",
          technologies: ["Python", "Elasticsearch", "Spark", "Kafka", "Django"],
          content: `
### Επισκόπηση Έργου
Αυτό αντιπροσωπεύει την εργασία μου με αρκετούς enterprise πελάτες (υπό NDA) στον τομέα της κυβερνοασφάλειας. Η κύρια εστίαση ήταν στην κατασκευή πλατφορμών ανάλυσης δεδομένων υψηλής απόδοσης για Συστήματα Ανίχνευσης Εισβολών Δικτύου (NIDS) και Διαχείρισης Πληροφοριών και Γεγονότων Ασφαλείας (SIEM).

### Βασικές Προκλήσεις
Οι πλατφόρμες έπρεπε να επεξεργάζονται terabytes δεδομένων log και συμβάντων δικτύου καθημερινά σχεδόν σε πραγματικό χρόνο. Οι βασικές προκλήσεις περιλάμβαναν το σχεδιασμό ενός συστήματος με εξαιρετικά υψηλούς ρυθμούς εισαγωγής δεδομένων, την παροχή δυνατοτήτων ερωτημάτων χαμηλής καθυστέρησης για τους αναλυτές ασφαλείας και την υλοποίηση πολύπλοκης, stateful λογικής ανίχνευσης σε κλίμακα.

### Λύσεις & Αρχιτεκτονική
*   **Εισαγωγή Δεδομένων:** Κατασκευάσαμε ένα real-time data pipeline χρησιμοποιώντας το Kafka ως κατανεμημένο δίαυλο μηνυμάτων για τη διαχείριση τεράστιων ροών δεδομένων χωρίς απώλειες.
*   **Επεξεργασία σε Πραγματικό Χρόνο:** Το Spark Streaming χρησιμοποιήθηκε για την επεξεργασία και τον εμπλουτισμό των δεδομένων από το Kafka, εφαρμόζοντας αρχικούς κανόνες φιλτραρίσματος και μετασχηματισμού.
*   **Ανάλυση & Αποθήκευση:** Το Elasticsearch αποτέλεσε τον πυρήνα της μηχανής ανάλυσης. Οι ισχυρές του δυνατότητες ευρετηρίασης και ομαδοποίησης επέτρεπαν στους αναλυτές να εκτελούν πολύπλοκα ερωτήματα σε τεράστια σύνολα δεδομένων με χρόνους απόκρισης δευτερολέπτων.

### Ο Ρόλος μου & Τεχνικές Συνεισφορές
Ως Senior Backend Engineer, ήμουν βασικός συντελεστής στο data pipeline και στη μηχανή ανάλυσης. Οι συγκεκριμένες μου συνεισφορές περιλάμβαναν:
*   Ανάπτυξη προσαρμοσμένων Spark Streaming jobs σε Python για εμπλουτισμό δεδομένων και ανίχνευung απειλών.
*   Σχεδιασμό Elasticsearch mappings και στρατηγικών ευρετηρίασης για τη βελτιστοποίηση της απόδοσης των ερωτημάτων.
*   Δημιουργία REST APIs με χρήση Django και FastAPI για την έκθεση των αποτελεσμάτων ανάλυσης σε dashboards και για να επιτρέπεται στους αναλυτές να διαχειρίζονται κανόνες ανίχνευσης.
*   Βελτιστοποίηση κρίσιμων jobs επεξεργασίας δεδομένων για τη μείωση της καθυστέρησης και της κατανάλωσης πόρων.
`
        },
      ],
      githubCta: "Δείτε περισσότερα στο GitHub",
      readCaseStudy: "Διαβάστε το Case Study",
      backToPortfolio: "Επιστροφή στο Portfolio",
      technologiesUsed: "Τεχνολογίες",
      liveDemo: "Live Demo",
      viewOnGithub: "Δείτε στο GitHub",
    },
    contact: {
      title: "Επικοινωνία",
      intro: "Ας συζητήσουμε για το έργο σας.",
      detailsTitle: "Στοιχεία Επικοινωνίας",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      scheduleTitle: "Θες να προγραμματίσουμε κατευθείαν ένα call;",
      scheduleDescription: "Κλείσε ένα 30λεπτο discovery call για να ευθυγραμμίσουμε στόχους, scope και χρονοδιάγραμμα. Θα λάβεις σημειώσεις και επόμενα βήματα μέσα σε 48 ώρες.",
      scheduleButton: "Κλείσε discovery call",
      formIntro: "Ή στείλτε μήνυμα μέσω της φόρμας επικοινωνίας.",
      formName: "Το Όνομά σας",
      formEmail: "Το Email σας",
      formMessage: "Το Μήνυμά σας",
      formSubmit: "Αποστολή Μηνύματος",
    },
    blog: {
      title: "Blog",
      intro: "Σκέψεις πάνω στο software, την τεχνητή νοημοσύνη και το consulting.",
      readMore: "Διαβάστε περισσότερα",
      backToBlog: "Επιστροφή στο Blog",
      postedOn: "Δημοσιεύτηκε στις",
      prevPage: "Προηγούμενη",
      nextPage: "Επόμενη",
      searchPlaceholder: "Αναζήτηση άρθρων...",
      noResults: "Δεν βρέθηκαν άρθρα που να ταιριάζουν με την αναζήτησή σας.",
    },
    footer: {
      copyright: "© 2025 Πέτρος Λαμπρόπουλος. Με την επιφύλαξη παντός δικαιώματος.",
      availability: "Διαθέσιμος για διεθνή projects και συμβουλευτικές συνεργασίες.",
    },
    announcements: {
      languageChanged: "Η γλώσσα άλλαξε σε Ελληνικά",
    },
    ariaLabels: {
      mainNav: "Κύρια πλοήγηση",
      socialNav: "Σύνδεσμοι κοινωνικών δικτύων",
      switchToEnglish: "Αλλαγή στα Αγγλικά",
      switchToGreek: "Αλλαγή στα Ελληνικά",
    },
    actions: {
      scheduleLink: "https://calendly.com/petroslamb-dev/30min",
      scheduleAriaLabel: "Ανοίγει το εργαλείο προγραμματισμού σε νέο tab",
    },
  },
};
