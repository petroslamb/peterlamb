import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { HomeSegmentCard } from '../types';
import MetaTags from '../components/MetaTags';
import useAnalytics from '../hooks/useAnalytics';

const SegmentCard: React.FC<{ segment: HomeSegmentCard; icon: React.ReactNode; ctaHref: string; onCtaClick: () => void }> = ({ segment, icon, ctaHref, onCtaClick }) => (
    <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-md h-full flex flex-col border border-transparent hover:border-primary/30 dark:hover:border-cyan-500/30 transition-colors duration-300">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-primary dark:text-cyan-400 mb-5">
            {icon}
        </div>
        <div className="space-y-3 flex-grow">
            <h3 className="text-2xl font-bold text-text-primary dark:text-slate-100">{segment.title}</h3>
            <p className="text-primary dark:text-cyan-400 font-semibold text-sm uppercase tracking-wide">{segment.tagline}</p>
            <p className="text-text-secondary dark:text-slate-400">{segment.description}</p>
            <ul className="space-y-2 text-text-secondary dark:text-slate-300">
                {segment.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
        <Link
            to={ctaHref}
            onClick={onCtaClick}
            className="mt-6 inline-flex items-center justify-center bg-secondary text-primary dark:text-cyan-400 dark:bg-slate-900/60 font-semibold py-3 px-5 rounded-lg hover:bg-primary hover:text-white dark:hover:text-slate-900 dark:hover:bg-cyan-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
        >
            {segment.ctaLabel}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M2.25 12H21" />
            </svg>
        </Link>
    </div>
);

const HomePage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { home, actions } = translations;
    const { trackEvent } = useAnalytics();

    const metaDescription = language === 'en'
      ? `Petros Lambropoulos helps startups launch SaaS products in weeks with discovery, build, and production-ready features.`
      : `Ο Πέτρος Λαμπρόπουλος βοηθά startups να λανσάρουν SaaS προϊόντα μέσα σε εβδομάδες με discovery, υλοποίηση και λειτουργίες έτοιμες για παραγωγή.`;

    const baseIcons = [
        <svg key="rocket" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l3.75-3.75m0 0a15.05 15.05 0 005.377 3.873c.679.27 1.432.102 1.953-.419l3.716-3.716a1.875 1.875 0 00-.419-2.953 15.05 15.05 0 00-3.873-5.377m0 0L19.5 4.5m-4.996 4.996a3.75 3.75 0 11-5.303-5.303 3.75 3.75 0 015.303 5.303z" /></svg>,
        <svg key="scale" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
        <svg key="shield" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253l7.5 3.222A12.083 12.083 0 0112 20.25a12.083 12.083 0 01-7.5-10.775L12 6.253z" /></svg>,
    ];

    const iconMap: Record<string, React.ReactNode> = {
        startups: baseIcons[0],
        'scale-ups': baseIcons[1],
        enterprises: baseIcons[2],
    };

    return (
        <div className="space-y-16">
            <MetaTags 
                title={`${home.name} | ${home.title}`} 
                description={metaDescription}
            />
            <section className="text-center -mx-4 sm:-mx-6 lg:-mx-8 -mt-8 md:-mt-12 py-20 md:py-28 bg-gradient-to-b from-white to-secondary dark:from-slate-900 dark:to-slate-800 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 
                        className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight animate-fade-in-up"
                        style={{ animationFillMode: 'backwards' }}
                    >
                        {home.name}
                    </h1>
                    <h2 
                        className="mt-3 text-lg md:text-2xl text-primary dark:text-cyan-400 font-medium animate-fade-in-up"
                        style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
                    >
                        {home.title}
                    </h2>
                    <p 
                        className="mt-4 max-w-2xl mx-auto text-md md:text-xl text-slate-600 dark:text-slate-300 animate-fade-in-up"
                        style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
                    >
                        {home.subtitle}
                    </p>
                    <p 
                        className="mt-2 max-w-2xl mx-auto text-md text-slate-500 dark:text-slate-400 animate-fade-in-up"
                        style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}
                    >
                        {home.specialties}
                    </p>
                    <div 
                        className="animate-fade-in-up"
                        style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}
                    >
                        <a
                            href={actions.scheduleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={actions.scheduleAriaLabel}
                            className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-hover transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-secondary dark:focus:ring-offset-slate-900 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            onClick={() => trackEvent('cta_click', { area: 'home_hero', action: 'schedule_consultation' })}
                        >
                            {home.cta}
                        </a>
                    </div>
                </div>
            </section>
            
            <section aria-labelledby="segment-services-heading">
                <h2 id="segment-services-heading" className="text-3xl font-bold text-center text-text-primary dark:text-white mb-4">{home.segmentsTitle}</h2>
                <p className="text-center text-text-secondary dark:text-slate-300 max-w-3xl mx-auto mb-12">{home.segmentsSubtitle}</p>
                <div className="grid gap-8 lg:grid-cols-3">
                    {home.segments.map((segment, index) => {
                        const icon = iconMap[segment.slug] ?? baseIcons[index % baseIcons.length];
                        const href = `/services/segments/${segment.slug}`;
                        return (
                            <SegmentCard
                                key={segment.slug}
                                segment={segment}
                                icon={icon}
                                ctaHref={href}
                                onCtaClick={() => trackEvent('segment_card_click', { area: 'home_segments', slug: segment.slug })}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="text-center py-8 bg-white dark:bg-slate-800 rounded-lg shadow-md" aria-label={home.credibility}>
                 <p className="text-lg text-text-secondary dark:text-slate-300">{home.credibility}</p>
            </section>
        </div>
    );
};

export default HomePage;
