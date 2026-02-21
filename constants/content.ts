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
      subtitle: "I help B2B product teams with AI features in beta or production make those systems reliable, measurable, and scalable.",
      specialties: "AI strategy diagnostics, productionization sprints, and reliability systems for long-term scale.",
      cta: "Book a discovery call",
      trustStripTitle: "Why teams trust me quickly",
      trustSignals: [
        { label: "Production systems shipped", value: "Workable, NannyML, and enterprise AI/data platforms" },
        { label: "Independent evidence", value: "Public repos, CI traces, architecture docs, and research artifacts" },
        { label: "Delivery pace", value: "First architecture teardown delivered within 5 business days" },
        { label: "Response promise", value: "Reply within 1-2 business days" },
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
        { title: "AI Strategy & Risk Diagnostic", description: "Clarify where AI should create value, what can fail, and what to build in the next 90 days.", slug: "ai-strategy-risk-diagnostic" },
        { title: "AI Productionization Sprint", description: "Turn promising prototypes into production workflows with guardrails, observability, and runbooks.", slug: "ai-productionization-sprint" },
        { title: "AI Reliability & Scale", description: "Establish evaluation gates, monitoring, and incident playbooks that keep AI systems stable in production.", slug: "ai-reliability-scale" },
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
        "Building reliability programs (evaluation gates, monitoring, incident playbooks) so AI systems stay dependable after launch."
      ],
      experienceTitle: "Experience",
      experience: [
        "Independent Systems Consultant (2024–Present): Partnering with startups and research teams on agentic architectures, evaluating LLMs, and protocol security.",
        "Led generative AI discovery-to-launch cycles at Workable, translating prototypes into production features processing tens of thousands of resumes daily across a 0.5 billion-record corpus on EKS.",
        "Piloted ML monitoring prototypes with NannyML's EU founding team, shipping containerized Python microservices on Amazon EKS to secure enterprise B2B sales.",
        "Architected a PySpark + Elasticsearch platform at Encode S.A. processing 100K-user network datasets within a business day.",
        "Senior Backend Engineer, Orfium (2020–2021): Led Django/PostgreSQL services for music-licensing operations and improved API observability.",
        "Python Software Developer, Neuropublic (2014–2015): Built precision-agriculture Python services forecasting crop returns from environmental and nutritional data.",
        "Intern Software Engineer, Skyscanner (2013): Maintained Python APIs and ingestion/scraping pipelines for travel data acquisition.",
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
      intro: "I help B2B product teams with AI features in beta or production make better decisions, ship safely, and stay reliable at scale.",
      readCaseStudies: "Read Case Studies",
      backToServices: "Back to Services",
      ctaTitle: "Need clarity before your next AI release?",
      ctaDescription: "Book a 30-minute discovery call to identify your highest-risk assumptions, select the right engagement, and define concrete next steps.",
      ctaButton: "Book a discovery call",
      categories: [
        {
          title: "AI Strategy & Risk Diagnostic",
          slug: "ai-strategy-risk-diagnostic",
          intro: "A short strategy-first engagement for teams deciding what to build, what to delay, and where technical risk is hiding.",
          businessProse: `Before you scale an AI feature, align product priorities with engineering reality.

### What I do
*   **Use-Case Prioritization:** Rank opportunities by business value, implementation complexity, and operational risk.
*   **Risk Mapping:** Identify failure modes across prompts, retrieval, integrations, and human handoff points.
*   **Architecture Direction:** Define a practical target architecture with explicit trade-offs for speed, quality, and cost.

### Deliverables
*   1-page executive brief with prioritized opportunities and risks.
*   Technical risk map with mitigation options.
*   90-day execution plan with milestones and ownership guidance.

### Typical Engagements
*   Teams preparing their first production AI release.
*   Teams with multiple AI initiatives but limited engineering capacity.`,
          items: [
            "Best for B2B teams with AI features in planning, beta, or early production.",
            "Timeline: 1-2 weeks.",
            "Deliverables: Prioritized use-case map, risk diagnostic, 90-day execution plan.",
            "Investment: Starting at €2.5K."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Decide which generative AI workflows should move from PoC to production without creating delivery risk.",
              solution: [
                "Launched first-wave GenAI proofs of concept and presented trade-offs company-wide to secure executive alignment.",
                "Defined a practical path from experimentation to production features with explicit evaluation expectations."
              ],
              technologies: ["Product Discovery", "LLM Evaluation", "Stakeholder Alignment"]
            },
            {
              company: "dikaio.ai",
              challenge: "Shape a legal-tech AI direction that balanced speed-to-demo with answer reliability.",
              solution: [
                "Defined a practical RAG blueprint for Greek legal content with traceability and grounding constraints.",
                "Helped the team ship a working AI lawyer demo as the baseline for product iteration."
              ],
              technologies: ["RAG Strategy", "OpenAI APIs", "Product Scoping"]
            }
          ],
          engagementTitle: "Start with a Strategy Diagnostic",
          engagementDescription: "Use a 30-minute discovery call to align on business goals, risk tolerance, and the next 90 days.",
          engagementChecklistTitle: "Bring to the call:",
          engagementChecklist: [
            "Your current product roadmap and top business KPIs.",
            "Existing AI use cases (live or planned) and known blockers.",
            "Hard constraints such as latency, legal requirements, budget, or staffing."
          ],
          engagementCtaLabel: "Book a discovery call"
        },
        {
          title: "AI Productionization Sprint",
          slug: "ai-productionization-sprint",
          intro: "Turn fragile prototypes into production-ready AI workflows with guardrails, observability, and clear ownership.",
          businessProse: `A notebook demo rarely survives real traffic. This sprint focuses on making AI workflows reliable under production pressure.

### What I do
*   **Workflow Hardening:** Refactor prototypes into production services and deterministic orchestration paths.
*   **Guardrails & Fallbacks:** Add output validation, retry/fallback logic, and safe degradation patterns.
*   **Operational Readiness:** Instrument tracing, alerts, and runbooks so your team can operate confidently.

### Deliverables
*   Production-ready service architecture and rollout plan.
*   Observability setup for key AI workflow health metrics.
*   Operating runbooks for incident response and maintenance.

### Typical Engagements
*   MVP-to-production transitions for user-facing AI features.
*   Teams that need structured hardening before wider rollout.`,
          items: [
            "Best for teams with an AI prototype already delivering partial value.",
            "Timeline: 6-12 weeks depending on integration depth.",
            "Deliverables: Productionization plan, hardened workflows, observability, runbooks.",
            "Investment: €8K-€25K."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Scale generative AI hiring features across a large, live product with reliability constraints.",
              solution: [
                "Transitioned PoCs (resume parsing, job post generation) into hardened microservices.",
                "Deployed on AWS EKS to support tens of thousands of daily requests across a 0.5 billion-record corpus."
              ],
              technologies: ["AWS EKS", "Kubernetes", "Generative AI", "Kafka/RabbitMQ"]
            },
            {
              company: "NannyML",
              challenge: "Operationalize ML monitoring workflows for enterprise customers while the product matured.",
              solution: [
                "Shipped containerized Python microservices on Amazon EKS for production deployment reliability.",
                "Helped establish delivery practices that supported early enterprise B2B wins."
              ],
              technologies: ["Python", "Amazon EKS", "MLOps", "Data Engineering"]
            }
          ],
          engagementTitle: "Plan your Productionization Sprint",
          engagementDescription: "Use a discovery call to map integration points, reliability targets, and rollout scope.",
          engagementChecklistTitle: "Have ready:",
          engagementChecklist: [
            "Prototype architecture (or code/notebook overview).",
            "Expected usage, latency targets, and failure impact.",
            "Current infrastructure constraints and engineering ownership."
          ],
          engagementCtaLabel: "Book a discovery call"
        },
        {
          title: "AI Reliability & Scale",
          slug: "ai-reliability-scale",
          intro: "Build the operating system around your AI: evaluation gates, monitoring, and incident playbooks that protect production.",
          businessProse: `Shipping once is not enough. Reliable AI products need a repeatable system for quality control and incident response.

### What I do
*   **Evaluation Operations:** Design continuous evaluation workflows tied to business KPIs and risk thresholds.
*   **Monitoring & Alerting:** Track output quality, drift signals, and operational health in one operating view.
*   **Reliability Process:** Define incident response, rollback criteria, and post-incident learning loops.

### Deliverables
*   CI/CD evaluation gates with release criteria.
*   Monitoring dashboards and alert rules for critical AI paths.
*   Reliability playbook covering triage, escalation, and recovery.

### Typical Engagements
*   Teams with AI already in production and recurring quality incidents.
*   Organizations moving from ad-hoc fixes to repeatable operational discipline.`,
          items: [
            "Best for teams with production AI features and recurring quality/reliability incidents.",
            "Timeline: Initial setup in 4-8 weeks, then optional monthly support.",
            "Deliverables: Eval gates, monitoring, incident playbooks, reliability KPIs.",
            "Investment: Project-based starting at €6K or monthly retainer."
          ],
          caseStudies: [
            {
              company: "NannyML",
              challenge: "Build a dependable monitoring foundation that product and engineering could operate continuously.",
              solution: [
                "Piloted monitoring prototypes and translated research workflows into operable product paths.",
                "Delivered containerized services and deployment patterns that improved reliability for enterprise onboarding."
              ],
              technologies: ["Python", "Amazon EKS", "Monitoring", "Reliability Engineering"]
            },
            {
              company: "Encode S.A.",
              challenge: "Keep high-volume security data processing dependable under daily operational pressure.",
              solution: [
                "Architected a PySpark + Elasticsearch platform for 100K-user network datasets within one business day.",
                "Optimized ingestion throughput from 1K to 10K users while reducing recurring bottlenecks."
              ],
              technologies: ["PySpark", "Elasticsearch", "Kafka", "Data Engineering"]
            }
          ],
          engagementTitle: "Strengthen Reliability & Scale",
          engagementDescription: "Use a discovery call to identify recurring failures and design the reliability system your team needs next.",
          engagementChecklistTitle: "Bring to the call:",
          engagementChecklist: [
            "Recent incidents or recurring failure patterns.",
            "Current metrics and dashboards (if any).",
            "Target service levels, response expectations, and team ownership."
          ],
          engagementCtaLabel: "Book a discovery call"
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
      scheduleDescription: "Reserve a 30-minute discovery session to align on goals, scope, and timelines. You’ll get follow-up notes and next steps within 1-2 business days.",
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
      subtitle: "Βοηθώ B2B product ομάδες με AI features σε beta ή production να τα κάνουν αξιόπιστα, μετρήσιμα και κλιμακώσιμα.",
      specialties: "AI strategy diagnostics, productionization sprints και reliability συστήματα για μακροχρόνια κλίμακα.",
      cta: "Κλείσε discovery call",
      trustStripTitle: "Γιατί με εμπιστεύονται γρήγορα ομάδες",
      trustSignals: [
        { label: "Συστήματα σε παραγωγή", value: "Workable, NannyML και enterprise AI/data πλατφόρμες" },
        { label: "Ανεξάρτητα αποδεικτικά", value: "Δημόσια repos, CI traces, αρχιτεκτονικά docs και έρευνα" },
        { label: "Ταχύτητα παράδοσης", value: "Πρώτο architecture teardown σε έως 5 εργάσιμες ημέρες" },
        { label: "Υπόσχεση απόκρισης", value: "Απάντηση εντός 1-2 εργάσιμων ημερών" },
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
        { title: "AI Strategy & Risk Diagnostic", description: "Ξεκαθαρίζει πού πρέπει να δώσει αξία το AI, ποιοι είναι οι βασικοί κίνδυνοι και τι να υλοποιήσετε στις επόμενες 90 ημέρες.", slug: "ai-strategy-risk-diagnostic" },
        { title: "AI Productionization Sprint", description: "Μετατρέπει υποσχόμενα prototypes σε production workflows με guardrails, observability και runbooks.", slug: "ai-productionization-sprint" },
        { title: "AI Reliability & Scale", description: "Θέτει evaluation gates, monitoring και incident playbooks ώστε τα AI συστήματα να παραμένουν σταθερά στην παραγωγή.", slug: "ai-reliability-scale" },
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
        "Σχεδιασμός reliability προγραμμάτων (evaluation gates, monitoring, incident playbooks) ώστε τα AI συστήματα να παραμένουν αξιόπιστα μετά το launch."
      ],
      experienceTitle: "Εμπειρία",
      experience: [
        "Independent Systems Consultant (2024–Σήμερα): Συνεργασία με startups και ερευνητικές ομάδες σε agentic αρχιτεκτονικές, αξιολόγηση LLMs και ασφάλεια πρωτοκόλλων.",
        "Ηγήθηκα κύκλων generative AI discovery-to-launch στην Workable, μετατρέποντας prototypes σε παραγωγικά χαρακτηριστικά (επεξεργασία δεκάδων χιλιάδων βιογραφικών ημερησίως) σε corpus 0.5 δισ. εγγραφών στο EKS.",
        "Υλοποίησα ML monitoring prototypes με την ιδρυτική ομάδα της NannyML στην ΕΕ, παραδίδοντας containerized Python microservices στο Amazon EKS για να κλείσουν τα πρώτα B2B deals.",
        "Αρχιτεκτόνησα μια PySpark + Elasticsearch πλατφόρμα στην Encode S.A. που επεξεργαζόταν δεδομένα δικτύου 100.000 χρηστών μέσα σε μία εργάσιμη ημέρα.",
        "Senior Backend Engineer, Orfium (2020–2021): Ηγήθηκα Django/PostgreSQL υπηρεσιών για music-licensing λειτουργίες και βελτίωσα API observability.",
        "Python Software Developer, Neuropublic (2014–2015): Ανέπτυξα Python υπηρεσίες precision-agriculture για πρόβλεψη αποδόσεων καλλιεργειών από περιβαλλοντικά δεδομένα.",
        "Intern Software Engineer, Skyscanner (2013): Συντήρησα Python APIs και pipelines συλλογής/ingestion δεδομένων ταξιδιών.",
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
      intro: "Βοηθώ B2B product ομάδες με AI features σε beta ή production να παίρνουν καλύτερες αποφάσεις, να κάνουν ασφαλές shipping και να διατηρούν αξιοπιστία σε κλίμακα.",
      readCaseStudies: "Δείτε τα Case Studies",
      backToServices: "Επιστροφή στις Υπηρεσίες",
      ctaTitle: "Χρειάζεστε καθαρό πλάνο πριν το επόμενο AI release;",
      ctaDescription: "Κλείσε ένα 30λεπτο discovery call για να εντοπίσουμε τις πιο κρίσιμες υποθέσεις ρίσκου, το σωστό engagement και τα επόμενα πρακτικά βήματα.",
      ctaButton: "Κλείσε discovery call",
      categories: [
        {
          title: "AI Strategy & Risk Diagnostic",
          slug: "ai-strategy-risk-diagnostic",
          intro: "Σύντομο strategy-first engagement για ομάδες που πρέπει να αποφασίσουν τι να υλοποιήσουν τώρα, τι να καθυστερήσουν και πού κρύβεται τεχνικό ρίσκο.",
          businessProse: `Πριν κλιμακώσετε ένα AI feature, χρειάζεται ευθυγράμμιση product προτεραιοτήτων με μηχανική πραγματικότητα.

### Τι κάνω
*   **Προτεραιοποίηση Use Cases:** Κατάταξη ευκαιριών με βάση επιχειρηματική αξία, πολυπλοκότητα υλοποίησης και λειτουργικό ρίσκο.
*   **Χαρτογράφηση Ρίσκου:** Εντοπισμός failure modes σε prompts, retrieval, integrations και human handoff σημεία.
*   **Κατεύθυνση Αρχιτεκτονικής:** Ορισμός πρακτικής target αρχιτεκτονικής με σαφή trade-offs σε ταχύτητα, ποιότητα και κόστος.

### Παραδοτέα
*   1-page executive brief με προτεραιοποιημένες ευκαιρίες και ρίσκα.
*   Τεχνικός χάρτης ρίσκου με επιλογές mitigation.
*   Πλάνο 90 ημερών με milestones και προτεινόμενη ιδιοκτησία.

### Τυπικές Συνεργασίες
*   Ομάδες που ετοιμάζουν το πρώτο production AI release.
*   Ομάδες με πολλά AI initiatives αλλά περιορισμένη engineering χωρητικότητα.`,
          items: [
            "Ιδανικό για B2B ομάδες με AI features σε planning, beta ή early production.",
            "Χρονοδιάγραμμα: 1-2 εβδομάδες.",
            "Παραδοτέα: Προτεραιοποίηση use cases, risk diagnostic, πλάνο εκτέλεσης 90 ημερών.",
            "Επένδυση: Ξεκινάει από €2.5K."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Να αποφασιστεί ποια generative AI workflows πρέπει να περάσουν από PoC σε production χωρίς delivery ρίσκο.",
              solution: [
                "Παρέδωσα πρώτο κύμα GenAI proofs of concept και παρουσίασα trade-offs σε επίπεδο εταιρείας για executive alignment.",
                "Όρισα πρακτική διαδρομή από experimentation σε production features με ξεκάθαρες απαιτήσεις αξιολόγησης."
              ],
              technologies: ["Product Discovery", "LLM Evaluation", "Stakeholder Alignment"]
            },
            {
              company: "dikaio.ai",
              challenge: "Να διαμορφωθεί legal-tech AI κατεύθυνση που ισορροπεί speed-to-demo και αξιοπιστία απαντήσεων.",
              solution: [
                "Σχεδίασα πρακτικό RAG blueprint για ελληνικό νομικό περιεχόμενο με σαφή grounding constraints.",
                "Βοήθησα την ομάδα να παραδώσει λειτουργικό AI lawyer demo ως baseline για την επόμενη iteration."
              ],
              technologies: ["RAG Strategy", "OpenAI APIs", "Product Scoping"]
            }
          ],
          engagementTitle: "Ξεκίνα με Strategy Diagnostic",
          engagementDescription: "Χρησιμοποίησε ένα 30λεπτο discovery call για ευθυγράμμιση σε business goals, risk tolerance και τα επόμενα 90 ημέρες.",
          engagementChecklistTitle: "Φέρτε στο call:",
          engagementChecklist: [
            "Το τρέχον product roadmap και τα βασικά business KPIs.",
            "Υπάρχοντα AI use cases (live ή planned) και γνωστά blockers.",
            "Σκληρούς περιορισμούς όπως latency, νομικές απαιτήσεις, budget ή staffing."
          ],
          engagementCtaLabel: "Κλείσε discovery call"
        },
        {
          title: "AI Productionization Sprint",
          slug: "ai-productionization-sprint",
          intro: "Μετατροπή εύθραυστων prototypes σε production-ready AI workflows με guardrails, observability και σαφή ownership.",
          businessProse: `Ένα notebook demo σπάνια αντέχει σε πραγματική κίνηση. Αυτό το sprint εστιάζει στην αξιοπιστία υπό παραγωγική πίεση.

### Τι κάνω
*   **Workflow Hardening:** Μετατροπή prototypes σε production services με deterministic orchestration paths.
*   **Guardrails & Fallbacks:** Προσθήκη output validation, retry/fallback λογικής και safe degradation patterns.
*   **Operational Readiness:** Ενσωμάτωση tracing, alerts και runbooks ώστε η ομάδα να λειτουργεί με αυτοπεποίθηση.

### Παραδοτέα
*   Production-ready service architecture και rollout plan.
*   Observability setup για βασικά metrics υγείας των AI workflows.
*   Operating runbooks για incident response και συντήρηση.

### Τυπικές Συνεργασίες
*   Μεταβάσεις MVP-to-production για user-facing AI features.
*   Ομάδες που χρειάζονται structured hardening πριν από ευρύτερο rollout.`,
          items: [
            "Ιδανικό για ομάδες με AI prototype που ήδη δίνει μερική αξία.",
            "Χρονοδιάγραμμα: 6-12 εβδομάδες ανάλογα με το βάθος ενσωμάτωσης.",
            "Παραδοτέα: Productionization plan, hardened workflows, observability, runbooks.",
            "Επένδυση: €8K-€25K."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Κλιμάκωση generative AI hiring features σε μεγάλο live προϊόν με αυστηρούς reliability περιορισμούς.",
              solution: [
                "Μετέτρεψα PoCs (resume parsing, job post generation) σε hardened microservices.",
                "Deployment σε AWS EKS για υποστήριξη δεκάδων χιλιάδων ημερήσιων αιτημάτων σε corpus 0.5 δισ. εγγραφών."
              ],
              technologies: ["AWS EKS", "Kubernetes", "Generative AI", "Kafka/RabbitMQ"]
            },
            {
              company: "NannyML",
              challenge: "Operationalization ML monitoring workflows για enterprise πελάτες ενώ το προϊόν ωρίμαζε.",
              solution: [
                "Παρέδωσα containerized Python microservices σε Amazon EKS για αξιόπιστο production deployment.",
                "Συνέβαλα σε delivery practices που υποστήριξαν τα πρώτα enterprise B2B wins."
              ],
              technologies: ["Python", "Amazon EKS", "MLOps", "Data Engineering"]
            }
          ],
          engagementTitle: "Σχεδίασε το Productionization Sprint",
          engagementDescription: "Χρησιμοποίησε discovery call για να χαρτογραφήσουμε integration points, reliability στόχους και rollout scope.",
          engagementChecklistTitle: "Έχε έτοιμα:",
          engagementChecklist: [
            "Επισκόπηση της αρχιτεκτονικής του prototype (ή code/notebook).",
            "Αναμενόμενη χρήση, στόχους latency και impact αποτυχιών.",
            "Τρέχοντες περιορισμούς υποδομής και engineering ownership."
          ],
          engagementCtaLabel: "Κλείσε discovery call"
        },
        {
          title: "AI Reliability & Scale",
          slug: "ai-reliability-scale",
          intro: "Χτίζω το λειτουργικό σύστημα γύρω από το AI σας: evaluation gates, monitoring και incident playbooks που προστατεύουν την παραγωγή.",
          businessProse: `Το να παραδώσεις μία φορά δεν αρκεί. Τα αξιόπιστα AI προϊόντα χρειάζονται επαναλήψιμο σύστημα ελέγχου ποιότητας και incident response.

### Τι κάνω
*   **Evaluation Operations:** Σχεδιασμός συνεχών evaluation workflows συνδεδεμένων με business KPIs και risk thresholds.
*   **Monitoring & Alerting:** Παρακολούθηση output quality, drift σημάτων και operational health σε ένα ενιαίο operating view.
*   **Reliability Process:** Ορισμός incident response, rollback κριτηρίων και post-incident learning loops.

### Παραδοτέα
*   CI/CD evaluation gates με release criteria.
*   Monitoring dashboards και alert rules για κρίσιμα AI paths.
*   Reliability playbook για triage, escalation και recovery.

### Τυπικές Συνεργασίες
*   Ομάδες με AI ήδη σε production και επαναλαμβανόμενα quality incidents.
*   Οργανισμοί που μεταβαίνουν από ad-hoc fixes σε repeatable operational discipline.`,
          items: [
            "Ιδανικό για ομάδες με production AI features και επαναλαμβανόμενα quality/reliability incidents.",
            "Χρονοδιάγραμμα: Αρχικό setup σε 4-8 εβδομάδες και προαιρετική μηνιαία υποστήριξη.",
            "Παραδοτέα: Eval gates, monitoring, incident playbooks, reliability KPIs.",
            "Επένδυση: Project-based από €6K ή μηνιαίο retainer."
          ],
          caseStudies: [
            {
              company: "NannyML",
              challenge: "Δημιουργία αξιόπιστης monitoring βάσης που να λειτουργεί συνεχώς από product και engineering.",
              solution: [
                "Πιλοτική υλοποίηση monitoring prototypes και μετάφραση ερευνητικών workflows σε λειτουργικές product ροές.",
                "Παράδοση containerized υπηρεσιών και deployment patterns που βελτίωσαν την αξιοπιστία για enterprise onboarding."
              ],
              technologies: ["Python", "Amazon EKS", "Monitoring", "Reliability Engineering"]
            },
            {
              company: "Encode S.A.",
              challenge: "Διατήρηση αξιόπιστης επεξεργασίας υψηλού όγκου security δεδομένων σε καθημερινή λειτουργία.",
              solution: [
                "Αρχιτεκτόνησα PySpark + Elasticsearch πλατφόρμα για datasets δικτύου 100K χρηστών μέσα σε μία εργάσιμη ημέρα.",
                "Βελτιστοποίησα throughput ingestion από 1K σε 10K χρήστες μειώνοντας επαναλαμβανόμενα bottlenecks."
              ],
              technologies: ["PySpark", "Elasticsearch", "Kafka", "Data Engineering"]
            }
          ],
          engagementTitle: "Ενίσχυσε Reliability & Scale",
          engagementDescription: "Χρησιμοποίησε discovery call για να εντοπίσουμε recurring failures και να σχεδιάσουμε το επόμενο reliability σύστημα της ομάδας σου.",
          engagementChecklistTitle: "Φέρτε στο call:",
          engagementChecklist: [
            "Πρόσφατα incidents ή επαναλαμβανόμενα failure patterns.",
            "Τρέχοντα metrics και dashboards (αν υπάρχουν).",
            "Στόχους service levels, response expectations και team ownership."
          ],
          engagementCtaLabel: "Κλείσε discovery call"
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
      scheduleDescription: "Κλείσε ένα 30λεπτο discovery call για να ευθυγραμμίσουμε στόχους, scope και χρονοδιάγραμμα. Θα λάβεις σημειώσεις και επόμενα βήματα μέσα σε 1-2 εργάσιμες ημέρες.",
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
