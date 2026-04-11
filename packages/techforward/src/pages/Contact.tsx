import { useState, useEffect, useRef } from 'react';
import { company, services, directions } from '@shared/data/company';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Inquiry${form.service ? ` — ${form.service}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`mailto:${company.email}?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all';

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-3">
              Contact Us
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-3px] leading-tight mb-6">
              Let&apos;s{' '}
              <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Whether you&apos;re planning a migration, modernizing workflows, or exploring
              what AI can do for your content operations &mdash; we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="rounded-2xl bg-card border border-cyan/20 p-10 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">{'\u{2705}'}</span>
                    </div>
                    <h2 className="font-heading font-bold text-2xl tracking-[-1px] mb-3">
                      Message received.
                    </h2>
                    <p className="text-muted max-w-md mx-auto">
                      Thanks for reaching out. A member of our team will be in touch within
                      one business day. In the meantime, feel free to call us at {company.phone}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Name <span className="text-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-cyan">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Company <span className="text-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your organization"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone <span className="text-xs text-muted">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass + ' appearance-none'}
                      >
                        <option value="" className="bg-white">Select a service area...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id} className="bg-white">{s.name}</option>
                        ))}
                        <option value="products" className="bg-white">Products (ASM, AIS Bridge, IBIG, and more)</option>
                        <option value="other" className="bg-white">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-cyan">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={inputClass + ' resize-none'}
                        placeholder="Tell us about your project or challenge..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
                      style={{ color: '#ffffff' }}
                    >
                      Send Message &rarr;
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-2xl bg-card border border-border p-6 space-y-6">
                  <h3 className="font-heading font-bold text-base tracking-tight">Get in touch</h3>

                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-1.5">
                      Office
                    </p>
                    <p className="text-sm text-muted">
                      {company.address.full}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-1.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${company.phone}`}
                      className="text-sm text-muted hover:text-cyan transition-colors block"
                    >
                      {company.phone}
                    </a>
                    <a
                      href={`tel:${company.phoneTollfreeNumeric}`}
                      className="text-sm font-heading font-bold text-gray-900 hover:text-cyan transition-colors block mt-1"
                    >
                      {company.phoneTollfree} (Toll-Free)
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-1.5">
                      Fax
                    </p>
                    <p className="text-sm text-muted">{company.fax}</p>
                  </div>

                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-1.5">
                      Email
                    </p>
                    <div className="space-y-1">
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm text-muted hover:text-cyan transition-colors block"
                      >
                        {company.email} (Sales)
                      </a>
                      <a
                        href={`mailto:${company.supportEmail}`}
                        className="text-sm text-muted hover:text-cyan transition-colors block"
                      >
                        {company.supportEmail} (Support)
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-1.5">
                      Business Hours
                    </p>
                    <p className="text-sm text-muted">{company.businessHours}</p>
                  </div>
                </div>

                {/* Directions */}
                <div className="rounded-2xl bg-card border border-border p-6">
                  <h3 className="font-heading font-bold text-base tracking-tight mb-4">Directions</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {directions.landmarks}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-heading font-bold uppercase tracking-[2px] text-cyan mb-1">From I-95</p>
                      <p className="text-xs text-muted leading-relaxed">{directions.fromI95}</p>
                    </div>
                    <div>
                      <p className="text-xs font-heading font-bold uppercase tracking-[2px] text-cyan mb-1">From I-83</p>
                      <p className="text-xs text-muted leading-relaxed">{directions.fromI83}</p>
                    </div>
                    <div>
                      <p className="text-xs font-heading font-bold uppercase tracking-[2px] text-cyan mb-1">From BWI Airport</p>
                      <p className="text-xs text-muted leading-relaxed">{directions.fromBWI}</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl bg-card border border-border p-6 overflow-hidden">
                  <div className="rounded-xl bg-gray-50 border border-border h-48 flex items-center justify-center relative">
                    <div className="absolute inset-0 dot-grid opacity-20" />
                    <div className="relative z-10 text-center">
                      <span className="text-3xl block mb-2">{'\u{1F4CD}'}</span>
                      <p className="text-sm font-heading font-bold text-gray-900">Baltimore, MD</p>
                      <p className="text-xs text-muted mt-1">Inner Harbor / Pratt Street</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </>
  );
}
