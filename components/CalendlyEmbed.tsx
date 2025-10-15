import React from 'react';

interface CalendlyEmbedProps {
    url: string;
    title: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, title }) => (
    <div className="rounded-lg border border-primary/20 dark:border-cyan-400/40 overflow-hidden shadow-sm">
        <iframe
            src={url}
            title={title}
            className="w-full h-[760px] bg-white dark:bg-slate-900"
            frameBorder="0"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation"
        />
    </div>
);

export default CalendlyEmbed;
