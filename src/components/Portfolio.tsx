import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

import cert1 from '../assets/certificate/sertif ezzy dukcapil-page-00001.jpg';
import cert2 from '../assets/certificate/Mindluster_Certificate-page-00001.jpg';
import cert3 from '../assets/certificate/sertifikatwmp-page-00001.jpg';
import cert4 from '../assets/certificate/sertifikat_course_177_3445708_041023201915-page-00001.jpg';
const projectsList = [
  {
    title: "MySIPA",
    category: "Information System",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    year: "2024",
    type: "projects",
    link: "https://github.com/SyachLie/MySIPA",
    description: "Sistem Informasi Pengarsipan (MySIPA) is a web-based information system designed to digitize and manage administrative archives efficiently. Built with modern web technologies, it streamlines document retrieval and secure storage."
  },
  {
    title: "Tugas Pengolahan Citra",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
    year: "2024",
    type: "projects",
    link: "https://github.com/SyachLie/TugasPengolahanCitra",
    description: "A comprehensive computer vision project exploring various image processing techniques. The repository contains implementations of algorithms for image enhancement, filtering, and feature extraction."
  }
];

const certificatesList = [
  {
    title: "Internship Completion",
    year: "2026",
    type: "Certificates",
    category: "Certificates",
    image: cert1,
    description: "Successfully completed an internship program, focusing on practical implementation of modern web workflows and digitizing administrative processes."
  },
  {
    title: "Python Programming Language Basics",
    year: "2026",
    type: "Certificates",
    category: "Certificates",
    image: cert2,
    description: "Certificate of completion for learning the fundamentals of the Python programming language."
  },
  {
    title: "Workshop Young Aspiring Entrepreneurs",
    year: "2025",
    type: "Certificates",
    category: "Certificates",
    image: cert3,
    description: "Participated in the Workshop for Young Aspiring Entrepreneurs, focusing on building leadership and business acumen."
  },
  {
    title: "Learn Data Visualization",
    year: "2023",
    type: "Certificates",
    category: "Certificates",
    image: cert4,
    description: "Completed a comprehensive course on Data Visualization, covering techniques for transforming complex datasets into clear, actionable insights."
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const showProjects = filter === 'All' || filter === 'Projects';
  const showCertificates = filter === 'All' || filter === 'Certificates';

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="section-padding bg-section-gradient">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="heading-2 mb-0">Selected work & wins</h2>
        </motion.div>

        <motion.div 
          className="flex gap-2 bg-white/5 p-1.5 rounded-full border border-white/10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['All', 'Projects', 'Certificates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tab 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-muted hover:text-foreground hover:bg-muted-bg'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="popLayout">
        {showProjects && (
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            {projectsList.map((project, index) => (
              <motion.div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col overflow-hidden rounded-3xl cursor-pointer bg-card border border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.3)] transition-all duration-300 h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-background/80 backdrop-blur-md rounded-full border border-border text-foreground text-xs font-medium tracking-widest uppercase">
                    Projects
                  </div>
                </div>

                <div className="relative flex-1 p-6 md:p-8 flex justify-between bg-muted-bg gap-4">
                  <div className="flex-1 flex flex-col justify-start">
                    <p className="text-primary font-medium text-[10px] md:text-xs tracking-widest uppercase mb-2">{project.category}</p>
                    <h3 className="text-xl md:text-2xl font-serif text-foreground leading-snug">{project.title}</h3>
                  </div>
                  
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shrink-0 self-end">
                    <ArrowUpRight className="text-primary group-hover:text-white transition-colors w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {showCertificates && (
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            {certificatesList.map((cert, index) => (
              <motion.div
                key={cert.title}
                onClick={() => setSelectedProject(cert)}
                className="group flex flex-col overflow-hidden rounded-3xl cursor-pointer bg-card border border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.3)] transition-all duration-300 h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden shrink-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-background/80 backdrop-blur-md rounded-full border border-border text-foreground text-xs font-medium tracking-widest uppercase">
                    Certificates
                  </div>
                </div>

                <div className="relative flex-1 p-6 md:p-8 flex justify-between bg-muted-bg gap-4">
                  <div className="flex-1 flex flex-col justify-start">
                    <p className="text-primary font-medium text-[10px] md:text-xs tracking-widest uppercase mb-2">{cert.year}</p>
                    <h3 className="text-xl md:text-2xl font-serif text-foreground leading-snug">{cert.title}</h3>
                  </div>
                  
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shrink-0 self-end">
                    <ArrowUpRight className="text-primary group-hover:text-white transition-colors w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              className="relative w-full max-w-3xl bg-card rounded-3xl overflow-hidden border border-border shadow-2xl flex flex-col max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/50 hover:bg-background/80 text-foreground rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>

              <div className="h-64 md:h-80 relative shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent" />
              </div>

              <div className="p-8 pt-0 relative -mt-16 md:-mt-20 overflow-y-auto">
                <div className="flex justify-between items-end gap-4 mb-6">
                  <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium text-xs md:text-sm mb-4 border border-primary/20 backdrop-blur-md">
                      {selectedProject.category} • {selectedProject.year}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">{selectedProject.title}</h2>
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none text-muted text-lg leading-relaxed mb-10">
                  <p>{selectedProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={20} /> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
