import { useRef, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { projects } from '../data/projects';
import './Work.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const DRAG_THRESHOLD_PX = 6;
/** Pixels per second when auto-scrolling (manual drag/wheel still override). */
const AUTO_SCROLL_PX_PER_SEC = 52;
/** Resume auto-scroll after this many ms without manual interaction. */
const AUTO_SCROLL_RESUME_MS = 4500;
/** Approximate flex gap + tolerance so we don't under-shoot the loop jump. */
const LOOP_WIDTH_FUDGE_PX = 2;

export default function Work() {
  const sectionRef = useRef(null);
  const orbitPathRef = useRef(null);
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

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      const headTl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
      });

      headTl
        .from('.work-head .section-label', {
          y: 22,
          opacity: 0,
          duration: 0.55,
          ease: 'power3.out',
        })
        .from(
          '.work-head .section-title',
          {
            y: 36,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.32',
        )
        .from(
          '.work-intro',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.45',
        )
        .from(
          '.work-view-all',
          {
            x: 20,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.45',
        );

      gsap.from('.work-track .work-card', {
        y: 56,
        opacity: 0,
        duration: 0.75,
        stagger: { each: 0.045, from: 'start' },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-track-wrap',
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.work-cta-wrap .btn-reel', {
        y: 24,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-cta-wrap',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      });

      requestAnimationFrame(() => {
        const pathEl = orbitPathRef.current;
        if (!pathEl) return;
        gsap.to('.work-orbit-dot', {
          motionPath: {
            path: pathEl,
            align: pathEl,
            alignOrigin: [0.5, 0.5],
          },
          duration: 18,
          repeat: -1,
          ease: 'none',
        });
      });
    }, root);

    const refreshId = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, []);

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
    <section id="work" ref={sectionRef} className="work">
      <div className="work-inner section">
        <div className="work-head">
          <div className="work-orbit" aria-hidden="true">
            <svg className="work-orbit-svg" viewBox="0 0 100 100" width="76" height="76">
              <path
                ref={orbitPathRef}
                className="work-orbit-path"
                d="M 50,14 a 36,36 0 1 1 -0.01,0"
                fill="none"
              />
            </svg>
            <span className="work-orbit-dot" />
          </div>
          <div className="section-head work-section-head">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Selected <span>Work</span>
            </h2>
            <p className="work-intro">
              Vertical edits, campaigns, and motion — hover a frame, open the full cut in a new
              page.
            </p>
          </div>
          <Link to="/work" className="work-view-all">
            View all
            <span className="work-view-all-arrow" aria-hidden="true">
              →
            </span>
          </Link>
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
              <article className="work-card-glass">
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
              </article>
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
