import { useRef } from 'react';
import { motion as Motion, useMotionValue, useSpring } from 'motion/react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

export default function Magnetic({ children, className, strength = 0.32 }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 240, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 240, damping: 18, mass: 0.4 });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Motion.div>
  );
}
