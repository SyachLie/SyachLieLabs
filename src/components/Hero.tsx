import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profilephoto/myselfnih.jpeg';

export default function Hero() {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center pt-32">
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              Informatics Engineering
            </span>
          </motion.div>

          <motion.h1 
            className="heading-1 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crafting digital <br />
            experiences that <br />
            <span className="text-primary">people love.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted max-w-2xl mb-12 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm Ezzy Auriel Syach Lie — a Web developer & UI designer focused on building modern, accessible, and beautifully simple products.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#portfolio" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-2">
              View my work <ArrowRight size={18} />
            </a>
            <a href="#" className="bg-muted-bg hover:bg-muted-bg/80 text-foreground px-8 py-4 rounded-full font-medium transition-colors border border-border flex items-center gap-2">
              Download CV <Download size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="relative order-1 lg:order-2 w-56 h-56 md:w-72 md:h-72 lg:w-full lg:h-auto lg:aspect-square mx-auto lg:mx-0 lg:ml-auto max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full lg:rounded-[3rem] overflow-hidden border border-border/50 bg-card relative shadow-[0_0_60px_-15px_rgba(220,38,38,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 z-10 mix-blend-overlay"></div>
            <img 
              src={profileImg} 
              alt="SyachLie" 
              className="w-full h-full object-cover transition-all duration-700 z-0 relative"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
