import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Work <span className="text-accent">Experience</span>
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-accent ml-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 ml-6"
              >
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-8 border-4 border-secondary"></div>
                <Card className="bg-card border-border shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.location}</p>
                      </div>
                      <Badge variant="secondary" className="text-sm bg-muted text-muted-foreground">
                        {exp.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant={techIndex % 2 === 0 ? "default" : "secondary"}
                          className={techIndex % 2 === 0 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}