import { useEffect, useRef, useState } from 'react';

/**
 * Hook that triggers when element enters viewport. Use for scroll-based animations.
 * @param {Object} options - { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.12, rootMargin = '0px 0px -80px 0px' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
