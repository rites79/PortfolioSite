import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectImages = [
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <img 
                    src={projectImages[index % projectImages.length]} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4" 
                  />
                  
                  <div className="flex items-center mb-3">
                    <i className="fas fa-microchip text-accent text-xl mr-3"></i>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant={techIndex % 2 === 0 ? "default" : "secondary"}
                        className={techIndex % 2 === 0 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <i className="fas fa-check text-accent text-sm mr-2 mt-1"></i>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  {project.link && (
                    <Button 
                      variant="ghost" 
                      className="text-accent hover:text-white p-0"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project <i className="fas fa-external-link-alt ml-2"></i>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}