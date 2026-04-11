import { useEffect, useRef } from 'react';
import { company, careerInfo } from '@shared/data/company';

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

const cultureCards = [
  {
    emoji: '\u{1F465}',
    title: 'Decades-Long Clients',
    desc: 'Our client relationships span decades — a testament to the depth of our partnerships.',
  },
  {
    emoji: '\u{1F4CD}',
    title: 'Baltimore, MD',
    desc: 'Inner Harbor headquarters. Hybrid and flexible work arrangements available.',
  },
  {
    emoji: '\u{1F9E0}',
    title: 'Real Technology',
    desc: 'Work with AI, enterprise platforms, and proprietary products — not just staff augmentation.',
  },
  {
    emoji: '\u{1F6E1}\uFE0F',
    title: 'Stable & Growing',
    desc: `${new Date().getFullYear() - 1982}+ years in business. Government and financial services clients with long-term contracts.`,
  },
];

const skills = [
  {
    title: 'Enterprise Content Expertise',
    desc: 'Experience with IBM FileNet, CM8, Content Navigator, Documentum, SharePoint, or similar ECM platforms.',
  },
  {
    title: 'Automation & Integration',
    desc: 'Skills in workflow engines, RPA, API development, and connecting disparate enterprise systems.',
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Computer vision, NLP, document classification, or experience applying AI to real business problems.',
  },
  {
    title: 'Software Engineering',
    desc: 'Strong fundamentals in Java, Python, TypeScript, or C#. Experience building production systems.',
  },
  {
    title: 'Client-Facing Skills',
    desc: 'Ability to communicate technical solutions to IT leaders in government and financial services.',
  },
  {
    title: 'Curiosity & Ownership',
    desc: 'Willingness to learn new domains, take ownership of outcomes, and see projects through to completion.',
  },
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-emerald mb-3">
              Careers
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-3px] leading-tight mb-6">
              Build the future{' '}
              <span className="gradient-text">with us.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              SYSCOM is a place where engineers build products they own, solve problems
              that matter, and work with technology that&apos;s actually interesting.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-6">
                  Why people stay at SYSCOM
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Over 70% of our team has been with SYSCOM for five years or more. In an
                    industry known for high turnover, that number speaks for itself.
                  </p>
                  <p>
                    We&apos;re a small, focused company where every engineer works directly on
                    products and client solutions. There are no layers of bureaucracy between
                    you and the work. If you build something here, you&apos;ll see it deployed,
                    used, and supported.
                  </p>
                  <p>
                    Based in Baltimore&apos;s Inner Harbor, SYSCOM offers the stability of a
                    {' '}{company.yearsInBusiness}+ year track record with the technical ambition
                    of a company investing heavily in AI, cloud, and modern automation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cultureCards.map((item) => (
                  <div key={item.title} className="rounded-xl bg-card border border-border p-5">
                    <span className="text-2xl block mb-3">{item.emoji}</span>
                    <h3 className="font-heading font-bold text-sm text-gray-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-purple mb-3">
                What We Look For
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
                Skills that matter here
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                We hire problem solvers who care about craft. If you&apos;re motivated by
                building things that work and last, you&apos;ll fit in.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-6">
                  <h3 className="font-heading font-bold text-sm text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Skills in Demand & Roles */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-cyan mb-3">
                  Technologies in Demand
                </p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-[-2px] mb-6">
                  Skills we&apos;re hiring for
                </h2>
                <div className="flex flex-wrap gap-2">
                  {careerInfo.skillsInDemand.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-mono bg-cyan/5 text-cyan/80 border border-cyan/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-[3px] text-emerald mb-3">
                  Role Categories
                </p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-[-2px] mb-6">
                  Positions we hire for
                </h2>
                <ul className="space-y-3">
                  {careerInfo.roleCategories.map((role) => (
                    <li key={role} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                      <span className="text-sm text-muted">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <FadeSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-[-2px] mb-4">
              Interested in joining SYSCOM?
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8">
              We&apos;re always looking for talented engineers and consultants. Check our
              open positions or send us your resume directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a
                href={company.careerPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
                style={{ color: '#ffffff' }}
              >
                View Open Positions &rarr;
              </a>
              <a
                href={`mailto:${company.email}?subject=Career Inquiry`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-gray-600 border border-border hover:bg-gray-50 transition-colors"
              >
                Email Your Resume
              </a>
            </div>
            <p className="text-xs text-muted/60">
              Or send your resume directly to {company.email}
            </p>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
