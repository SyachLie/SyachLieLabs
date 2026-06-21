import { motion } from 'framer-motion';

const skills = [
  { name: "Frontend Development", percentage: 90 },
  { name: "UI / UX Design", percentage: 85 },
  { name: "Data Visualization", percentage: 80 },
  { name: "Backend Development", percentage: 60 },
  { name: "Python", percentage: 75 },
  { name: "System Architecture", percentage: 65 }
];

const toolkit = ["Teamwork", "Communication", "Entrepreneurship", "Indonesian", "English"];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-section-gradient">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Skills</span>
          <h2 className="heading-2">Technical Expertise</h2>
          <p className="text-muted text-lg mb-8">
            Technologies and areas I am focusing on as I grow my foundation in software engineering.
          </p>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-muted-bg rounded-full h-2">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-muted-bg p-8 rounded-3xl border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Top Soft Skills & Languages</h3>
            <p className="text-muted mb-8">Key attributes that help me collaborate effectively.</p>
            
            <div className="flex flex-wrap gap-3">
              {toolkit.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-card rounded-full text-sm text-muted border border-border hover:border-primary/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
