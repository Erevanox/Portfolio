import { lazy, Suspense } from 'react';
import useNearViewport from '../hooks/useNearViewport';

const Galaxy = lazy(() => import('./effects/Galaxy'));

const links = [
  { label: 'GitHub', href: 'https://github.com/Erevanox', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mukilan-v-b5b0b1432/', icon: 'IN' },
  { label: 'Email', href: 'mailto:26cs230@kpriet.ac.in', icon: '@' }
];

export default function Contact() {
  const { ref: sectionRef, shouldLoad } = useNearViewport();

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-90">
        {shouldLoad && (
          <Suspense fallback={null}>
            <Galaxy
              starColors={['#ffffff', '#d4d4d4', '#a3a3a3', '#737373']}
              saturation={0}
              glowIntensity={0.8}
              density={1.6}
              starSpeed={0.45}
              mouseInteraction={true}
              mouseRepulsion={true}
              repulsionStrength={2}
              clickWarp={true}
              intro={true}
              rotationSpeed={0.12}
              backgroundColor="#050505"
            />
          </Suspense>
        )}
      </div>

      <div className="noise-overlay" aria-hidden="true" />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl p-4 text-center sm:p-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">Contact</p>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Let&apos;s Connect</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
            I&apos;m open to collaborations, internships, and thoughtful conversations about design, development, and ideas worth building.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="contact-button text-base"
                aria-label={link.label}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-xs font-semibold text-neutral-200">
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <footer className="relative z-10 mt-10 text-center text-sm text-neutral-500">
          Copyright {new Date().getFullYear()} Mukilan V. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
