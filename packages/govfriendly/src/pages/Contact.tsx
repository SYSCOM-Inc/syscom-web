import { useState } from 'react';
import { company, services, directions } from '@shared/data/company';
import { CheckCircle2, MapPin } from 'lucide-react';
import Seo from '../components/Seo';

// LocalBusiness schema for the contact page (Part 3a). Phone uses the toll-free
// number from the SEO brief; see PR note re: NAP consistency with the displayed number.
const CONTACT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SYSCOM, Inc.',
  url: 'https://syscom.com',
  telephone: '+1-800-779-7266',
  email: 'sales@syscom.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '400 East Pratt Street, Suite 600',
    addressLocality: 'Baltimore',
    addressRegion: 'MD',
    postalCode: '21202',
    addressCountry: 'US',
  },
  areaServed: 'US',
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const org = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    const subject = encodeURIComponent(`Website Inquiry${service ? ` — ${service}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nPhone: ${phone}\n\n${message}`
    );
    window.open(`mailto:${company.email}?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  return (
    <div>
      <Seo
        title="Contact SYSCOM | Baltimore, MD ECM & Automation Partner"
        description="Talk to SYSCOM about your enterprise content, capture, and automation challenges. 400 East Pratt Street, Suite 600, Baltimore, MD 21202 · sales@syscom.com."
        path="/contact"
        jsonLd={CONTACT_JSON_LD}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-20" aria-label="Contact hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Contact SYSCOM
          </h1>
          <p className="mt-4 text-lg text-slate max-w-3xl leading-relaxed">
            Tell us about your enterprise content challenges. We'll respond within one
            business day with an honest assessment and a clear path forward.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2
                id="contact-form-heading"
                className="font-heading text-2xl font-bold text-navy mb-6"
              >
                Send Us a Message
              </h2>

              {submitted ? (
                <div
                  className="bg-warm-light border border-teal/30 rounded-warm p-8 text-center"
                  role="alert"
                >
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-teal/10 text-teal"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="w-8 h-8" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-3 font-heading font-semibold text-xl text-navy">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-slate">
                    Thank you for reaching out. Our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Full Name <span className="text-terracotta" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-3 py-2.5 border border-warm-border rounded-lg text-text placeholder-muted/50 bg-warm-bg focus-visible:outline-2 focus-visible:outline-teal"
                        placeholder="Jane Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Email Address <span className="text-terracotta" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full px-3 py-2.5 border border-warm-border rounded-lg text-text placeholder-muted/50 bg-warm-bg focus-visible:outline-2 focus-visible:outline-teal"
                        placeholder="jane@agency.gov"
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Organization
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="w-full px-3 py-2.5 border border-warm-border rounded-lg text-text placeholder-muted/50 bg-warm-bg focus-visible:outline-2 focus-visible:outline-teal"
                        placeholder="Your organization"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full px-3 py-2.5 border border-warm-border rounded-lg text-text placeholder-muted/50 bg-warm-bg focus-visible:outline-2 focus-visible:outline-teal"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-medium text-text mb-1.5"
                    >
                      Service Interest
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="w-full px-3 py-2.5 border border-warm-border rounded-lg text-text bg-warm-bg focus-visible:outline-2 focus-visible:outline-teal"
                    >
                      <option value="">Select a service area (optional)</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                      <option value="products">Products (ASM, AIS Bridge, IBIG, SCS, and more)</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-text mb-1.5"
                    >
                      Message <span className="text-terracotta" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-3 py-2.5 border border-warm-border rounded-lg text-text placeholder-muted/50 bg-warm-bg focus-visible:outline-2 focus-visible:outline-teal resize-y"
                      placeholder="Describe your project or questions..."
                    />
                  </div>

                  <div>
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>

                  <p className="text-xs text-muted">
                    Fields marked with <span className="text-terracotta">*</span> are
                    required. We will not share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="font-medium text-navy text-sm">Office Address</p>
                  <p className="text-sm text-slate mt-1">
                    {company.address.full}
                  </p>
                </div>

                <div>
                  <p className="font-medium text-navy text-sm">Phone</p>
                  <a
                    href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm text-teal hover:underline"
                  >
                    {company.phone}
                  </a>
                  <br />
                  <a
                    href={`tel:${company.phoneTollfreeNumeric}`}
                    className="text-sm text-teal hover:underline"
                  >
                    {company.phoneTollfree} ({company.phoneTollfreeNumeric})
                  </a>
                </div>

                <div>
                  <p className="font-medium text-navy text-sm">Fax</p>
                  <p className="text-sm text-slate">{company.fax}</p>
                </div>

                <div>
                  <p className="font-medium text-navy text-sm">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm text-teal hover:underline"
                  >
                    {company.email}
                  </a>
                </div>

                <div>
                  <p className="font-medium text-navy text-sm">Technical Support</p>
                  <a
                    href={`mailto:${company.supportEmail}`}
                    className="text-sm text-teal hover:underline"
                  >
                    {company.supportEmail}
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-warm-cream rounded-warm border border-warm-border p-6 text-center">
                <span
                  className="inline-flex items-center justify-center w-11 h-11 mx-auto rounded-full bg-terracotta/10 text-terracotta"
                  aria-hidden="true"
                >
                  <MapPin className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <p className="font-heading font-semibold text-navy text-sm mt-3">
                  Baltimore Inner Harbor
                </p>
                <p className="text-xs text-slate mt-1">
                  {company.address.building}<br />
                  {company.address.street}<br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </p>
              </div>

              {/* Hours */}
              <div className="mt-6 bg-warm-light rounded-warm p-4 border border-warm-border">
                <p className="font-medium text-navy text-sm">Business Hours</p>
                <p className="text-sm text-slate mt-1">
                  {company.businessHours}
                </p>
              </div>

              {/* Directions */}
              <div className="mt-6 bg-warm-light rounded-warm p-4 border border-warm-border">
                <p className="font-medium text-navy text-sm mb-2">Getting Here</p>
                <p className="text-xs text-slate mb-2">{directions.landmarks}</p>
                <details className="text-xs text-slate">
                  <summary className="cursor-pointer font-medium text-teal hover:underline">
                    Driving Directions
                  </summary>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <span className="font-medium text-navy">From I-95:</span>{' '}
                      {directions.fromI95}
                    </li>
                    <li>
                      <span className="font-medium text-navy">From I-83:</span>{' '}
                      {directions.fromI83}
                    </li>
                    <li>
                      <span className="font-medium text-navy">From BWI Airport:</span>{' '}
                      {directions.fromBWI}
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
