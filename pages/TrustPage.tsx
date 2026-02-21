import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import { useLanguage } from '../context/LanguageContext';
import useAnalytics from '../hooks/useAnalytics';

const TrustPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { home, nav, actions } = translations;
    const { trackEvent } = useAnalytics();

    const metaDescription = language === 'en'
        ? 'Independent trust signals, verified outcomes, and supporting evidence for Petros Lambropoulos consulting engagements.'
        : 'Ανεξάρτητα σήματα εμπιστοσύνης, επαληθεύσιμα αποτελέσματα και τεκμήρια για τις συμβουλευτικές συνεργασίες του Πέτρου Λαμπρόπουλου.';

    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <MetaTags
                title={`${nav.trust} | Petros Lambropoulos`}
                description={metaDescription}
                canonicalPath="/trust"
            />

            <section className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{home.trustStripTitle}</h1>
                <p className="text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">
                    {language === 'en'
                        ? 'I bring 12+ years of software, data, and AI systems delivery across Skyscanner, Workable, Encode, NannyML, and Orfium.'
                        : 'Διαθέτω 12+ χρόνια εμπειρίας σε software, data και AI systems σε Skyscanner, Workable, Encode, NannyML και Orfium.'}
                </p>
                <p className="text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">
                    {language === 'en'
                        ? 'I can provide consulting references upon request from dikaio.ai, Rythm Hoppers, and Brain Metrics Initiative (BMI). If useful, book a discovery call to meet and review fit.'
                        : 'Μπορώ να δώσω consulting references κατόπιν αιτήματος από dikaio.ai, Rythm Hoppers και Brain Metrics Initiative (BMI). Αν βοηθά, κλείσε discovery call για να γνωριστούμε και να ελέγξουμε fit.'}
                </p>
                <div className="pt-1">
                    <a
                        href={actions.scheduleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={actions.scheduleAriaLabel}
                        className="inline-flex items-center justify-center rounded-lg bg-primary py-3 px-6 font-semibold text-white hover:bg-primary-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                        onClick={() => trackEvent('cta_click', { area: 'trust_page_intro', action: 'book_discovery_call' })}
                    >
                        {language === 'en' ? 'Book a discovery call' : 'Κλείσε discovery call'}
                    </a>
                </div>
            </section>

            <section aria-labelledby="verified-outcomes-heading" className="space-y-4">
                <h2 id="verified-outcomes-heading" className="text-2xl font-bold text-text-primary dark:text-white">{home.verifiedOutcomesTitle}</h2>
                <p className="text-text-secondary dark:text-slate-300">{home.verifiedOutcomesIntro}</p>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {home.verifiedOutcomes.map((outcome, index) => (
                        <li key={outcome.metric}>
                            {outcome.evidenceUrl.startsWith('/') ? (
                                <Link
                                    to={outcome.evidenceUrl}
                                    aria-label={`${outcome.metric}: ${outcome.evidenceLabel}`}
                                    className="group block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                                    onClick={() => trackEvent('trust_signal_click', { area: 'trust_page_verified_outcomes', metric: outcome.metric, index })}
                                >
                                    <article className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-cyan-200 dark:group-hover:border-cyan-500/40">
                                        <p className="text-base font-semibold text-text-primary dark:text-slate-100">{outcome.metric}</p>
                                        {outcome.context ? (
                                            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">{outcome.context}</p>
                                        ) : null}
                                        {outcome.testimonialQuote ? (
                                            <figure className="mt-3 rounded-md border border-slate-200 dark:border-slate-600 bg-secondary dark:bg-slate-700/50 p-3">
                                                <blockquote className="text-sm italic text-text-secondary dark:text-slate-200">
                                                    &ldquo;{outcome.testimonialQuote}&rdquo;
                                                </blockquote>
                                                {outcome.testimonialAuthor ? (
                                                    <figcaption className="mt-2 text-xs font-semibold text-primary dark:text-cyan-400">
                                                        - {outcome.testimonialAuthor}
                                                    </figcaption>
                                                ) : null}
                                            </figure>
                                        ) : null}
                                    </article>
                                </Link>
                            ) : (
                                <a
                                    href={outcome.evidenceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${outcome.metric}: ${outcome.evidenceLabel}`}
                                    className="group block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                                    onClick={() => trackEvent('trust_signal_click', { area: 'trust_page_verified_outcomes', metric: outcome.metric, index })}
                                >
                                    <article className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-cyan-200 dark:group-hover:border-cyan-500/40">
                                        <p className="text-base font-semibold text-text-primary dark:text-slate-100">{outcome.metric}</p>
                                        {outcome.context ? (
                                            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">{outcome.context}</p>
                                        ) : null}
                                        {outcome.testimonialQuote ? (
                                            <figure className="mt-3 rounded-md border border-slate-200 dark:border-slate-600 bg-secondary dark:bg-slate-700/50 p-3">
                                                <blockquote className="text-sm italic text-text-secondary dark:text-slate-200">
                                                    &ldquo;{outcome.testimonialQuote}&rdquo;
                                                </blockquote>
                                                {outcome.testimonialAuthor ? (
                                                    <figcaption className="mt-2 text-xs font-semibold text-primary dark:text-cyan-400">
                                                        - {outcome.testimonialAuthor}
                                                    </figcaption>
                                                ) : null}
                                            </figure>
                                        ) : null}
                                    </article>
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <section aria-labelledby="external-validation-heading" className="space-y-4">
                <h2 id="external-validation-heading" className="text-2xl font-bold text-text-primary dark:text-white">{home.externalValidationTitle}</h2>
                <p className="text-text-secondary dark:text-slate-300">{home.externalValidationIntro}</p>
                <ul className="grid md:grid-cols-2 gap-4">
                    {home.externalValidationLinks.map((signal, index) => (
                        <li key={signal.title}>
                            <a
                                href={signal.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={signal.ctaLabel}
                                className="group block h-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                                onClick={() => trackEvent('trust_signal_click', { area: 'trust_page_external_validation', title: signal.title, index })}
                            >
                                <article className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-cyan-200 dark:group-hover:border-cyan-500/40">
                                    <h3 className="text-lg font-semibold text-text-primary dark:text-slate-100">{signal.title}</h3>
                                    <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">{signal.description}</p>
                                </article>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default TrustPage;
