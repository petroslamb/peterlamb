import React from 'react';

interface SchedulingEmbedProps {
    url: string;
    title: string;
}

const SchedulingEmbed: React.FC<SchedulingEmbedProps> = ({ url, title }) => (
    <div className="rounded-lg border border-primary/20 dark:border-cyan-400/40 overflow-hidden shadow-sm">
        <iframe
            src={url}
            title={title}
            className="w-full h-[600px] bg-white dark:bg-slate-900"
            frameBorder="0"
            loading="lazy"
        />
    </div>
);

export default SchedulingEmbed;
