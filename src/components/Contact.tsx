import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Send } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socials = [
  {
    name: 'GitHub',
    icon: <GithubIcon size={24} />,
    link: 'https://github.com/SyachLie',
    color: 'hover:text-white hover:bg-[#333]'
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon size={24} />,
    link: 'https://www.linkedin.com/in/ezzy-auriel-syach-lie-a5783a40a/',
    color: 'hover:text-white hover:bg-[#0077b5]'
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon size={24} />,
    link: 'https://instagram.com/syachlieee',
    color: 'hover:text-white hover:bg-[#e1306c]'
  }
];

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:syachlie02@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setIsModalOpen(false);
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Contact</span>
          <h2 className="heading-1">Let's create something together.</h2>
          <p className="text-muted text-xl mt-6">
            Have a project in mind, or just want to say hello? Let's connect.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Social Links (Left Side) */}
        <div className="flex flex-col gap-4">
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.link} 
              target="_blank" 
              rel="noreferrer" 
              className={`flex items-center gap-4 p-6 rounded-3xl bg-muted-bg border border-border transition-all duration-300 group flex-1 ${social.color}`}
            >
              <div className="text-foreground group-hover:text-white transition-colors">
                {social.icon}
              </div>
              <span className="font-medium text-foreground group-hover:text-white transition-colors">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Email CTA (Right Side) */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center justify-center p-8 rounded-3xl bg-muted-bg border border-border hover:border-primary/50 transition-colors group cursor-pointer"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
            <Mail size={32} />
          </div>
          <h3 className="text-foreground font-semibold mb-2 text-2xl">Send an Email</h3>
          <p className="text-muted text-lg">Directly to my inbox</p>
        </button>
      </motion.div>

      {/* Email Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div 
              className="relative w-full max-w-lg bg-card rounded-3xl overflow-hidden border border-border shadow-2xl flex flex-col"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 bg-muted-bg hover:bg-border text-foreground rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-muted-bg border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-muted-bg border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-muted-bg border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Hello, I'd like to discuss..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <Send size={18} /> Send Message via Email App
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-32 text-center border-t border-border pt-8">
        <p className="text-muted text-sm">© {new Date().getFullYear()} SyachLieLabs. All Rights Reserved.</p>
      </div>
    </section>
  );
}
