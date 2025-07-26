import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-code text-accent text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.technical.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-tools text-accent text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold">Tools & Software</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-accent/20 text-accent hover:bg-accent/30"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-users text-accent text-2xl mr-3"></i>
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.soft.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30"
                    >
                      {skill}
                    </Badge>
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