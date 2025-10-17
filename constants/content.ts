import { Content } from '../types';

export const content: Record<'en' | 'gr', Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      trust: "Trust",
      portfolio: "Portfolio",
      contact: "Contact",
      blog: "Blog",
      analytics: "Analytics",
    },
    home: {
      heroHeadline: "From idea to investor-ready SaaS—without burning out your team.",
      heroSubheadline: "Python, React, and AI delivery trusted by Workable, NannyML, Orfium, Dikaio.ai, and resilience missions like Brain Metrics Initiative.",
      heroContext: "You’re juggling runway, tech debt, and compliance requests while investors still want visible momentum.",
      heroProof: "I join as a hands-on lead engineer who builds, modernizes, and pairs with your team so every sprint ends with production outcomes.",
      ctaPrimary: "Book a 20-minute audit",
      ctaSecondary: "Explore services",
      ctaSecondaryHref: "/services",
      segmentsTitle: "Who I partner with",
      segmentsSubtitle: "Pick the path that sounds like your current pressure—each engagement blends discovery, build, pairing, and handoff so you keep moving.",
      segments: [
        {
          title: "Founder-Led Startups",
          slug: "startups",
          tagline: "Validate, ship, and raise faster",
          description: "Go from idea to investor-ready SaaS with lean crews, tight runway, and investor updates breathing down your neck.",
          bullets: [
            "Discovery sprints that surface the sharpest bet and the risks leaders care about.",
            "MVP builds across Python, React, and data foundations ready for investor demos.",
            "Launch kits with observability, runbooks, and fundraising-friendly artefacts."
          ],
          ctaLabel: "See startup path",
        },
        {
          title: "Scale-Up Acceleration",
          slug: "scale-ups",
          tagline: "Ship confident, compound growth",
          description: "Add AI features and modernize delivery without overwhelming engineering leadership or slowing the roadmap.",
          bullets: [
            "Production-ready AI feature delivery tied to activation and retention metrics.",
            "Platform modernization for multi-tenant SaaS with billing, data contracts, and observability.",
            "Paired delivery and enablement so your team owns the outcomes after launch."
          ],
          ctaLabel: "See scale-up path",
        },
        {
          title: "Enterprise Transformation",
          slug: "enterprises",
          tagline: "Operationalize AI & analytics safely",
          description: "Blend compliance, governance, and resilient delivery for regulated, global, or grant-funded teams.",
          bullets: [
            "Threat-aware architecture and AI platform hardening your auditors can sign off.",
            "Forecasting and analytics programs that respect data residency and privacy guardrails.",
            "Governance packs, reviewer decks, and enablement so partners trust the rollout."
          ],
          ctaLabel: "See enterprise path",
        },
      ],
      caseSnippetsTitle: "Recent outcomes in weeks, not quarters",
      caseSnippetsSubtitle: "A quick look at how engagements land—context, action, and the measurable result.",
      caseSnippets: [
        {
          title: "Workable shipped AI hiring copilots in a quarter",
          stage: "Scale-up",
          context: "Hiring platform needed generative AI features without derailing core delivery.",
          action: "Led a 2-week discovery sprint, mapped data constraints, and paired on Python services plus evaluation loops.",
          result: "Executive greenlight and production launch the following quarter with adoption across hiring teams.",
          href: "/services/segments/scale-ups",
          ctaLabel: "See scale-up support"
        },
        {
          title: "NannyML cut onboarding time by 50%",
          stage: "Seed stage",
          context: "ML monitoring startup needed production-grade services while closing first enterprise deals.",
          action: "Built containerised Python services on AWS EKS, implemented CI/CD, and paired on delivery cadence.",
          result: "Halved customer onboarding time and unlocked the team’s first enterprise contracts.",
          href: "/services/segments/startups",
          ctaLabel: "Explore startup support"
        },
        {
          title: "Encode S.A. unlocked same-day threat detection",
          stage: "Enterprise",
          context: "Security analysts required reliable analytics on 100K-user datasets without manual drudge work.",
          action: "Architected PySpark + Elasticsearch pipelines with observability and runbooks for the ops team.",
          result: "10x throughput increase and investigations completed within a business day.",
          href: "/services/segments/enterprises",
          ctaLabel: "Review enterprise support"
        }
      ],
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
        { value: "resume2025.pdf", label: "2025 Resume — Balanced core" },
        { value: "resume2025_hyped.pdf", label: "2025 Resume — Hyped (just for fun)" },
        { value: "resume2025_hyped_gr.pdf", label: "2025 Resume — Hyped (Greek)" },
        { value: "resume2025_conservative.pdf", label: "2025 Resume — Spartan" },
        { value: "resume2025_longform.pdf", label: "2025 Resume — Longform (deep dive)" },
      ],
    },
    services: {
      title: "Services",
      introHook: "You’re carrying a roadmap your team can barely deliver. Runway is tight, infrastructure creaks, and investors still expect visible traction.",
      introSupport: "I step in as a lead product engineer who can build, modernize, and ship alongside you so the work moves without burning out your crew.",
      processTitle: "How we go from idea to shipped outcomes",
      processSubtitle: "Every engagement is hands-on and transparent—we co-own delivery while keeping risk in view.",
      processSteps: [
        { title: "Discovery", description: "Frame the bet, surface constraints, and decide what’s worth building.", artifact: "Opportunity brief + risk map" },
        { title: "Build", description: "Stand up production-ready Python, React, and data systems in small, reviewable increments.", artifact: "Working software + release cadence" },
        { title: "Pair", description: "Ship with your team so knowledge transfers while velocity stays high.", artifact: "Paired delivery sessions + coaching notes" },
        { title: "Handoff", description: "Stabilize, document, and measure so the team keeps momentum after launch.", artifact: "Runbooks, observability kit, success metrics" },
      ],
      offeringsTitle: "Pick the help you need",
      offeringsIntro: "Four focused services cover the lifecycle from validation through scale. Each follows the same discovery → build → pair → handoff loop.",
      offerings: [
        {
          id: "ai-discovery-sprint",
          title: "AI Discovery Sprint",
          benefit: "Find the AI win worth funding.",
          context: "You need evidence that an AI feature is feasible before burning runway or pitching investors.",
          bullets: [
            "Interview founders, product, and customers to capture the pain and success metrics in plain language.",
            "Audit data readiness, privacy constraints, and integrations so feasibility and risks are explicit.",
            "Prototype workflows in Python and TypeScript to show the experience end-to-end."
          ],
          result: "The result: a decision-ready narrative, a prioritized backlog, and confidence you can brief to investors within two weeks.",
          caseStudy: {
            title: "Workable — generative hiring flows",
            context: "Hiring platform needed to prove AI-assisted hiring value without derailing roadmap.",
            action: "Ran a 2-week discovery sprint, mapped data constraints, and demoed GPT-backed prototypes to leadership.",
            result: "Secured executive backing to ship the features and a roadmap that hit production in the following quarter.",
            timeframe: "2 weeks to go/no-go"
          },
          ctaLabel: "Book an AI validation call"
        },
        {
          id: "product-delivery-pod",
          title: "Product Delivery Pod",
          benefit: "Ship investor-ready features without adding headcount.",
          context: "Your roadmap is bigger than your team, but you still need production-grade delivery every sprint.",
          bullets: [
            "Own architecture, implementation, and reviews across Python backends, React frontends, and cloud ops.",
            "Keep stakeholders aligned with weekly demos, delivery notes, and a live risk radar.",
            "Build with observability, testing, and incident playbooks so launch doesn’t create new fires."
          ],
          result: "The result: production features in weeks, a calm delivery rhythm, and a team ready to maintain the work.",
          caseStudy: {
            title: "NannyML — monitoring platform launch",
            context: "Early-stage ML monitoring team needed production services while raising their seed.",
            action: "Led delivery of containerised Python services on AWS EKS, established CI/CD, and shipped customer-ready features.",
            result: "Halved onboarding time for new customers and secured the team’s first enterprise deals.",
            timeframe: "8-week delivery burst"
          },
          ctaLabel: "Request a delivery pod scope"
        },
        {
          id: "platform-modernization",
          title: "Platform Modernization",
          benefit: "Tame tech debt before it chokes growth.",
          context: "Legacy services, scaling pain, or compliance pressure are slowing every new release.",
          bullets: [
            "Audit architecture, data flows, and failure modes to pinpoint the blockers holding teams back.",
            "Refactor or rebuild services with Kubernetes, Terraform, and resilient data pipelines.",
            "Introduce CI/CD, observability, and runbooks so operations stay predictable."
          ],
          result: "The result: a platform that scales to the next funding milestone without constant firefighting.",
          caseStudy: {
            title: "Orfium — music licensing systems",
            context: "Growth-stage music-tech team wrestled with brittle Django services and missing visibility.",
            action: "Redesigned APIs, introduced observability, and stabilised releases across Heroku and AWS.",
            result: "Cut support escalations and kept licensing operations reliable under new catalog volume.",
            timeframe: "3-month modernization"
          },
          ctaLabel: "Get a modernization audit"
        },
        {
          id: "data-analytics-enablement",
          title: "Data & Analytics Enablement",
          benefit: "Turn noisy data into decisions your execs trust.",
          context: "Stakeholders want reliable reporting but your stack and governance aren’t ready.",
          bullets: [
            "Design data contracts, ingestion flows, and storage tuned for your live use cases.",
            "Build analytics models, dashboards, and automation with the right guardrails.",
            "Document governance, privacy, and runbooks so compliance stays comfortable."
          ],
          result: "The result: credible insights and automation that accelerate decisions across the business.",
          caseStudy: {
            title: "Encode S.A. — security analytics platform",
            context: "Security analysts needed timely network intelligence without drowning in manual effort.",
            action: "Architected PySpark and Elasticsearch pipelines that processed 100K-user datasets overnight.",
            result: "Unlocked same-day investigations and a 10x throughput jump for the analysis team.",
            timeframe: "6-week rebuild"
          },
          ctaLabel: "Schedule a data readiness review"
        }
      ],
      insightsTitle: "What these projects taught us",
      insightsIntro: "Patterns that keep delivery calm even when the stakes are high.",
      insights: [
        "Observability and incident playbooks ship with the feature, not afterwards.",
        "Pairing founders or tech leads during delivery shortens handoff ramps by weeks.",
        "Designing for multi-tenant data and analytics early prevents painful migrations later."
      ],
      trustTitle: "Security & Reliability commitments",
      trustItems: [
        "Data stays on ISO 27001 clouds with least-privilege access and per-client secrets.",
        "Incident response under one hour with documented playbooks and audit-ready postmortems.",
        "Nightly backups with 30-day retention and recovery drills each quarter."
      ],
      trustCtaLabel: "Read the delivery and security overview",
      trustCtaHref: "/#/trust",
      intro: "Partner with me across discovery, delivery, and resilience. Each engagement blends strategy and hands-on engineering so we ship outcomes without surprises.",
      segmentsHeadline: "Choose the path that sounds like your situation",
      segmentsSubtitle: "When we know your stage, we can tailor the engagement, cadence, and risk posture that keeps momentum.",
      segments: [
        {
          title: "Founder-Led Startups",
          slug: "startups",
          tagline: "Validate, ship, and raise faster",
          description: "You’re proving the product while investors watch runway. We co-own the build so you can show traction without adding headcount.",
          bullets: [
            "Run AI discovery sprints that surface the sharpest bet and map risks in plain language.",
            "Build investor-ready MVPs across Python backends, React frontends, and clean data flows.",
            "Wrap launches with observability, runbooks, and fundraising-friendly artefacts."
          ],
          proofPoints: ["Dikaio.ai AI sprint", "Langaware NLP validation", "Workable prototyping wins"],
          programOrder: ["ai-discovery", "ai-mvp"],
          ctaLabel: "Explore startup programs",
          longform: `### Where it helps
* Pre-seed or seed teams must prove AI-led value quickly to unlock the next round.
* The crew is lean, so you need a lead who can architect, build, and brief investors.
* Compliance and data readiness still matter, even when timelines are aggressive.

### How we work together
* Frame success metrics with founders and early customers, keeping scope laser-focused.
* Drive the technical spikes, delivery cadence, and paired implementation alongside your team.
* Close every sprint with investor-ready readouts, demos, and the assets you need for traction updates.`,
        },
        {
          title: "Scale-Up Acceleration",
          slug: "scale-ups",
          tagline: "Ship confident, compound growth",
          description: "Product-market fit is real, but tech debt and hiring gaps threaten momentum. I pair with your leads to integrate AI and modernize safely.",
          bullets: [
            "Integrate AI features tied to activation and retention metrics without derailing the roadmap.",
            "Modernize platform architecture—data contracts, billing, observability—while teams keep shipping.",
            "Coach engineering leadership with delivery notes, escalation paths, and enablement assets."
          ],
          proofPoints: ["Workable AI launch", "NannyML delivery pod", "Brain Metrics resilience"],
          programOrder: ["ai-feature-add-on", "scaleup-modernization"],
          ctaLabel: "Explore scale-up programs",
          longform: `### When to engage
* Feature velocity must increase, yet the platform is straining under growth or compliance demands.
* You need experienced hands to co-own delivery with staff engineers or staff-level gaps.
* Leadership expects transparent communication, clear artefacts, and risk mitigation.

### What to expect
* Paired delivery across architecture, integration, and rollout with weekly executive notes.
* Hardened pipelines, tests, and monitoring so operations stay calm after launch.
* Enablement sessions and documentation that embed new practices within your teams.`,
        },
        {
          title: "Enterprise Transformation",
          slug: "enterprises",
          tagline: "Operationalize AI & analytics safely",
          description: "Regulators, boards, or grants expect credible plans. We combine governance with hands-on delivery so stakeholders trust the rollout.",
          bullets: [
            "Plan and harden AI or analytics platforms with threat-aware architecture and data governance.",
            "Deliver forecasting and data engineering pipelines that respect compliance boundaries.",
            "Produce governance packs, reviewer decks, and enablement so teams sustain delivery."
          ],
          proofPoints: ["ENCODE analytics platform", "Mobility demand forecasting", "EU civic tech proposal"],
          programOrder: ["enterprise-analytics", "grant-funded-sprint"],
          ctaLabel: "Explore enterprise programs",
          longform: `### Ideal scenarios
* Security, compliance, or operations leaders need evidence the solution is safely deliverable.
* Grants, boards, or regulators demand detailed technical roadmaps before funding the build.
* Analytics platforms must scale without trading off reliability or auditability.

### Delivery approach
* Run governance workshops with risk owners to align on controls, SLAs, and reporting cadence.
* Document architecture, data handling, and operating models so auditors sign off with ease.
* Embed enablement and coaching so internal teams can run the platform after handoff.`,
        },
      ],
      programsHeadline: "Program catalogue",
      programsIntro: "Every engagement includes hands-on delivery, documentation, and enablement so your team can keep running after hand-off.",
      readProgramDetails: "View program details",
      programs: [
        {
          segmentSlug: "startups",
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
          segmentSlug: "startups",
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
          segmentSlug: "scale-ups",
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
          segmentSlug: "scale-ups",
          title: "SaaS Modernization & Observability Runway",
          slug: "scaleup-modernization",
          intro: "Stabilize the platform while you keep shipping—address architecture debt, observability, and delivery bottlenecks in 4–12 weeks.",
          businessProse: `Growth exposes every shortcut. This engagement pairs modernization spikes with continued feature delivery so performance, compliance, and developer experience all improve together.

### What we tackle
* Architecture and data contract audits to surface the debt blocking velocity.
* Observability, incident response, and release engineering upgrades that keep customers confident.
* Paired enablement so in-house engineers absorb new practices while we ship.

### Pricing & cadence
* Phased retainers €6K–€18K depending on scope, team size, and critical systems involved.`,
          items: [
            "Best for scale-ups balancing new feature launches with platform debt.",
            "Timeline: 4–12 week engagement with embedded tech leadership and weekly demos.",
            "Deliverables: modernization backlog, instrumented platform, enablement materials.",
            "Investment: €6K–€18K based on integrations and regulatory demands."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Scale recruiter-facing AI services while improving observability and release cadence.",
              solution: [
                "Refined service boundaries and deployment pipelines to support weekly AI feature releases.",
                "Embedded alerting and SLO reporting so product and ops teams could trust the rollout clock."
              ],
              technologies: ["Python", "Kubernetes", "Helm", "Grafana", "Prometheus"]
            },
            {
              company: "Brain Metrics Initiative",
              challenge: "Rebuild resilience tooling during sustained traffic spikes without service downtime.",
              solution: [
                "Introduced automated mitigation workflows and hardened network edge policies.",
                "Created incident playbooks and measurement loops that reduced MTTR across the team."
              ],
              technologies: ["Cloudflare", "Incident Response", "Observability"]
            },
            {
              company: "Orfium",
              challenge: "Keep a fast-growing music-tech platform performant while onboarding new catalogues and partners.",
              solution: [
                "Optimised asynchronous processing and database tuning to support higher ingestion volume.",
                "Rolled out change-management rituals and dashboards for product, legal, and finance stakeholders."
              ],
              technologies: ["PostgreSQL", "Redis", "Django", "CI/CD Automation"]
            }
          ],
          engagementTitle: "Plan your modernization runway",
          engagementDescription: "Use a 30-minute working session to pinpoint the highest-leverage modernization wins and the mix of delivery support you need.",
          engagementChecklistTitle: "To discuss on the call:",
          engagementChecklist: [
            "Primary failure modes or incident classes you want eliminated.",
            "Key services, data flows, or customer commitments under strain.",
            "Internal team capacity, skill gaps, and rollout constraints."
          ],
          engagementCtaLabel: "Book the modernization review"
        },
        {
          segmentSlug: "enterprises",
          title: "Enterprise Analytics & Resilience Accelerator",
          slug: "enterprise-analytics",
          intro: "Deliver secure, high-volume analytics or forecasting capabilities without sacrificing compliance or uptime.",
          businessProse: `Enterprises need proof that AI and analytics initiatives will be governed, observable, and sustainable. This accelerator combines architecture execution with risk management so stakeholders gain confidence fast.

### Focus areas
* Real-time or near real-time analytics pipelines with clear ownership and guardrails.
* Forecasting and decision-support tooling for operations, logistics, or financial teams.
* Governance assets—threat models, data maps, and policy hooks—that satisfy security and compliance.

### Pricing
* €5K–€15K depending on data volume, integrations, and regulatory overhead.`,
          items: [
            "Best for enterprise teams upgrading analytics without compromising reliability.",
            "Timeline: 3–10 weeks including governance workshops and enablement.",
            "Deliverables: production pipeline, governance pack, and operational runbooks.",
            "Investment: €5K–€15K aligned to integrations and reporting obligations."
          ],
          caseStudies: [
            {
              company: "ENCODE (Cybersecurity)",
              challenge: "Expose near real-time threat analytics via a performance-critical API for enterprise customers.",
              solution: [
                "Engineered analytics services blending Spark pipelines with optimized APIs and caching layers.",
                "Delivered governance playbooks so SOC analysts and compliance officers trusted the data."
              ],
              technologies: ["Spark", "Kafka", "Flask", "Redis", "ElasticSearch"]
            },
            {
              company: "Composite Mobility Operator",
              challenge: "Forecast city-level demand to improve fleet allocation while respecting data residency rules.",
              solution: [
                "Stood up a PySpark forecasting pipeline with MLflow tracking for hundreds of micro-markets.",
                "Packaged scenario planning dashboards and rollout guidance for operations leadership."
              ],
              technologies: ["PySpark", "Prophet", "MLflow", "AWS S3"]
            },
            {
              company: "Composite CivicTech Consortium",
              challenge: "Prove the resilience and data governance approach for a multi-partner analytics platform ahead of funding release.",
              solution: [
                "Authored architecture and compliance dossiers mapped to regulator expectations.",
                "Delivered a working prototype that demonstrated observability, access controls, and audit trails."
              ],
              technologies: ["Data Governance", "Security Architecture", "FastAPI", "Terraform"]
            }
          ],
          engagementTitle: "Book the enterprise readiness review",
          engagementDescription: "Confirm scope, data sensitivities, and stakeholder goals so you receive a governance-aware delivery plan within two business days.",
          engagementChecklistTitle: "Have on hand:",
          engagementChecklist: [
            "Primary regulatory or customer obligations we must respect.",
            "Data sources, integrations, or vendors already in scope.",
            "Stakeholders who must sign off on the delivery plan."
          ],
          engagementCtaLabel: "Schedule the readiness review"
        },
        {
          segmentSlug: "enterprises",
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
              technologies: ["Incident Response", "Governance Tooling", "Programme Design"]
            }
          ],
          engagementTitle: "Schedule the funding sprint call",
          engagementDescription: "Use a 30-minute call to align on grant requirements, stakeholders, and technical proof points so we can lock the sprint agenda in 48 hours.",
          engagementChecklistTitle: "Bring with you:",
          engagementChecklist: [
            "The funding call, scoring rubric, and submission deadlines.",
            "Existing research, prototypes, or compliance documentation.",
            "Stakeholder list and governance constraints we need to address."
          ],
          engagementCtaLabel: "Book the grant readiness review"
        }
      ],
      backToServices: "Back to Services",
      ctaTitle: "Need to choose the right engagement?",
      ctaDescription: "Book a 30-minute call to map your goals, timelines, and constraints. You'll leave with a recommended tier and a clear next-step checklist.",
      ctaButton: "Schedule a discovery call",
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
    trust: {
      title: "Delivery, Security & Reliability",
      intro: "Hands-on engagements mean I handle your production code and data with the same discipline as an in-house staff engineer. Here’s how I keep things calm and auditable.",
      architectureTitle: "Architecture & Data Handling",
      architectureDescription: "Builds run on AWS (EKS, EC2, S3, RDS) or your preferred cloud with infrastructure-as-code (Terraform) and least-privilege IAM. Source control lives in private GitHub/GitLab repos with branch protections, code review, and dependency scanning enabled.",
      artefactsTitle: "Operational artefacts you receive",
      artefactsIntro: "Each engagement leaves behind the documentation and tooling your team needs to keep running without me.",
      artefacts: [
        { title: "Architecture & data maps", description: "Diagrams and write-ups covering environments, integrations, residency, and data classification so legal and compliance teams stay aligned." },
        { title: "Runbooks & observability packs", description: "Alert routing, SLO dashboards, logging standards, and on-call guides so your team can support production calmly." },
        { title: "Security & compliance notes", description: "Documented assumptions, vendor choices, and risk mitigations packaged for boards, investors, or auditors." }
      ],
      commitmentsTitle: "Operational commitments",
      commitments: [
        "Data stays on ISO 27001 clouds with least-privilege access and per-client secrets.",
        "Incident response under one hour with documented playbooks and audit-ready postmortems.",
        "Nightly backups with 30-day retention and recovery drills each quarter."
      ],
      responseTitle: "Incident response & continuity",
      responseIntro: "Clear lines of responsibility and rehearsed drills mean surprises get handled quickly.",
      responseItems: [
        { timeframe: "≤ 1 hour", detail: "Initial response and triage for P1 production incidents." },
        { timeframe: "24 hours", detail: "Executive-ready postmortem with action items and owners." },
        { timeframe: "30 days", detail: "Encrypted backup retention plus quarterly restore tests." }
      ],
      contactTitle: "Need a deeper audit?",
      contactDescription: "Happy to walk your security or compliance team through controls, diagrams, and previous reports. Shared artefacts can be delivered under NDA.",
      contactCta: "Book a security review call",
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
      trust: "Εμπιστοσύνη",
      portfolio: "Portfolio",
      contact: "Επικοινωνία",
      blog: "Blog",
      analytics: "Μετρήσεις",
    },
    home: {
      heroHeadline: "Από ιδέα σε SaaS έτοιμο για επενδυτές—χωρίς να εξαντλήσεις την ομάδα.",
      heroSubheadline: "Παραδόσεις σε Python, React και AI με εμπιστοσύνη από Workable, NannyML, Orfium, Dikaio.ai και αποστολές ανθεκτικότητας όπως το Brain Metrics Initiative.",
      heroContext: "Τρέχεις roadmap με πίεση στο runway, τεχνικό χρέος και απαιτήσεις συμμόρφωσης, ενώ οι επενδυτές ζητούν ορατή πρόοδο.",
      heroProof: "Μπαίνω ως hands-on lead engineer που χτίζει, εκσυγχρονίζει και συν-υλοποιεί ώστε κάθε sprint να κλείνει με παραγωγικά αποτελέσματα.",
      ctaPrimary: "Κλείσε 20' audit",
      ctaSecondary: "Δες τις υπηρεσίες",
      ctaSecondaryHref: "/services",
      segmentsTitle: "Με ποιους συνεργάζομαι",
      segmentsSubtitle: "Διάλεξε το μονοπάτι που μοιάζει με την πίεση που ζεις — κάθε συνεργασία συνδυάζει discovery, build, pairing και handoff για να μένεις σε τροχιά.",
      segments: [
        {
          title: "Founder-led Startups",
          slug: "startups",
          tagline: "Validate, ship και κάνε raise πιο γρήγορα",
          description: "Μετατρέπεις ιδέα σε SaaS με μικρή ομάδα, στενό runway και investors που περιμένουν updates.",
          bullets: [
            "Discovery sprints που αναδεικνύουν το bet και τα ρίσκα που καίνε τους decision makers.",
            "MVP builds σε Python, React και data θεμέλια έτοιμα για demos σε επενδυτές.",
            "Launch kits με observability, runbooks και υλικό που υποστηρίζει fundraising updates."
          ],
          ctaLabel: "Δες το startup path",
        },
        {
          title: "Scale-Up Acceleration",
          slug: "scale-ups",
          tagline: "Ship με σιγουριά και χτίσε compound growth",
          description: "Προσθέτεις AI και εκσυγχρονίζεις το delivery χωρίς να υπερφορτώσεις το engineering leadership ή να φρενάρεις το roadmap.",
          bullets: [
            "Παραδίδουμε AI features με μετρήσιμο impact σε activation και retention.",
            "Εκσυγχρονίζουμε multi-tenant SaaS με data contracts, billing και observability.",
            "Παράλληλη υλοποίηση και enablement ώστε η ομάδα σου να κρατήσει το αποτέλεσμα."
          ],
          ctaLabel: "Δες το scale-up path",
        },
        {
          title: "Enterprise Transformation",
          slug: "enterprises",
          tagline: "Λειτουργικοποίησε AI & analytics με ασφάλεια",
          description: "Συνδυάζεις συμμόρφωση, governance και ανθεκτική παράδοση για ρυθμιζόμενες ή grant-funded ομάδες.",
          bullets: [
            "Threat-aware αρχιτεκτονική και AI hardening που εγκρίνουν auditors.",
            "Forecasting και analytics με σεβασμό σε data residency και privacy.",
            "Governance packs, reviewer decks και enablement ώστε οι εταίροι να εμπιστεύονται το rollout."
          ],
          ctaLabel: "Δες το enterprise path",
        },
      ],
      caseSnippetsTitle: "Πρόσφατα αποτελέσματα σε εβδομάδες, όχι μήνες",
      caseSnippetsSubtitle: "Mini ιστορίες με context, action και result για να δεις πώς κλείνουν οι συνεργασίες.",
      caseSnippets: [
        {
          title: "Workable: AI hiring copilots σε ένα τρίμηνο",
          stage: "Scale-up",
          context: "Η πλατφόρμα πρόσληψης ήθελε generative AI features χωρίς να εκτροχιάσει το roadmap.",
          action: "Τρέξαμε 2-εβδομαδιαίο discovery, χαρτογραφήσαμε constraints και συν-υλοποιήσαμε Python services και evaluation loops.",
          result: "Executive go-ahead και παραγωγικό launch στο επόμενο τρίμηνο με υιοθέτηση από τις ομάδες hiring.",
          href: "/services/segments/scale-ups",
          ctaLabel: "Δες το scale-up support"
        },
        {
          title: "NannyML: -50% στον χρόνο onboarding",
          stage: "Seed stage",
          context: "Η ομάδα ML monitoring χρειαζόταν production services ενώ έκλεινε τα πρώτα enterprise deals.",
          action: "Χτίσαμε containerized Python services στο AWS EKS, βάλαμε CI/CD και συντονίσαμε τον ρυθμό παράδοσης.",
          result: "Ο χρόνος onboarding μειώθηκε στο μισό και κλείστηκαν τα πρώτα enterprise συμβόλαια.",
          href: "/services/segments/startups",
          ctaLabel: "Δες το startup support"
        },
        {
          title: "Encode S.A.: same-day threat detection",
          stage: "Enterprise",
          context: "Οι security analysts χρειάζονταν αξιόπιστα analytics σε datasets 100K χρηστών χωρίς manual φόρτο.",
          action: "Αρχιτεκτονήσαμε PySpark + Elasticsearch pipelines με observability και runbooks για την ops ομάδα.",
          result: "10x αύξηση throughput και έρευνες που ολοκληρώνονται στην ίδια εργάσιμη.",
          href: "/services/segments/enterprises",
          ctaLabel: "Δες το enterprise support"
        }
      ],
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
        { value: "resume2025_hyped.pdf", label: "Βιογραφικό 2025 — Δυναμικό (για την πλάκα)" },
        { value: "resume2025_hyped_gr.pdf", label: "Βιογραφικό 2025 — Δυναμικό (Ελληνικά)" },
        { value: "resume2025_conservative.pdf", label: "Βιογραφικό 2025 — Σπαρτιατικό" },
        { value: "resume2025_longform.pdf", label: "Βιογραφικό 2025 — Longform (σε βάθος)" },
      ],
    },
    services: {
      title: "Υπηρεσίες",
      introHook: "Κουβαλάς ένα roadmap που η ομάδα μόλις και μετά βίας προλαβαίνει. Το runway στενεύει, η υποδομή τρίζει και οι επενδυτές ζητούν ορατή πρόοδο.",
      introSupport: "Μπαίνω ως lead product engineer που χτίζει, εκσυγχρονίζει και παραδίδει δίπλα στην ομάδα σου, χωρίς να την εξουθενώνει.",
      processTitle: "Πώς φτάνουμε από την ιδέα στην παράδοση",
      processSubtitle: "Κάθε συνεργασία είναι hands-on και διαφανής — μοιραζόμαστε την ευθύνη ενώ κρατάμε το ρίσκο υπό έλεγχο.",
      processSteps: [
        { title: "Discovery", description: "Ορίζουμε το στοίχημα, αναδεικνύουμε περιορισμούς και αποφασίζουμε τι αξίζει να χτιστεί.", artifact: "Σύνοψη ευκαιρίας + χάρτης ρίσκων" },
        { title: "Build", description: "Στήνουμε production-ready Python, React και data συστήματα σε μικρά, ελεγχόμενα βήματα.", artifact: "Λειτουργικό λογισμικό + ρυθμός releases" },
        { title: "Pair", description: "Παραδίδουμε μαζί με την ομάδα ώστε η γνώση να περνάει χωρίς να πέφτει η ταχύτητα.", artifact: "Sessions συν-υλοποίησης + coaching notes" },
        { title: "Handoff", description: "Σταθεροποιούμε, τεκμηριώνουμε και μετράμε για να συνεχίσει η ορμή μετά το launch.", artifact: "Runbooks, observability kit, success metrics" },
      ],
      offeringsTitle: "Διάλεξε το είδος βοήθειας που χρειάζεσαι",
      offeringsIntro: "Τέσσερις εστιασμένες υπηρεσίες καλύπτουν όλο τον κύκλο από validation μέχρι scale. Όλες ακολουθούν το βρόχο discovery → build → pair → handoff.",
      offerings: [
        {
          id: "ai-discovery-sprint",
          title: "AI Discovery Sprint",
          benefit: "Βρες το AI στοίχημα που αξίζει χρηματοδότηση.",
          context: "Χρειάζεσαι απόδειξη ότι ένα AI feature είναι υλοποιήσιμο πριν κάψεις runway ή το παρουσιάσεις στους επενδυτές.",
          bullets: [
            "Παίρνουμε συνεντεύξεις από founders, προϊόν και πελάτες για να αποτυπώσουμε τον πόνο και τα success metrics με καθαρή γλώσσα.",
            "Ελέγχουμε ετοιμότητα δεδομένων, περιορισμούς ιδιωτικότητας και integrations ώστε η εφικτότητα και τα ρίσκα να είναι ξεκάθαρα.",
            "Χτίζουμε workflows σε Python και TypeScript για να δούμε end-to-end την εμπειρία."
          ],
          result: "Το αποτέλεσμα: απόφαση στηριγμένη σε δεδομένα, ιεραρχημένο backlog και αυτοπεποίθηση για ενημέρωση επενδυτών μέσα σε δύο εβδομάδες.",
          caseStudy: {
            title: "Workable — generative hiring flows",
            context: "Η πλατφόρμα πρόσληψης έπρεπε να αποδείξει αξία AI χωρίς να εκτροχιάσει το roadmap.",
            action: "Τρέξαμε 2-εβδομαδιαίο discovery sprint, χαρτογραφήσαμε τα data constraints και δείξαμε GPT prototypes στη διοίκηση.",
            result: "Κερδίσαμε το executive go-ahead και roadmap που έφτασε παραγωγή στο επόμενο τρίμηνο.",
            timeframe: "2 εβδομάδες για go/no-go"
          },
          ctaLabel: "Κλείσε AI validation call"
        },
        {
          id: "product-delivery-pod",
          title: "Product Delivery Pod",
          benefit: "Παράδωσε investor-ready features χωρίς νέο headcount.",
          context: "Το roadmap είναι μεγαλύτερο από την ομάδα, αλλά χρειάζεσαι production-grade παράδοση κάθε sprint.",
          bullets: [
            "Αναλαμβάνω architecture, υλοποίηση και reviews σε Python backends, React frontends και cloud ops.",
            "Κρατάμε stakeholders ευθυγραμμισμένους με εβδομαδιαία demos, delivery notes και risk radar.",
            "Χτίζουμε με observability, testing και incident playbooks ώστε το launch να μην ανοίξει νέες φωτιές."
          ],
          result: "Το αποτέλεσμα: production features σε εβδομάδες, ήρεμος ρυθμός παράδοσης και ομάδα που συντηρεί το έργο.",
          caseStudy: {
            title: "NannyML — monitoring platform launch",
            context: "Ομάδα ML monitoring σε seed στάδιο χρειαζόταν production υπηρεσίες ενώ έκανε raise.",
            action: "Ηγήθηκα στην παράδοση containerized Python υπηρεσιών στο AWS EKS, έστησα CI/CD και παραδώσαμε features έτοιμα για πελάτες.",
            result: "Μειώθηκε στο μισό ο χρόνος onboarding για νέους πελάτες και κλείστηκαν τα πρώτα enterprise deals.",
            timeframe: "8 εβδομάδες υλοποίησης"
          },
          ctaLabel: "Ζήτησε scope για delivery pod"
        },
        {
          id: "platform-modernization",
          title: "Platform Modernization",
          benefit: "Τιθάσεψε το tech debt πριν μπλοκάρει την ανάπτυξη.",
          context: "Legacy υπηρεσίες, κλιμάκωση ή απαιτήσεις συμμόρφωσης καθυστερούν κάθε release.",
          bullets: [
            "Κάνουμε audit σε architecture, data flows και failure modes για να εντοπίσουμε τα blockers.",
            "Refactor ή rebuild υπηρεσιών με Kubernetes, Terraform και ανθεκτικά data pipelines.",
            "Εισάγουμε CI/CD, observability και runbooks για σταθερή λειτουργία."
          ],
          result: "Το αποτέλεσμα: πλατφόρμα που κλιμακώνεται μέχρι το επόμενο funding milestone χωρίς συνεχές firefighting.",
          caseStudy: {
            title: "Orfium — music licensing systems",
            context: "Scale-up στο music-tech πάλευε με εύθραυστα Django services και έλλειψη ορατότητας.",
            action: "Επανασχεδιάσαμε APIs, φέραμε observability και σταθεροποιήσαμε releases σε Heroku και AWS.",
            result: "Μειώθηκαν τα support escalations και η λειτουργία έμεινε αξιόπιστη με νέο όγκο καταλόγου.",
            timeframe: "3 μήνες modernization"
          },
          ctaLabel: "Κλείσε modernization audit"
        },
        {
          id: "data-analytics-enablement",
          title: "Data & Analytics Enablement",
          benefit: "Μετέτρεψε τον θόρυβο δεδομένων σε αποφάσεις που εμπιστεύονται τα στελέχη.",
          context: "Οι stakeholders ζητούν αξιόπιστο reporting αλλά το stack και το governance δεν είναι έτοιμα.",
          bullets: [
            "Σχεδιάζουμε data contracts, ingestion flows και αποθήκευση για τα ζωντανά use cases σου.",
            "Χτίζουμε analytics μοντέλα, dashboards και αυτοματοποίηση με τα σωστά guardrails.",
            "Τεκμηριώνουμε governance, privacy και runbooks ώστε οι compliance ομάδες να μένουν ήρεμες."
          ],
          result: "Το αποτέλεσμα: αξιόπιστα insights και αυτοματοποίηση που επιταχύνουν αποφάσεις σε όλο τον οργανισμό.",
          caseStudy: {
            title: "Encode S.A. — security analytics platform",
            context: "Οι security analysts χρειάζονταν έγκαιρη πληροφόρηση χωρίς ατελείωτο manual φόρτο.",
            action: "Αρχιτεκτονήσαμε PySpark και Elasticsearch pipelines που επεξεργάζονταν datasets 100K χρηστών μέσα σε μία νύχτα.",
            result: "Ενεργοποιήθηκαν αυθημερόν έρευνες και δεκαπλασιάστηκε η παραγωγικότητα της ομάδας.",
            timeframe: "6 εβδομάδες ανασχεδιασμού"
          },
          ctaLabel: "Κλείσε data readiness review"
        }
      ],
      insightsTitle: "Τι μάθαμε από αυτά τα projects",
      insightsIntro: "Patterns που κρατούν την παράδοση ήρεμη ακόμη και όταν το διακύβευμα είναι μεγάλο.",
      insights: [
        "Observability και incident playbooks παραδίδονται μαζί με το feature, όχι μετά.",
        "Το pairing με founders ή tech leads μειώνει τον χρόνο handoff κατά εβδομάδες.",
        "Ο σχεδιασμός για multi-tenant και analytics από νωρίς αποτρέπει επίπονες μελλοντικές μεταναστεύσεις."
      ],
      trustTitle: "Δεσμεύσεις για Ασφάλεια & Αξιοπιστία",
      trustItems: [
        "Δεδομένα σε ISO 27001 clouds με least-privilege πρόσβαση και μυστικά ανά πελάτη.",
        "Incident response κάτω από μία ώρα με τεκμηριωμένα playbooks και audit-ready postmortems.",
        "Νυχτερινά backups με 30 ημέρες διατήρηση και ασκήσεις ανά τρίμηνο."
      ],
      trustCtaLabel: "Διάβασε το delivery & security overview",
      trustCtaHref: "/#/trust",
      intro: "Συνεργαζόμαστε σε discovery, delivery και resilience. Κάθε engagement συνδυάζει στρατηγική και hands-on engineering ώστε να προχωράς χωρίς εκπλήξεις.",
      segmentsHeadline: "Διάλεξε το μονοπάτι που μοιάζει με τη δική σου κατάσταση",
      segmentsSubtitle: "Όταν ξέρουμε το στάδιό σου, ρυθμίζουμε engagement, ρυθμό και ρίσκο για να κρατήσουμε την ορμή.",
      segments: [
        {
          title: "Founder-led Startups",
          slug: "startups",
          tagline: "Validate, ship και κάνε raise πιο γρήγορα",
          description: "Αποδεικνύεις το προϊόν ενώ οι επενδυτές κοιτούν το runway. Συν-υλοποιούμε ώστε να δείξεις traction χωρίς να μεγαλώσεις την ομάδα.",
          bullets: [
            "Τρέχουμε AI discovery sprints που αναδεικνύουν το πιο δυνατό στοίχημα και τα ρίσκα.",
            "Χτίζουμε MVPs έτοιμα για επενδυτές με Python backends, React frontends και καθαρές ροές δεδομένων.",
            "Κλείνουμε launches με observability, runbooks και υλικό που υποστηρίζει fundraising updates."
          ],
          proofPoints: ["Dikaio.ai AI sprint", "Langaware NLP validation", "Workable prototyping wins"],
          programOrder: ["ai-discovery", "ai-mvp"],
          ctaLabel: "Δες τα startup προγράμματα",
          longform: `### Πότε βοηθάει
* Pre-seed ή seed ομάδες πρέπει να δείξουν AI-led αξία γρήγορα για να κλείσουν το επόμενο round.
* Η ομάδα είναι μικρή, άρα χρειάζεσαι lead που αρχιτεκτονεί, υλοποιεί και ενημερώνει επενδυτές.
* Συμμόρφωση και ετοιμότητα δεδομένων μετράνε, ακόμη και με πιεστικά χρονικά περιθώρια.

### Τι κάνουμε μαζί
* Ορίζουμε success metrics με founders και πρώτους πελάτες κρατώντας το scope εστιασμένο.
* Τρέχουμε τεχνικά spikes, ρυθμό παράδοσης και συν-υλοποίηση μαζί με την ομάδα σου.
* Κλείνουμε κάθε sprint με demos, αναφορές και assets έτοιμα για ενημέρωση επενδυτών.`,
        },
        {
          title: "Scale-Up Acceleration",
          slug: "scale-ups",
          tagline: "Ship με σιγουριά και χτίσε compound growth",
          description: "Το product-market fit είναι εδώ, αλλά το tech debt και τα κενά σε headcount απειλούν την ορμή. Συνεργάζομαι με τα leads σου για ασφαλή AI integration και modernization.",
          bullets: [
            "Ενσωματώνουμε AI features δεμένα με activation και retention KPIs χωρίς να εκτροχιάζεται το roadmap.",
            "Εκσυγχρονίζουμε architecture — data contracts, billing, observability — ενώ οι ομάδες συνεχίζουν να ship-άρουν.",
            "Προπονούμε το engineering leadership με delivery notes, risk radar και enablement assets."
          ],
          proofPoints: ["Workable AI launch", "NannyML delivery pod", "Brain Metrics resilience"],
          programOrder: ["ai-feature-add-on", "scaleup-modernization"],
          ctaLabel: "Δες τα scale-up προγράμματα",
          longform: `### Πότε μπαίνουμε
* Πρέπει να αυξηθεί η ταχύτητα features ενώ η πλατφόρμα ζορίζεται από growth ή compliance.
* Χρειάζεσαι έμπειρο συνοδηγό για να μοιραστεί την ευθύνη με staff engineers ή τα κενά που υπάρχουν.
* Η διοίκηση θέλει διαφάνεια, artefacts και καθαρή διαχείριση ρίσκου.

### Τι να περιμένεις
* Συν-παράδοση σε αρχιτεκτονική, integrations και rollout με εβδομαδιαία executive notes.
* Ενισχυμένες pipelines, tests και monitoring ώστε οι λειτουργίες να μένουν ήρεμες μετά το launch.
* Enablement και τεκμηρίωση που ενσωματώνουν τις νέες πρακτικές στην ομάδα.`,
        },
        {
          title: "Enterprise Transformation",
          slug: "enterprises",
          tagline: "Λειτουργικοποίησε AI & analytics με ασφάλεια",
          description: "Ρυθμιστικές αρχές, boards ή grants θέλουν πειστικά σχέδια. Συνδυάζουμε governance με hands-on παράδοση για να εμπιστευτούν το rollout.",
          bullets: [
            "Σχεδιάζουμε και ενισχύουμε AI ή analytics πλατφόρμες με threat-aware αρχιτεκτονική και data governance.",
            "Παραδίδουμε forecasting και data pipelines που σέβονται τα compliance όρια.",
            "Παράγουμε governance packs, reviewer decks και enablement ώστε οι ομάδες να συνεχίσουν μόνες τους."
          ],
          proofPoints: ["ENCODE analytics platform", "Mobility demand forecasting", "EU civic tech proposal"],
          programOrder: ["enterprise-analytics", "grant-funded-sprint"],
          ctaLabel: "Δες τα enterprise προγράμματα",
          longform: `### Ιδανικά σενάρια
* Leaders σε security, compliance ή operations χρειάζονται απόδειξη ότι η λύση παραδίδεται με ασφάλεια.
* Grants, boards ή regulators ζητούν λεπτομερή roadmaps πριν εγκρίνουν προϋπολογισμό.
* Analytics πλατφόρμες πρέπει να κλιμακωθούν χωρίς να χαθεί αξιοπιστία ή auditability.

### Τρόπος παράδοσης
* Workshops governance με risk owners για να ευθυγραμμιστούμε σε controls, SLAs και reporting cadence.
* Τεκμηρίωση αρχιτεκτονικής, διαχείρισης δεδομένων και λειτουργίας ώστε οι auditors να εγκρίνουν άνετα.
* Enablement και coaching ώστε οι εσωτερικές ομάδες να τρέχουν την πλατφόρμα μετά το handoff.`,
        },
      ],
      programsHeadline: "Κατάλογος προγραμμάτων",
      programsIntro: "Κάθε συνεργασία περιλαμβάνει hands-on παράδοση, τεκμηρίωση και enablement ώστε η ομάδα σου να συνεχίσει αυτόνομα.",
      readProgramDetails: "Δείτε λεπτομέρειες προγράμματος",
      programs: [
        {
          segmentSlug: "startups",
          title: "AI Discovery Sprint",
          slug: "ai-discovery",
          intro: "Σχεδιάζουμε ένα σπριντ 1–2 εβδομάδων που αναδεικνύει τις πιο αποδοτικές AI ευκαιρίες, μειώνει το ρίσκο και αφήνει ξεκάθαρα επόμενα βήματα.",
          businessProse: `Το σπριντ προσφέρει στους founders σαφήνεια πριν δεσμεύσουν σημαντικό budget. Μαζί ορίζουμε το επιθυμητό αποτέλεσμα, ελέγχουμε την ετοιμότητα των δεδομένων και δοκιμάζουμε υποσχόμενα use cases με γρήγορα prototypes.

### Ροή Συνεργασίας
* Kick-off workshop για να χαρτογραφήσουμε pains, στόχους επιτυχίας και responsible AI guardrails.
* Συζητήσεις με stakeholders και συνεντεύξεις χρηστών για να επιβεβαιώσουμε την επιθυμητότητα και την επιχειρησιακή καταλληλότητα.
* Τεχνικά spikes σε LLMs, retrieval ή automation patterns ώστε να αποδείξουμε τη βιωσιμότητα και να αναδείξουμε περιορισμούς.

### Παραδοτέα
* Opportunity map που ιεραρχεί τα AI bets ανά αξία, προσπάθεια και ρίσκο.
* Τεχνικό discovery pack με απαιτήσεις δεδομένων, προσχέδια αρχιτεκτονικής και προτάσεις εργαλείων.
* Executive-ready brief με go/no-go, χρονοδιάγραμμα και επόμενα βήματα.

### Κόστος
* Fixed fee €2K–€4K ανάλογα με scope και personas.`,
          items: [
            "Ιδανικό για founders που επικυρώνουν AI use cases πριν ανάψουν φως στην υλοποίηση.",
            "Χρονοδιάγραμμα: 1–2 εβδομάδες με research, spikes και prototype demos.",
            "Παραδοτέα: opportunity map, technical discovery pack, executive brief.",
            "Επένδυση: €2K–€4K fixed fee."
          ],
          caseStudies: [
            {
              company: "Dikaio.ai",
              challenge: "Επιβεβαίωση αν το retrieval-augmented generation μπορεί να αυτοματοποιήσει νομικά έγγραφα ελληνικής νομοθεσίας πριν το pre-seed.",
              solution: [
                "Χαρτογραφήσαμε τις προτεραιότητες των founders σε shortlist ρεαλιστικών ροών εγγράφων και responsible AI guardrails.",
                "Παραδώσαμε clickable prototype και RAG reference implementation που τροφοδότησε τις συζητήσεις με επενδυτές."
              ],
              technologies: ["OpenAI", "Retrieval-Augmented Generation", "Product Discovery"]
            },
            {
              company: "Langaware",
              challenge: "Αξιολόγηση NLP μοντέλων για screening γνωστικής υγείας πριν επενδυθούν κλινικοί πόροι.",
              solution: [
                "Τρέξαμε evaluation spikes σε transformer μοντέλα για να προσδιορίσουμε εφικτή ακρίβεια.",
                "Πακετάραμε τα ευρήματα σε go/no-go αφήγημα με απαιτήσεις δεδομένων και συμμόρφωσης."
              ],
              technologies: ["Python", "BERT", "Applied NLP"]
            },
            {
              company: "Beat",
              challenge: "Διερεύνηση forecasting χαρακτηριστικών για την αγορά της Λίμα χωρίς να ξεφύγει το core roadmap.",
              solution: [
                "Παραδώσαμε forecasting prototype με πραγματικά δεδομένα διαδρομών σε δύο εβδομάδες.",
                "Ορίσαμε phased rollout επιλογές και instrumentation για συνεχή βελτίωση."
              ],
              technologies: ["Python", "Time-Series Forecasting", "Data Storytelling"]
            }
          ],
          engagementTitle: "Οργάνωσε το Discovery Sprint",
          engagementDescription: "Κλείσε 30 λεπτά για να επιβεβαιώσουμε fit, να κλειδώσουμε στόχους και να ορίσουμε agenda μέσα σε 48 ώρες.",
          engagementChecklistTitle: "Έχε μαζί σου:",
          engagementChecklist: [
            "Τα 2–3 κύρια bets ή workflows που θέλεις να επικυρώσεις.",
            "Data sources, έρευνα ή compliance σημειώσεις που πρέπει να δούμε.",
            "Διαθεσιμότητα βασικών μελών για τα workshops."
          ],
          engagementCtaLabel: "Κλείσε το discovery sprint call"
        },
        {
          segmentSlug: "startups",
          title: "AI MVP Launch",
          slug: "ai-mvp",
          intro: "Φέρνουμε στην αγορά ένα AI SaaS MVP μέσα σε 1–3 μήνες με production-grade backend, data flows και εμπειρίες γεννητικής τεχνητής νοημοσύνης.",
          businessProse: `Προχωράμε από το validated concept σε product-ready λανσάρισμα χωρίς να χαθεί momentum. Ηγούμαι της υλοποίησης, συνεργάζομαι με την ομάδα σου και κρατάω σταθερή πρόοδο μέσω εβδομαδιαίων demos.

### Τι χτίζουμε
* Ασφαλή Python/FastAPI ή Django θεμέλια με multi-tenant αρχιτεκτονική και καθαρά APIs.
* Data ingestion, orchestration και monitoring pipelines για early-scale ανάγκες.
* Generative AI ή predictive workflows (RAG, summarization, recommendations) δεμένα με το UX του προϊόντος.

### Ρυθμός Παράδοσης
* Εβδομαδιαία roadmap reviews και demos με founders και stakeholders.
* Paired working blocks με designers, PMs ή fractional συνεργάτες.
* Launch readiness checklist με QA, observability και runbooks.

### Κόστος
* €8K–€20K ανάλογα με scope, integrations και σύνθεση ομάδας. Διαθέσιμα phased retainers.`,
          items: [
            "Ιδανικό για founder-led ομάδες που χρειάζονται γρήγορο AI SaaS στην αγορά.",
            "Χρονοδιάγραμμα: 1–3 μήνες με εβδομαδιαία demos και checkpoints.",
            "Παραδοτέα: παραγωγικό backend, AI workflows, deployment runbook.",
            "Επένδυση: €8K–€20K ανάλογα με scope και integrations."
          ],
          caseStudies: [
            {
              company: "NannyML",
              challenge: "Λανσάρισμα monitoring SaaS για production ML μοντέλα με περιορισμένο headcount.",
              solution: [
                "Οδήγησα backend και UI integrations που παρέδωσαν την πρώτη investor-ready έκδοση.",
                "Productionized Kubernetes deployment με Helm και observability ώστε η εσωτερική ομάδα να κλιμακώσει με σιγουριά."
              ],
              technologies: ["Python", "SaaS", "MLOps", "AWS EKS", "Kubernetes", "Helm"]
            },
            {
              company: "Orfium",
              challenge: "Δημιουργία royalty management πλατφόρμας για υψηλό φόρτο μουσικών δεδομένων.",
              solution: [
                "Αρχιτεκτόνησα Django/Postgres services με twelve-factor πρακτικές για scalability.",
                "Υλοποίησα licensing workflows και reporting που στήριξαν το εμπορικό λανσάρισμα."
              ],
              technologies: ["Python", "Django", "PostgreSQL", "Heroku"]
            },
            {
              company: "NeuroPublic S.A.",
              challenge: "Πλατφόρμα precision agriculture με σύνθετη αγρονομική λογική σε επιθετικό χρονοδιάγραμμα.",
              solution: [
                "Ηγήθηκα των backend services που επεξεργάζονταν αγρονομικά δεδομένα και παρήγαγαν συστάσεις.",
                "Συνεργάστηκα με agronomists και product leads για λανσάρισμα από μηδενική βάση."
              ],
              technologies: ["Python", "Backend Development", "Web Applications"]
            }
          ],
          engagementTitle: "Οργάνωσε το AI MVP build",
          engagementDescription: "Κλείσε 30 λεπτά για να επιβεβαιώσουμε scope, integrations και launch timeline ώστε να λάβεις delivery plan μέσα σε δύο εργάσιμες.",
          engagementChecklistTitle: "Να έχεις έτοιμα:",
          engagementChecklist: [
            "Το παράθυρο λανσαρίσματος ή τα fundraising milestones.",
            "Essential workflows, integrations και KPIs.",
            "Σύνοψη του υπάρχοντος stack, repos ή design assets."
          ],
          engagementCtaLabel: "Κλείσε scoping call για το MVP"
        },
        {
          segmentSlug: "scale-ups",
          title: "AI Feature Add-On",
          slug: "ai-feature-add-on",
          intro: "Προσθέτουμε ένα AI χαρακτηριστικό που φέρνει έσοδα μέσα σε 2–6 εβδομάδες χωρίς να διαταράξουμε το core delivery.",
          businessProse: `Όταν έχεις ήδη πελάτες, κάθε νέο feature πρέπει να προσγειωθεί ομαλά. Ενσωματώνομαι στο stack σου, ενισχύω το AI workflow και βεβαιώνομαι ότι η ομάδα μπορεί να το τρέξει μετά το hand-off.

### Playbook Ενσωμάτωσης
* Ευθυγράμμιση success metrics με activation, retention ή expansion στόχους.
* Σχεδιασμός αρχιτεκτονικής που σέβεται το υπάρχον stack, τις ρυθμιστικές ανάγκες και τα data contracts.
* Πλάνο experiments και rollout guardrails (feature flags, observability, fallback στρατηγικές).

### Παραδοτέα
* Υλοποίηση παραγωγικού χαρακτηριστικού με καθαρές διεπαφές και documentation.
* Monitoring και alerting hooks ώστε η ομάδα να μετρά ποιότητα και να επεμβαίνει γρήγορα.
* Playbooks για customer success, support και marketing.

### Κόστος
* €4K–€10K ανάλογα με integrations, προετοιμασία δεδομένων και πολυπλοκότητα rollout.`,
          items: [
            "Ιδανικό για scale-ups που προσθέτουν AI αξία σε υπάρχον surface.",
            "Χρονοδιάγραμμα: 2–6 εβδομάδες μαζί με την εσωτερική ομάδα.",
            "Παραδοτέα: παραγωγικό feature, monitoring plan, go-to-market playbook.",
            "Επένδυση: €4K–€10K ανάλογα με πολυπλοκότητα."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Εισαγωγή generative AI σε hiring workflows χωρίς να επηρεαστεί η αξιοπιστία ή η συμμόρφωση.",
              solution: [
                "Μεταφέραμε PoCs σε hardened microservices που τροφοδότησαν νέες εμπειρίες recruiters.",
                "Θεσμοθετήσαμε MLOps πρακτικές (monitoring, testing, rollout) ώστε η εσωτερική ομάδα να επαναλαμβάνει με ασφάλεια."
              ],
              technologies: ["Python", "Generative AI", "OpenAI", "LangChain", "Pinecone", "MLOps"]
            },
            {
              company: "ENCODE (Cybersecurity)",
              challenge: "Παράδοση near real-time threat analytics μέσω high-performance API για enterprise πελάτες.",
              solution: [
                "Υλοποιήσαμε analytics services που συνδύασαν Spark pipelines με βελτιστοποιημένο Flask API.",
                "Ενσωματώσαμε caching και instrumentation ώστε η καθυστέρηση να μείνει χαμηλή."
              ],
              technologies: ["Python", "Flask", "SQLAlchemy", "Splunk", "Redis", "MySQL"]
            },
            {
              company: "Brain Metrics Initiative",
              challenge: "Σκλήρυνση resilience tooling κατά τη διάρκεια DDoS surge ενώ τα dashboards έπρεπε να μείνουν online.",
              solution: [
                "Παραδώσαμε Cloudflare automations και operational runbooks που εξουδετέρωσαν την επίθεση.",
                "Καταγράψαμε τα μαθήματα σε resilience roadmap με scoped AI-driven detection."
              ],
              technologies: ["Cloudflare", "Incident Response", "Resilience Engineering"]
            }
          ],
          engagementTitle: "Λανσάρισε το AI feature σου",
          engagementDescription: "Κλείσε 30 λεπτά για να χαρτογραφήσουμε rollout, εξαρτήσεις και guardrails ώστε να λάβεις σχέδιο υλοποίησης μέσα σε 48 ώρες.",
          engagementChecklistTitle: "Πριν τη συνάντηση:",
          engagementChecklist: [
            "Το KPI που πρέπει να μετακινηθεί.",
            "Repositories, APIs ή schemas για integration.",
            "Rollout, συμμόρφωση ή commitments που πρέπει να προστατεύσουμε."
          ],
          engagementCtaLabel: "Κλείσε feature planning call"
        },
        {
          segmentSlug: "scale-ups",
          title: "SaaS Modernization & Observability Runway",
          slug: "scaleup-modernization",
          intro: "Σταθεροποιούμε την πλατφόρμα ενώ συνεχίζεις να ship-άρεις — αντιμετωπίζουμε αρχιτεκτονικό χρέος, observability και delivery bottlenecks σε 4–12 εβδομάδες.",
          businessProse: `Η ανάπτυξη αναδεικνύει κάθε shortcut. Το engagement αυτό συνδυάζει modernization spikes με συνεχή παράδοση ώστε απόδοση, συμμόρφωση και developer experience να βελτιωθούν ταυτόχρονα.

### Τι δουλεύουμε
* Audit αρχιτεκτονικής και data contracts για να εντοπίσουμε χρέος που μπλοκάρει ταχύτητα.
* Αναβαθμίσεις observability, incident response και release engineering για εμπιστοσύνη πελατών.
* Paired enablement ώστε οι in-house engineers να υιοθετήσουν τις νέες πρακτικές ενώ ship-άρουμε.

### Κόστος & ρυθμός
* Phased retainers €6K–€18K ανάλογα με scope, μέγεθος ομάδας και κρίσιμα συστήματα.`,
          items: [
            "Ιδανικό για scale-ups που ισορροπούν νέα features με platform debt.",
            "Χρονοδιάγραμμα: 4–12 εβδομάδες με embedded τεχνική ηγεσία και εβδομαδιαία demos.",
            "Παραδοτέα: modernization backlog, instrumented πλατφόρμα, enablement υλικό.",
            "Επένδυση: €6K–€18K ανάλογα με integrations και ρυθμιστικές απαιτήσεις."
          ],
          caseStudies: [
            {
              company: "Workable",
              challenge: "Κλιμάκωση recruiter-facing AI services βελτιώνοντας ταυτόχρονα observability και release cadence.",
              solution: [
                "Τροποποιήσαμε service boundaries και pipelines ώστε να υποστηρίζουν εβδομαδιαίες AI εκδόσεις.",
                "Ενσωματώσαμε alerting και SLO reporting ώστε product και ops να εμπιστεύονται τον ρυθμό."
              ],
              technologies: ["Python", "Kubernetes", "Helm", "Grafana", "Prometheus"]
            },
            {
              company: "Brain Metrics Initiative",
              challenge: "Αναδόμηση resilience tooling με υψηλό traffic χωρίς downtime.",
              solution: [
                "Εισαγάγαμε αυτοματοποιημένες διαδικασίες mitigation και ενισχύσαμε πολιτικές στο network edge.",
                "Δημιουργήσαμε incident playbooks και metrics που μείωσαν MTTR."
              ],
              technologies: ["Cloudflare", "Incident Response", "Observability"]
            },
            {
              company: "Orfium",
              challenge: "Διατήρηση απόδοσης σε ταχέως αναπτυσσόμενη music-tech πλατφόρμα με νέους καταλόγους.",
              solution: [
                "Βελτιστοποιήσαμε asynchronous processing και database tuning για υψηλότερο ingestion volume.",
                "Εφαρμόσαμε rituals change-management και dashboards για product, legal και finance."
              ],
              technologies: ["PostgreSQL", "Redis", "Django", "CI/CD Automation"]
            }
          ],
          engagementTitle: "Οργάνωσε το modernization runway",
          engagementDescription: "Κλείσε 30 λεπτά εργασίας για να ιεραρχήσουμε modernization wins και το μείγμα υποστήριξης που χρειάζεσαι.",
          engagementChecklistTitle: "Συζητάμε:",
          engagementChecklist: [
            "Τα βασικά failure modes ή incidents που θες να εξαφανίσεις.",
            "Κρίσιμες υπηρεσίες, data flows ή commitments που πιέζονται.",
            "Διαθεσιμότητα, δεξιότητες και περιορισμοί rollout της ομάδας."
          ],
          engagementCtaLabel: "Κλείσε modernization review"
        },
        {
          segmentSlug: "enterprises",
          title: "Enterprise Analytics & Resilience Accelerator",
          slug: "enterprise-analytics",
          intro: "Παραδίδουμε ασφαλή, υψηλού όγκου analytics ή forecasting χωρίς να θυσιάζουμε συμμόρφωση ή uptime.",
          businessProse: `Οι μεγάλες οργανώσεις θέλουν διαβεβαίωση ότι τα AI & analytics initiatives θα είναι governed, observable και βιώσιμα. Αυτό το accelerator συνδυάζει εκτέλεση αρχιτεκτονικής με risk management ώστε τα stakeholders να αποκτήσουν γρήγορα εμπιστοσύνη.

### Επικεντρωνόμαστε
* Real-time ή near real-time analytics pipelines με ξεκάθαρη ιδιοκτησία και guardrails.
* Forecasting και decision-support εργαλεία για operations, logistics ή οικονομικές ομάδες.
* Governance assets — threat models, data maps και policy hooks — που ικανοποιούν security και compliance.

### Κόστος
* €5K–€15K ανάλογα με όγκους δεδομένων, integrations και ρυθμιστικές απαιτήσεις.`,
          items: [
            "Ιδανικό για enterprise ομάδες που αναβαθμίζουν analytics χωρίς να διακινδυνεύουν την αξιοπιστία.",
            "Χρονοδιάγραμμα: 3–10 εβδομάδες με workshops διακυβέρνησης και enablement.",
            "Παραδοτέα: παραγωγικό pipeline, governance pack, operational runbooks.",
            "Επένδυση: €5K–€15K ανάλογα με integrations και reporting υποχρεώσεις."
          ],
          caseStudies: [
            {
              company: "ENCODE (Cybersecurity)",
              challenge: "Παράδοση near real-time threat analytics μέσω performance-critical API σε enterprise πελάτες.",
              solution: [
                "Υλοποιήσαμε analytics services που συνδύασαν Spark pipelines με optimized APIs και caching.",
                "Παραδώσαμε governance playbooks ώστε SOC και compliance να εμπιστευτούν τα δεδομένα."
              ],
              technologies: ["Spark", "Kafka", "Flask", "Redis", "ElasticSearch"]
            },
            {
              company: "Composite Mobility Operator",
              challenge: "Forecast ζήτησης σε επίπεδο γειτονιάς για καλύτερο fleet allocation με σεβασμό σε data residency.",
              solution: [
                "Στήσαμε PySpark forecasting pipeline με MLflow tracking για εκατοντάδες μικρο-αγορές.",
                "Πακετάραμε dashboards σεναρίων και οδηγίες rollout για το operations leadership."
              ],
              technologies: ["PySpark", "Prophet", "MLflow", "AWS S3"]
            },
            {
              company: "Composite CivicTech Consortium",
              challenge: "Απόδειξη resilience και data governance για πολυ-εταιρική analytics πλατφόρμα πριν την εκταμίευση.",
              solution: [
                "Συντάξαμε αρχιτεκτονικά και συμμορφωτικά dossiers χαρτογραφημένα στις απαιτήσεις ρυθμιστών.",
                "Παραδώσαμε λειτουργικό prototype με observability, access controls και audit trails."
              ],
              technologies: ["Data Governance", "Security Architecture", "FastAPI", "Terraform"]
            }
          ],
          engagementTitle: "Κλείσε enterprise readiness review",
          engagementDescription: "Επιβεβαιώνουμε scope, data sensitivities και στόχους stakeholders ώστε να λάβεις governance-aware delivery plan σε δύο εργάσιμες.",
          engagementChecklistTitle: "Έχε διαθέσιμα:",
          engagementChecklist: [
            "Κύριες ρυθμιστικές ή πελατειακές υποχρεώσεις που πρέπει να τηρήσουμε.",
            "Data sources, integrations ή vendors που είναι ήδη στο scope.",
            "Stakeholders που πρέπει να εγκρίνουν το σχέδιο παράδοσης."
          ],
          engagementCtaLabel: "Κλείσε readiness review"
        },
        {
          segmentSlug: "enterprises",
          title: "Grant-Funded Crypto, AI & Deep-Tech Sprint",
          slug: "grant-funded-sprint",
          intro: "Πακετάρουμε crypto, AI και automation roadmap σε fundable plan 2–4 εβδομάδων με ευθυγράμμιση κριτηρίων, milestones και delivery confidence.",
          businessProse: `Οι οργανισμοί χρηματοδότησης θέλουν ακριβή αφήγηση αντίκτυπου, ετοιμότητα συμμόρφωσης και μετρήσιμα παραδοτέα. Αυτό το sprint παντρεύει grant στρατηγική με τεχνικό πλάνο ώστε οι αξιολογητές να δουν βιώσιμο δρόμο από το award μέχρι το impact.

Οι περιπτώσεις παρακάτω είναι σύνθεση επαναλαμβανόμενων engagements ώστε να φανούν τα παραδοτέα χωρίς να αποκαλυφθούν ευαίσθητα στοιχεία.

### Πότε Ταιριάζει
* Προετοιμάζεις grant ή accelerator proposal και χρειάζεσαι πιο ισχυρό execution plan.
* Έχεις conditional funds και πρέπει να παρουσιάσεις τεχνικό roadmap πριν την εκταμίευση.
* Πρέπει να ευθυγραμμίσεις όραμα founders, υποχρεώσεις συνεργατών και απαιτήσεις συμμόρφωσης άμεσα.

### Τι Πακετάρουμε
* Roadmap ανά milestone με μηχανική, data και hiring επιπτώσεις.
* Checklist συμμόρφωσης και governance για ασφάλεια, ιδιωτικότητα και reporting.
* Prototype ή architectural spike που αποδεικνύει βιωσιμότητα σε evaluators και partners.

### Bonus για Χρηματοδότηση
* Υποστήριξη σε budgeting ranges και vendor επιλογές.
* Προετοιμασία υλικού για επιτροπές — executive summaries και demo scripts.
* Προαιρετικό hand-off σε MVP ή feature delivery μετά την έγκριση.

### Κόστος
* €3K–€6K ανάλογα με πολυπλοκότητα προγράμματος, stakeholders και απαιτούμενα prototypes.`,
          items: [
            "Ιδανικό για founders ή οργανισμούς που διεκδικούν EU, civic ή crypto grants και χρειάζονται απόδειξη υλοποίησης.",
            "Χρονοδιάγραμμα: 2–4 εβδομάδες με roadmap design, compliance prep και γρήγορα prototypes.",
            "Παραδοτέα: milestone plan, governance checklist, reviewer-ready summary pack.",
            "Επένδυση: €3K–€6K ανάλογα με πολυπλοκότητα και βάθος prototype."
          ],
          caseStudies: [
            {
              company: "Composite EU CivicTech Founder",
              challenge: "Προετοιμασία NGI Zero Commons proposal για privacy-preserving analytics με αυστηρή data sovereignty.",
              solution: [
                "Συν-γράψαμε narrative, work packages και milestone budget βάσει των NGI rubrics.",
                "Παραδώσαμε compliance evidence (data residency matrix, DPIA outline, responsible AI commitments) μαζί με prototype demo."
              ],
              technologies: ["Grant Proposal Design", "Data Governance", "Privacy Engineering"]
            },
            {
              company: "Composite Web3 Collective",
              challenge: "Διεκδίκηση blockchain grant για AI tooling σε DAO.",
              solution: [
                "Χαρτογραφήσαμε eligibility κριτήρια, rubrics και expectations διαφόρων foundations για compliant submission.",
                "Πακετάραμε narrative, technical explainer, UX mockups και community rollout plan."
              ],
              technologies: ["Grant Storytelling", "Ecosystem Research", "Product Strategy"]
            },
            {
              company: "Composite Resilience Lab",
              challenge: "Διεκδίκηση EU cascade χρηματοδότησης για critical infrastructure resilience με αυστηρή ρύθμιση.",
              solution: [
                "Μεταφράσαμε εμπειρία incident response σε phased roadmap με μετρήσιμους MTTR στόχους.",
                "Αναπτύξαμε artifacts (risk register, stakeholder map, compliance tracker) για το submission."
              ],
              technologies: ["Incident Response", "Governance Tooling", "Programme Design"]
            }
          ],
          engagementTitle: "Κλείσε funding sprint call",
          engagementDescription: "Κλείσε 30 λεπτά για να ευθυγραμμίσουμε απαιτήσεις grant, stakeholders και τεχνικά αποδεικτικά ώστε να κλειδώσουμε agenda εντός 48 ωρών.",
          engagementChecklistTitle: "Έχε μαζί σου:",
          engagementChecklist: [
            "Προκήρυξη, scoring rubric και deadlines.",
            "Υπάρχουσα έρευνα, prototypes ή compliance docs.",
            "Λίστα stakeholders και περιορισμούς διακυβέρνησης."
          ],
          engagementCtaLabel: "Κλείσε grant readiness review"
        }
      ],
      backToServices: "Επιστροφή στις Υπηρεσίες",
      ctaTitle: "Χρειάζεσαι βοήθεια για να διαλέξεις engagement;",
      ctaDescription: "Κλείσε ένα 30λεπτο call για να χαρτογραφήσουμε στόχους, χρονοδιάγραμμα και περιορισμούς. Θα φύγεις με προτεινόμενο tier και συγκεκριμένο πλάνο επόμενων ενεργειών.",
      ctaButton: "Κλείσε discovery call",
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
    trust: {
      title: "Παράδοση, Ασφάλεια & Αξιοπιστία",
      intro: "Τα hands-on engagements σημαίνουν ότι χειρίζομαι παραγωγικό κώδικα και δεδομένα με την ίδια πειθαρχία που θα είχε ένας in-house staff engineer. Έτσι κρατάμε το project ήρεμο και ελεγχόμενο.",
      architectureTitle: "Αρχιτεκτονική & Διαχείριση Δεδομένων",
      architectureDescription: "Τα builds τρέχουν σε AWS (EKS, EC2, S3, RDS) ή στο cloud που προτιμάς, με infrastructure-as-code (Terraform) και least-privilege IAM. Το source control παραμένει σε ιδιωτικά GitHub/GitLab repos με branch protections, code review και dependency scanning ενεργά.",
      artefactsTitle: "Operational artefacts που λαμβάνεις",
      artefactsIntro: "Κάθε συνεργασία αφήνει πίσω της την τεκμηρίωση και τα εργαλεία που χρειάζεται η ομάδα σου για να συνεχίσει χωρίς εμένα.",
      artefacts: [
        { title: "Χάρτες αρχιτεκτονικής & δεδομένων", description: "Διαγράμματα και σημειώσεις για περιβάλλοντα, integrations, data residency και ταξινόμηση ώστε νομική/συμμόρφωση να μένουν ευθυγραμμισμένες." },
        { title: "Runbooks & observability packs", description: "Δρομολόγηση alerts, dashboards SLO, πρότυπα logging και οδηγίες on-call ώστε η ομάδα σου να υποστηρίζει την παραγωγή με ψυχραιμία." },
        { title: "Security & compliance notes", description: "Τεκμηριωμένες υποθέσεις, επιλογές vendors και risk mitigations σε μορφή που μπορείς να δείξεις σε board, επενδυτές ή auditors." }
      ],
      commitmentsTitle: "Λειτουργικές δεσμεύσεις",
      commitments: [
        "Δεδομένα σε ISO 27001 clouds με least-privilege πρόσβαση και μυστικά ανά πελάτη.",
        "Incident response κάτω από μία ώρα με τεκμηριωμένα playbooks και audit-ready postmortems.",
        "Νυχτερινά backups με 30 ημέρες διατήρηση και ασκήσεις αποκατάστασης ανά τρίμηνο."
      ],
      responseTitle: "Διαχείριση περιστατικών & συνέχεια λειτουργίας",
      responseIntro: "Καθαροί ρόλοι και δοκιμασμένα drills σημαίνουν ότι τα απρόοπτα αντιμετωπίζονται γρήγορα.",
      responseItems: [
        { timeframe: "≤ 1 ώρα", detail: "Αρχική ανταπόκριση και triage για παραγωγικά περιστατικά P1." },
        { timeframe: "24 ώρες", detail: "Executive-ready postmortem με action items και owners." },
        { timeframe: "30 ημέρες", detail: "Κρυπτογραφημένα backups με τριμηνιαία tests αποκατάστασης." }
      ],
      contactTitle: "Χρειάζεσαι βαθύτερο audit;",
      contactDescription: "Μπορώ να ενημερώσω την ομάδα security ή compliance για controls, διαγράμματα και προηγούμενες αναφορές. Τα artefacts μοιράζονται υπό NDA.",
      contactCta: "Κλείσε security review call",
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
