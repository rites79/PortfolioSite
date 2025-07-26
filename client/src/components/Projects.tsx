import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectImages = [
  "https://pixabay.com/get/ga49da7e9aae48ed71db93876727ca946615819d658fbeecd3036524da66889e590d9c2cb16f2ae55110b3ecdef682cf77cfb5cf56f1bed8b29e6818c1bbd2003_1280.jpg",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  "https://pixabay.com/get/g6e2d99fe349c3d513709c554a272bcdc4ef7187272692b559f98aab844f94c6e83485890e0bc414ffd095732fc1f8e02b0fda02359004db47f0ec5c53ed7af00_1280.jpg",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
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
                    src={projectImages[index]} 
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
                  
                  {project.status === "under-review" && (
                    <div className="flex items-center text-yellow-500 text-sm mb-2">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Under Review</span>
                    </div>
                  )}
                  
                  <Button variant="ghost" className="text-accent hover:text-white p-0">
                    View Details <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
