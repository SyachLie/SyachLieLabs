import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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

  const scrollToTop = () => {
    document.documentElement.style.scrollBehavior = 'auto'; // Prevent CSS smooth scroll from conflicting
    const startPosition = window.scrollY;
    const duration = 1200; // 1.2 seconds for an ultra-smooth glide
    let startTime: number | null = null;

    // easeInOutQuart function for buttery smooth deceleration
    const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition * (1 - easeInOutQuart(progress)));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        document.documentElement.style.scrollBehavior = 'smooth'; // Restore CSS smooth scroll
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="w-full px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter text-foreground">SyachLieLabs<span className="text-primary">.</span></a>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
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

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden p-2 rounded-full hover:bg-muted-bg text-foreground transition-colors border border-border"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8 pt-10 pb-32 h-full">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'text-primary font-bold'
                        : 'hover:text-primary text-foreground font-medium'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Portfolio />
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 md:p-4 rounded-full bg-primary text-white shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:bg-primary-hover hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-1 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
