import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Section from '../components/Section';
import AnimatedReveal from '../components/AnimatedReveal';

const initialForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

const initialErrors = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateForm(values) {
  const err = { ...initialErrors };
  let valid = true;

  if (!values.fullName.trim()) {
    err.fullName = 'Full name is required';
    valid = false;
  } else if (values.fullName.trim().length < 2) {
    err.fullName = 'Name must be at least 2 characters';
    valid = false;
  }

  if (!values.email.trim()) {
    err.email = 'Email is required';
    valid = false;
  } else if (!validateEmail(values.email)) {
    err.email = 'Please enter a valid email address';
    valid = false;
  }

  if (!values.subject.trim()) {
    err.subject = 'Subject is required';
    valid = false;
  } else if (values.subject.trim().length < 3) {
    err.subject = 'Subject must be at least 3 characters';
    valid = false;
  }

  if (!values.message.trim()) {
    err.message = 'Message is required';
    valid = false;
  } else if (values.message.trim().length < 10) {
    err.message = 'Message must be at least 10 characters';
    valid = false;
  }

  return { valid, errors: err };
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccess(false);

    const { valid, errors: newErrors } = validateForm(form);
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors(initialErrors);

    try {
      const { data } = await axios.post('/api/contact', {
        fullName: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (data.success) {
        setSuccess(true);
        setForm(initialForm);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        'Failed to send message. Please try again.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedReveal>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">
                  Available to Join Immediately
                </div>
              </AnimatedReveal>
              <AnimatedReveal delay={1}>
                <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
                  Let&apos;s Connect & Streamline Your Operations
                </h2>
              </AnimatedReveal>
              <div className="space-y-6">
                <a href="tel:+971523405509" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-60 uppercase tracking-widest">
                      Phone
                    </p>
                    <p className="text-lg font-bold">+971 52 340 5509</p>
                  </div>
                </a>
                <a href="mailto:ab.hakeem97@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-60 uppercase tracking-widest">
                      Email
                    </p>
                    <p className="text-lg font-bold">ab.hakeem97@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-sm opacity-60 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-lg font-bold">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <AnimatedReveal variant="scale" delay={2}>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
              {success && (
                <div
                  className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-400/30 text-green-100 text-sm flex items-center gap-2"
                  role="alert"
                >
                  <span className="material-symbols-outlined">check_circle</span>
                  Message sent successfully. I&apos;ll get back to you soon.
                </div>
              )}
              {errorMessage && (
                <div
                  className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-400/30 text-red-100 text-sm flex items-center gap-2"
                  role="alert"
                >
                  <span className="material-symbols-outlined">error</span>
                  {errorMessage}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold uppercase tracking-widest block"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={loading}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder-white/40 disabled:opacity-60 ${
                      errors.fullName ? 'border-red-400' : 'border-white/10'
                    }`}
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <p className="text-red-200 text-xs">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold uppercase tracking-widest block"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    disabled={loading}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder-white/40 disabled:opacity-60 ${
                      errors.email ? 'border-red-400' : 'border-white/10'
                    }`}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-red-200 text-xs">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold uppercase tracking-widest block"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Inquiry / Opportunity"
                    disabled={loading}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder-white/40 disabled:opacity-60 ${
                      errors.subject ? 'border-red-400' : 'border-white/10'
                    }`}
                    autoComplete="off"
                  />
                  {errors.subject && (
                    <p className="text-red-200 text-xs">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold uppercase tracking-widest block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={4}
                    disabled={loading}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder-white/40 disabled:opacity-60 resize-y min-h-[100px] ${
                      errors.message ? 'border-red-400' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-200 text-xs">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  disabled={loading}
                  className="w-full py-4"
                >
                  {loading ? (
                    <>
                      <span
                        className="material-symbols-outlined animate-spin"
                        aria-hidden
                      >
                        progress_activity
                      </span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
