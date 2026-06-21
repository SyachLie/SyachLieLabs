import { motion } from 'framer-motion';

const experience = [
  {
    period: "Jan 2026 — Mar 2026",
    role: "Vice Student Leader",
    company: "Department of Population and Civil Registration of Tanjungpinang City",
    desc: "Focusing on digitizing administrative workflows and ensuring the accuracy of medium-scale population data through modern web solutions."
  }
];

const education = [
  {
    period: "2023 — Present",
    degree: "Undergraduate, Informatics Engineering",
    school: "Universitas Maritim Raja Ali Haji",
    desc: "Focus on UI/UX design, Web Development, and Data Visualization."
  }
];

export default function Journey() {
  return (
    <section id="resume" className="section-padding min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Resume</span>
        <h2 className="heading-2 mb-16">A snapshot of the journey</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="heading-3 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary"></span> Experience
          </h3>
          <div className="space-y-10 mt-8 border-l border-border pl-6 ml-4">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.9rem] top-1.5 border-4 border-background" />
                <span className="text-sm text-primary font-medium">{item.period}</span>
                <h4 className="text-xl font-semibold text-foreground mt-1">{item.role}</h4>
                <p className="text-muted text-sm mb-2">{item.company}</p>
                <p className="text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="heading-3 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary"></span> Education
          </h3>
          <div className="space-y-10 mt-8 border-l border-border pl-6 ml-4">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.9rem] top-1.5 border-4 border-background" />
                <span className="text-sm text-primary font-medium">{item.period}</span>
                <h4 className="text-xl font-semibold text-foreground mt-1">{item.degree}</h4>
                <p className="text-muted text-sm mb-2">{item.school}</p>
                <p className="text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
