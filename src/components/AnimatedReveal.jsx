import { useInView } from '../hooks/useInView';

export default function AnimatedReveal({
  children,
  className = '',
  variant = 'reveal',
  delay = 0,
}) {
  const [ref, isVisible] = useInView({ triggerOnce: true });
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  const baseClass = variant === 'scale' ? 'reveal-scale' : 'reveal';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
