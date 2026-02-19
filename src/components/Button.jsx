export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  href,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20',
    outline:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    accent:
      'bg-accent text-slate-900 hover:bg-white uppercase tracking-widest text-sm',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
