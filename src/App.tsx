import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import logoImg from './assets/sll-logo.jpeg';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="w-full px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logoImg} alt="SyachLieLabs Logo" className="h-10 w-auto object-contain rounded-lg" />
          </a>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Resume', href: '#resume' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary font-semibold'
                      : 'hover:text-primary text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-muted-bg text-foreground transition-colors border border-border"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
