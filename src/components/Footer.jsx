export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold text-slate-900 dark:text-white">
          HAKEEM <span className="text-primary">ABDUL LATHIF</span>
        </div>
        <div className="text-sm text-slate-500 text-center md:text-left">
          © {year} Hakeem Abdul Lathif. All rights reserved. Professional
          Portfolio.
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/hakeem-abdul-lathif"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/971523405509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
