import { ArrowRight, ExternalLink } from 'lucide-react';
import { company, careerInfo } from '@shared/data/company';

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4 animate-fade-in">
            Careers at SYSCOM
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal-900 animate-slide-up font-light">
            Join Us
          </h1>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-charcoal-600 text-base md:text-lg leading-relaxed font-light">
            <p>
              SYSCOM is not a revolving door. Over 70% of our team has been here
              for five years or more -- not because they are comfortable, but
              because the work is challenging, the people are exceptional, and the
              company gives them room to grow.
            </p>
            <p>
              We are a Baltimore-based firm with over {company.yearsInBusiness}{' '}
              years of history. Our size means you will have real ownership over
              your work. Our longevity means you will have the stability to build
              a career, not just fill a role.
            </p>
            <p>
              We work on hard problems -- migrating millions of documents,
              automating complex business processes, bringing AI to enterprise
              content management. If that sounds interesting, we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 font-light">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Meaningful Work',
                text: 'Enterprise-scale projects for government agencies, financial institutions, and healthcare organizations. Your work matters.',
              },
              {
                title: 'Technical Depth',
                text: 'IBM ecosystem, cloud platforms, AI, and our own proprietary products. You will work with technology that challenges you.',
              },
              {
                title: 'Stability',
                text: 'Over four decades of continuous operation. We are privately held, profitable, and growing. No layoff cycles.',
              },
              {
                title: 'Growth',
                text: 'Small enough to know everyone. Large enough to offer real career progression. We promote from within whenever possible.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-lg p-8">
                <h3 className="font-heading text-xl text-charcoal-900 mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Categories */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              Opportunities
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 font-light">
              Roles We Hire
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {careerInfo.roleCategories.map((role) => (
              <div
                key={role}
                className="glass-card rounded-lg px-6 py-5 text-center"
              >
                <p className="text-charcoal-700 text-sm font-light">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills in Demand */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
              What We Work With
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 font-light">
              Skills in Demand
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {careerInfo.skillsInDemand.map((skill) => (
              <span
                key={skill}
                className="text-[10px] uppercase tracking-wider px-4 py-2 rounded-full bg-copper-500/8 border border-copper-500/15 text-copper-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal-900 mb-4 font-light">
            Interested?
          </h2>
          <p className="text-charcoal-500 text-base mb-12 max-w-md mx-auto font-light">
            Explore our current openings or send us your resume.
            We read every application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={company.careerPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-copper-600 border border-copper-500/25 px-10 py-4 hover:bg-copper-500/8 hover:border-copper-500/50 transition-all duration-700 group"
            >
              View Open Positions
              <ExternalLink
                size={14}
                className="group-hover:translate-x-0.5 transition-transform duration-500"
              />
            </a>
            <a
              href={`mailto:${company.email}?subject=Career%20Inquiry`}
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-charcoal-500 hover:text-charcoal-900 transition-colors duration-500 group"
            >
              Or email us directly
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-500"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
