import { lazy, Suspense } from 'react';
import useNearViewport from '../hooks/useNearViewport';

const Lightfall = lazy(() => import('./effects/Lightfall'));

const projects = [
  {
    title: 'TraceX',
    badge: '1st Prize Hackzen',
    description:
      'TraceX is a log analysis and correlation dashboard built to surface suspicious and critical events quickly. It helps teams identify anomalies under pressure, making incident review more efficient and actionable.',
    stack: ['Python', 'NLP', 'Analytics', 'Hackathon']
  },
  {
    title: 'Cosmic Horizon',
    badge: 'International Hackathon',
    description:
      'Cosmic Horizon is an interactive 3D storytelling website for the NASA Space Apps Challenge 2026, designed to help users explore lunar and Martian satellite data in a more immersive, engaging way.',
    stack: ['React', '3D Web', 'Space Tech', 'UI/UX']
  }
];

export default function Projects() {
  const { ref: sectionRef, shouldLoad } = useNearViewport();

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-80">
        {shouldLoad && (
          <Suspense fallback={null}>
            <Lightfall
              colors={['#f5f5f5', '#a3a3a3', '#737373']}
              backgroundColor="#050505"
              opacity={0.42}
              speed={0.32}
              glow={0.65}
              density={0.55}
              twinkle={0.25}
              mouseInteraction={true}
              mouseStrength={0.65}
              holdToWarp={true}
              intro={true}
            />
          </Suspense>
        )}
      </div>

      <div className="noise-overlay" aria-hidden="true" />

      <div className="section-shell relative">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">Projects</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ideas that turn curiosity into real impact.</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="text-left">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3 border-b border-neutral-800 pb-4">
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <span className="meta-badge text-xs font-medium uppercase tracking-[0.12em] text-neutral-300">
                  {project.badge}
                </span>
              </div>

              <p className="max-w-xl text-base leading-7 text-neutral-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item) => (
                  <span key={item} className="tech-tag text-xs uppercase tracking-[0.08em] text-neutral-400">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
