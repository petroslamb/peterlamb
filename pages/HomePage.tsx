import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Service } from '../types';
import MetaTags from '../components/MetaTags';
import useAnalytics from '../hooks/useAnalytics';

const ServiceCard: React.FC<{ service: Service, icon: React.ReactNode }> = ({ service, icon }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md h-full flex flex-col">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-primary dark:text-cyan-400 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-text-primary dark:text-slate-100 mb-2">{service.title}</h3>
        <p className="text-text-secondary dark:text-slate-400 flex-grow">{service.description}</p>
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
        <svg key="arrow-path" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" /></svg>,
        <svg key="sparkles" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.648l.21-1.423a2.25 2.25 0 00-1.887-1.887l-1.423-.21a2.25 2.25 0 00-2.43 2.43l.21 1.423a2.25 2.25 0 001.887 1.887l1.423.21a2.25 2.25 0 002.43-2.43z" /></svg>,
        <svg key="database" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
        <svg key="document-check" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 3h3m3 6H9a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 019 3h4.379c.597 0 1.17.237 1.593.659l3.369 3.369c.422.422.659.996.659 1.593V18.75A2.25 2.25 0 0115 21zM13.5 3v3.75a.75.75 0 00.75.75H18" /></svg>
    ];

    const iconMap: Record<string, React.ReactNode> = {
        'ai-discovery': baseIcons[0],
        'ai-mvp': baseIcons[1],
        'ai-feature-add-on': baseIcons[2],
        'grant-funded-sprint': baseIcons[3],
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
            
            <section aria-labelledby="services-snapshot-heading">
                <h2 id="services-snapshot-heading" className="text-3xl font-bold text-center text-text-primary dark:text-white mb-12">{home.servicesTitle}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {home.services.map((service, index) => {
                        const icon = iconMap[service.slug] ?? baseIcons[index % baseIcons.length];
                        return (
                            <Link 
                                to={`/services/${service.slug}`} 
                                key={service.slug} 
                                className="block h-full rounded-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900"
                                aria-label={`Learn more about ${service.title}`}
                                onClick={() => trackEvent('service_card_click', { area: 'home_services_snapshot', slug: service.slug })}
                            >
                                <ServiceCard service={service} icon={icon} />
                            </Link>
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
