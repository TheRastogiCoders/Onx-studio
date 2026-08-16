import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

export default function WorkVideo({ src, className, poster }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '30% 0px' });

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, src]);

  if (!src) return <div className={className} />;

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
