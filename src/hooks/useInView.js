import { useState, useEffect, useRef } from 'react';

/**
 * Returns a ref and boolean inView. Attach ref to an element; inView becomes true
 * when the element enters the viewport. Respects prefers-reduced-motion.
 */
export function useInView(options = {}) {
  const { rootMargin = '0px 0px -40px 0px', threshold = 0 } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, inView];
}
