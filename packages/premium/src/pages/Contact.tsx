import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Printer, Navigation } from 'lucide-react';
import { company, services, products, directions } from '@shared/data/company';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Inquiry${form.interest ? ` — ${form.interest}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`mailto:${company.email}?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  const inputClasses =
    'w-full bg-warm-100 border border-warm-400 text-charcoal-900 placeholder-charcoal-400 text-sm px-5 py-3.5 rounded-lg focus-visible:outline-2 focus-visible:outline-copper-500/50 focus:border-copper-500/40 transition-colors duration-500 font-light';

  const flagshipProducts = products.filter((p) => p.category === 'flagship' || p.category === 'core');

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Get in Touch
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal-900 animate-slide-up font-light">
            Let&rsquo;s Talk
          </h1>
          <p
            className="mt-8 text-charcoal-500 text-base md:text-lg max-w-md mx-auto leading-relaxed font-light animate-slide-up"
            style={{ animationDelay: '150ms' }}
          >
            Whether you have a project in mind or simply want to explore what is
            possible -- we are here.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-lg p-14 text-center">
                  <h3 className="font-heading text-3xl text-charcoal-900 mb-4 font-light">
                    Thank You
                  </h3>
                  <p className="text-charcoal-500 text-sm font-light">
                    We have received your inquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-2.5"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-2.5"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-2.5"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Organization"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-2.5"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-2.5"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Select an area</option>
                      <optgroup label="Services">
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Products">
                        {flagshipProducts.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </optgroup>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-2.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/30 px-10 py-4 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500 group"
                  >
                    Send Inquiry
                    <Send
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <div className="space-y-8 md:pt-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={16} className="text-copper-500/60" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500">
                      Office
                    </h4>
                  </div>
                  <p className="text-charcoal-700 text-sm leading-relaxed pl-7 font-light">
                    {company.address.building}
                    <br />
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state}{' '}
                    {company.address.zip}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone size={16} className="text-copper-500/60" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500">
                      Phone
                    </h4>
                  </div>
                  <div className="pl-7 space-y-1.5">
                    <a
                      href={`tel:${company.phone}`}
                      className="block text-charcoal-700 text-sm hover:text-copper-600 transition-colors duration-500 font-light"
                    >
                      {company.phone}
                    </a>
                    <a
                      href={`tel:${company.phoneTollfreeNumeric}`}
                      className="block text-charcoal-700 text-sm hover:text-copper-600 transition-colors duration-500 font-light"
                    >
                      {company.phoneTollfree} ({company.phoneTollfreeNumeric})
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Printer size={16} className="text-copper-500/60" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500">
                      Fax
                    </h4>
                  </div>
                  <p className="text-charcoal-700 text-sm pl-7 font-light">
                    {company.fax}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={16} className="text-copper-500/60" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500">
                      Email
                    </h4>
                  </div>
                  <div className="pl-7 space-y-1.5">
                    <a
                      href={`mailto:${company.email}`}
                      className="block text-charcoal-700 text-sm hover:text-copper-600 transition-colors duration-500 font-light"
                    >
                      {company.email}
                      <span className="text-charcoal-400 text-xs ml-2">Sales</span>
                    </a>
                    <a
                      href={`mailto:${company.supportEmail}`}
                      className="block text-charcoal-700 text-sm hover:text-copper-600 transition-colors duration-500 font-light"
                    >
                      {company.supportEmail}
                      <span className="text-charcoal-400 text-xs ml-2">Support</span>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={16} className="text-copper-500/60" />
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500">
                      Business Hours
                    </h4>
                  </div>
                  <p className="text-charcoal-700 text-sm pl-7 font-light">
                    {company.businessHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Visit Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 font-light">
              Getting Here
            </h2>
          </div>

          <div className="glass-card rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Navigation size={16} className="text-copper-500/60" />
              <p className="text-charcoal-700 text-sm font-light">
                {directions.landmarks}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-copper-500 mb-3">
                  From I-95
                </h4>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light">
                  {directions.fromI95}
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-copper-500 mb-3">
                  From I-83
                </h4>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light">
                  {directions.fromI83}
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-copper-500 mb-3">
                  From BWI Airport
                </h4>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light">
                  {directions.fromBWI}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
