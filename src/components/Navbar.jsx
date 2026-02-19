import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDark((d) => !d);
  };

  return (
    <nav className="fixed w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
        >
          HAKEEM <span className="text-primary">ABDUL LATHIF</span>
        </a>

        <div className="hidden md:flex items-center space-x-8 font-medium text-sm uppercase tracking-widest">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={toggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="material-symbols-outlined block dark:hidden">
              dark_mode
            </span>
            <span className="material-symbols-outlined hidden dark:block">
              light_mode
            </span>
          </button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark px-6 py-4 space-y-3">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block py-2 text-sm uppercase tracking-widest hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="py-2 text-sm uppercase tracking-widest"
            onClick={toggleDark}
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      )}
    </nav>
  );
}
