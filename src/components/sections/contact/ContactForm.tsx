import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FormEvent, ChangeEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { PROJECT_TYPES } from '@/data/contact';
import { cn } from '@/utils/cn';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  privacy?: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  subject: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  privacy: false,
};

const inputClasses = cn(
  'w-full rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-text-primary',
  'placeholder:text-text-muted transition-colors duration-200',
  'focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20',
  'hover:border-primary/30',
);

function validateForm(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  if (!form.privacy) errors.privacy = 'Please accept the privacy policy';
  return errors;
}

/**
 * ContactForm — professional contact form with validation and mock submission.
 * Architecture supports future providers (EmailJS, Resend, Formspree, custom API).
 */
export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: checked ?? value }));
    // Clear error for this field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    // Mock submission — replace with provider integration later
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    setForm(initialForm);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm md:p-8"
      aria-label="Contact form"
    >
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          aria-live="polite"
          className="mb-6 flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          Thank you! Your message has been sent. I'll get back to you within 24 hours.
        </motion.div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={cn(inputClasses, errors.name && 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={cn(inputClasses, errors.email && 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Company <span className="text-text-muted">(Optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Subject <span className="text-primary">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className={cn(inputClasses, errors.subject && 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20')}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-xs text-red-400" role="alert">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={cn(inputClasses, 'appearance-none bg-background')}
          >
            <option value="" className="bg-surface text-text-primary">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-surface text-text-primary">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Budget <span className="text-text-muted">(Optional)</span>
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={form.budget}
            onChange={handleChange}
            placeholder="e.g. $1,000 - $5,000"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="timeline" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Timeline <span className="text-text-muted">(Optional)</span>
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            value={form.timeline}
            onChange={handleChange}
            placeholder="e.g. 2-4 weeks"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-text-secondary">
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className={cn(inputClasses, 'resize-none', errors.message && 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">{errors.message}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-2 text-xs text-text-secondary">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 rounded border-border bg-white/[0.03] accent-primary"
            aria-invalid={!!errors.privacy}
          />
          <span>
            I agree to the privacy policy. <span className="text-primary">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1 text-xs text-red-400" role="alert">{errors.privacy}</p>
        )}
      </div>

      <div className="mt-6">
        <Button type="submit" size="lg" disabled={isSubmitting} className="group">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
}