import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) {
      ring.classList.add('is-hidden');
      return undefined;
    }

    ring.classList.remove('is-hidden');

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let frame;

    const onMove = (event) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    const onOver = (event) => {
      const interactive = event.target.closest('a, button, input, textarea, select, [data-cursor]');
      ring.classList.toggle('is-hover', Boolean(interactive));
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring is-hidden" aria-hidden="true" />;
}
