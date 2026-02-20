import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import MetaTags from '../components/MetaTags';

const PortfolioPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { portfolio } = translations;

    const metaDescription = language === 'en'
      ? `Browse portfolio case studies by Petros Lambropoulos on production AI systems, protocol verification, compliance-first infrastructure, and deep-tech architecture.`
      : `Περιηγηθείτε στο portfolio του Πέτρου Λαμπρόπουλου με case studies σε παραγωγικά AI συστήματα, protocol verification, compliance-first υποδομές και deep-tech αρχιτεκτονική.`;

    return (
        <div className="max-w-7xl mx-auto">
            <MetaTags 
                title={`${portfolio.title} | Petros Lambropoulos`} 
                description={metaDescription}
                canonicalPath="/portfolio"
            />
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{portfolio.title}</h1>
                <p className="mt-4 text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{portfolio.intro}</p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.projects.map((project, index) => (
                    <AnimatedSection as="li" key={index} delay={index * 100} className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
                        <article className="p-6 flex-grow flex flex-col">
                            <header className="flex-grow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-primary dark:text-cyan-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary dark:text-cyan-400 mb-2">{project.title}</h3>
                                <p className="text-text-secondary dark:text-slate-400">{project.description}</p>
                            </header>
                             <footer className="mt-4">
                                <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center text-primary dark:text-cyan-400 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800 rounded-sm">
                                    {portfolio.readCaseStudy}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </footer>
                        </article>
                    </AnimatedSection>
                ))}
            </ul>

            <AnimatedSection delay={150}>
                <section className="mt-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-md p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-text-primary dark:text-white">{portfolio.forkTransparencyTitle}</h2>
                    <p className="text-text-secondary dark:text-slate-300">{portfolio.forkTransparencyIntro}</p>
                    <ul className="space-y-3">
                        {portfolio.forkHighlights.map((item) => (
                            <li key={item.repo} className="rounded-md bg-secondary dark:bg-slate-700/50 p-4">
                                <p className="font-semibold text-text-primary dark:text-slate-100">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-cyan-400 hover:underline">
                                        {item.repo}
                                    </a>
                                </p>
                                <p className="text-sm text-text-secondary dark:text-slate-300 mt-1">{item.contribution}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <div className="text-center mt-16">
                    <a 
                        href="https://github.com/petroslamb" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        {portfolio.githubCta}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75A.75.75 0 0114.25 6h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V8.25l-4.5 4.5" /></svg>
                    </a>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default PortfolioPage;
