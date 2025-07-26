import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: { [key: string]: string } = {
  trophy: "fas fa-trophy text-yellow-500",
  certificate: "fas fa-certificate text-accent",
  code: "fas fa-code text-primary",
  award: "fas fa-award text-yellow-400",
  "graduation-cap": "fas fa-graduation-cap text-accent",
  rocket: "fas fa-rocket text-primary"
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Achievements & <span className="text-accent">Certifications</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <i className={`${iconMap[achievement.icon]} text-2xl mr-3`}></i>
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}