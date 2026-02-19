import Section from '../components/Section';
import AnimatedReveal from '../components/AnimatedReveal';

export default function About() {
  return (
    <Section id="about" background="muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-6">
            <AnimatedReveal>
              <h2 className="font-display text-4xl mb-6 text-slate-900 dark:text-white">
                Expertise Built on <span className="text-primary">Reliability</span>
              </h2>
            </AnimatedReveal>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <AnimatedReveal delay={1}>
                <p>
                  Sales & Operations Coordinator with 4+ years of experience supporting business operations, 
                  sales documentation, stock management, invoicing, and customer coordination in UAE and India. 
                  Proven ability to manage purchase orders, prepare sales invoices, maintain stock reports, 
                  and support fast-paced office environments.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={2}>
                <p>
                  Strong Excel and SQL knowledge with excellent organizational and communication skills. 
                  Known for accuracy, multitasking, and supporting sales teams to improve operational efficiency. 
                  I specialize in LPO processing, sales documentation, and being a reliable bridge between 
                  sales teams, logistics, and customers.
                </p>
              </AnimatedReveal>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <AnimatedReveal variant="scale" delay={2}>
              <div className="p-8 glass-card rounded-3xl border-t-4 border-primary shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-4xl font-display text-primary mb-2">4+</h3>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-60 text-slate-600 dark:text-slate-400">
                  Years Combined Exp.
                </p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal variant="scale" delay={3}>
              <div className="p-8 glass-card rounded-3xl border-t-4 border-accent shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-4xl font-display text-accent mb-2">100%</h3>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-60 text-slate-600 dark:text-slate-400">
                  Focus on Accuracy
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
