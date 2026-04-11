import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { company, leadership, services, methodology, partnerships } from '@shared/data/company';

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

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-3">
              About {company.name}
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-3px] leading-tight mb-6">
              {company.yearsInBusiness}+ years solving enterprise{' '}
              <span className="gradient-text">content challenges.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Founded in {company.founded} in {company.address.city}, {company.address.state},
              SYSCOM has grown from a small consultancy into a recognized leader in enterprise
              content management, business process automation, and intelligent document solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Philosophy */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-6">
                  The right technology at the right time.
                </h2>
                <div className="rounded-xl bg-cyan/5 border border-cyan/20 p-5 mb-6">
                  <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-2">Our Mission</p>
                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{company.mission}&rdquo;
                  </p>
                </div>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    That philosophy has guided SYSCOM for over four decades. We know that the
                    newest, latest technology is not always the best solution &mdash; but it&apos;s
                    sometimes the only solution. And we know the difference.
                  </p>
                  <p>
                    We use proven platforms when they fit, configure and customize them to match
                    your workflows, and build our own when nothing on the market solves the problem.
                    Every solution we deploy is backed by engineers who understand it and support it long-term.
                  </p>
                  <p>
                    Our clients &mdash; in government, financial services, and healthcare &mdash;
                    trust us with their most critical document workflows because we&apos;ve earned
                    that trust over decades, one successful deployment at a time.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-card border border-border p-8 space-y-8">
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-2">
                    Headquarters
                  </div>
                  <p className="text-gray-700">
                    {company.address.street}<br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-2">
                    Founded
                  </div>
                  <p className="text-gray-700">{company.founded}</p>
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-2">
                    Focus Areas
                  </div>
                  <p className="text-gray-700">
                    {services.map(s => s.shortName).join(', ')}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-2">
                    Key Verticals
                  </div>
                  <p className="text-gray-700">
                    Government, Financial Services, Insurance, Healthcare, Transportation &amp; Logistics
                  </p>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-y border-border">
        <FadeSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-4">Our Mission</p>
          <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;{company.mission}&rdquo;
          </blockquote>
        </FadeSection>
      </section>

      {/* Leadership */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-purple mb-3">
              Leadership
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
              The team behind the technology
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              SYSCOM&apos;s leadership combines deep technical expertise with decades of
              client-facing experience in enterprise content management.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {leadership.map((member) => (
              <FadeSection key={member.name}>
                <div className="rounded-2xl bg-card border border-border p-6 text-center card-hover">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 border border-border flex items-center justify-center mx-auto mb-5">
                    <span className="font-heading font-bold text-2xl gradient-text">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base tracking-tight">{member.name}</h3>
                  <p className="text-sm text-cyan font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-muted leading-relaxed mb-3">{member.bio}</p>
                  {'education' in member && (member as any).education && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-[10px] font-heading font-bold uppercase tracking-[2px] text-muted mb-1.5">Education</p>
                      {((member as any).education as string[]).map((edu: string) => (
                        <p key={edu} className="text-[11px] text-muted/80 leading-relaxed">{edu}</p>
                      ))}
                    </div>
                  )}
                  {'awards' in member && (member as any).awards && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-[10px] font-heading font-bold uppercase tracking-[2px] text-muted mb-1.5">Recognition</p>
                      {((member as any).awards as string[]).map((award: string) => (
                        <p key={award} className="text-[11px] text-muted/80 leading-relaxed">{award}</p>
                      ))}
                    </div>
                  )}
                  {'certifications' in member && (member as any).certifications && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-[10px] font-heading font-bold uppercase tracking-[2px] text-muted mb-1.5">Certifications</p>
                      {((member as any).certifications as string[]).map((cert: string) => (
                        <p key={cert} className="text-[11px] text-muted/80 leading-relaxed">{cert}</p>
                      ))}
                    </div>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-emerald mb-3">
                  Our Approach
                </p>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-6">
                  {methodology.title}
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  {methodology.description}
                </p>
                <ul className="space-y-3">
                  {methodology.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />
                      <span className="text-sm text-muted leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6">
                <h3 className="text-xs font-heading font-bold uppercase tracking-[3px] text-muted mb-5">
                  Project Lifecycle
                </h3>
                <ol className="space-y-3">
                  {methodology.phases.map((phase, i) => (
                    <li key={phase} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 text-[10px] font-heading font-bold text-cyan">
                        {i + 1}
                      </span>
                      <span className="text-sm text-muted leading-relaxed pt-0.5">{phase}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-purple mb-3">
              Partnerships
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
              Strategic technology partnerships
            </h2>
          </FadeSection>

          <FadeSection>
            <div className="grid sm:grid-cols-2 gap-5">
              {partnerships.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-2xl bg-card border border-border p-6"
                >
                  <h3 className="font-heading font-bold text-lg tracking-tight mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
              Want to learn more?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8">
              See how SYSCOM&apos;s {company.yearsInBusiness}+ years of expertise can solve
              your enterprise content challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
