import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import MetaTags from '../components/MetaTags';
import SchedulingEmbed from '../components/SchedulingEmbed';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/petroslamb.dev@gmail.com';

interface FormSubmitResponse {
    success?: boolean | 'true' | 'false';
    message?: string;
}

const ContactPage: React.FC = () => {
    const location = useLocation();
    const { language, translations } = useLanguage();
    const { contact, actions } = translations;
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
    const [submitError, setSubmitError] = React.useState<string | null>(null);
    const [messageValue, setMessageValue] = React.useState('');

    const schedulingEmbedUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2cGdk7wy_kYMcB9CFQ8Lmf45Bqrf64GTCNPg4Mb31jjo9o37ArfE1mZi-h5rETky4j7vtm73Rt?gv=true';
    const isTeardownIntent = React.useMemo(
        () => new URLSearchParams(location.search).get('intent') === 'teardown',
        [location.search],
    );
    const priorityEmailHref = React.useMemo(
        () => `mailto:petroslamb.dev@gmail.com?subject=${encodeURIComponent(contact.priorityEmailSubject)}`,
        [contact.priorityEmailSubject],
    );

    React.useEffect(() => {
        if (isTeardownIntent) {
            setMessageValue((current) => current || contact.teardownIntentMessage);
            return;
        }

        setMessageValue('');
    }, [isTeardownIntent, contact.teardownIntentMessage]);

    const metaDescription = language === 'en'
      ? `Contact Petros Lambropoulos to discuss AI systems evaluation, production architecture, and reliability-focused consulting.`
      : `Επικοινωνήστε με τον Πέτρο Λαμπρόπουλο για αξιολόγηση AI συστημάτων, production αρχιτεκτονική και συμβουλευτική με έμφαση στην αξιοπιστία.`;
    const activationErrorHelp = language === 'en'
      ? 'FormSubmit activation is pending. Check petroslamb.dev@gmail.com (Inbox/Spam) for the "Activate Form" email, then submit again.'
      : 'Εκκρεμεί ενεργοποίηση FormSubmit. Έλεγξε το petroslamb.dev@gmail.com (Inbox/Spam) για email "Activate Form" και ξαναστείλε.';

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: ((formData.get('name') ?? '') as string).trim(),
            email: ((formData.get('email') ?? '') as string).trim(),
            message: ((formData.get('message') ?? '') as string).trim(),
            _subject: isTeardownIntent ? contact.teardownIntentSubject : 'New site contact request',
            _captcha: 'false',
            _template: 'table',
        };

        setIsSubmitting(true);
        setStatus('idle');
        setSubmitError(null);

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Submission failed with status ${response.status}`);
            }

            const payloadResponse = (await response.json()) as FormSubmitResponse;
            const isSuccessful = payloadResponse.success === true || payloadResponse.success === 'true';
            if (!isSuccessful) {
                throw new Error(payloadResponse.message || 'FormSubmit rejected the submission.');
            }

            form.reset();
            setMessageValue(isTeardownIntent ? contact.teardownIntentMessage : '');
            setStatus('success');
        } catch (error) {
            console.error(error);
            if (error instanceof Error && /activate|activation/i.test(error.message)) {
                setSubmitError(activationErrorHelp);
            } else {
                setSubmitError(error instanceof Error ? error.message : null);
            }
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
             <MetaTags 
                title={`${contact.title} | Petros Lambropoulos`} 
                description={metaDescription}
                canonicalPath="/contact"
            />
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{contact.title}</h1>
                <p className="mt-4 text-lg text-text-secondary dark:text-slate-300">{contact.intro}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md space-y-8">
                <section aria-labelledby="schedule-heading" className="space-y-4">
                    <h2 id="schedule-heading" className="text-2xl font-bold text-text-primary dark:text-white">{contact.scheduleTitle}</h2>
                    <p className="text-lg text-text-secondary dark:text-slate-300 max-w-3xl">{contact.scheduleDescription}</p>
                    <SchedulingEmbed url={schedulingEmbedUrl} title={contact.scheduleTitle} />
                    <div>
                        <a
                            href={actions.scheduleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={actions.scheduleAriaLabel}
                            className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-900 shadow-md hover:shadow-lg"
                        >
                            {contact.scheduleButton}
                        </a>
                        <p className="mt-3 text-sm text-text-secondary dark:text-slate-300">
                            {contact.scheduleFallback}{' '}
                            <a href={priorityEmailHref} className="text-primary dark:text-cyan-400 font-medium hover:underline">
                                {contact.priorityEmailLabel}
                            </a>
                        </p>
                    </div>
                </section>
                <div className="grid md:grid-cols-2 gap-8">
                    <section aria-labelledby="contact-details-heading">
                        <h2 id="contact-details-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{contact.detailsTitle}</h2>
                        <div className="space-y-4 text-text-secondary dark:text-slate-400">
                            <p><strong className="font-medium text-text-primary dark:text-slate-200">{contact.email}:</strong> <a href="mailto:petroslamb.dev@gmail.com" className="text-primary dark:text-cyan-400 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800">petroslamb.dev@gmail.com</a></p>
                            <p><strong className="font-medium text-text-primary dark:text-slate-200">{contact.linkedin}:</strong> <a href="https://linkedin.com/in/petroslamb" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-cyan-400 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800">linkedin.com/in/petroslamb</a></p>
                            <p><strong className="font-medium text-text-primary dark:text-slate-200">{contact.github}:</strong> <a href="https://github.com/petroslamb" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-cyan-400 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800">github.com/petroslamb</a></p>
                        </div>
                    </section>
                    <section aria-labelledby="contact-form-heading">
                        <h2 id="contact-form-heading" className="text-2xl font-bold text-text-primary dark:text-white mb-4">{contact.formIntro}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300">{contact.formName}</label>
                                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-slate-700 dark:border-slate-400 dark:text-white dark:placeholder-slate-400" autoComplete="name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300">{contact.formEmail}</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-slate-700 dark:border-slate-400 dark:text-white dark:placeholder-slate-400" autoComplete="email" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-300">{contact.formMessage}</label>
                                {isTeardownIntent ? (
                                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{contact.teardownIntentHint}</p>
                                ) : null}
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={isTeardownIntent ? 16 : 4}
                                    required
                                    value={messageValue}
                                    onChange={(event) => setMessageValue(event.target.value)}
                                    className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-slate-700 dark:border-slate-400 dark:text-white dark:placeholder-slate-400 ${isTeardownIntent ? 'font-mono min-h-[24rem]' : ''}`}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isSubmitting ? contact.formSubmitting : contact.formSubmit}
                                </button>
                            </div>
                            {status !== 'idle' ? (
                                <p
                                    className={`text-sm ${status === 'success' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}
                                    role="status"
                                    aria-live="polite"
                                >
                                    {status === 'success' ? contact.formSuccess : `${contact.formError}${submitError ? ` (${submitError})` : ''}`}
                                </p>
                            ) : null}
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
