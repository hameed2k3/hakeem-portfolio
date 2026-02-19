import Button from '../components/Button';
import AnimatedReveal from '../components/AnimatedReveal';

const highlights = [
  { icon: 'public', label: 'UAE Experience' },
  { icon: 'description', label: 'Sales Documentation' },
  { icon: 'bar_chart', label: 'Excel Reporting' },
  { icon: 'groups', label: 'Customer Coordination' },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] hero-blob hero-blob-slow" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] hero-blob hero-blob-slower" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <AnimatedReveal delay={1}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
              Dubai, UAE · Available to Join Immediately
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={2}>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-slate-900 dark:text-white">
              Sales & Operations <br />
              <span className="text-primary italic">
                Coordinator
              </span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={3}>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              4+ years supporting business operations, sales documentation, LPO processing, 
              invoicing, and customer coordination in UAE and India. Strong Excel & SQL skills 
              with a focus on accuracy and operational efficiency.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={4}>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" variant="primary">
                Get in Touch
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
              {highlights.map(({ icon, label }, i) => (
                <div key={label} className="flex flex-col gap-2 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal variant="scale" delay={3}>
          <div className="relative group">
            <div className="absolute -inset-4 border border-accent/20 rounded-[40px] pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="absolute -inset-1 border-2 border-accent/10 rounded-[36px] pointer-events-none" />
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-accent bg-slate-100 dark:bg-slate-800 group-hover:shadow-primary/20 transition-shadow duration-500">
              <img
                alt="Hakeem Abdul Lathif Portrait"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDV2a5R9bRIbipE-3sKPWx2CxNkGn926ePsIqOVS1ShvNQqe7j8_Pq_-C7A9pL5C9IAl4WnDHw0zMaKzKY4W-sLRXfWrjfoFk7YLL3WD8Dd9lyXBGlIStDMJ30QBl_qoWqUDVDIxr_4YqOzCYt5plcwkkxlK0bXzLhbDAO9CrI7keOXlT_RyG_DXARd38_JT3RFJ0Bh_gtt4n5YtRJOaA1g6D4c5nUmOCS5G2RlyBTIO-ccdu_cL2F7dzVe9OrmS2rq0msUeRESw"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-40 h-40 border-t-2 border-r-2 border-accent/30 rounded-tr-[48px] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border-b-2 border-l-2 border-accent/30 rounded-bl-[48px] -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -bottom-4 right-8 z-20 bg-background-dark dark:bg-white text-white dark:text-background-dark px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
              <span className="text-3xl font-display font-bold text-accent">
                4+
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">
                Years
                <br />
                Experience
              </span>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
