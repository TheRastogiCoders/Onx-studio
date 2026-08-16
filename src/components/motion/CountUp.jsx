import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

export default function CountUp({ end, suffix = '', duration = 1.6, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(reduced ? end : 0);

  useEffect(() => {
    if (!inView || reduced) return undefined;

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {reduced ? end : value}
      {suffix}
    </span>
  );
}
