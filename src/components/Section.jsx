export default function Section({
  id,
  children,
  className = '',
  background = 'default',
}) {
  const bgClass =
    background === 'muted'
      ? 'bg-slate-50 dark:bg-slate-900/50'
      : '';

  return (
    <section
      id={id}
      className={`py-24 ${bgClass} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
