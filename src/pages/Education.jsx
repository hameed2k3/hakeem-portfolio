import Section from '../components/Section';
import AnimatedReveal from '../components/AnimatedReveal';

export default function Education() {
  return (
    <Section id="education">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedReveal>
          <h2 className="font-display text-4xl text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-10" />
        </AnimatedReveal>
        <AnimatedReveal delay={1}>
          <div className="p-8 glass-card rounded-3xl border-t-4 border-primary text-left md:text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-primary font-semibold">Anna University – Chennai</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Mohamed Sathak A.J College of Engineering
            </p>
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={2}>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Nationality: Indian · Dubai, UAE · Visa Status: Available to Join Immediately
          </p>
        </AnimatedReveal>
      </div>
    </Section>
  );
}
