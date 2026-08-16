import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'motion/react';

function shouldShowPreloader() {
  try {
    if (sessionStorage.getItem('onx-preloaded')) return false;
  } catch {
    return false;
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    try {
      sessionStorage.setItem('onx-preloaded', '1');
    } catch {
      /* ignore */
    }
    return false;
  }
  return true;
}

export default function Preloader() {
  const [visible, setVisible] = useState(shouldShowPreloader);

  useEffect(() => {
    if (!visible) return undefined;
    const timer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem('onx-preloaded', '1');
      } catch {
        /* ignore */
      }
    }, 1700);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Motion.p
            className="preloader-mark"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            ON<span>X</span>
          </Motion.p>
          <div className="preloader-bar">
            <div className="preloader-bar-fill" />
          </div>
          <p className="preloader-caption">Studio loading</p>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
