import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'motion/react';
import { ArrowDownRight, Play } from 'lucide-react';
import { projects } from '../data/projects';
import Magnetic from './motion/Magnetic';
import WorkVideo from './WorkVideo';
import './Hero.css';

const EASE = [0.22, 1, 0.36, 1];
const FLOATS = projects.slice(0, 3);

function formatTimecode(ms) {
  const totalFrames = Math.floor(ms / (1000 / 24));
  const frames = totalFrames % 24;
  const totalSeconds = Math.floor(totalFrames / 24);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);
  const pad = (n, size = 2) => String(n).padStart(size, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
}

export default function Hero() {
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [bootDelay] = useState(() => {
    try {
      return sessionStorage.getItem('onx-preloaded') ? 0 : 1.45;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    const start = Date.now();
    const id = window.setInterval(() => {
      setTimecode(formatTimecode(Date.now() - start));
    }, 42);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="hero" className="hero" aria-label="ONX Studio">
      <div className="hero-backdrop" aria-hidden="true">
        <video
          className="hero-bg-video"
          src={projects[0].videoUrl}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
        <div className="hero-scrim" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <Motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: bootDelay + 0.15, ease: EASE }}
          >
            <span className="hero-rec">
              <i /> Rec
            </span>
            <span className="hero-tc">{timecode}</span>
            <span className="hero-loc">Post · IST</span>
          </Motion.div>

          <h1 className="hero-title">
            <Motion.span
              className="hero-kicker"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: bootDelay + 0.22, ease: EASE }}
            >
              Cut. Grade. Move.
            </Motion.span>
            <span className="hero-display" aria-label="ONX Studio">
              <span className="hero-word">
                {'ONX'.split('').map((letter, i) => (
                  <Motion.span
                    key={`onx-${letter}-${i}`}
                    className="hero-letter hero-letter-accent"
                    initial={{ opacity: 0, y: 70, rotateX: 18 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.85, delay: bootDelay + 0.28 + i * 0.07, ease: EASE }}
                  >
                    {letter}
                  </Motion.span>
                ))}
              </span>
              <span className="hero-word">
                {'STUDIO'.split('').map((letter, i) => (
                  <Motion.span
                    key={`studio-${letter}-${i}`}
                    className="hero-letter"
                    initial={{ opacity: 0, y: 70, rotateX: 18 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.85, delay: bootDelay + 0.5 + i * 0.05, ease: EASE }}
                  >
                    {letter}
                  </Motion.span>
                ))}
              </span>
            </span>
          </h1>

          <Motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: bootDelay + 0.85, ease: EASE }}
          >
            Premium editing, color grading, and motion design for brands and
            creators who want every frame to feel inevitable.
          </Motion.p>

          <Motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: bootDelay + 1, ease: EASE }}
          >
            <Magnetic>
              <Link to="/#work" className="hero-btn hero-btn-primary">
                <Play size={15} strokeWidth={2.2} aria-hidden="true" />
                View work
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/#contact" className="hero-btn hero-btn-ghost">
                Start a project
                <ArrowDownRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            </Magnetic>
          </Motion.div>

          <Motion.ul
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: bootDelay + 1.15 }}
          >
            <li><strong>200+</strong> projects</li>
            <li><strong>24h</strong> reply</li>
            <li><strong>Global</strong> clients</li>
          </Motion.ul>
        </div>

        <Motion.div
          className="hero-stage"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: bootDelay + 0.55, ease: EASE }}
          aria-hidden="true"
        >
          {FLOATS.map((project, i) => (
            <div key={project.id} className={`hero-float hero-float-${i + 1}`}>
              <WorkVideo src={project.videoUrl} className="hero-float-video" />
              <span className="hero-float-tag">{project.category}</span>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
