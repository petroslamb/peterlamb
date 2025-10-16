import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import MetaTags from '../components/MetaTags';
import { ServiceProgram, ServiceSegment } from '../types';

declare global {
  interface Window {
    marked: {
      parse: (markdown: string, options?: object) => string;
    };
    DOMPurify: {
      sanitize: (html: string) => string;
    };
  }
}

const SegmentProgramCard: React.FC<{ program: ServiceProgram; ctaLabel: string }> = ({ program, ctaLabel }) => (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 flex flex-col">
        <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m6 2.25a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-text-primary dark:text-white">{program.title}</h3>
        </div>
        <p className="mt-3 text-text-secondary dark:text-slate-300">{program.intro}</p>
        <ul className="mt-4 space-y-2 text-text-secondary dark:text-slate-300">
            {program.items.map((item, index) => (
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

const ServiceSegmentPage: React.FC = () => {
    const { segmentSlug } = useParams<{ segmentSlug: string }>();
    const { translations } = useLanguage();
    const { services, actions } = translations;
    const [longformHtml, setLongformHtml] = useState('');

    const segment: ServiceSegment | undefined = useMemo(
        () => services.segments.find(item => item.slug === segmentSlug),
        [segmentSlug, services.segments],
    );

    const programs: ServiceProgram[] = useMemo(() => {
        if (!segment) {
            return [];
        }
        return segment.programOrder
            .map(slug => services.programs.find(program => program.slug === slug))
            .filter((program): program is ServiceProgram => Boolean(program));
    }, [segment, services.programs]);

    useEffect(() => {
        if (segment?.longform && window.marked && window.DOMPurify) {
            const dirtyHtml = window.marked.parse(segment.longform);
            const cleanHtml = window.DOMPurify.sanitize(dirtyHtml);
            setLongformHtml(cleanHtml);
        }
    }, [segment]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [segmentSlug]);

    if (!segment) {
        return <Navigate to="/services" replace />;
    }

    const metaDescription = segment.description.length > 160
        ? `${segment.description.substring(0, 157)}…`
        : segment.description;

    return (
        <div className="max-w-5xl mx-auto">
            <MetaTags
                title={`${segment.title} | ${services.title} | Petros Lambropoulos`}
                description={metaDescription}
            />

            <div className="mb-8">
                <Link to="/services" className="text-primary dark:text-cyan-400 hover:underline inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    {services.backToServices}
                </Link>
            </div>

            <header className="text-center mb-12 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-cyan-400">{segment.tagline}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{segment.title}</h1>
                <p className="text-lg text-text-secondary dark:text-slate-300">{segment.description}</p>
            </header>

            <AnimatedSection>
                <section className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 prose dark:prose-invert max-w-none text-text-secondary dark:text-slate-300">
                    <article dangerouslySetInnerHTML={{ __html: longformHtml }} />
                </section>
            </AnimatedSection>

            <section className="mt-12 space-y-8" aria-labelledby="segment-programs-heading">
                <h2 id="segment-programs-heading" className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white text-center">
                    {services.programsHeadline}
                </h2>
                <div className="space-y-8">
                    {programs.map((program, index) => (
                        <AnimatedSection key={program.slug} delay={index * 150}>
                            <SegmentProgramCard program={program} ctaLabel={services.readProgramDetails} />
                        </AnimatedSection>
                    ))}
                </div>
            </section>

    <AnimatedSection>
        <section className="mt-16 bg-white dark:bg-slate-800 border border-primary/20 dark:border-cyan-500/30 rounded-lg shadow-md p-8 space-y-6">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white">{segment.ctaLabel}</h2>
                <p className="mt-3 text-lg text-text-secondary dark:text-slate-300">{services.ctaDescription}</p>
            </div>
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

export default ServiceSegmentPage;
