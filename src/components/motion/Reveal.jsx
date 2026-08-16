import { useRef } from 'react';
import { motion as Motion, useInView } from 'motion/react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  as = 'div',
  once = true,
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-12% 0px' });
  const reduced = usePrefersReducedMotion();
  const Tag = Motion[as] || Motion.div;

  if (reduced) {
    const ReducedTag = as === 'div' ? 'div' : as;
    return (
      <ReducedTag ref={ref} className={className} {...rest}>
        {children}
      </ReducedTag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
