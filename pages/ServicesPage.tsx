import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import MetaTags from '../components/MetaTags';
import { ServiceOffering, ServiceProcessStep, ServiceProgram, ServiceSegment } from '../types';

const segmentIcons: Record<string, React.ReactNode> = {
    startups: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l3.75-3.75m0 0a15.05 15.05 0 005.377 3.873c.679.27 1.432.102 1.953-.419l3.716-3.716a1.875 1.875 0 00-.419-2.953 15.05 15.05 0 00-3.873-5.377m0 0L19.5 4.5m-4.996 4.996a3.75 3.75 0 11-5.303-5.303 3.75 3.75 0 015.303 5.303z" />
        </svg>
    ),
    'scale-ups': (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    ),
    enterprises: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253l7.5 3.222A12.083 12.083 0 0112 20.25a12.083 12.083 0 01-7.5-10.775L12 6.253z" />
        </svg>
    ),
};

const programIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m6 2.25a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ProcessStepCard: React.FC<{ step: ServiceProcessStep; index: number }> = ({ step, index }) => (
    <div className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-6 flex flex-col gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-cyan-900/40 dark:text-cyan-300 font-semibold">
            {index + 1}
        </div>
        <div>
            <h3 className="text-xl font-bold text-text-primary dark:text-white">{step.title}</h3>
            <p className="mt-2 text-text-secondary dark:text-slate-300">{step.description}</p>
        </div>
        <div className="mt-auto text-sm font-semibold text-primary dark:text-cyan-300 bg-primary/5 dark:bg-cyan-900/30 rounded-lg px-3 py-2">
            {step.artifact}
        </div>
    </div>
);

const OfferingCard: React.FC<{ offering: ServiceOffering; scheduleLink: string }> = ({ offering, scheduleLink }) => (
    <div className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-6 md:p-8 flex flex-col gap-5">
        <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary dark:text-cyan-300">{offering.title}</p>
            <h3 className="mt-2 text-2xl font-bold text-text-primary dark:text-white">{offering.benefit}</h3>
        </div>
        <p className="text-text-secondary dark:text-slate-300">{offering.context}</p>
        <ul className="space-y-2 text-text-secondary dark:text-slate-300">
            {offering.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{bullet}</span>
                </li>
            ))}
        </ul>
        <p className="text-text-secondary dark:text-slate-300 font-semibold">{offering.result}</p>
        <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-3 bg-secondary/40 dark:bg-slate-900/40">
            <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-cyan-300">Case study</p>
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary dark:bg-cyan-900/40 dark:text-cyan-300 text-xs font-semibold px-3 py-1">
                    {offering.caseStudy.timeframe}
                </span>
            </div>
            <h4 className="text-lg font-bold text-text-primary dark:text-white">{offering.caseStudy.title}</h4>
            <p className="text-sm text-text-secondary dark:text-slate-300"><span className="font-semibold">Context:</span> {offering.caseStudy.context}</p>
            <p className="text-sm text-text-secondary dark:text-slate-300"><span className="font-semibold">Action:</span> {offering.caseStudy.action}</p>
            <p className="text-sm text-text-secondary dark:text-slate-300"><span className="font-semibold">Result:</span> {offering.caseStudy.result}</p>
        </div>
        <div className="pt-2">
            <a
                href={scheduleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full rounded-lg bg-primary text-white font-semibold py-3 px-4 hover:bg-primary/85 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
            >
                {offering.ctaLabel}
            </a>
        </div>
    </div>
);

