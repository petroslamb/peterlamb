import { Content } from '../types';

export const content: Record<'en' | 'gr', Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      trust: "Trust",
      contact: "Contact",
      blog: "Blog",
      analytics: "Analytics",
    },
    home: {
      name: "Petros Lambropoulos",
      title: "Hardening AI prototypes into production systems.",
      subtitle: "I design, evaluate, and scale agentic architectures and deep-tech infrastructure that survive real-world constraints.",
      specialties: "Rigorous LLM evaluation, production agentic architectures, and compliance-first infrastructure.",
      cta: "Schedule a systems review",
      trustStripTitle: "Why teams trust me quickly",
      trustSignals: [
        { label: "Production systems shipped", value: "Workable, NannyML, and regulated deep-tech initiatives" },
        { label: "Independent evidence", value: "Public repos, CI traces, architecture docs, and research artifacts" },
        { label: "Delivery pace", value: "First architecture teardown delivered within 5 business days" },
        { label: "Response promise", value: "Initial response within 24 hours on weekdays" },
      ],
      externalValidationTitle: "Independent Trust Signals",
      externalValidationIntro: "I do not publish client logos without written approval. Use these third-party channels to verify identity, timeline, and execution history.",
      externalValidationLinks: [
        {
          title: "LinkedIn profile",
          description: "Role timeline, public profile continuity, and background context.",
          ctaLabel: "Review LinkedIn",
          url: "https://www.linkedin.com/in/petroslamb/"
        },
        {
          title: "GitHub activity",
          description: "Public repositories, commit history, and CI traces across pinned workstreams.",
          ctaLabel: "Inspect GitHub",
          url: "https://github.com/petroslamb"
        },
        {
          title: "Substack archive",
          description: "Timestamped essays and technical post-mortems with a public publication trail.",
          ctaLabel: "Browse Substack",
          url: "https://lambpetros.substack.com"
        },
        {
          title: "Public analytics dashboard",
          description: "Live traffic and conversion telemetry for this site via Umami share view.",
          ctaLabel: "Open analytics",
          url: "https://cloud.umami.is/share/XlFjHh9T4RgIJTE1"
        }
      ],
      verifiedOutcomesTitle: "Client Testimonials",
      verifiedOutcomesIntro: "Short testimonials from collaboration partners, each linked to a relevant public case study.",
      verifiedOutcomes: [
        {
          metric: "Head of AI testimonial: Workable",
          testimonialQuote: "Petros built our first GenAI proofs of concept and presented them company-wide, which made the value concrete and unlocked stakeholder buy-in for productionization.",
          testimonialAuthor: "Head of AI, Workable",
          evidenceLabel: "Open production AI case study",
          evidenceUrl: "/portfolio/production-ai-systems"
        },
        {
          metric: "CTO testimonial: Encode S.A.",
          testimonialQuote: "Petros helped us scale the platform to process 100K-user datasets within one business day and turned a recurring bottleneck into a reliable operating baseline.",
          testimonialAuthor: "CTO, Encode S.A.",
          evidenceLabel: "Open Encode case study",
          evidenceUrl: "/portfolio/encode-cybersecurity-pipeline"
        },
        {
          metric: "CTO testimonial: dikaio.ai",
          testimonialQuote: "Petros gave us a practical RAG blueprint for Greek legal content and helped us ship a working AI lawyer chat demo quickly.",
          testimonialAuthor: "CTO, dikaio.ai",
          evidenceLabel: "Open dikaio.ai case study",
          evidenceUrl: "/portfolio/dikaio-legal-rag"
        }
      ],
      servicesTitle: "Specialized Consulting",
      services: [
        { title: "AI Systems Evaluation", description: "Rigorous testing and architectural auditing before your AI hits production.", slug: "ai-systems-evaluation" },
        { title: "Production Agentic Architectures", description: "Integrating fragile AI prototypes into reliable software systems.", slug: "production-agentic-architectures" },
        { title: "Deep-Tech Infrastructure", description: "Designing distributed backends for ML-monitoring and regulated industries.", slug: "deep-tech-infrastructure" },
      ],
      credibility: "Experience includes production AI systems at Workable and NannyML, plus independent consulting engagements.",
      outcomesTitle: "Commercial Outcomes (Anonymized)",
      outcomesIntro: "Two examples with explicit baseline, intervention scope, and measurable deltas.",
      outcomeCaseStudies: [
        {
          title: "Hiring Platform GenAI Hardening",
          timeframe: "6-week stabilization sprint",
          before: "Prototype recovery relied on manual intervention during failures and rollout bottlenecks.",
          after: "Introduced hardened microservices and deterministic fallbacks supporting tens of thousands of daily resume workflows across a 0.5B-record corpus.",
          scope: "Scope covers architecture and reliability patterns only; internal SLO dashboards and client-specific internals are confidential.",
          evidenceLabel: "Related production case study",
          evidenceUrl: "/portfolio/production-ai-systems"
        },
        {
          title: "Compliance-First Tokenization Architecture",
          timeframe: "8-week architecture track",
          before: "Three critical flows (issuance, restricted transfers, secondary trading) lived in fragmented documentation with weak migration guidance.",
          after: "Consolidated all 3 flows into one canonical Oxygen-first architecture path with a documented migration baseline from ERC-1400 toward ERC-3643 alignment.",
          scope: "Client identity, governance minutes, and internal throughput benchmarks are NDA-restricted.",
          evidenceLabel: "Public architecture repository",
          evidenceUrl: "/portfolio/cno-project"
        }
      ],
      secondaryCta: {
        title: "Request a 1-page architecture teardown",
        description: "Share your architecture context async and get a written teardown with top bottlenecks, risk flags, and first-priority fixes.",
        buttonLabel: "Start teardown request",
        helper: "Delivered as a concise written brief before any live call."
      },
      proofTitle: "Proof, Not Promises",
      proofIntro: "Selected evidence from production work and public artifacts. Where client confidentiality applies, I explicitly mark scope constraints.",
      proofBlocks: [
        {
          title: "Ethereum Protocol Verification",
          challenge: "Protocol teams need auditable evidence that specification obligations map to real client implementation logic.",
          outcome: "Produced reproducible CI artifacts and reports that make verification disagreements reviewable instead of implicit.",
          evidenceLabel: "Portfolio case study",
          evidenceUrl: "/portfolio/eip-verify",
          scopeNote: "Created as a PoC for an Ethereum Foundation ESP RFP; grant not awarded."
        },
        {
          title: "Production AI Scaling (Workable)",
          challenge: "Move generative AI prototypes from experimentation into dependable production flows at hiring-platform scale.",
          outcome: "Supported tens of thousands of resume-related requests daily across a 0.5B-record corpus in production workflows.",
          evidenceLabel: "Resume and case-study summary",
          evidenceUrl: "/portfolio/production-ai-systems",
          scopeNote: "Client internals, exact service SLOs, and proprietary implementation details are confidential."
        }
      ],
      featuredResearch: {
        title: "Featured Research",
        essayTitle: "The Transformer Attractor",
        essayDescription: "Understanding the theoretical mechanisms scaling Transformers to dominance and how the hardware friction map constrains alternative architectures.",
        readOnLabel: "Read on Substack",
        link: "https://lambpetros.substack.com/p/the-transformer-attractor"
      },
    },
    about: {
      title: "About Me",
      greeting: "Hi, I’m Petros Lambropoulos (Peter Lamb)",
      intro: "I work on AI systems at the point where abstractions start to fail: production agents, evaluation pipelines, and AI-first platforms that have to survive real-world constraints.",
      howIHelpTitle: "How I help engineering teams",
      howIHelpIntro: "I turn fragile prototypes into stable, deployable systems by navigating ambiguous requirements, incomplete metrics, and evolving research goals.",
      howIHelp: [
        "Rigorous testing, failure-mode analysis, and architectural auditing for AI systems before they hit production.",
        "Taking fragile AI prototypes and integrating them into hardened, reliable software systems that survive real-world scale.",
        "Designing distributed backend systems and compliance-first infrastructure for crypto and highly regulated industries."
      ],
      experienceTitle: "Experience",
      experience: [
        "Independent Systems Consultant (2024–Present): Partnering with startups and research teams on agentic architectures, evaluating LLMs, and protocol security.",
        "Led generative AI discovery-to-launch cycles at Workable, translating prototypes into production features processing tens of thousands of resumes daily across a 0.5 billion-record corpus on EKS.",
        "Piloted ML monitoring prototypes with NannyML's EU founding team, shipping containerized Python microservices on Amazon EKS to secure enterprise B2B sales.",
        "Architected a PySpark + Elasticsearch platform at Encode S.A. processing 100K-user network datasets within a business day.",
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
        { value: "resume2026_public.pdf", label: "2026 Resume — Best all-around" },
        { value: "resume2026_hyped_public.pdf", label: "2026 Resume — Growth-focused narrative" },
        { value: "resume2026_hyped_gr_public.pdf", label: "2026 Resume — Growth-focused narrative (Greek)" },
        { value: "resume2026_conservative_public.pdf", label: "2026 Resume — Lean technical version" },
      ],
      philosophyTitle: "Engineering Philosophy",
      philosophyText: "I believe that to build robust AI systems, you first need to understand the mechanical limits of the models themselves—from attention mechanisms to KV cache constraints. Engineering abstraction without mechanistic understanding leads to fragile, unpredictable systems.",
      researchFeedTitle: "Recent Research & Essays",
      researchFeed: [
        {
          title: "The Transformer Attractor",
          description: "An analysis of why AI architectures converge on the Transformer and the hardware constraints shaping this evolution.",
          url: "https://lambpetros.substack.com/p/the-transformer-attractor",
          date: "Jan 2026",
        },
        {
          title: "The Hardware Friction Map",
          description: "A deep dive into the systems fundamentals and hardware economics that govern AI production scalability.",
          url: "https://lambpetros.substack.com/p/the-hardware-friction-map",
          date: "Dec 2025",
        }
      ],
      subscribeCta: "Subscribe to my Research"
    },
    services: {
      title: "Services",
      intro: "I design, evaluate, and harden AI architectures that scale. Choose the engagement that matches your engineering hurdles.",
      readCaseStudies: "Read Case Studies",
      backToServices: "Back to Services",
      ctaTitle: "Need to audit your architecture?",
      ctaDescription: "Book a 30-minute call to map your system constraints and evaluation gaps. You'll leave with a clear next-step engineering checklist.",
      ctaButton: "Schedule a systems review",
      categories: [
        {
          title: "AI Systems Evaluation & Auditing",
          slug: "ai-systems-evaluation",
          intro: "I don't just build wrappers; I tear models apart. Rigorous testing, failure-mode analysis, and architectural auditing for AI systems before they hit production.",
          businessProse: `Before you scale an AI feature to millions of users or rely on it for protocol security, you need to know exactly how and when it breaks. 

### Audit Methodology
*   **Failure-Mode Analysis:** Stress-testing prompts, context windows, and retrieval layers against adversarial or edge-case data.
*   **Evaluation Pipelines:** Building automated benchmarking systems (like LLM-as-a-judge or semantic similarity) tailored to your specific domain.
*   **Architecture Review:** Assessing your RAG, agentic loop, or workflow design for bottlenecks, hallucinations risks, and cost-inefficiency.

### Deliverables
*   Comprehensive audit report detailing vulnerabilities and architectural flaws.
*   Custom evaluation suite integrated into your CI/CD.
*   Actionable remediation roadmap outlining specific code and prompt adjustments.

### Typical Engagements
*   Protocol validation for deep-tech grants.
*   Pre-launch stress testing for enterprise generative AI features.`,
          items: [
            "Best for teams that have a working AI prototype but need to guarantee reliability before launch.",
            "Timeline: 2–4 weeks depending on system complexity.",
            "Deliverables: Audit report, custom evaluation pipelines, remediation roadmap.",
            "Investment: Starting at €4K."
          ],
          caseStudies: [
            {
              company: "Ethereum Foundation (RFP PoC)",
              challenge: "Verify protocol obligations against execution clients using LLMs to enhance protocol security.",
              solution: [
                "Built 'Ethereum Protocol Verification', an LLM-powered traceability pipeline for a grant proposal.",
                "Orchestrated multi-stage evaluations validating protocol specifications against go-ethereum implementations."
              ],
              technologies: ["Python", "Claude 3.5 Sonnet", "LLM Evaluation", "Protocol Security"]
            },
            {
              company: "Transformer Architecture Research",
              challenge: "Understand the theoretical scaling factors and mechanisms that make Transformer models dominant.",
              solution: [
                "Conducted deep-dive research into the Transformer Attractor and the hardware friction map.",
                "Published findings on why alternative architectures struggle against transformer scale-dependence."
              ],
              technologies: ["Transformers", "Mechanistic Interpretability", "Hardware Co-Evolution"]
            }
          ],
          engagementTitle: "Plan your Systems Audit",
          engagementDescription: "Book a 30-minute call to discuss your current architecture, known pain points, and evaluation goals.",
          engagementChecklistTitle: "Bring to the call:",
          engagementChecklist: [
            "Architecture diagrams or descriptions of your current AI workflows.",
            "Examples of failures or hallucinations you are currently experiencing.",
            "Access to sample datasets or current evaluation metrics."
          ],
          engagementCtaLabel: "Book the audit call"
        },
        {
          title: "Production Agentic Architectures",
          slug: "production-agentic-architectures",
          intro: "Taking fragile AI prototypes and integrating them into hardened, reliable software systems that survive real-world scale and compliance.",
          businessProse: `A Jupyter Notebook proof-of-concept is not a product. I specialize in the difficult engineering work required to turn isolated AI scripts into resilient, scalable, and observable microservices.

### Engineering Approach
*   **Agentic Orchestration:** Designing robust state machines and routing logic for multi-agent systems.
*   **Data & State Management:** Implementing reliable memory, context retrieval (RAG at scale), and transaction handling.
*   **Observability & Guardrails:** Wiring in tracing (e.g., LangSmith), fallback mechanisms, and strict output parsing to prevent catastrophic failures.

### Deliverables
*   Production-grade, containerized microservices ready for Kubernetes deployment.
*   Complete observability dashboards and alerting rules.
*   Runbooks for the engineering team detailing maintenance and deployment procedures.

### Typical Engagements
*   Transitioning GenAI MVP to enterprise scale.
*   Building autonomous agents for specific workflow automation.`,
          items: [
            "Best for scale-ups and enterprises moving AI from the lab to production.",
            "Timeline: 1–3 months depending on integration depth.",
            "Deliverables: Production microservices, observability setup, runbooks.",
            "Investment: €8K–€20K."
          ],
          caseStudies: [
            {
              company: "RepoReviver (Independent AI Initiative)",
              challenge: "Build a reliable agent workflow that can inspect stale repositories, apply fixes safely, and produce reviewable pull requests.",
              solution: [
                "Designed a codespace-first agent workflow with explicit lifecycle steps (create environment, run fixes, verify, open PR, cleanup).",
                "Implemented guardrails around execution isolation and reproducible automation runs."
              ],
              technologies: ["Python", "Google ADK", "GitHub Codespaces", "Agentic Systems"]
            },
            {
              company: "Workable",
              challenge: "Scale generative AI hiring features across a massive, live user base.",
              solution: [
                "Transitioned proofs of concept (resume parsing, job post generation) into hardened microservices.",
                "Deployed via AWS EKS, handling tens of thousands of requests daily across a 0.5 billion-record corpus."
              ],
              technologies: ["AWS EKS", "Kubernetes", "Generative AI", "Kafka/RabbitMQ"]
            }
          ],
          engagementTitle: "Kick off your Architecture Build",
          engagementDescription: "Use a 30-minute call to map the integration points, scale requirements, and current prototype status.",
          engagementChecklistTitle: "Have ready:",
          engagementChecklist: [
            "Your existing prototype code or notebooks.",
            "Expected scale (QPS, data volume) and latency requirements.",
            "Details on your existing cloud infrastructure (AWS/GCP, K8s, etc.)."
          ],
          engagementCtaLabel: "Schedule the build call"
        },
        {
          title: "Deep-Tech & Compliance Infrastructure",
          slug: "deep-tech-infrastructure",
          intro: "Designing distributed backend systems and compliance-first infrastructure for crypto, ML-monitoring, and highly regulated industries.",
          businessProse: `Highly regulated industries (FinTech, Crypto, Healthcare) require backends that are built fundamentally differently. Security, auditability, and massive data throughput must be designed in from day one.

### Infrastructure Design
*   **Distributed Systems:** Architecting event-driven data pipelines capable of ingesting and analyzing terabytes of data.
*   **Compliance-First:** Embedding regulatory constraints (GDPR, financial regulations) directly into the database architecture and access patterns.
*   **Resilience Engineering:** Designing systems that degrade gracefully under extreme load or targeted attacks.

### Deliverables
*   Scalable backend services (Python, Go, or Rust depending on requirements).
*   High-throughput data ingestion and processing pipelines (Kafka, Spark).
*   Infrastructure as Code (Terraform) and deployment automation.

### Typical Engagements
*   Building the data plane for ML observability platforms.
*   Architecting tokenization and trading platforms.`,
          items: [
            "Best for deep-tech startups handling sensitive data or high-throughput analytics.",
            "Timeline: 2–4 months minimum for foundational architecture.",
            "Deliverables: Distributed backend services, data pipelines, IaC.",
            "Investment: Retainer or project-based starting at €15K."
          ],
          caseStudies: [
            {
              company: "CNO (Hedera)",
              challenge: "Architect the core infrastructure for a tokenization and trading platform.",
              solution: [
                "Designed compliance-first infrastructure specifically tailored for the Hedera network.",
                "Ensured high-throughput, secure transaction processing for cno.zone."
              ],
              technologies: ["Distributed Systems", "Crypto Infrastructure", "Hedera"]
            },
            {
              company: "NannyML",
              challenge: "Build the foundational data infrastructure for an enterprise ML monitoring SaaS.",
              solution: [
                "Piloted ML monitoring prototypes with the EU founding team.",
                "Shipped containerized Python microservices on Amazon EKS, enabling the team to secure their first B2B deals."
              ],
              technologies: ["Python", "Amazon EKS", "MLOps", "Data Engineering"]
            },
            {
              company: "Encode S.A.",
              challenge: "Process terabytes of network log data daily for near real-time intrusion detection.",
              solution: [
                "Architected a PySpark and Elasticsearch platform.",
                "Optimized the pipeline to process 100K-user network datasets within a single business day."
              ],
              technologies: ["PySpark", "Elasticsearch", "Kafka", "Data Analytics"]
            }
          ],
          engagementTitle: "Discuss your Infrastructure Needs",
          engagementDescription: "Use a 30-minute session to discuss your throughput, compliance, and deployment requirements.",
          engagementChecklistTitle: "Bring to the call:",
          engagementChecklist: [
            "Data volume and velocity estimates.",
            "Specific regulatory frameworks you must adhere to.",
            "Current bottlenecks in your existing architecture (if applicable)."
          ],
          engagementCtaLabel: "Schedule the infrastructure call"
        }
      ],
    },
    portfolio: {
      title: "Portfolio",
      intro: "Selected work and case studies:",
      projects: [
        {
          slug: "eip-verify",
          title: "Ethereum Foundation RFP: Ethereum Protocol Verification",
          description: "LLM-assisted protocol specification auditing and security traceability.",
          technologies: ["Python", "Claude 3.5 Sonnet", "AST Analysis", "Protocol Security"],
          githubLink: "https://github.com/petroslamb/ethereum-protocol-verification",
          content: `
### Project Overview
Built 'Ethereum Protocol Verification', an LLM-assisted traceability pipeline created as a Proof-of-Concept for an Ethereum Foundation Ecosystem Support Program (ESP) Request for Proposal. The objective was to audit the execution layer specification (EELS) against the go-ethereum client, catching potential consensus bugs before they reach production. While the grant was ultimately not awarded, the PoC successfully highlighted the gaps between AI capabilities and protocol rigor.

### Engineering Approach
*   **AST extraction:** Parsed Python specifications and Go source code into unified intermediate representations.
*   **LLM Evaluation:** Designed a multi-stage evaluation pipeline using Claude 3.5 Sonnet to map specification clauses to implementation blocks.
*   **Traceability Matrix:** Generated an auditable matrix that highlighted coverage gaps and potential semantic mismatches between the spec and the code.

### Impact
Demonstrated the feasibility and friction points of using an automated, LLM-assisted workflow to verify the correctness of Ethereum's execution layer upgrades. [Read the full post-mortem analysis on Substack](https://lambpetros.substack.com/p/measuring-trust-the-gap-between-ai).
`
        },
        {
          slug: "transformer-attractors",
          title: "The Transformer Attractor",
          description: "Deep dive research into the theoretical mechanisms that drive Transformer dominance over alternative architectures.",
          technologies: ["Transformers", "Hardware Friction Map", "Mechanistic Interpretability"],
          githubLink: "https://github.com/petroslamb/hardware-friction-scorecard-dataset",
          content: `
### Research Focus
Conducted fundamental research on 'The Transformer Attractor' and 'The Hardware Friction Map'. The goal was to move beyond empirical observations of LLM performance and understand the specific architectural and hardware reasons why the Transformer paradigm dominates.

### Key Contributions
*   **Scale-Dependence Analysis:** Investigated the theoretical mechanisms behind transformer scale-dependence and the 'Two-Gate Trap'.
*   **Hardware Co-Evolution:** Published findings on how the hardware friction map constrains architectural alternatives, demonstrating why hybrids remain the most viable path forward for non-transformer models.

### Value Delivered
This research directly informs my consulting work, allowing me to audit AI systems based on fundamental architectural realities rather than vendor marketing.
`
        },
        {
          slug: "production-ai-systems",
          title: "Production AI Scaling: Workable & NannyML",
          description: "Transitioning generative AI prototypes into enterprise-grade microservices.",
          technologies: ["Python", "Kafka", "AWS EKS", "Kubernetes", "LangChain"],
          content: `
### The Challenge
Both Workable and NannyML needed to move AI features out of the lab and into production environments serving live, enterprise customers. The challenge was building systems that could handle massive scale, ensure data privacy, and maintain high availability.

### Engineering Solutions
*   **Workable (Resume Parsing & Generative Features):** Transitioned isolated proofs-of-concept into hardened microservices deployed on AWS EKS. The system orchestrates generative workflows across a 0.5 billion-record corpus, handling tens of thousands of requests daily with strict fallbacks.
*   **NannyML (ML Observability):** Piloted ML monitoring algorithms and built the foundational containerized Python infrastructure on Amazon EKS, enabling the founding team to secure their first major B2B contracts.
`
        },
        {
          slug: "dikaio-legal-rag",
          title: "dikaio.ai: Greek Law RAG & AI Lawyer Demo",
          description: "Consulted on Greek-law retrieval architecture and delivered a working AI lawyer chat demo.",
          technologies: ["RAG", "OpenAI APIs", "Prompt Engineering", "Legal Knowledge Retrieval"],
          content: `
### Project Overview
I consulted dikaio.ai on how to structure retrieval-augmented generation for Greek legal content and helped the team turn the concept into a working AI lawyer chat demo.

### Engineering Focus
*   **Retrieval Architecture:** Defined a practical retrieval flow for Greek-law sources to improve grounding and reduce unsupported answers.
*   **Answer Reliability:** Shaped response behavior around retrieved context so legal outputs remained traceable to source material.
*   **Execution Path:** Helped the team move from concept discussion to a demo that could be reviewed by both technical and product stakeholders.

### Outcome
Delivered a working prototype that used legal retrieval in real chat interactions and provided a concrete baseline for the next product iteration.

### Scope Note
This case study summarizes consulting scope and prototype outcomes only. Internal product analytics and proprietary legal corpora remain confidential.
`
        },
        {
          slug: "encode-cybersecurity-pipeline",
          title: "Encode S.A.: Cybersecurity Data Platform",
          description: "Architected a PySpark + Elasticsearch platform processing 100K-user network datasets within one business day.",
          technologies: ["PySpark", "Elasticsearch", "Python", "MySQL", "Redis", "Data Engineering"],
          content: `
### Context
Encode S.A. needed a reliable daily processing stack for large cybersecurity telemetry datasets supporting enterprise threat analysis.

### What I Built
*   **Distributed Data Plane:** Architected a PySpark + Elasticsearch platform designed to process 100K-user network datasets within one business day.
*   **Pipeline Optimization:** Reworked the Python/MySQL ingestion path with multiprocessing and Redis caching to remove recurring bottlenecks.
*   **Operational Collaboration:** Worked directly with security analysts to convert threat intelligence workflows into production detection pipelines.

### Outcome
Established a production baseline for daily cybersecurity analytics, including a throughput step-change from 1K to 10K users in the critical ingestion flow.

### Evidence Scope
This case study is grounded in my published resume record and portfolio narrative. Client internal logs, sensitive data, and security playbooks remain confidential.
`
        },
        {
          slug: "cno-project",
          title: "Hedera Tokenization: CNO Project",
          description: "Architecting compliance-first infrastructure for secure tokenization and trading on the Hedera network.",
          technologies: ["Hedera", "ERC-1400", "ERC-3643", "Distributed Systems"],
          githubLink: "https://github.com/petroslamb/cno-project",
          content: `
### Project Overview
Designed and documented the core architecture for a regulated digital asset (RWA) platform on the Hedera network. The project required reconciling complex compliance standards (ERC-1400, ERC-3643) with high-throughput distributed infrastructure.

### Engineering & Architecture
*   **Compliance Infrastructure:** Designed the end-to-end flows for token issuance and restricted transfers utilizing complex compliance hooks and KYC verifications.
*   **Secondary Trading & Settlement:** Expanded the architectural scope to include secondary trading flows, clearing, and administrative operations. 
*   **Legacy Systems Integration:** Maintained canonical 'Oxygen-first' documentation and bridged legacy architecture (Nitrogen) with the new ATS (Alternative Trading System) monorepo.

*Note: The portfolio also includes foundational deep-tech engineering for Encode S.A., where I architected PySpark + Elasticsearch pipelines for enterprise cybersecurity logging at the scale of 100,000 users.*
`
        },
      ],
      forkTransparencyTitle: "Pinned fork transparency",
      forkTransparencyIntro: "Some pinned repositories are forks. They are showcased as adaptation/contribution workstreams, not original ownership claims.",
      forkHighlights: [
        {
          repo: "rlm (fork)",
          link: "https://github.com/petroslamb/rlm",
          contribution: "Maintained as an adaptation sandbox with implementation notes and consultant-facing usage framing."
        },
        {
          repo: "resume-copilot (fork)",
          link: "https://github.com/petroslamb/resume-copilot",
          contribution: "Used as a forked implementation track to test and document resume workflow improvements."
        }
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
      intro: "Let’s talk about your AI system and what has to be production-safe.",
      detailsTitle: "Contact Details",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      scheduleTitle: "Prefer to jump straight to a call?",
      scheduleDescription: "Reserve a 30-minute discovery session to align on goals, scope, and timelines. You’ll get follow-up notes and next steps within 48 hours.",
      scheduleButton: "Schedule a discovery call",
      scheduleFallback: "No visible slots in the calendar widget? Email me directly and I will open priority scheduling windows.",
      priorityEmailLabel: "Email for priority scheduling",
      priorityEmailSubject: "Priority scheduling request",
      teardownIntentSubject: "1-page architecture teardown request",
      teardownIntentHint: "Use Markdown. Fill only the blanks you want/can; leave the rest empty.",
      teardownIntentMessage: `# 1-Page Architecture Teardown Request

> Fill only the blanks you want/can. Skip anything not ready yet.

## 1) System Snapshot
- Product / use case:
- Stage: (prototype, beta, production)
- Users / tenants:
- Traffic: \`requests/day\` and peak \`requests/min\`

## 2) Current Architecture
\`\`\`txt
Frontend:
Backend:
LLM provider(s) / model(s):
Data stores:
Orchestration / queues:
Hosting / infrastructure:
\`\`\`

## 3) Failure Points (top 3)
1. 
2. 
3. 

## 4) Constraints
- Compliance / legal:
- Latency target:
- Budget guardrails:
- Team capacity:

## 5) Desired Outcome (next 30-60 days)
- Business outcome:
- Technical outcome:
- What "good" looks like:`,
      formIntro: "Or send a message directly through the form below.",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      formSubmitting: "Sending...",
      formSuccess: "Message sent. I will reply by email within 1-2 business days.",
      formError: "The form could not be sent right now. Please email me directly at petroslamb.dev@gmail.com.",
      formFallbackSubject: "Website contact request",
      formFallbackIntro: "Need guaranteed delivery? Use your email app or copy your message and send it directly.",
      formFallbackEmailButton: "Send with email app",
      formFallbackCopyButton: "Copy message",
      formFallbackCopySuccess: "Message copied. Paste it into an email to petroslamb.dev@gmail.com.",
      formFallbackCopyError: "Copy failed. Please copy manually and email petroslamb.dev@gmail.com.",
    },
    blog: {
      title: "Blog",
      intro: "Live writing feed and archived essays on software, AI, and consulting.",
      liveFeedBadge: "Live feed",
      liveFeedIntro: "Latest posts from Substack, automatically refreshed.",
      liveFeedLoading: "Loading latest Substack posts...",
      liveFeedError: "The live Substack feed is currently unavailable. Showing archive posts from this site.",
      viewOnSubstack: "Read on Substack",
      archiveTitle: "Archive from this site",
      readMore: "Read More",
      backToBlog: "Back to Blog",
      postedOn: "Posted on",
      prevPage: "Previous",
      nextPage: "Next",
      searchPlaceholder: "Search posts...",
      noResults: "No posts found matching your search.",
    },
    analytics: {
      title: "Analytics Dashboard",
      subtitle: "Monitor performance without leaving the site.",
      description: "Use the embedded Umami view below for a quick check or open the full dashboard to explore traffic, referrers, and conversions in detail.",
      ctaLabel: "Open full analytics",
      ctaNote: "Opens the Umami analytics share page in a new tab.",
      embedTitle: "Umami analytics share view",
      embedUnavailable: "We couldn’t load the analytics dashboard here. Use the button above to open it in a new tab instead.",
      privacyNote: "This site uses Umami’s cookieless analytics. No personal data or cookies are collected—this dashboard shows exactly what is measured.",
    },
    footer: {
      copyright: "© 2026 Petros Lambropoulos. All rights reserved.",
      availability: "Available for international consulting & freelance projects.",
      analyticsLinkLabel: "View public analytics",
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
      scheduleLink: "https://calendar.app.google/GTBgGnw1ziGqNffj6",
      scheduleAriaLabel: "Opens the scheduling tool in a new tab",
    }
  },
  gr: {
    nav: {
      home: "Αρχική",
      about: "Σχετικά",
      services: "Υπηρεσίες",
      portfolio: "Portfolio",
      trust: "Εμπιστοσύνη",
      contact: "Επικοινωνία",
      blog: "Blog",
      analytics: "Μετρήσεις",
    },
    home: {
      name: "Πέτρος Λαμπρόπουλος",
      title: "Μετατρέπω AI prototypes σε παραγωγικά συστήματα.",
      subtitle: "Σχεδιάζω, αξιολογώ και κλιμακώνω agentic αρχιτεκτονικές και deep-tech υποδομές που αντέχουν σε πραγματικές συνθήκες.",
      specialties: "Αυστηρή αξιολόγηση LLM, παραγωγικές agentic αρχιτεκτονικές και υποδομές με γνώμονα τη συμμόρφωση (compliance-first).",
      cta: "Κλείσε μια ανασκόπηση συστήματος",
      trustStripTitle: "Γιατί με εμπιστεύονται γρήγορα ομάδες",
      trustSignals: [
        { label: "Συστήματα σε παραγωγή", value: "Workable, NannyML και ρυθμιζόμενα deep-tech έργα" },
        { label: "Ανεξάρτητα αποδεικτικά", value: "Δημόσια repos, CI traces, αρχιτεκτονικά docs και έρευνα" },
        { label: "Ταχύτητα παράδοσης", value: "Πρώτο architecture teardown σε έως 5 εργάσιμες ημέρες" },
        { label: "Υπόσχεση απόκρισης", value: "Πρώτη απάντηση εντός 24 ωρών τις εργάσιμες" },
      ],
      externalValidationTitle: "Ανεξάρτητα Σήματα Εμπιστοσύνης",
      externalValidationIntro: "Δεν δημοσιεύω λογότυπα πελατών χωρίς γραπτή έγκριση. Χρησιμοποίησε αυτά τα third-party κανάλια για επαλήθευση ταυτότητας, timeline και ιστορικού εκτέλεσης.",
      externalValidationLinks: [
        {
          title: "LinkedIn προφίλ",
          description: "Χρονική ακολουθία ρόλων, δημόσιο προφίλ και επαγγελματικό υπόβαθρο.",
          ctaLabel: "Έλεγχος LinkedIn",
          url: "https://www.linkedin.com/in/petroslamb/"
        },
        {
          title: "Δραστηριότητα GitHub",
          description: "Δημόσια repositories, ιστορικό commits και CI traces στα pinned workstreams.",
          ctaLabel: "Έλεγχος GitHub",
          url: "https://github.com/petroslamb"
        },
        {
          title: "Αρχείο Substack",
          description: "Χρονοσφραγισμένα essays και τεχνικά post-mortems με δημόσιο publication trail.",
          ctaLabel: "Περιήγηση στο Substack",
          url: "https://lambpetros.substack.com"
        },
        {
          title: "Δημόσιο analytics dashboard",
          description: "Ζωντανή επισκεψιμότητα και conversions για αυτό το site μέσω Umami share view.",
          ctaLabel: "Άνοιγμα analytics",
          url: "https://cloud.umami.is/share/XlFjHh9T4RgIJTE1"
        }
      ],
      verifiedOutcomesTitle: "Μαρτυρίες Πελατών",
      verifiedOutcomesIntro: "Σύντομες μαρτυρίες από συνεργασίες, καθεμία με σύνδεση σε σχετικό δημόσιο case study.",
      verifiedOutcomes: [
        {
          metric: "Μαρτυρία Head of AI: Workable",
          testimonialQuote: "Ο Πέτρος δημιούργησε τα πρώτα μας GenAI proofs of concept και τα παρουσίασε σε όλη την εταιρεία, εξασφαλίζοντας καθαρό stakeholder buy-in για productionization.",
          testimonialAuthor: "Head of AI, Workable",
          evidenceLabel: "Ανοιχτό case study παραγωγικού AI",
          evidenceUrl: "/portfolio/production-ai-systems"
        },
        {
          metric: "Μαρτυρία CTO: Encode S.A.",
          testimonialQuote: "Ο Πέτρος μας βοήθησε να κλιμακώσουμε την πλατφόρμα για επεξεργασία dataset 100K χρηστών μέσα σε μία εργάσιμη ημέρα και να μετατρέψουμε ένα επίμονο bottleneck σε αξιόπιστη βάση λειτουργίας.",
          testimonialAuthor: "CTO, Encode S.A.",
          evidenceLabel: "Άνοιγμα case study Encode",
          evidenceUrl: "/portfolio/encode-cybersecurity-pipeline"
        },
        {
          metric: "Μαρτυρία CTO: dikaio.ai",
          testimonialQuote: "Ο Πέτρος μας έδωσε πρακτικό RAG blueprint για ελληνικό νομικό περιεχόμενο και μας βοήθησε να παραδώσουμε γρήγορα λειτουργικό AI lawyer chat demo.",
          testimonialAuthor: "CTO, dikaio.ai",
          evidenceLabel: "Άνοιγμα case study dikaio.ai",
          evidenceUrl: "/portfolio/dikaio-legal-rag"
        }
      ],
      servicesTitle: "Εξειδικευμένη Συμβουλευτική",
      services: [
        { title: "Αξιολόγηση Συστημάτων AI", description: "Αυστηρές δοκιμές και αρχιτεκτονικός έλεγχος πριν το AI σας βγει στην παραγωγή.", slug: "ai-systems-evaluation" },
        { title: "Παραγωγικές Agentic Αρχιτεκτονικές", description: "Ενσωμάτωση εύθραυστων AI prototypes σε αξιόπιστα συστήματα λογισμικού.", slug: "production-agentic-architectures" },
        { title: "Deep-Tech Υποδομές", description: "Σχεδιασμός κατανεμημένων backends για ML-monitoring και ρυθμιζόμενους κλάδους.", slug: "deep-tech-infrastructure" },
      ],
      credibility: "Εμπειρία σε παραγωγικά AI συστήματα στη Workable και τη NannyML, καθώς και σε ανεξάρτητα συμβουλευτικά engagements.",
      outcomesTitle: "Εμπορικά Αποτελέσματα (Ανωνυμοποιημένα)",
      outcomesIntro: "Δύο παραδείγματα με σαφή baseline, scope παρέμβασης και μετρήσιμη διαφορά.",
      outcomeCaseStudies: [
        {
          title: "Σκλήρυνση GenAI για πλατφόρμα προσλήψεων",
          timeframe: "Sprint σταθεροποίησης 6 εβδομάδων",
          before: "Η ανάκαμψη σε αστοχίες γινόταν κυρίως χειροκίνητα, με bottlenecks στο rollout.",
          after: "Παραδόθηκαν hardened microservices και deterministic fallbacks που υποστηρίζουν δεκάδες χιλιάδες καθημερινά workflows βιογραφικών σε corpus 0.5 δισ. εγγραφών.",
          scope: "Το scope καλύπτει αρχιτεκτονική και reliability patterns· εσωτερικά SLO dashboards και client internals είναι εμπιστευτικά.",
          evidenceLabel: "Σχετικό production case study",
          evidenceUrl: "/portfolio/production-ai-systems"
        },
        {
          title: "Compliance-first αρχιτεκτονική tokenization",
          timeframe: "Αρχιτεκτονικό track 8 εβδομάδων",
          before: "Τρεις κρίσιμες ροές (issuance, restricted transfers, secondary trading) ήταν κατακερματισμένες σε ασύνδετη τεκμηρίωση.",
          after: "Ενοποιήθηκαν και οι 3 ροές σε ένα canonical Oxygen-first architecture path με σαφές migration baseline από ERC-1400 προς ERC-3643 alignment.",
          scope: "Ταυτότητα πελάτη, governance πρακτικά και εσωτερικά throughput benchmarks καλύπτονται από NDA.",
          evidenceLabel: "Δημόσιο αρχιτεκτονικό repository",
          evidenceUrl: "/portfolio/cno-project"
        }
      ],
      secondaryCta: {
        title: "Ζήτησε 1-page architecture teardown",
        description: "Στείλε async το αρχιτεκτονικό context και λάβε γραπτό teardown με βασικά bottlenecks, risk flags και πρώτες προτεραιότητες.",
        buttonLabel: "Έναρξη teardown request",
        helper: "Παραδίδεται ως σύντομο γραπτό brief πριν από οποιοδήποτε live call."
      },
      proofTitle: "Αποδείξεις, Όχι Υποσχέσεις",
      proofIntro: "Επιλεγμένα παραδείγματα από παραγωγική δουλειά και δημόσια artifacts. Όπου υπάρχει εμπιστευτικότητα πελάτη, το δηλώνω ρητά.",
      proofBlocks: [
        {
          title: "Ethereum Protocol Verification",
          challenge: "Οι ομάδες πρωτοκόλλων χρειάζονται ελέγξιμη απόδειξη ότι οι υποχρεώσεις των προδιαγραφών αντιστοιχίζονται σε πραγματική υλοποίηση.",
          outcome: "Παράχθηκαν επαναλήψιμα CI artifacts και αναφορές που κάνουν τις διαφωνίες ελέγξιμες και όχι σιωπηρές.",
          evidenceLabel: "Case study στο portfolio",
          evidenceUrl: "/portfolio/eip-verify",
          scopeNote: "Υλοποιήθηκε ως PoC για Ethereum Foundation ESP RFP· η χρηματοδότηση δεν εγκρίθηκε."
        },
        {
          title: "Κλιμάκωση Παραγωγικού AI (Workable)",
          challenge: "Μετάβαση των generative AI prototypes από το πειραματικό στάδιο σε αξιόπιστες παραγωγικές ροές σε μεγάλη κλίμακα.",
          outcome: "Υποστηρίχθηκαν δεκάδες χιλιάδες αιτήματα ημερησίως σε workflows σχετικών με βιογραφικά, πάνω σε corpus 0.5 δισ. εγγραφών.",
          evidenceLabel: "Βιογραφικό και συνοπτικό case study",
          evidenceUrl: "/portfolio/production-ai-systems",
          scopeNote: "Εσωτερικά SLOs, ακριβή service metrics και proprietary λεπτομέρειες παραμένουν εμπιστευτικά."
        }
      ],
      featuredResearch: {
        title: "Προτεινόμενη Έρευνα",
        essayTitle: "The Transformer Attractor",
        essayDescription: "Κατανοώντας τους θεωρητικούς μηχανισμούς που οδήγησαν στην κυριαρχία των Transformers και πώς το hardware friction map περιορίζει εναλλακτικές αρχιτεκτονικές.",
        readOnLabel: "Διαβάστε στο Substack",
        link: "https://lambpetros.substack.com/p/the-transformer-attractor"
      },
    },
    about: {
      title: "Σχετικά με εμένα",
      greeting: "Γεια σας, είμαι ο Πέτρος Λαμπρόπουλος (Peter Lamb)",
      intro: "Εργάζομαι σε συστήματα AI στο σημείο όπου οι αφαιρέσεις (abstractions) καταρρέουν: παραγωγικοί agents, pipelines αξιολόγησης και πλατφόρμες AI-first που πρέπει να επιβιώσουν υπό πραγματικούς περιορισμούς.",
      howIHelpTitle: "Πώς βοηθώ τις ομάδες μηχανικών",
      howIHelpIntro: "Μετατρέπω εύθραυστα prototypes σε σταθερά, αναπτύξιμα συστήματα, πλοηγούμενος μέσα από ασαφείς απαιτήσεις, ελλιπείς μετρικές και εξελισσόμενους ερευνητικούς στόχους.",
      howIHelp: [
        "Αυστηρές δοκιμές, ανάλυση τρόπων αστοχίας (failure-mode) και αρχιτεκτονικός έλεγχος για συστήματα AI πριν βγουν στην παραγωγή.",
        "Μετατροπή εύθραυστων AI prototypes σε θωρακισμένα, αξιόπιστα συστήματα λογισμικού που αντέχουν σε συνθήκες μεγάλης κλίμακας.",
        "Σχεδιασμός κατανεμημένων backend συστημάτων και compliance-first υποδομών για crypto και αυστηρά ρυθμιζόμενους κλάδους."
      ],
      experienceTitle: "Εμπειρία",
      experience: [
        "Independent Systems Consultant (2024–Σήμερα): Συνεργασία με startups και ερευνητικές ομάδες σε agentic αρχιτεκτονικές, αξιολόγηση LLMs και ασφάλεια πρωτοκόλλων.",
        "Ηγήθηκα κύκλων generative AI discovery-to-launch στην Workable, μετατρέποντας prototypes σε παραγωγικά χαρακτηριστικά (επεξεργασία δεκάδων χιλιάδων βιογραφικών ημερησίως) σε corpus 0.5 δισ. εγγραφών στο EKS.",
        "Υλοποίησα ML monitoring prototypes με την ιδρυτική ομάδα της NannyML στην ΕΕ, παραδίδοντας containerized Python microservices στο Amazon EKS για να κλείσουν τα πρώτα B2B deals.",
        "Αρχιτεκτόνησα μια PySpark + Elasticsearch πλατφόρμα στην Encode S.A. που επεξεργαζόταν δεδομένα δικτύου 100.000 χρηστών μέσα σε μία εργάσιμη ημέρα.",
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
        { value: "resume2026_public.pdf", label: "Βιογραφικό 2026 — Ισορροπημένο" },
        { value: "resume2026_hyped_public.pdf", label: "Βιογραφικό 2026 — Έκδοση ανάπτυξης" },
        { value: "resume2026_hyped_gr_public.pdf", label: "Βιογραφικό 2026 — Έκδοση ανάπτυξης (Ελληνικά)" },
        { value: "resume2026_conservative_public.pdf", label: "Βιογραφικό 2026 — Συνοπτική τεχνική έκδοση" },
      ],
      philosophyTitle: "Μηχανική Φιλοσοφία",
      philosophyText: "Πιστεύω ότι για να κατασκευάσεις ισχυρά συστήματα AI, πρέπει πρώτα να κατανοήσεις τα μηχανικά όρια των ίδιων των μοντέλων — από τους μηχανισμούς προσοχής (attention mechanisms) μέχρι τους περιορισμούς της μνήμης KV. Η δημιουργία αφαιρέσεων χωρίς κατανόηση των μηχανισμών οδηγεί σε εύθραυστα, απρόβλεπτα συστήματα.",
      researchFeedTitle: "Πρόσφατη Έρευνα & Άρθρα",
      researchFeed: [
        {
          title: "The Transformer Attractor",
          description: "Μια ανάλυση του γιατί οι αρχιτεκτονικές AI συγκλίνουν στον Transformer και των περιορισμών στο hardware που διαμορφώνουν αυτή την εξέλιξη.",
          url: "https://lambpetros.substack.com/p/the-transformer-attractor",
          date: "Ιαν 2026",
        },
        {
          title: "The Hardware Friction Map",
          description: "Μια βαθιά βουτιά στα θεμέλια των συστημάτων και στα οικονομικά του hardware που διέπουν την επεκτασιμότητα παραγωγής AI.",
          url: "https://lambpetros.substack.com/p/the-hardware-friction-map",
          date: "Δεκ 2025",
        }
      ],
      subscribeCta: "Εγγραφείτε στην Έρευνά μου"
    },
    services: {
      title: "Υπηρεσίες",
      intro: "Σχεδιάζω, αξιολογώ και θωρακίζω AI αρχιτεκτονικές που κλιμακώνονται. Διάλεξε το engagement που ταιριάζει στις τεχνικές σου προκλήσεις.",
      readCaseStudies: "Δείτε τα Case Studies",
      backToServices: "Επιστροφή στις Υπηρεσίες",
      ctaTitle: "Χρειάζεστε έλεγχο της αρχιτεκτονικής σας;",
      ctaDescription: "Κλείσε ένα 30λεπτο call για να χαρτογραφήσουμε τους περιορισμούς του συστήματός σας και τα κενά αξιολόγησης. Θα φύγεις με μια ξεκάθαρη λίστα επόμενων μηχανικών βημάτων.",
      ctaButton: "Κλείσε μια ανασκόπηση συστήματος",
      categories: [
        {
          title: "Αξιολόγηση και Έλεγχος Συστημάτων AI",
          slug: "ai-systems-evaluation",
          intro: "Δεν χτίζω απλά wrappers· αποδομώ τα μοντέλα. Αυστηρές δοκιμές, ανάλυση τρόπων αστοχίας και αρχιτεκτονικός έλεγχος για AI συστήματα πριν βγουν στην παραγωγή.",
          businessProse: `Πριν κλιμακώσετε ένα χαρακτηριστικό AI σε εκατομμύρια χρήστες ή βασιστείτε σε αυτό για την ασφάλεια ενός πρωτοκόλλου, πρέπει να γνωρίζετε ακριβώς πώς και πότε καταρρέει.

### Μεθοδολογία Ελέγχου
*   **Ανάλυση Τρόπων Αστοχίας (Failure-Mode Analysis):** Δοκιμές πίεσης (stress-testing) σε prompts, context windows και επίπεδα ανάκτησης (retrieval) απέναντι σε εχθρικά ή ακραία δεδομένα (edge-cases).
*   **Πιπελίνες Αξιολόγησης:** Δημιουργία αυτοματοποιημένων συστημάτων συγκριτικής αξιολόγησης (π.χ. LLM-ως-κριτής ή σημασιολογική ομοιότητα) προσαρμοσμένα στον τομέα σας.
*   **Αρχιτεκτονική Ανασκόπηση:** Αξιολόγηση του RAG, του agentic loop ή του workflow σας για σημεία συμφόρησης, κινδύνους ψευδαισθήσεων (hallucinations) και κόστος.

### Παραδοτέα
*   Ολοκληρωμένη έκθεση ελέγχου που αναλύει ευπάθειες και αρχιτεκτονικά ελαττώματα.
*   Προσαρμοσμένη σουίτα αξιολόγησης ενσωματωμένη στο CI/CD σας.
*   Εφαρμόσιμο σχέδιο αποκατάστασης (remediation roadmap) που περιγράφει συγκεκριμένες προσαρμογές σε κώδικα και prompts.

### Τυπικές Συνεργασίες
*   Επικύρωση πρωτοκόλλων για deep-tech επιχορηγήσεις.
*   Δοκιμή πίεσης πριν από την κυκλοφορία για εταιρικά χαρακτηριστικά generative AI.`,
          items: [
            "Ιδανικό για ομάδες που έχουν ένα λειτουργικό AI prototype αλλά χρειάζεται να εγγυηθούν την αξιοπιστία πριν το λανσάρισμα.",
            "Χρονοδιάγραμμα: 2–4 εβδομάδες ανάλογα με την πολυπλοκότητα του συστήματος.",
            "Παραδοτέα: Έκθεση ελέγχου, προσαρμοσμένα pipelines αξιολόγησης, roadmap αποκατάστασης.",
            "Επένδυση: Ξεκινάει από €4K."
          ],
          caseStudies: [
            {
              company: "Ethereum Foundation (RFP PoC)",
              challenge: "Επαλήθευση των υποχρεώσεων του πρωτοκόλλου έναντι των execution clients χρησιμοποιώντας LLMs για ενίσχυση της ασφάλειας.",
              solution: [
                "Κατασκεύασα το 'Ethereum Protocol Verification', ένα pipeline ιχνηλασιμότητας στο πλαίσιο πρότασης έργου.",
                "Ορχήστρωσα αξιολογήσεις πολλαπλών σταδίων που επικύρωναν τις προδιαγραφές του πρωτοκόλλου έναντι υλοποιήσεων του go-ethereum."
              ],
              technologies: ["Python", "Claude 3.5 Sonnet", "LLM Evaluation", "Protocol Security"]
            },
            {
              company: "Transformer Architecture Research",
              challenge: "Κατανόηση των θεωρητικών παραγόντων κλιμάκωσης και των εσωτερικών μηχανισμών που καθιστούν κυρίαρχα τα μοντέλα Transformer.",
              solution: [
                "Διεξήγαγα ενδελεχή έρευνα πάνω στο Transformer Attractor και το hardware friction map.",
                "Δημοσίευσα ευρήματα για το γιατί οι εναλλακτικές αρχιτεκτονικές δυσκολεύονται απέναντι στην κλιμάκωση (scale-dependence) του Transformer."
              ],
              technologies: ["Transformers", "Mechanistic Interpretability", "Hardware Co-Evolution"]
            }
          ],
          engagementTitle: "Σχεδιάστε τον Έλεγχο Συστήματος σας",
          engagementDescription: "Κλείστε ένα 30λεπτο call για να συζητήσουμε την τρέχουσα αρχιτεκτονική σας, τα γνωστά προβλήματα και τους στόχους αξιολόγησης.",
          engagementChecklistTitle: "Φέρτε στο call:",
          engagementChecklist: [
            "Διαγράμματα αρχιτεκτονικής ή περιγραφές των τρεχόντων workflows AI.",
            "Παραδείγματα αστοχιών ή ψευδαισθήσεων που αντιμετωπίζετε αυτή τη στιγμή.",
            "Πρόσβαση σε δείγματα δεδομένων ή τρέχουσες μετρικές αξιολόγησης."
          ],
          engagementCtaLabel: "Κλείσε το call αξιολόγησης"
        },
        {
          title: "Παραγωγικές Agentic Αρχιτεκτονικές",
          slug: "production-agentic-architectures",
          intro: "Μετατροπή εύθραυστων AI prototypes σε θωρακισμένα, αξιόπιστα συστήματα λογισμικού που αντέχουν σε πραγματική κλίμακα και κανονισμούς.",
          businessProse: `Ενα proof-of-concept σε Jupyter Notebook δεν είναι προϊόν. Εξειδικεύομαι στη δύσκολη μηχανική δουλειά που απαιτείται για να μετατραπούν απομονωμένα AI scripts σε ανθεκτικά, κλιμακώσιμα και παρατηρήσιμα microservices.

### Προσέγγιση Μηχανικής (Engineering Approach)
*   **Ορχήστρωση Agents:** Σχεδιασμός στιβαρών μηχανών κατάστασης (state machines) και λογικής δρομολόγησης (routing) για multi-agent συστήματα.
*   **Διαχείριση Δεδομένων & Κατάστασης:** Υλοποίηση αξιόπιστης μνήμης, ανάκτησης πλαισίου (RAG at scale) και διαχείρισης συναλλαγών.
*   **Παρατηρησιμότητα & Guardrails:** Ενσωμάτωση ιχνηλάτησης (π.χ. LangSmith), μηχανισμών fallback και αυστηρής ανάλυσης εξόδου για την πρόληψη καταστροφικών σφαλμάτων.

### Παραδοτέα
*   Παραγωγικά, containerized microservices έτοιμα για ανάπτυξη σε Kubernetes.
*   Πλήρη dashboards παρατηρησιμότητας και κανόνες ειδοποίησης (alerting).
*   Runbooks για την ομάδα μηχανικών που περιγράφουν λεπτομερώς τις διαδικασίες συντήρησης και ανάπτυξης.

### Τυπικές Συνεργασίες
*   Μετάβαση ενός GenAI MVP σε enterprise κλίμακα.
*   Δημιουργία αυτόνομων agents για συγκεκριμένους αυτοματισμούς ροών εργασίας.`,
          items: [
            "Ιδανικό για scale-ups και enterprises που μεταφέρουν το AI από το εργαστήριο στην παραγωγή.",
            "Χρονοδιάγραμμα: 1–3 μήνες ανάλογα με το βάθος ενσωμάτωσης.",
            "Παραδοτέα: Παραγωγικά microservices, setup παρατηρησιμότητας, runbooks.",
            "Επένδυση: €8K–€20K."
          ],
          caseStudies: [
            {
              company: "RepoReviver (Ανεξάρτητη Πρωτοβουλία AI)",
              challenge: "Δημιουργία αξιόπιστου agent workflow που ελέγχει παλιά repositories, εφαρμόζει διορθώσεις με ασφάλεια και παράγει ελέγξιμα pull requests.",
              solution: [
                "Σχεδίασα codespace-first agent workflow με σαφή βήματα κύκλου ζωής (δημιουργία περιβάλλοντος, διορθώσεις, επαλήθευση, PR, καθαρισμός).",
                "Εφάρμοσα guardrails για isolation της εκτέλεσης και επαναλήψιμα automation runs."
              ],
              technologies: ["Python", "Google ADK", "GitHub Codespaces", "Agentic Systems"]
            },
            {
              company: "Workable",
              challenge: "Κλιμάκωση χαρακτηριστικών generative AI σε μια τεράστια, ζωντανή βάση χρηστών.",
              solution: [
                "Μετέφερα proofs of concept (ανάλυση βιογραφικών, δημιουργία αγγελιών) σε θωρακισμένα microservices.",
                "Ανάπτυξη (deployment) μέσω AWS EKS, διαχειριζόμενος δεκάδες χιλιάδες αιτήματα ημερησίως σε ένα corpus 0.5 δισ. εγγραφών."
              ],
              technologies: ["AWS EKS", "Kubernetes", "Generative AI", "Kafka/RabbitMQ"]
            }
          ],
          engagementTitle: "Ξεκινήστε την Ανάπτυξη του Συστήματος",
          engagementDescription: "Χρησιμοποιήστε ένα 30λεπτο call για να χαρτογραφήσουμε τα σημεία ενσωμάτωσης, τις απαιτήσεις κλίμακας και την τρέχουσα κατάσταση του prototype σας.",
          engagementChecklistTitle: "Έχετε έτοιμα:",
          engagementChecklist: [
            "Τον υπάρχων κώδικα (prototype) ή τα notebooks σας.",
            "Την αναμενόμενη κλίμακα (QPS, όγκο δεδομένων) και τις απαιτήσεις υστέρησης (latency).",
            "Λεπτομέρειες για την υπάρχουσα cloud υποδομή σας (AWS/GCP, K8s, κ.λπ.)."
          ],
          engagementCtaLabel: "Κλείσε το build call"
        },
        {
          title: "Deep-Tech και Compliance-First Υποδομές",
          slug: "deep-tech-infrastructure",
          intro: "Σχεδιασμός κατανεμημένων backend συστημάτων και compliance-first υποδομών για crypto, ML-monitoring και αυστηρά ρυθμιζόμενους κλάδους.",
          businessProse: `Οι αυστηρά ρυθμιζόμενοι κλάδοι (FinTech, Crypto, Healthcare) απαιτούν συστήματα backend (backends) που βασίζονται σε ριζικά διαφορετικές αρχές. Η ασφάλεια, η ελεγξιμότητα (auditability) και η τεράστια διακίνηση δεδομένων (throughput) πρέπει να σχεδιάζονται από την πρώτη μέρα.

### Σχεδιασμός Υποδομής
*   **Κατανεμημένα Συστήματα (Distributed Systems):** Αρχιτεκτονική event-driven ροών δεδομένων ικανών να δεχθούν και να αναλύσουν terabytes δεδομένων.
*   **Με γνώμονα τη Συμμόρφωση (Compliance-First):** Ενσωμάτωση κανονιστικών περιορισμών (π.χ. GDPR, χρηματοοικονομικοί κανονισμοί) απευθείας στην αρχιτεκτονική της βάσης δεδομένων και στα μοτίβα πρόσβασης.
*   **Μηχανική Ανθεκτικότητας (Resilience Engineering):** Σχεδιασμός συστημάτων που υποβαθμίζονται ομαλά (degrade gracefully) υπό συνθήκες ακραίου φορτίου ή στοχευμένων επιθέσεων.

### Παραδοτέα
*   Κλιμακώσιμες backend υπηρεσίες (Python, Go, ή Rust ανάλογα με τις απαιτήσεις).
*   Pipelines δεδομένων για παραλαβή και επεξεργασία υψηλού όγκου (Kafka, Spark).
*   Infrastructure as Code (Terraform) και αυτοματισμός ανάπτυξης (deployment).

### Τυπικές Συνεργασίες
*   Δημιουργία του επιπέδου δεδομένων (data plane) για πλατφόρμες παρατηρησιμότητας ML.
*   Αρχιτεκτονική για πλατφόρμες tokenization και trading (συναλλαγών).`,
          items: [
            "Ιδανικό για deep-tech startups που διαχειρίζονται ευαίσθητα δεδομένα ή analytics υψηλού throughput.",
            "Χρονοδιάγραμμα: Ελάχιστο 2–4 μήνες για βασική αρχιτεκτονική.",
            "Παραδοτέα: Κατανεμημένες backend υπηρεσίες, data pipelines, IaC.",
            "Επένδυση: Μηνιαία σταθερή αμοιβή (Retainer) ή project-based ξεκινώντας από €15K."
          ],
          caseStudies: [
            {
              company: "CNO (Hedera)",
              challenge: "Αρχιτεκτονική της βασικής υποδομής για πλατφόρμα tokenization και trading.",
              solution: [
                "Σχεδίασα compliance-first υποδομή ειδικά προσαρμοσμένη για το δίκτυο Hedera.",
                "Εξασφάλισα ασφαλή επεξεργασία συναλλαγών υψηλού throughput για το cno.zone."
              ],
              technologies: ["Distributed Systems", "Crypto Infrastructure", "Hedera"]
            },
            {
              company: "NannyML",
              challenge: "Κατασκευή της βασικής υποδομής δεδομένων για ένα enterprise ML monitoring SaaS.",
              solution: [
                "Υλοποίησα ML monitoring prototypes με την ιδρυτική ομάδα.",
                "Παρέδωσα containerized Python microservices στο Amazon EKS, επιτρέποντας στην ομάδα να κλείσει τα πρώτα της B2B deals."
              ],
              technologies: ["Python", "Amazon EKS", "MLOps", "Data Engineering"]
            },
            {
              company: "Encode S.A.",
              challenge: "Επεξεργασία terabytes δεδομένων δικτύου (logs) καθημερινά για ανίχνευση εισβολών σε σχεδόν πραγματικό χρόνο.",
              solution: [
                "Αρχιτεκτόνησα πλατφόρμα βασισμένη σε PySpark και Elasticsearch.",
                "Βελτιστοποίησα το pipeline για να επεξεργάζεται σύνολα δεδομένων δικτύου 100.000 χρηστών μέσα σε μία εργάσιμη ημέρα."
              ],
              technologies: ["PySpark", "Elasticsearch", "Kafka", "Data Analytics"]
            }
          ],
          engagementTitle: "Συζητήστε τις Ανάγκες σας για Υποδομές",
          engagementDescription: "Χρησιμοποιήστε μια συνεδρία 30 λεπτών για να συζητήσετε τις απαιτήσεις σας σε throughput, compliance, και deployment.",
          engagementChecklistTitle: "Φέρτε στο call:",
          engagementChecklist: [
            "Εκτιμήσεις για τον όγκο και την ταχύτητα των δεδομένων.",
            "Συγκεκριμένα ρυθμιστικά πλαίσια με τα οποία πρέπει να συμμορφωθείτε.",
            "Τρέχοντα σημεία συμφόρησης (bottlenecks) στην υπάρχουσα αρχιτεκτονική σας (αν εφαρμόζεται)."
          ],
          engagementCtaLabel: "Κλείσε το infrastructure call"
        }
      ],
    },
    portfolio: {
      title: "Portfolio",
      intro: "Επιλεγμένα έργα και case studies:",
      projects: [
        {
          slug: "eip-verify",
          title: "Ethereum Foundation RFP: Ethereum Protocol Verification",
          description: "LLM-assisted έλεγχος προδιαγραφών πρωτοκόλλου και ιχνηλασιμότητα ασφάλειας.",
          technologies: ["Python", "Claude 3.5 Sonnet", "AST Analysis", "Protocol Security"],
          githubLink: "https://github.com/petroslamb/ethereum-protocol-verification",
          content: `
### Επισκόπηση Έργου
Κατασκεύασα το 'Ethereum Protocol Verification', ένα pipeline ιχνηλασιμότητας με τη βοήθεια LLM, ως Proof-of-Concept για ένα Request for Proposal (RFP) του Ethereum Foundation ESP. Ο στόχος ήταν ο έλεγχος των προδιαγραφών του execution layer (EELS) έναντι του go-ethereum client, εντοπίζοντας πιθανά consensus bugs. Αν και το έργο δεν έλαβε τελικά χρηματοδότηση, το PoC ανέδειξε επιτυχώς το χάσμα μεταξύ των δυνατοτήτων της τεχνητής νοημοσύνης και της αυστηρότητας του πρωτοκόλλου.

### Προσέγγιση Μηχανικής (Engineering Approach)
*   **Εξαγωγή AST:** Ανάλυση (parsing) των προδιαγραφών σε Python και του πηγαίου κώδικα σε Go σε ενοποιημένες ενδιάμεσες αναπαραστάσεις (intermediate representations).
*   **Αξιολόγηση LLM:** Σχεδιασμός ενός pipeline αξιολόγησης πολλαπλών σταδίων χρησιμοποιώντας το Claude 3.5 Sonnet για την αντιστοίχιση των ρητρών των προδιαγραφών με blocks υλοποίησης.
*   **Traceability Matrix:** Δημιουργία ενός ελέγξιμου πίνακα (matrix) που αναδείκνυε κενά κάλυψης και πιθανές σημασιολογικές αναντιστοιχίες μεταξύ των προδιαγραφών και του κώδικα.

### Αντίκτυπος
Απέδειξε τη σκοπιμότητα και τα σημεία τριβής (friction points) της χρήσης ενός αυτοματοποιημένου, υποβοηθούμενου από LLM workflow για τον έλεγχο ορθότητας των αναβαθμίσεων του Ethereum. [Διαβάστε την πλήρη ανάλυση στο Substack](https://lambpetros.substack.com/p/measuring-trust-the-gap-between-ai).
`
        },
        {
          slug: "transformer-attractors",
          title: "The Transformer Attractor",
          description: "Deep dive έρευνα στους θεωρητικούς μηχανισμούς που οδηγούν στην κυριαρχία του Transformer έναντι εναλλακτικών αρχιτεκτονικών.",
          technologies: ["Transformers", "Hardware Friction Map", "Mechanistic Interpretability"],
          githubLink: "https://github.com/petroslamb/hardware-friction-scorecard-dataset",
          content: `
### Ερευνητική Εστίαση
Διεξήγαγα θεμελιώδη έρευνα πάνω στο 'The Transformer Attractor' και το 'The Hardware Friction Map'. Στόχος ήταν να αξιολογηθούν οι αρχιτεκτονικοί και hardware λόγοι για τους οποίους το Transformer μοντέλο κυριαρχεί.

### Βασικές Συνεισφορές
*   **Ανάλυση Scale-Dependence:** Έρευνα στους θεωρητικούς μηχανισμούς πίσω από την εξάρτηση της κλιμάκωσης του Transformer και την 'Παγίδα των Δύο Πυλών' (Two-Gate Trap).
*   **Συνέλιξη Hardware (Hardware Co-Evolution):** Δημοσίευση ευρημάτων σχετικά με το πώς ο χάρτης τριβής του hardware περιορίζει τις αρχιτεκτονικές εναλλακτικές, καθιστώντας τα transformers/υβρίδια τις πιο βιώσιμες επιλογές.

### Αξία (Value Delivered)
Αυτή η έρευνα ενημερώνει άμεσα τη συμβουλευτική μου εργασία, επιτρέποντάς μου να αξιολογώ συστήματα AI με βάση θεμελιώδεις αρχιτεκτονικές πραγματικότητες αντί για το μάρκετινγκ των παρόχων.
`
        },
        {
          slug: "production-ai-systems",
          title: "Scaling Παραγωγικού AI: Workable & NannyML",
          description: "Μετάβαση generative AI prototypes σε enterprise-grade microservices.",
          technologies: ["Python", "Kafka", "AWS EKS", "Kubernetes", "LangChain"],
          content: `
### Η Πρόκληση
Τόσο η Workable όσο και η NannyML χρειάζονταν να μεταφέρουν χαρακτηριστικά AI από το εργαστήριο σε περιβάλλοντα παραγωγής (production environments) που εξυπηρετούν ζωντανούς, enterprise πελάτες. Η πρόκληση ήταν η κατασκευή συστημάτων που θα μπορούσαν να διαχειριστούν τεράστια κλίμακα, να διασφαλίσουν την ιδιωτικότητα των δεδομένων και να διατηρήσουν υψηλή διαθεσιμότητα.

### Λύσεις Μηχανικής (Engineering Solutions)
*   **Workable (Ανάλυση Βιογραφικών & Generative Χαρακτηριστικά):** Μετέφερα απομονωμένα proofs-of-concept σε θωρακισμένα microservices ανεπτυγμένα στο AWS EKS. Το σύστημα ενορχηστρώνει (orchestrates) generative workflows σε ένα corpus 0.5 δισεκατομμυρίων εγγραφών, διαχειριζόμενο δεκάδες χιλιάδες αιτήματα ημερησίως με αυστηρούς μηχανισμούς fallback.
*   **NannyML (ML Observability):** Δοκίμασα (piloted) αλγορίθμους παρακολούθησης ML (ML monitoring) και κατασκεύασα τη βασική containerized υποδομή Python στο Amazon EKS, επιτρέποντας στην ιδρυτική ομάδα να κλείσει τα πρώτα της μεγάλα B2B συμβόλαια.
`
        },
        {
          slug: "dikaio-legal-rag",
          title: "dikaio.ai: Greek Law RAG & AI Lawyer Demo",
          description: "Συμβουλευτική για retrieval αρχιτεκτονική ελληνικού δικαίου και παράδοση λειτουργικού AI lawyer chat demo.",
          technologies: ["RAG", "OpenAI APIs", "Prompt Engineering", "Legal Knowledge Retrieval"],
          content: `
### Επισκόπηση Έργου
Παρείχα συμβουλευτική στη dikaio.ai για το πώς να στηθεί retrieval-augmented generation πάνω σε ελληνικό νομικό περιεχόμενο και βοήθησα την ομάδα να μετατρέψει την ιδέα σε λειτουργικό AI lawyer chat demo.

### Εστίαση Μηχανικής
*   **Αρχιτεκτονική Retrieval:** Όρισα πρακτική ροή ανάκτησης από πηγές ελληνικού δικαίου για καλύτερο grounding και λιγότερες μη τεκμηριωμένες απαντήσεις.
*   **Αξιοπιστία Απαντήσεων:** Διαμόρφωσα τη συμπεριφορά απάντησης γύρω από το ανακτημένο context ώστε οι νομικές απαντήσεις να παραμένουν ιχνηλάσιμες στις πηγές.
*   **Execution Path:** Βοήθησα την ομάδα να περάσει από conceptual συζήτηση σε demo που μπορούσε να αξιολογηθεί από τεχνικά και product stakeholders.

### Αποτέλεσμα
Παραδόθηκε λειτουργικό prototype που αξιοποιούσε legal retrieval σε πραγματικές συνομιλίες και έδωσε συγκεκριμένο baseline για το επόμενο προϊοντικό iteration.

### Σημείωση Scope
Το case study συνοψίζει το scope της συμβουλευτικής και τα αποτελέσματα του prototype. Εσωτερικά product analytics και proprietary νομικά corpora παραμένουν εμπιστευτικά.
`
        },
        {
          slug: "encode-cybersecurity-pipeline",
          title: "Encode S.A.: Πλατφόρμα Δεδομένων Κυβερνοασφάλειας",
          description: "Αρχιτεκτόνησα πλατφόρμα PySpark + Elasticsearch που επεξεργαζόταν datasets δικτύου 100K χρηστών μέσα σε μία εργάσιμη ημέρα.",
          technologies: ["PySpark", "Elasticsearch", "Python", "MySQL", "Redis", "Data Engineering"],
          content: `
### Πλαίσιο
Η Encode S.A. χρειαζόταν αξιόπιστη ημερήσια επεξεργασία μεγάλων cybersecurity telemetry datasets για enterprise αναλύσεις απειλών.

### Τι Υλοποίησα
*   **Κατανεμημένο Data Plane:** Σχεδίασα πλατφόρμα PySpark + Elasticsearch με στόχο επεξεργασία datasets δικτύου 100K χρηστών μέσα σε μία εργάσιμη ημέρα.
*   **Βελτιστοποίηση Pipeline:** Ανασχεδίασα τη ροή ingestion σε Python/MySQL με multiprocessing και Redis caching, αφαιρώντας επαναλαμβανόμενα bottlenecks.
*   **Συνεργασία με Αναλυτές Ασφάλειας:** Συνεργάστηκα άμεσα με security analysts για μετατροπή threat-intelligence workflows σε παραγωγικά detection pipelines.

### Αποτέλεσμα
Δημιουργήθηκε production baseline για ημερήσια cybersecurity analytics, με βελτίωση κρίσιμης ροής ingestion από 1K σε 10K χρήστες.

### Scope Τεκμηρίωσης
Το case study βασίζεται σε δημοσιευμένο resume record και στο portfolio narrative. Εσωτερικά logs, ευαίσθητα δεδομένα και security playbooks παραμένουν εμπιστευτικά.
`
        },
        {
          slug: "cno-project",
          title: "Hedera Tokenization: CNO Project",
          description: "Αρχιτεκτονική compliance-first υποδομών για ασφαλές tokenization και συναλλαγές στο δίκτυο Hedera.",
          technologies: ["Hedera", "ERC-1400", "ERC-3643", "Distributed Systems"],
          githubLink: "https://github.com/petroslamb/cno-project",
          content: `
### Επισκόπηση Έργου
Σχεδίασα και τεκμηρίωσα τη βασική αρχιτεκτονική για μια ρυθμιζόμενη πλατφόρμα ψηφιακών περιουσιακών στοιχείων (RWA) στο δίκτυο Hedera. Το έργο απαιτούσε τον συνδυασμό πολύπλοκων προτύπων συμμόρφωσης (ERC-1400, ERC-3643) με κατανεμημένες υποδομές υψηλής απόδοσης.

### Μηχανική & Αρχιτεκτονική
*   **Υποδομή Συμμόρφωσης:** Σχεδιασμός end-to-end ροών για έκδοση (issuance) και περιορισμένες μεταφορές (restricted transfers) tokens χρησιμοποιώντας πολύπλοκα compliance hooks και KYC verifications.
*   **Δευτερογενής Αγορά & Εκκαθάριση (Secondary Trading):** Επέκταση του αρχιτεκτονικού σκοπού για την κάλυψη ροών δευτερογενούς αγοράς, εκκαθάρισης (clearing) και διαχειριστικών λειτουργιών.
*   **Ενσωμάτωση Παλαιού Συστήματος:** Διατήρηση canonical 'Oxygen-first' τεκμηρίωσης και γεφύρωση της παλαιάς αρχιτεκτονικής (Nitrogen) με το νέο ATS (Alternative Trading System) monorepo.

*Σημείωση: Το portfolio περιλαμβάνει επίσης θεμελιώδη deep-tech μηχανική για την Encode S.A., όπου αρχιτεκτόνησα PySpark + Elasticsearch pipelines παρακολούθησης (logging) κυβερνοασφάλειας για 100.000 χρήστες.*
`
        },
      ],
      forkTransparencyTitle: "Διαφάνεια για pinned forks",
      forkTransparencyIntro: "Ορισμένα pinned repositories είναι forks. Τα προβάλλω ως adaptation/contribution workstreams και όχι ως claim αρχικής ιδιοκτησίας.",
      forkHighlights: [
        {
          repo: "rlm (fork)",
          link: "https://github.com/petroslamb/rlm",
          contribution: "Διατηρείται ως adaptation sandbox με implementation notes και consultant-facing χρήση."
        },
        {
          repo: "resume-copilot (fork)",
          link: "https://github.com/petroslamb/resume-copilot",
          contribution: "Χρησιμοποιείται ως forked implementation track για πειραματισμό και τεκμηρίωση βελτιώσεων."
        }
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
      intro: "Ας συζητήσουμε για το AI σύστημά σας και τι πρέπει να είναι production-safe.",
      detailsTitle: "Στοιχεία Επικοινωνίας",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      scheduleTitle: "Θες να προγραμματίσουμε κατευθείαν ένα call;",
      scheduleDescription: "Κλείσε ένα 30λεπτο discovery call για να ευθυγραμμίσουμε στόχους, scope και χρονοδιάγραμμα. Θα λάβεις σημειώσεις και επόμενα βήματα μέσα σε 48 ώρες.",
      scheduleButton: "Κλείσε discovery call",
      scheduleFallback: "Δεν βλέπεις διαθέσιμα slots στο calendar widget; Στείλε μου email και θα ανοίξω προτεραιοποιημένα slots.",
      priorityEmailLabel: "Email για priority scheduling",
      priorityEmailSubject: "Αίτημα για priority scheduling",
      teardownIntentSubject: "Αίτημα για 1-page architecture teardown",
      teardownIntentHint: "Χρησιμοποίησε Markdown. Συμπλήρωσε μόνο όσα πεδία θέλεις/μπορείς και άφησε τα υπόλοιπα κενά.",
      teardownIntentMessage: `# Αίτημα για 1-Page Architecture Teardown

> Συμπλήρωσε μόνο όσα πεδία θέλεις/μπορείς. Άφησε τα υπόλοιπα κενά.

## 1) Snapshot Συστήματος
- Product / use case:
- Stage: (prototype, beta, production)
- Users / tenants:
- Traffic: \`requests/day\` και peak \`requests/min\`

## 2) Τρέχουσα Αρχιτεκτονική
\`\`\`txt
Frontend:
Backend:
LLM provider(s) / model(s):
Data stores:
Orchestration / queues:
Hosting / infrastructure:
\`\`\`

## 3) Failure Points (top 3)
1. 
2. 
3. 

## 4) Περιορισμοί
- Compliance / legal:
- Latency target:
- Budget guardrails:
- Team capacity:

## 5) Επιθυμητό Outcome (30-60 ημέρες)
- Business outcome:
- Technical outcome:
- Τι σημαίνει "καλό" αποτέλεσμα:`,
      formIntro: "Ή στείλτε μήνυμα μέσω της φόρμας επικοινωνίας.",
      formName: "Το Όνομά σας",
      formEmail: "Το Email σας",
      formMessage: "Το Μήνυμά σας",
      formSubmit: "Αποστολή Μηνύματος",
      formSubmitting: "Αποστολή...",
      formSuccess: "Το μήνυμα στάλθηκε. Θα σου απαντήσω μέσω email εντός 1-2 εργάσιμων ημερών.",
      formError: "Η αποστολή της φόρμας απέτυχε προσωρινά. Στείλε μου απευθείας email στο petroslamb.dev@gmail.com.",
      formFallbackSubject: "Αίτημα επικοινωνίας από το website",
      formFallbackIntro: "Θες εγγυημένη παράδοση; Χρησιμοποίησε το email app σου ή αντέγραψε το μήνυμα και στείλ’ το απευθείας.",
      formFallbackEmailButton: "Αποστολή με email app",
      formFallbackCopyButton: "Αντιγραφή μηνύματος",
      formFallbackCopySuccess: "Το μήνυμα αντιγράφηκε. Κάνε επικόλληση σε email προς petroslamb.dev@gmail.com.",
      formFallbackCopyError: "Η αντιγραφή απέτυχε. Κάνε χειροκίνητη αντιγραφή και στείλε email στο petroslamb.dev@gmail.com.",
    },
    blog: {
      title: "Blog",
      intro: "Ζωντανό feed γραφής και αρχειοθετημένα άρθρα για software, AI και consulting.",
      liveFeedBadge: "Live feed",
      liveFeedIntro: "Τα πιο πρόσφατα posts από το Substack με αυτόματη ανανέωση.",
      liveFeedLoading: "Φόρτωση των τελευταίων Substack posts...",
      liveFeedError: "Το live feed του Substack δεν είναι διαθέσιμο αυτή τη στιγμή. Εμφανίζονται αρχειοθετημένα άρθρα από το site.",
      viewOnSubstack: "Διαβάστε στο Substack",
      archiveTitle: "Αρχείο άρθρων από το site",
      readMore: "Διαβάστε περισσότερα",
      backToBlog: "Επιστροφή στο Blog",
      postedOn: "Δημοσιεύτηκε στις",
      prevPage: "Προηγούμενη",
      nextPage: "Επόμενη",
      searchPlaceholder: "Αναζήτηση άρθρων...",
      noResults: "Δεν βρέθηκαν άρθρα που να ταιριάζουν με την αναζήτησή σας.",
    },
    analytics: {
      title: "Πίνακας Μετρήσεων",
      subtitle: "Παρακολούθησε την επισκεψιμότητα χωρίς να φύγεις από το site.",
      description: "Χρησιμοποίησε την ενσωματωμένη προβολή Umami για μια γρήγορη ματιά ή άνοιξε τον πλήρη πίνακα για αναλυτικά δεδομένα επισκεψιμότητας, πηγών και μετατροπών.",
      ctaLabel: "Άνοιγμα πλήρους analytics",
      ctaNote: "Ανοίγει τη σελίδα κοινής χρήσης του Umami σε νέα καρτέλα.",
      embedTitle: "Προβολή Umami analytics",
      embedUnavailable: "Δεν ήταν δυνατή η φόρτωση του πίνακα εδώ. Χρησιμοποίησε το κουμπί παραπάνω για να τον ανοίξεις σε νέα καρτέλα.",
      privacyNote: "Το site χρησιμοποιεί τα cookieless analytics του Umami. Δεν συλλέγονται προσωπικά δεδομένα ή cookies — αυτός ο πίνακας δείχνει ακριβώς τι παρακολουθείται.",
    },
    footer: {
      copyright: "© 2026 Πέτρος Λαμπρόπουλος. Με την επιφύλαξη παντός δικαιώματος.",
      availability: "Διαθέσιμος για διεθνή projects και συμβουλευτικές συνεργασίες.",
      analyticsLinkLabel: "Δημόσια μετρήσεις",
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
      scheduleLink: "https://calendar.app.google/GTBgGnw1ziGqNffj6",
      scheduleAriaLabel: "Ανοίγει το εργαλείο προγραμματισμού σε νέο tab",
    },
  },
};
