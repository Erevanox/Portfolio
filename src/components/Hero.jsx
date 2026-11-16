import PatternWaves from './effects/PatternWaves';
import profileImage from '../../Assets/Professional.png';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0">
        <PatternWaves
          preset="silk"
          color="#f8fafc"
          backgroundColor="#050505"
          opacity={0.3}
          fade="edges"
          fadeSize={220}
          interactive={true}
          cursorSize={56}
          cursorStrength={0.8}
          intro={true}
          paused={false}
          className="h-full w-full"
        />
      </div>
      <div className="noise-overlay" aria-hidden="true" />

      <div className="section-shell relative flex min-h-screen items-center justify-center py-28">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              First-year CSE student at KPRIET
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-7xl">
              Mukilan V
            </h1>
            <p className="mt-5 max-w-xl text-xl text-slate-200 md:text-2xl">
              Eager to learn, build, and ship websites that turn curiosity into memorable digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-white">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-neutral-600 bg-neutral-950/70 px-6 py-3 text-sm font-semibold text-white hover:border-neutral-300 hover:bg-neutral-900">
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-4 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-full">
                <img
                  src={profileImage}
                  alt="Portrait of Mukilan V"
                  className="h-72 w-72 rounded-full object-cover sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
