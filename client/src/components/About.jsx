import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern engineering workspace with computer and technical equipment" 
              className="rounded-xl shadow-2xl" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hello! I'm {portfolioData.personal.name}</h3>
            <p className="text-muted-foreground mb-6">
              {portfolioData.personal.summary}
            </p>
            
            <p className="text-muted-foreground mb-6">
              My passion lies in embedded systems, electrical engineering, and innovative technology solutions. I've worked on various projects and gained experience through internships, always eager to tackle new challenges in engineering.
            </p>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent mb-4">Education</h4>
              
              <div className="border-l-2 border-accent pl-4 space-y-4">
                {portfolioData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`w-3 h-3 ${index === 0 ? 'bg-accent' : 'bg-muted'} rounded-full -ml-6 mr-4`}></div>
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    </div>
                    <h5 className="font-semibold">{edu.degree}</h5>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-accent">
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}