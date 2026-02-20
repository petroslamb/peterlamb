import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { BlogPost } from '../types';
import { blogPosts } from '../constants/blogPosts';
import MetaTags from '../components/MetaTags';
import useAnalytics from '../hooks/useAnalytics';

interface SubstackFeedItem {
    title?: string;
    link?: string;
    pubDate?: string;
    description?: string;
    categories?: string[];
}

interface SubstackFeedResponse {
    status?: string;
    items?: SubstackFeedItem[];
}

interface LiveBlogPost {
    title: string;
    link: string;
    date: string;
    description: string;
    tags: string[];
}

const SUBSTACK_FEED_ENDPOINT = 'https://api.rss2json.com/v1/api.json?rss_url=https://lambpetros.substack.com/feed';
const MAX_LIVE_POSTS = 9;
const MAX_ARCHIVE_POSTS = 9;

const stripHtml = (input: string): string =>
    input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const formatFeedDate = (value: string | undefined, language: 'en' | 'gr'): string => {
    if (!value) {
        return '';
    }

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) {
        return value;
    }

    const locale = language === 'gr' ? 'el-GR' : 'en-US';
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(parsedDate);
};

const ArchiveCard: React.FC<{ post: BlogPost; readMoreText: string; }> = ({ post, readMoreText }) => (
    <li className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <article className="flex-grow flex flex-col">
            <header className="flex-grow">
                <p className="text-sm text-text-secondary dark:text-slate-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-primary dark:text-cyan-400 mb-3">{post.title}</h3>
                <p className="text-text-secondary dark:text-slate-400">{post.description}</p>
            </header>
            <footer className="mt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                        <span key={tag} className="bg-slate-200 dark:bg-slate-700 text-xs font-medium text-text-secondary dark:text-slate-300 py-1 px-2 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary dark:text-cyan-400 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800 rounded-sm">
                    {readMoreText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </footer>
        </article>
    </li>
);

const BlogPage: React.FC = () => {
    const { language, translations } = useLanguage();
    const { blog } = translations;
    const { trackEvent } = useAnalytics();
    const [livePosts, setLivePosts] = useState<LiveBlogPost[]>([]);
    const [feedStatus, setFeedStatus] = useState<'loading' | 'ready' | 'error'>('loading');

    const metaDescription = language === 'en'
      ? 'Read the latest Substack essays by Petros Lambropoulos on AI reliability, production architecture, and consulting strategy.'
      : 'Διαβάστε τα πιο πρόσφατα Substack essays του Πέτρου Λαμπρόπουλου για AI reliability, production architecture και consulting strategy.';

    const archivePosts = useMemo(() => blogPosts[language].slice(0, MAX_ARCHIVE_POSTS), [language]);

    useEffect(() => {
        const controller = new AbortController();
        const loadLiveFeed = async () => {
            setFeedStatus('loading');

            try {
                const response = await fetch(SUBSTACK_FEED_ENDPOINT, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`Failed feed request with status ${response.status}`);
                }

                const data = (await response.json()) as SubstackFeedResponse;
                if (data.status !== 'ok' || !Array.isArray(data.items)) {
                    throw new Error('Feed payload malformed');
                }

                const normalizedPosts = data.items
                    .filter((item) => item.title && item.link)
                    .slice(0, MAX_LIVE_POSTS)
                    .map((item) => ({
                        title: item.title as string,
                        link: item.link as string,
                        date: formatFeedDate(item.pubDate, language),
                        description: stripHtml(item.description ?? '').slice(0, 220),
                        tags: (item.categories ?? []).slice(0, 3),
                    }));

                if (normalizedPosts.length === 0) {
                    throw new Error('No live posts found');
                }

                setLivePosts(normalizedPosts);
                setFeedStatus('ready');
            } catch (error) {
                if ((error as Error).name === 'AbortError') {
                    return;
                }

                setLivePosts([]);
                setFeedStatus('error');
            }
        };

        void loadLiveFeed();

        return () => controller.abort();
    }, [language]);

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <MetaTags
                title={`${blog.title} | Petros Lambropoulos`}
                description={metaDescription}
                canonicalPath="/blog"
            />
            <header className="text-center space-y-4">
                <span className="inline-flex items-center rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-primary dark:text-cyan-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    {blog.liveFeedBadge}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{blog.title}</h1>
                <p className="text-lg text-text-secondary dark:text-slate-300 max-w-3xl mx-auto">{blog.intro}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{blog.liveFeedIntro}</p>
            </header>

            {feedStatus === 'loading' ? (
                <div className="text-center py-12">
                    <p className="text-text-secondary dark:text-slate-300">{blog.liveFeedLoading}</p>
                </div>
            ) : null}

            {feedStatus === 'ready' ? (
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {livePosts.map((post) => (
                        <li key={post.link} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <article className="flex-grow flex flex-col">
                                <header className="flex-grow">
                                    <p className="text-sm text-text-secondary dark:text-slate-400 mb-2">{post.date}</p>
                                    <h2 className="text-xl font-bold text-primary dark:text-cyan-400 mb-3">{post.title}</h2>
                                    <p className="text-text-secondary dark:text-slate-400">{post.description}</p>
                                </header>
                                <footer className="mt-4">
                                    {post.tags.length > 0 ? (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag) => (
                                                <span key={tag} className="bg-slate-200 dark:bg-slate-700 text-xs font-medium text-text-secondary dark:text-slate-300 py-1 px-2 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary dark:text-cyan-400 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800 rounded-sm"
                                        onClick={() => trackEvent('blog_live_post_click', { destination: post.link })}
                                    >
                                        {blog.viewOnSubstack}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                </footer>
                            </article>
                        </li>
                    ))}
                </ul>
            ) : null}

            {feedStatus === 'error' ? (
                <section className="space-y-8">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/30 rounded-lg p-4 text-sm text-amber-900 dark:text-amber-100">
                        {blog.liveFeedError}
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-text-primary dark:text-white">{blog.archiveTitle}</h2>
                        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {archivePosts.map((post) => (
                                <ArchiveCard key={post.slug} post={post} readMoreText={blog.readMore} />
                            ))}
                        </ul>
                    </div>
                </section>
            ) : null}
        </div>
    );
};

export default BlogPage;
