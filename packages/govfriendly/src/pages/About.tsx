import { Link } from 'react-router-dom';
import { company, leadership, stats, methodology, partnerships } from '@shared/data/company';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-20" aria-label="About hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            About SYSCOM, Inc.
          </h1>
          <p className="mt-4 text-lg text-slate max-w-3xl leading-relaxed">
            Since {company.founded}, SYSCOM has been solving enterprise content management
            challenges for organizations that can't afford to get it wrong. We build proven
            solutions, own our intellectual property, and stand behind every deployment.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                id="mission-heading"
                className="font-heading text-3xl font-bold text-navy"
              >
                Our Philosophy
              </h2>
              <div className="mt-6 border-l-4 border-teal pl-6 py-3 bg-warm-light rounded-r-warm">
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-teal mb-1">Our Mission</p>
                <blockquote className="text-lg text-navy font-heading font-semibold italic leading-relaxed">
                  &ldquo;{company.mission}&rdquo;
                </blockquote>
              </div>
              <div className="mt-4 border-l-4 border-gold pl-6 py-2 bg-warm-light rounded-r-warm">
                <blockquote className="text-base text-navy/80 italic leading-relaxed">
                  &ldquo;{company.tagline}&rdquo;
                </blockquote>
              </div>
              <p className="mt-6 text-slate leading-relaxed">
                We know that the newest technology is not always the best solution, but it's
                sometimes the only solution. We know the difference. That's the judgment that
                comes from {company.yearsInBusiness} years of hands-on enterprise deployments.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                SYSCOM is not a body shop. We build and own our products, develop deep
                expertise in every platform we support, and maintain long-term relationships
                with our clients. Many of our client relationships span decades — the
                people who know your systems stay with us.
              </p>
            </div>

            <div className="bg-warm-cream rounded-warm p-8 border border-warm-border">
              <h3 className="font-heading font-semibold text-xl text-navy mb-5">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {[
                  `${company.yearsInBusiness}+ years of continuous operation in ECM`,
                  'Proprietary migration technology (AnySource Migrator)',
                  'Deep IBM ecosystem expertise (CM8, FileNet, BAW)',
                  'We build and own our intellectual property',
                  'AI-forward strategy led by a dedicated CTO',
                  '30+ year Tungsten Automation (Kofax) partnership',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-teal mt-0.5 shrink-0" aria-hidden="true">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-cream" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="font-heading text-3xl font-bold text-navy text-center mb-12"
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '\u{1F91D}',
                title: 'Reliability',
                description:
                  'Our clients depend on us for mission-critical systems. We deliver on time, every time, and we stand behind our work with long-term support.',
              },
              {
                emoji: '\u{1F4AC}',
                title: 'Integrity',
                description:
                  'We give honest assessments, recommend the right solution (not the most expensive one), and maintain transparency throughout every engagement.',
              },
              {
                emoji: '\u{1F3AF}',
                title: 'Expertise',
                description:
                  'Every team member is a specialist, not a generalist. Our deep platform knowledge means faster deployments, fewer surprises, and better outcomes.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-warm p-6 border border-warm-border"
              >
                <span className="text-2xl" aria-hidden="true">{value.emoji}</span>
                <h3 className="mt-3 font-heading font-semibold text-lg text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="leadership-heading"
            className="font-heading text-3xl font-bold text-navy text-center mb-12"
          >
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="text-center bg-warm-light rounded-warm p-8 border border-warm-border"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy text-white font-heading font-bold text-xl mb-4">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-heading font-bold text-xl text-navy">
                  {leader.name}
                </h3>
                <p className="text-teal font-medium text-sm mt-1">
                  {leader.title}
                </p>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {leader.bio}
                </p>
                {leader.education && leader.education.length > 0 && (
                  <div className="mt-4 text-left">
                    <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-1">Education</p>
                    <ul className="space-y-0.5">
                      {leader.education.map((edu) => (
                        <li key={edu} className="text-xs text-slate">{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {leader.certifications && leader.certifications.length > 0 && (
                  <div className="mt-3 text-left">
                    <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-1">Certifications</p>
                    <ul className="space-y-0.5">
                      {leader.certifications.map((cert) => (
                        <li key={cert} className="text-xs text-slate">{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {leader.awards && leader.awards.length > 0 && (
                  <div className="mt-3 text-left">
                    <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-1">Recognition</p>
                    <ul className="space-y-0.5">
                      {leader.awards.map((award) => (
                        <li key={award} className="text-xs text-slate">{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-warm-cream" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="approach-heading"
            className="font-heading text-3xl font-bold text-navy text-center mb-4"
          >
            {methodology.title}
          </h2>
          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12">
            {methodology.description}
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-warm p-8 border border-warm-border">
            <h3 className="font-heading font-semibold text-lg text-navy mb-5">
              Methodology Highlights
            </h3>
            <ul className="space-y-4">
              {methodology.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-teal mt-0.5 shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Partnerships */}
      <section className="py-20 bg-white" aria-labelledby="partnerships-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="partnerships-heading"
            className="font-heading text-3xl font-bold text-navy text-center mb-12"
          >
            Technology Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {partnerships.map((partner) => (
              <div
                key={partner.name}
                className="bg-warm-light rounded-warm p-6 border border-warm-border"
              >
                <h3 className="font-heading font-bold text-xl text-navy">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="py-2">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" aria-label="Call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy">
            Ready to Work with Us?
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Let us show you what {company.yearsInBusiness} years of enterprise content
            management expertise can do for your organization.
          </p>
          <Link to="/contact" className="mt-8 btn-primary inline-flex">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
