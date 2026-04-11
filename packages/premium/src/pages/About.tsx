import { Link } from 'react-router-dom';
import { User, ArrowRight, GraduationCap, Award } from 'lucide-react';
import {
  company,
  leadership,
  methodology,
  partnerships,
} from '@shared/data/company';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Since 1982
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal-900 animate-slide-up font-light">
            Our Story
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-6">
            Our Mission
          </p>
          <blockquote className="font-heading text-2xl md:text-3xl text-charcoal-900 font-light leading-relaxed">
            &ldquo;{company.mission}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* History */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-charcoal-600 text-base md:text-lg leading-relaxed font-light">
            <p>
              SYSCOM was founded in 1982 in Baltimore, Maryland, with a clear
              conviction: that enterprise content management is too critical to
              leave to generic solutions. For over {company.yearsInBusiness}{' '}
              years, we have built, deployed, and maintained the systems that
              organizations depend on to manage their most important documents
              and data.
            </p>
            <p>
              We use the best platforms when they exist, configure and extend them
              to fit, and build our own when the market has no answer. Our proprietary
              products -- AnySource Migrator, AIS Bridge, IBIG 2.0, and Content
              Services -- exist because we saw problems that nobody else was solving.
            </p>
            <p>
              Our clients are government agencies processing millions of citizen
              documents, financial institutions under strict regulatory
              requirements, and healthcare organizations managing complex claims
              workflows. They choose SYSCOM because we deliver, and because we
              stay.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Pull Quote */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-t border-b border-copper-500/20 py-14 md:py-20">
            <blockquote className="font-heading text-3xl md:text-5xl text-charcoal-900 italic leading-tight font-light">
              &ldquo;{company.tagline}&rdquo;
            </blockquote>
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mt-8">
              Our Guiding Principle
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Detail */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-charcoal-600 text-base md:text-lg leading-relaxed font-light">
            We know that the newest, latest technology is not always the best
            solution, but it&rsquo;s sometimes the only solution, and we know the
            difference. That discernment -- earned over four decades of hands-on
            implementation -- is what sets SYSCOM apart. We solve problems with
            the right tool, not the trendy one.
          </p>
        </div>
      </section>

      {/* Our Approach / Methodology */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Discipline
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal-900 font-light">
              Our Approach
            </h2>
          </div>

          <div className="md:flex gap-16 items-start">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-charcoal-600 text-base leading-relaxed font-light mb-8">
                {methodology.description}
              </p>
              <div className="space-y-3">
                {methodology.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-4 text-sm text-charcoal-600">
                    <span className="w-1 h-1 rounded-full bg-copper-500 mt-2 shrink-0" />
                    <span className="leading-relaxed font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="glass-card rounded-lg p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-copper-500 mb-6">
                  Project Lifecycle
                </p>
                <div className="space-y-4">
                  {methodology.phases.map((phase, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-[10px] text-copper-500/60 font-body w-5 text-right shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-charcoal-700 text-sm font-light">{phase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Leadership
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-charcoal-900 font-light">
              The People Behind SYSCOM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="glass-card rounded-lg p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-warm-300 border border-copper-500/10 flex items-center justify-center">
                  <User size={28} className="text-copper-500/50" />
                </div>
                <h3 className="font-heading text-xl text-charcoal-900 font-normal">
                  {person.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-copper-500 mt-1 mb-5">
                  {person.title}
                </p>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light mb-5">
                  {person.bio}
                </p>

                {/* Education */}
                {person.education && person.education.length > 0 && (
                  <div className="border-t border-charcoal-300/20 pt-5 mt-5 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap size={14} className="text-copper-500/50" />
                      <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal-500">
                        Education
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {person.education.map((edu, i) => (
                        <li key={i} className="text-charcoal-500 text-xs leading-relaxed font-light">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Awards & Certifications */}
                {((person.awards && person.awards.length > 0) ||
                  (person.certifications && person.certifications.length > 0)) && (
                  <div className="border-t border-charcoal-300/20 pt-5 mt-5 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={14} className="text-copper-500/50" />
                      <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal-500">
                        {person.awards ? 'Recognition' : 'Certifications'}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {(person.awards || person.certifications || []).map((item, i) => (
                        <li key={i} className="text-charcoal-500 text-xs leading-relaxed font-light">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partnerships */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Alliances
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 font-light">
              Technology Partnerships
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partner) => (
              <div
                key={partner.name}
                className="glass-card rounded-lg p-8"
              >
                <h3 className="font-heading text-2xl text-charcoal-900 mb-4 font-normal">
                  {partner.name}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 font-light">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Pragmatism',
                text: 'We use proven platforms when they fit, customize them when they almost fit, and build from scratch when nothing else will do. Whatever makes sense.',
              },
              {
                title: 'Longevity',
                text: 'Over 70% of our team has been with SYSCOM for five years or more. We do not churn through talent. We invest in expertise.',
              },
              {
                title: 'Precision',
                text: 'Enterprise content is mission-critical. We approach every engagement with the rigor and attention it demands. No shortcuts.',
              },
              {
                title: 'Candor',
                text: 'We tell clients what they need to hear, not what they want to hear. That honesty has kept relationships strong for decades.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-lg p-8"
              >
                <h3 className="font-heading text-xl text-charcoal-900 mb-3 font-normal">
                  {value.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 md:py-44 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal-900 mb-6 font-light">
            Ready to Work Together?
          </h2>
          <p className="text-charcoal-500 text-base mb-12 max-w-md mx-auto font-light">
            {company.yearsInBusiness} years of solving enterprise content
            challenges. Let us bring that experience to your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/25 px-10 py-4 hover:bg-copper-500/8 hover:border-copper-500/50 transition-all duration-700 group"
          >
            Get in Touch
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-500"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
