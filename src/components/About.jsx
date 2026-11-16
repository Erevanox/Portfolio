const skills = ['C', 'C++', 'Python', 'building websites with VS Code Copilot and Antigravity'];

export default function About() {
  return (
    <section id="about" className="relative bg-[#050505] py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">About</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">A curious mind building useful things.</h2>
        </div>

        <div className="max-w-3xl text-lg leading-8 text-neutral-300">
          <p>
            I&apos;m a 1st-year CSE student at KPR Institute of Engineering and Technology, and I&apos;m deeply excited by the way technology can turn ideas into real experiences. I enjoy learning fast, experimenting with web technologies, and turning rough concepts into polished interfaces.
          </p>
          <p className="mt-4">
            My journey is driven by curiosity, consistency, and a genuine love for building things that feel useful and exciting. From coding projects to exploring emerging tools, I&apos;m always looking for ways to grow as a developer while making technology feel more human and approachable.
          </p>

          <div className="mt-8 border-t border-neutral-800 pt-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">Skills</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {skills.map((skill) => (
                <span key={skill} className="tech-tag text-sm text-neutral-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
