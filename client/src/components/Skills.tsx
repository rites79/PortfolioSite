import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <i className="fas fa-code text-accent text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                </div>
                <div className="space-y-4">
                  {portfolioData.skills.languages.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={skill.proficiency} className="w-20" />
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Developer Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <i className="fas fa-tools text-accent text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold">Developer Tools</h3>
                </div>
                <div className="space-y-3">
                  {portfolioData.skills.tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <i className="fas fa-check-circle text-accent mr-3"></i>
                      <span>{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Electronics Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <i className="fas fa-microchip text-accent text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold">Electronics Skills</h3>
                </div>
                <div className="space-y-3">
                  {portfolioData.skills.electronics.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <i className="fas fa-check-circle text-accent mr-3"></i>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
