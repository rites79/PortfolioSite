import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Leadership <span className="text-accent">Experience</span>
        </motion.h2>
        
        <div className="space-y-8">
          {portfolioData.leadership.map((leadership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-accent">{leadership.position}</h3>
                      <p className="text-lg font-medium">{leadership.organization}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {leadership.duration}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Responsibilities:</h4>
                    {leadership.responsibilities.map((responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start">
                        <i className="fas fa-star text-accent text-sm mr-2 mt-1"></i>
                        <span className="text-sm text-muted-foreground">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}