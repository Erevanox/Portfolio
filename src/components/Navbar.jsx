const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <nav className="mx-auto flex max-w-5xl flex-col gap-3 rounded-3xl border border-neutral-800 bg-black/80 px-4 py-3 shadow-lg backdrop-blur-lg md:flex-row md:items-center md:justify-between md:rounded-full">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white">
            Mukilan <span className="text-neutral-400">V</span>
          </a>

          <div className="flex w-full items-center gap-5 overflow-x-auto pb-1 md:w-auto md:gap-6 md:overflow-visible md:pb-0">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-item whitespace-nowrap text-sm text-slate-200/80 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
