import { useEffect, useRef, useState } from 'react';
import GlareHover from './effects/GlareHover';
import hackzen from '../../Assets/Hackzen 2026.png';
import nasa from '../../Assets/NASA SPACE APP.png';
import githubAdvanced from '../../Assets/Github Advanced.png';
import github from '../../Assets/Github.png';
import be10x from '../../Assets/Certificate_page-0001.jpg';
import webVision from '../../Assets/Web Vision.png';

const certificates = [
  { title: 'Hackathon Club Certificate of Excellence', label: '1st Place', image: hackzen },
  { title: 'NASA Space Apps Challenge', label: 'Galactic Problem Solver', image: nasa },
  { title: 'Advanced Git Workflows', label: 'GitHub certificate', image: githubAdvanced },
  { title: 'Git Fundamentals', label: 'Version control basics', image: github },
  { title: 'be10x AI Tools Workshop', label: 'AI productivity', image: be10x },
  { title: 'IEEE Certificate of Participation', label: 'Web Vision', image: webVision }
];

const STEP = 360 / certificates.length;

export default function Achievements() {
  const [rotation, setRotation] = useState(0);
  const pointerStart = useRef(null);
  const activeIndex = ((Math.round(-rotation / STEP) % certificates.length) + certificates.length) % certificates.length;

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setRotation((current) => current - STEP);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => setRotation((current) => current + STEP);
  const showNext = () => setRotation((current) => current - STEP);

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  return (
    <section id="achievements" className="relative overflow-hidden bg-[#050505] py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">Achievements</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Milestones that keep me moving forward.</h2>
        </div>

        <div
          className="carousel-scene"
          role="region"
          aria-roledescription="carousel"
          aria-label="Certificates and achievements"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              showPrevious();
            } else if (event.key === 'ArrowRight') {
              event.preventDefault();
              showNext();
            }
          }}
          onPointerDown={(event) => {
            pointerStart.current = event.clientX;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStart.current = null;
          }}
        >
          <div className="carousel-ring" style={{ '--rotation': `${rotation}deg` }}>
            {certificates.map((certificate, index) => (
              <div
                key={certificate.title}
                className="carousel-slide"
                style={{ '--angle': `${index * STEP}deg` }}
                aria-hidden={activeIndex !== index}
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderColor="transparent"
                  borderRadius="1rem"
                  mode="hover"
                  glareColor="#ffffff"
                  glareOpacity={0.45}
                  className="h-full"
                >
                  <article className="flex h-full flex-col">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      loading="lazy"
                      draggable="false"
                    />
                    <div className="flex flex-1 flex-col justify-center px-4 py-3 text-center">
                      <h3 className="text-sm font-semibold text-white">{certificate.title}</h3>
                      <p className="mt-1 text-xs text-neutral-400">{certificate.label}</p>
                    </div>
                  </article>
                </GlareHover>
              </div>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {certificates[activeIndex].title}
        </p>
      </div>
    </section>
  );
}