const SegmentCard: React.FC<{ segment: ServiceSegment }> = ({ segment }) => {
    const icon = segmentIcons[segment.slug] ?? segmentIcons.startups;

    return (
        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl border border-transparent hover:border-primary/30 dark:hover:border-cyan-500/30 shadow-md transition-colors duration-300 p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-primary dark:text-cyan-400 mb-5">
                {icon}
            </div>
            <h2 className="text-2xl font-bold text-text-primary dark:text-white">{segment.title}</h2>
            <p className="text-primary dark:text-cyan-400 font-semibold text-sm uppercase tracking-wide mt-2">{segment.tagline}</p>
            <p className="mt-4 text-text-secondary dark:text-slate-300">{segment.description}</p>
            <ul className="mt-4 space-y-2 text-text-secondary dark:text-slate-300">
                {segment.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
            {segment.proofPoints.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {segment.proofPoints.map(point => (
                        <span key={point} className="inline-flex items-center rounded-full bg-secondary dark:bg-slate-900/60 text-sm text-primary dark:text-cyan-300 px-3 py-1">
                            {point}
                        </span>
                    ))}
                </div>
            )}
            <Link
                to={`/services/segments/${segment.slug}`}
                className="mt-8 inline-flex items-center justify-center bg-secondary text-primary dark:text-cyan-400 dark:bg-slate-900/60 font-semibold py-3 px-5 rounded-lg hover:bg-primary hover:text-white dark:hover:text-slate-900 dark:hover:bg-cyan-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
            >
                {segment.ctaLabel}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M2.25 12H21" />
                </svg>
            </Link>
        </div>
    );
};

