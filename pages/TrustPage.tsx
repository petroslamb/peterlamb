import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import MetaTags from '../components/MetaTags';
import { useLanguage } from '../context/LanguageContext';

const TrustPage: React.FC = () => {
    const { translations } = useLanguage();
    const { trust, actions } = translations;

    return (
        <div className="max-w-5xl mx-auto space-y-16">
            <MetaTags
                title={`${trust.title} | Petros Lambropoulos`}
                description={trust.intro}
            />

            <AnimatedSection>
                <header className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{trust.title}</h1>
                    <p className="text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{trust.intro}</p>
                </header>
            </AnimatedSection>

            <AnimatedSection>
                <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-text-primary dark:text-white">{trust.architectureTitle}</h2>
                    <p className="text-text-secondary dark:text-slate-300">{trust.architectureDescription}</p>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-8 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary dark:text-white">{trust.artefactsTitle}</h2>
                        <p className="mt-2 text-text-secondary dark:text-slate-300">{trust.artefactsIntro}</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {trust.artefacts.map(artefact => (
                            <div key={artefact.title} className="rounded-xl bg-secondary/60 dark:bg-slate-900/50 p-5 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-semibold text-text-primary dark:text-white">{artefact.title}</h3>
                                <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">{artefact.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="bg-white dark:bg-slate-800 border border-primary/30 dark:border-cyan-500/30 rounded-2xl shadow-md p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-text-primary dark:text-white">{trust.commitmentsTitle}</h2>
                    <ul className="space-y-3 text-text-secondary dark:text-slate-300">
                        {trust.commitments.map((commitment, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{commitment}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-8 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary dark:text-white">{trust.responseTitle}</h2>
                        <p className="mt-2 text-text-secondary dark:text-slate-300">{trust.responseIntro}</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {trust.responseItems.map(item => (
                            <div key={item.timeframe} className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-secondary/60 dark:bg-slate-900/50">
                                <p className="text-sm font-semibold uppercase tracking-wide text-primary dark:text-cyan-300">{item.timeframe}</p>
                                <p className="mt-2 text-text-secondary dark:text-slate-300 text-sm">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="bg-white dark:bg-slate-800 border border-primary/20 dark:border-cyan-500/30 rounded-2xl shadow-md p-8 space-y-5 text-center">
                    <h2 className="text-2xl font-bold text-text-primary dark:text-white">{trust.contactTitle}</h2>
                    <p className="text-text-secondary dark:text-slate-300">{trust.contactDescription}</p>
                    <a
                        href={actions.scheduleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={actions.scheduleAriaLabel}
                        className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                    >
                        {trust.contactCta}
                    </a>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default TrustPage;
