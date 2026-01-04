import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        // 1. HONEYPOT SECURITY
        if (e.target.bot_field.value) {
            setSubmitStatus('success');
            return;
        }

        // 2. BROWSER-LEVEL RATE LIMITING
        const LAST_SUBMISSION_KEY = 'ss_last_contact';
        const COOLDOWN_PERIOD = 60 * 1000;
        const lastSubmission = localStorage.getItem(LAST_SUBMISSION_KEY);

        if (lastSubmission && (Date.now() - parseInt(lastSubmission) < COOLDOWN_PERIOD)) {
            const remainingSecs = Math.ceil((COOLDOWN_PERIOD - (Date.now() - parseInt(lastSubmission))) / 1000);
            setErrorMessage(`Please wait ${remainingSecs} seconds before sending another message.`);
            setSubmitStatus('error');
            return;
        }

        // 3. PREVENT DOUBLE SUBMIT
        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Internal Validation - NOT shown to user
            if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
                throw new Error('CONFIG_MISSING');
            }

            // Capture and sanitize form data for precise control
            const form = formRef.current;
            const templateParams = {
                from_name: form.from_name.value.trim(),
                from_email: form.from_email.value.trim(),
                from_phone: form.from_phone.value.trim(),
                company_name: form.company_name.value.trim() || 'N/A',
                subject: form.subject.value.trim() || 'General Inquiry',
                message: form.message.value.trim(),
                site_source: 'Savyasachi Official Website'
            };

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setSubmitStatus('success');
                form.reset();
                localStorage.setItem(LAST_SUBMISSION_KEY, Date.now().toString());
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch {
            setSubmitStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="contact-form-container"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                {/* 
                    SECURE HONEYPOT FIELD 
                    Do not remove or change - this captures spam bots automatically.
                */}
                <input type="text" name="bot_field" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input
                            type="text"
                            id="company"
                            name="company_name"
                            placeholder="Your organization name"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="from_email"
                            placeholder="your.email@example.com"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Please enter a valid email address (e.g. name@company.com)"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="from_phone"
                            placeholder="10-digit mobile number"
                            required
                            pattern="[0-9]{10}"
                            maxLength="10"
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                            title="Please enter a valid 10-digit phone number"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Tell us more about your requirements..."
                        required
                        maxLength="2000"
                    ></textarea>
                </div>

                <div className="form-footer">
                    <motion.button
                        type="submit"
                        className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        {!isSubmitting && (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        )}
                    </motion.button>

                    <AnimatePresence>
                        {submitStatus === 'success' && (
                            <motion.p
                                className="status-msg success"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                Thank you! Your message has been sent.
                            </motion.p>
                        )}
                        {submitStatus === 'error' && (
                            <motion.p
                                className="status-msg error"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                style={{ fontSize: '0.9rem' }}
                            >
                                {errorMessage || 'Oops! Something went wrong. Please try again.'}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </form>
        </motion.div >
    );
};

export default ContactForm;
