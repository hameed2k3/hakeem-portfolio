import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when an element enters the viewport.
 * @param {Object} options - { rootMargin?: string, threshold?: number, triggerOnce?: boolean }
 * @returns [ref, isVisible]
 */
export function useInView(options = {}) {
  const { rootMargin = '0px 0px -60px 0px', threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce]);

  return [ref, isVisible];
}
