import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import MetaTags from '../components/MetaTags';

const AboutPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { about } = translations;

    const [selectedResume, setSelectedResume] = React.useState(about.resumeOptions[0]?.value ?? 'resume2025.pdf');
    const resumeHref = React.useMemo(() => `${import.meta.env.BASE_URL}resumes/${selectedResume}`, [selectedResume]);
    const resumeDeckHref = `${import.meta.env.BASE_URL}resumes/resume-production-ai-scale.pdf`;

    const metaDescription = language === 'en'
        ? `Learn how Petros Lambropoulos helps startup founders launch SaaS products fast with discovery, MVP builds, and production-ready features.`
        : `Μάθετε πώς ο Πέτρος Λαμπρόπουλος βοηθά founders να λανσάρουν SaaS προϊόντα γρήγορα με discovery, ανάπτυξη MVP και λειτουργίες έτοιμες για παραγωγή.`;

    const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <li className="flex items-start">
            <svg className="flex-shrink-0 h-5 w-5 text-primary dark:text-cyan-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{children}</span>
        </li>
    );

    return (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <MetaTags
                title={`${about.title} | Petros Lambropoulos`}
                description={metaDescription}
            />
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-6 text-center">{about.title}</h1>

            <AnimatedSection>
                <section aria-label="Introduction">
                    <div className="text-lg text-text-secondary dark:text-slate-300 space-y-4">
                        <p>
                            <span className="font-bold text-text-primary dark:text-slate-100">{about.greeting}</span>, {about.intro}
                        </p>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={120}>
                <section className="mt-12 bg-secondary dark:bg-slate-700/50 p-8 rounded-lg shadow-sm border-l-4 border-primary dark:border-cyan-400" aria-labelledby="philosophy-heading">
                    <h2 id="philosophy-heading" className="text-sm font-bold text-primary dark:text-cyan-400 mb-4 uppercase tracking-wider">{about.philosophyTitle}</h2>
                    <p className="text-xl text-slate-800 dark:text-slate-200 italic font-medium leading-relaxed">
                        "{about.philosophyText}"
                    </p>
                    <div className="mt-6">
                        <a
                            href={resumeDeckHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary dark:text-cyan-400 font-semibold hover:underline"
                        >
                            {language === 'en' ? 'View resume deck' : 'Δες την παρουσίαση'}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={150}>
                <section className="mt-8" aria-labelledby="how-i-help-heading">
                    <h2 id="how-i-help-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4 text-center">{about.howIHelpTitle}</h2>
                    <p className="text-lg text-text-secondary dark:text-slate-300 text-center max-w-2xl mx-auto">
                        {about.howIHelpIntro}
                    </p>
                    <ul className="mt-6 space-y-3 text-text-secondary dark:text-slate-300">
                        {about.howIHelp.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                    </ul>
                </section>
            </AnimatedSection>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <AnimatedSection delay={200}>
                    <section aria-labelledby="experience-heading">
                        <h2 id="experience-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{about.experienceTitle}</h2>
                        <ul className="space-y-2 text-text-secondary dark:text-slate-400">
                            {about.experience.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                        </ul>
                    </section>
                </AnimatedSection>
                <AnimatedSection delay={300}>
                    <section aria-labelledby="education-heading">
                        <h2 id="education-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{about.educationTitle}</h2>
                        <ul className="space-y-2 text-text-secondary dark:text-slate-400">
                            {about.education.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                        </ul>
                    </section>
                </AnimatedSection>
            </div>

            <AnimatedSection delay={200}>
                <section className="mt-12" aria-labelledby="skills-heading">
                    <h2 id="skills-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-6 text-center">{about.skillsTitle}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {about.skills.map((category) => (
                            <div key={category.title} className="bg-secondary dark:bg-slate-700 p-4 rounded-lg">
                                <h3 className="font-bold text-primary dark:text-cyan-400 mb-3">{category.title}</h3>
                                <ul className="flex flex-wrap gap-2">
                                    {category.items.map((item) => (
                                        <li key={item} className="bg-slate-200 dark:bg-slate-600 text-sm text-text-primary dark:text-slate-300 py-1 px-2 rounded-md">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={300}>
                <section className="mt-12" aria-labelledby="languages-heading">
                    <h2 id="languages-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{about.languagesTitle}</h2>
                    <p className="text-text-secondary dark:text-slate-400">{about.languages}</p>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={400}>
                <section className="mt-12 text-center" aria-labelledby="resume-heading">
                    <h2 id="resume-heading" className="sr-only">{about.resumeButton}</h2>
                    <div className="flex flex-col items-center gap-4">
                        <label htmlFor="resume-select" className="text-sm font-medium text-text-secondary dark:text-slate-300">
                            {about.resumeLabel}
                        </label>
                        <select
                            id="resume-select"
                            value={selectedResume}
                            onChange={(event) => setSelectedResume(event.target.value)}
                            className="w-full max-w-xs rounded-md border border-slate-300 bg-white py-2 px-3 text-text-primary shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                        >
                            {about.resumeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <a
                            href={resumeHref}
                            download={selectedResume}
                            className="inline-flex items-center justify-center rounded-lg bg-primary py-3 px-8 font-bold text-white transition hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-cyan-500 dark:hover:bg-cyan-400"
                        >
                            {about.resumeButton}
                        </a>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{about.resumeNote}</p>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={450}>
                <section className="mt-16" aria-labelledby="research-heading">
                    <h2 id="research-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-6 text-center">{about.researchFeedTitle}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {about.researchFeed.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary/50 dark:hover:border-cyan-400/50 transition-all group"
                            >
                                <span className="text-xs font-semibold text-primary dark:text-cyan-400 uppercase tracking-wider mb-2 block">{item.date}</span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                            </a>
                        ))}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <a
                            href="https://lambpetros.substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#FF6719] py-3 px-8 font-bold text-white shadow-md transition hover:bg-[#E55A12] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6719] dark:focus:ring-offset-slate-900"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM22.539 12.086H1.46v9.125l10.539-5.895 10.54 5.895v-9.125zM1.46 1.57h21.08v2.836H1.46V1.57z" />
                            </svg>
                            {about.subscribeCta}
                        </a>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default AboutPage;
