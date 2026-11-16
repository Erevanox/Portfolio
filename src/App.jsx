import GlowCursor from './components/effects/GlowCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <GlowCursor
      theme="dark"
      color="#d4d4d4"
      secondaryColor="#737373"
      intensity={0.9}
      trailWidth={10}
      glow={0.65}
      hotspot={0.7}
      followSpeed={0.18}
      quality="low"
      enabled={true}
    >
      <div className="min-h-screen bg-[#050505] text-neutral-100 antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
    </GlowCursor>
  );
}
