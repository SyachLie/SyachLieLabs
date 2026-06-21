import { motion } from 'framer-motion';
import { Code2, PenTool, Zap, Lightbulb } from 'lucide-react';

const approaches = [
  {
    icon: <Code2 className="text-primary" size={24} />,
    title: "Web Development",
    desc: "Building clean, functional interfaces."
  },
  {
    icon: <PenTool className="text-primary" size={24} />,
    title: "UI/UX Design",
    desc: "Creating intuitive digital experiences."
  },
  {
    icon: <Zap className="text-primary" size={24} />,
    title: "Data Visualization",
    desc: "Transforming complex data into clear views."
  },
  {
    icon: <Lightbulb className="text-primary" size={24} />,
    title: "Continuous Learning",
    desc: "Expanding expertise in backend architecture."
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">About me</span>
          <h2 className="heading-2">I design and build soulful digital products.</h2>
          <div className="text-muted text-lg space-y-6">
            <p>
              As an Informatics Engineering student at UMRAH, I am a frontend developer with a focus on UI/UX design, Web Development, and Data Visualization.
            </p>
            <p>
              I am passionate about creating intuitive digital experiences that transform complex data into clear, functional interfaces. Beyond the frontend, I am also actively expanding my expertise in Backend Development.
            </p>
            <p>
              While I consider myself still in the early stages of this journey, I am dedicated to continuous learning and building projects that strengthen my technical foundation in system architecture.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {approaches.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.3)] transition-all duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
