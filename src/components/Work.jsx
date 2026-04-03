import { useRef, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Work.css';

const DRAG_THRESHOLD_PX = 6;
/** Pixels per second when auto-scrolling (manual drag/wheel still override). */
const AUTO_SCROLL_PX_PER_SEC = 52;
/** Resume auto-scroll after this many ms without manual interaction. */
const AUTO_SCROLL_RESUME_MS = 4500;
/** Approximate flex gap + tolerance so we don't under-shoot the loop jump. */
const LOOP_WIDTH_FUDGE_PX = 2;

export default function Work() {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const loopWidthRef = useRef(0);
  const lastTsRef = useRef(0);
  const resumeAutoAtRef = useRef(0);
  const prefersReducedMotionRef = useRef(false);
  const rafRef = useRef(0);

  const dragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startScroll: 0,
    dragged: false,
  });
  const suppressCardClickRef = useRef(false);

  const workItems = useMemo(
    () =>
      [...projects, ...projects].map((project, index) => ({
        ...project,
        loopKey: `${project.id}-${index}`,
      })),
    [],
  );

  const measureLoopWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('.work-card');
    if (cards.length < projects.length * 2) return;
    const a = cards[0];
    const b = cards[projects.length];
    loopWidthRef.current = Math.max(0, b.offsetLeft - a.offsetLeft + LOOP_WIDTH_FUDGE_PX);
  }, []);

  const bumpUserInteraction = useCallback(() => {
    resumeAutoAtRef.current = performance.now() + AUTO_SCROLL_RESUME_MS;
    lastTsRef.current = 0;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setPrm = () => {
      prefersReducedMotionRef.current = mq.matches;
    };
    setPrm();
    mq.addEventListener('change', setPrm);
    return () => mq.removeEventListener('change', setPrm);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    measureLoopWidth();
    const ro = new ResizeObserver(() => measureLoopWidth());
    ro.observe(track);
    return () => ro.disconnect();
  }, [measureLoopWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = () => bumpUserInteraction();
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') bumpUserInteraction();
    };
    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('keydown', onKeyDown);

    const tick = (ts) => {
      rafRef.current = requestAnimationFrame(tick);
      const wrap = scrollRef.current;
      if (!wrap) return;

      const prm = prefersReducedMotionRef.current;
      const loopW = loopWidthRef.current;
      if (prm || loopW <= 0) return;
      if (performance.now() < resumeAutoAtRef.current) return;

      const prev = lastTsRef.current;
      lastTsRef.current = ts;
      if (!prev) return;

      const dt = Math.min(0.05, (ts - prev) / 1000);
      let next = wrap.scrollLeft + AUTO_SCROLL_PX_PER_SEC * dt;

      if (next >= loopW) next -= loopW;
      wrap.scrollLeft = next;
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('keydown', onKeyDown);
    };
  }, [bumpUserInteraction]);

  const onWorkPointerDown = (e) => {
    bumpUserInteraction();
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      dragged: false,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onWorkPointerMove = (e) => {
    const d = dragRef.current;
    if (!d.active || e.pointerId !== d.pointerId) return;
    const dx = e.clientX - d.startX;
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(dx) > DRAG_THRESHOLD_PX) d.dragged = true;
    el.scrollLeft = d.startScroll - dx;
  };

  const endWorkDrag = (e) => {
    const d = dragRef.current;
    if (!d.active || (e && e.pointerId !== d.pointerId)) return;
    const el = scrollRef.current;
    try {
      el?.releasePointerCapture(d.pointerId);
    } catch {
      /* ignore */
    }
    if (d.dragged) suppressCardClickRef.current = true;
    d.active = false;
    d.pointerId = null;
    d.dragged = false;
  };

  const onCardClick = (e) => {
    if (suppressCardClickRef.current) {
      e.preventDefault();
      suppressCardClickRef.current = false;
    }
  };

  return (
    <section id="work" className="work">
      <div className="work-inner section">
        <div className="work-head">
          <div className="section-head">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Selected <span>Work</span>
            </h2>
          </div>
        </div>
      </div>

      <div
        className="work-track-wrap"
        ref={scrollRef}
        role="region"
        aria-label="Selected work — scroll horizontally"
        tabIndex={0}
        onPointerDown={onWorkPointerDown}
        onPointerMove={onWorkPointerMove}
        onPointerUp={endWorkDrag}
        onPointerCancel={endWorkDrag}
      >
        <div className="work-track-fade work-track-fade-left" aria-hidden="true" />
        <div className="work-track-fade work-track-fade-right" aria-hidden="true" />
        <div className="work-track" ref={trackRef}>
          {workItems.map((project, index) => (
            <Link
              key={project.loopKey}
              to={`/work/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card work-card-button"
              aria-label={`Open project page in new tab: ${project.title}`}
              aria-hidden={index >= projects.length ? true : undefined}
              tabIndex={index >= projects.length ? -1 : undefined}
              onClick={onCardClick}
            >
              <div className="work-card-glass">
                <div className="work-card-media">
                  {project.videoUrl ? (
                    <video
                      className="work-card-video"
                      src={project.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-hidden="true"
                      onEnded={(ev) => {
                        const v = ev.currentTarget;
                        v.currentTime = 0;
                        v.play().catch(() => {});
                      }}
                    />
                  ) : (
                    <div className="work-card-placeholder" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="work-cta-wrap section">
        <div className="work-cta">
          <a href="#contact" className="btn btn-reel">See Full Reel</a>
        </div>
      </div>
    </section>
  );
}
