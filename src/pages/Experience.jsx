import Section from '../components/Section';
import AnimatedReveal from '../components/AnimatedReveal';

const jobs = [
  {
    id: 1,
    location: 'Dubai, UAE',
    badge: 'Present',
    title: 'EDP Assistant / Sales Support Coordinator',
    company: 'MH Enterprises',
    period: 'Oct 2021 – Present',
    icon: 'work',
    border: 'primary',
    points: [
      'Prepare and manage Local Purchase Orders (LPO) and sales receipts.',
      'Generate and post sales invoices ensuring accuracy and timely processing.',
      'Maintain stock and inventory reports and support monthly stock reconciliation.',
      'Support day-to-day sales operations and office administration.',
      'Maintain petty cash records and track expenses.',
      'Coordinate documentation, filing, and electronic records.',
      'Provide customer support and respond to business inquiries.',
      'Assist in improving workflow efficiency and document management.',
    ],
  },
  {
    id: 2,
    location: 'India',
    badge: null,
    title: 'Card Operations & Reconciliation Analyst',
    company: 'In-Solutions Global Pvt Ltd (Client: Indian Overseas Bank)',
    period: 'Jan 2018 – Mar 2021',
    icon: 'history',
    border: 'slate',
    points: [
      'Managed high-volume transaction reconciliation and settlements.',
      'Generated daily operational reports and supported business teams.',
      'Handled customer dispute cases and chargeback processing.',
      'Worked with multiple stakeholders to resolve transaction issues.',
      'Maintained accurate financial records and reports using SQL.',
      'Ensured smooth daily operations and documentation management.',
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-slate-900 dark:text-white">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          </div>
        </AnimatedReveal>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {jobs.map((job, index) => (
            <AnimatedReveal key={job.id} delay={index + 1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border bg-background-light dark:bg-background-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-300 group-hover:scale-110 ${
                    job.border === 'primary'
                      ? 'border-primary text-primary'
                      : 'border-slate-300 dark:border-slate-700 text-slate-500'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {job.icon}
                  </span>
                </div>
                <div
                  className={`w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-2xl glass-card shadow-xl border-l-4 hover:shadow-2xl transition-all duration-300 ${
                    job.border === 'primary'
                      ? 'border-primary'
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <time
                      className={`font-display font-bold ${
                        job.border === 'primary'
                          ? 'text-primary'
                          : 'text-slate-500'
                      }`}
                    >
                      {job.location}
                    </time>
                    {job.badge && (
                      <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded">
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{job.period}</p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {job.title}
                  </h3>
                  <h4 className="text-accent font-medium mb-4">{job.company}</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
