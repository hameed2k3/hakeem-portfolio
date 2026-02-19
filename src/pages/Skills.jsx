import Section from '../components/Section';
import AnimatedReveal from '../components/AnimatedReveal';

const coreSkills = [
  { icon: 'receipt_long', title: 'Sales Coordination', subtitle: 'End-to-End Cycle' },
  { icon: 'description', title: 'Sales Documentation & Reporting', subtitle: 'Invoicing & Billing' },
  { icon: 'support_agent', title: 'Customer Support & Coordination', subtitle: 'Business Inquiries' },
  { icon: 'inventory_2', title: 'Stock & Inventory Reporting', subtitle: 'LPO Processing' },
  { icon: 'payments', title: 'Petty Cash Handling', subtitle: 'Expense Tracking' },
  { icon: 'table_chart', title: 'Microsoft Excel', subtitle: 'Advanced Reporting' },
  { icon: 'mail', title: 'Email & Office Administration', subtitle: 'Document Management' },
  { icon: 'database', title: 'SQL & Database', subtitle: 'Oracle SQL, PL/SQL' },
  { icon: 'build', title: 'Problem Solving', subtitle: 'Multitasking' },
];

const techTools = [
  'Microsoft Excel (Advanced)',
  'Oracle SQL & PL/SQL',
  'SQL Developer / TOAD',
  'Windows & Office Tools',
];

export default function Skills() {
  return (
    <Section id="skills" background="muted">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-slate-900 dark:text-white">
              Core Skills & Technical Proficiency
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          </div>
        </AnimatedReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreSkills.map(({ icon, title, subtitle }, i) => (
            <AnimatedReveal key={title} delay={Math.min(i + 1, 6)}>
              <div className="p-8 glass-card rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300 text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform block">
                  {icon}
                </span>
                <h3 className="font-bold mb-2 text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  {subtitle}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal delay={2}>
          <div className="text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
              Technical Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techTools.map((tool, i) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