const ProgramCard: React.FC<{ program: ServiceProgram; ctaLabel: string }> = ({ program, ctaLabel }) => (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
        <div className="flex items-center gap-3">
            {programIcon}
            <h3 className="text-xl font-bold text-text-primary dark:text-white">{program.title}</h3>
        </div>
        <p className="mt-3 text-text-secondary dark:text-slate-300">{program.intro}</p>
        <ul className="mt-4 space-y-2 text-text-secondary dark:text-slate-300">
            {program.items.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start">
                    <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
        <Link
            to={`/services/${program.slug}`}
            className="mt-6 inline-flex items-center text-primary dark:text-cyan-400 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900 rounded"
        >
            {ctaLabel}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </Link>
    </div>
);

const ServicesPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { services, actions } = translations;

    const metaDescription = language === 'en'
      ? `Engagements that blend discovery, build, pairing, and handoffs so AI SaaS teams ship faster with Petros Lambropoulos.`
      : `Συνεργασίες discovery, build, pairing και handoff για να παραδίδεις AI SaaS πιο γρήγορα με τον Πέτρο Λαμπρόπουλο.`;

    const programBySlug = useMemo(() => {
        const map = new Map<string, ServiceProgram>();
        services.programs.forEach(program => {
            map.set(program.slug, program);
        });
        return map;
    }, [services.programs]);

    const segmentsWithPrograms = useMemo(() => {
        return services.segments.map(segment => {
            const programs = segment.programOrder
                .map(slug => programBySlug.get(slug))
                .filter((program): program is ServiceProgram => Boolean(program));
            return { segment, programs };
        });
    }, [services.segments, programBySlug]);

    return (
        <div className="max-w-7xl mx-auto">
            <MetaTags 
                title={`${services.title} | Petros Lambropoulos`} 
                description={metaDescription}
            />
            <header className="mb-16">
                <AnimatedSection>
                    <div className="text-center space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{services.title}</h1>
                        <div className="space-y-4 text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">
                            <p>{services.introHook}</p>
                            <p>{services.introSupport}</p>
                        </div>
                        <p className="text-base text-text-secondary dark:text-slate-400 max-w-3xl mx-auto">{services.intro}</p>
                    </div>
                </AnimatedSection>
            </header>

            <section className="mb-16 space-y-8" aria-labelledby="process-heading">
                <AnimatedSection>
                    <div className="text-center space-y-3">
                        <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white">{services.processTitle}</h2>
                        <p className="text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{services.processSubtitle}</p>
                    </div>
                </AnimatedSection>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.processSteps.map((step, index) => (
                        <AnimatedSection key={step.title} delay={index * 80}>
                            <ProcessStepCard step={step} index={index} />
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section className="mb-16 space-y-8" aria-labelledby="offerings-heading">
                <AnimatedSection>
                    <div className="text-center space-y-3">
                        <h2 id="offerings-heading" className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white">{services.offeringsTitle}</h2>
                        <p className="text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{services.offeringsIntro}</p>
                    </div>
                </AnimatedSection>
                <div className="grid gap-8 md:grid-cols-2">
                    {services.offerings.map((offering, index) => (
                        <AnimatedSection key={offering.id} delay={index * 120}>
                            <OfferingCard offering={offering} scheduleLink={actions.scheduleLink} />
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section className="mb-20 grid gap-8 lg:grid-cols-[2fr,1fr]" aria-labelledby="insights-heading">
                <AnimatedSection>
                    <div className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-8 space-y-4">
                        <h2 id="insights-heading" className="text-2xl font-bold text-text-primary dark:text-white">{services.insightsTitle}</h2>
                        <p className="text-text-secondary dark:text-slate-300">{services.insightsIntro}</p>
                        <ul className="space-y-3 text-text-secondary dark:text-slate-300">
                            {services.insights.map((insight, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{insight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={120}>
                    <div className="h-full bg-white dark:bg-slate-800 border border-primary/30 dark:border-cyan-500/40 rounded-2xl shadow-md p-8 space-y-4">
                        <h3 className="text-xl font-bold text-text-primary dark:text-white">{services.trustTitle}</h3>
                        <ul className="space-y-3 text-text-secondary dark:text-slate-300">
                            {services.trustItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={services.trustCtaHref}
                            className="inline-flex items-center text-primary dark:text-cyan-400 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900 rounded"
                        >
                            {services.trustCtaLabel}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </AnimatedSection>
            </section>

            <section className="mt-24 space-y-10" aria-labelledby="segment-headline">
                <AnimatedSection>
                    <div className="text-center space-y-3">
                        <h2 id="segment-headline" className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white">{services.segmentsHeadline}</h2>
                        <p className="text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{services.segmentsSubtitle}</p>
                    </div>
                </AnimatedSection>
                <div className="grid gap-8 lg:grid-cols-3">
                    {services.segments.map((segment, index) => (
                        <AnimatedSection key={segment.slug} delay={index * 120}>
                            <SegmentCard segment={segment} />
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <section className="mt-20 space-y-12" aria-labelledby="programs-headline">
                <AnimatedSection>
                    <div className="text-center space-y-3">
                        <h2 id="programs-headline" className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white">{services.programsHeadline}</h2>
                        <p className="text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{services.programsIntro}</p>
                    </div>
                </AnimatedSection>
                <div className="space-y-12">
                    {segmentsWithPrograms.map(({ segment, programs }) => (
                        <AnimatedSection key={segment.slug}>
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-cyan-400">{segment.tagline}</p>
                                        <h3 className="text-2xl font-bold text-text-primary dark:text-white">{segment.title}</h3>
                                    </div>
                                    <Link
                                        to={`/services/segments/${segment.slug}`}
                                        className="inline-flex items-center text-primary dark:text-cyan-400 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900 rounded"
                                    >
                                        {segment.ctaLabel}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M2.25 12H21" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                    {programs.map(program => (
                                        <ProgramCard key={program.slug} program={program} ctaLabel={services.readProgramDetails} />
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            <AnimatedSection>
                <section className="mt-20 bg-white dark:bg-slate-800 border border-primary/20 dark:border-cyan-500/30 rounded-lg shadow-md p-8 text-center space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white">{services.ctaTitle}</h2>
                    <p className="text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{services.ctaDescription}</p>
                    <div>
                        <a
                            href={actions.scheduleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={actions.scheduleAriaLabel}
                            className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900 shadow-md hover:shadow-lg"
                        >
                            {services.ctaButton}
                        </a>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default ServicesPage;
