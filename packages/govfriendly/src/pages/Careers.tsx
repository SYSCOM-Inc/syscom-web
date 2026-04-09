import { Link } from 'react-router-dom';
import { company, careerInfo } from '@shared/data/company';

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-warm-cream to-warm-bg py-16 sm:py-20" aria-label="Careers hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Careers at SYSCOM
          </h1>
          <p className="mt-4 text-lg text-slate max-w-3xl leading-relaxed">
            Build enterprise software that matters. Join a team where senior engineers stay
            for decades, your work ships to production, and you solve real problems for
            government and enterprise clients.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white" aria-labelledby="culture-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                id="culture-heading"
                className="font-heading text-3xl font-bold text-navy"
              >
                Why SYSCOM
              </h2>
              <p className="mt-4 text-slate leading-relaxed">
                SYSCOM is not a revolving door. Our client relationships span decades,
                which means the people you work with are experienced, invested, and here for
                the long haul. We've been doing this for {company.yearsInBusiness} years
                because we hire well and treat people right.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                Based in Baltimore's Inner Harbor, we work on enterprise content management
                and automation for government agencies, financial institutions, and healthcare
                organizations. The problems are real, the scale is significant, and the
                impact is tangible.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-warm-cream rounded-warm p-4 text-center border border-warm-border">
                  <p className="font-heading text-2xl font-bold text-navy">
                    {company.yearsInBusiness}+
                  </p>
                  <p className="text-xs text-muted mt-1">Years in Business</p>
                </div>
                <div className="bg-warm-cream rounded-warm p-4 text-center border border-warm-border">
                  <p className="font-heading text-2xl font-bold text-navy">70%+</p>
                  <p className="text-xs text-muted mt-1">5+ Year Tenure</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-xl text-navy mb-5">
                What We Value
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Deep Expertise',
                    desc: 'We hire specialists who know their platforms inside and out, not generalists who skim the surface.',
                  },
                  {
                    title: 'Ownership',
                    desc: 'You own your work from design through deployment. No handing off to another team.',
                  },
                  {
                    title: 'Longevity',
                    desc: 'We build long-term client relationships and long-term careers. Both matter.',
                  },
                  {
                    title: 'Honesty',
                    desc: 'We tell clients what they need to hear, not what they want to hear. Same goes internally.',
                  },
                ].map((value) => (
                  <li key={value.title} className="flex items-start gap-3">
                    <span className="text-teal mt-0.5 shrink-0" aria-hidden="true">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-medium text-navy text-sm">{value.title}</p>
                      <p className="text-sm text-slate mt-0.5">{value.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-warm-cream" aria-labelledby="offer-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="offer-heading"
            className="font-heading text-3xl font-bold text-navy text-center mb-12"
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: '\u{1F3E2}',
                title: 'Stability',
                desc: '40+ years in business. We are not a startup that might not be here next year.',
              },
              {
                emoji: '\u{1F4C4}',
                title: 'Meaningful Work',
                desc: 'Build systems that process millions of documents for government agencies and financial institutions.',
              },
              {
                emoji: '\u{1F4CD}',
                title: 'Baltimore Location',
                desc: 'Downtown Inner Harbor office with easy access to transit. Flexible work arrangements available.',
              },
              {
                emoji: '\u{2705}',
                title: 'Benefits',
                desc: 'Competitive salary, health insurance, retirement plan, and professional development support.',
              },
              {
                emoji: '\u{1F680}',
                title: 'Growth',
                desc: 'Work with AI, cloud platforms, and enterprise technologies. Learn from people who have been doing this for decades.',
              },
              {
                emoji: '\u{1F465}',
                title: 'Team',
                desc: 'Small, focused teams where your contributions are visible and valued. No bureaucracy.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-warm p-6 border border-warm-border"
              >
                <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
                <h3 className="mt-3 font-heading font-semibold text-base text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Roles */}
      <section className="py-20 bg-white" aria-labelledby="skills-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2
                id="skills-heading"
                className="font-heading text-3xl font-bold text-navy mb-6"
              >
                Skills in Demand
              </h2>
              <div className="flex flex-wrap gap-2">
                {careerInfo.skillsInDemand.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block text-sm px-3 py-1.5 bg-warm-cream border border-warm-border rounded-full text-navy font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-navy mb-5">
                Role Categories
              </h3>
              <ul className="space-y-2">
                {careerInfo.roleCategories.map((role) => (
                  <li key={role} className="flex items-center gap-3">
                    <span className="text-teal shrink-0" aria-hidden="true">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-navy" aria-label="Apply call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Interested in Joining Us?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We are always looking for talented people with enterprise content management,
            automation, or AI experience. Explore open positions or send us your resume.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={company.careerPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              View Open Positions
            </a>
            <a
              href={`mailto:${company.email}?subject=Career%20Inquiry`}
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-colors"
            >
              Send Your Resume
            </a>
          </div>
          <p className="mt-6 text-xs text-white/40">
            SYSCOM, Inc. is an Equal Opportunity Employer.
          </p>
        </div>
      </section>
    </div>
  );
}
