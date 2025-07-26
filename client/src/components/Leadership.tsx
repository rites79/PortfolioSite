import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: { [key: string]: string } = {
  users: "fas fa-users text-accent",
  "theater-masks": "fas fa-theater-masks text-accent",
  running: "fas fa-running text-accent"
};

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
          Leadership & <span className="text-accent">Activities</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.leadership.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <i className={`${iconMap[activity.icon]} text-4xl mb-4`}></i>
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <p className="text-accent font-medium">{activity.role}</p>
                    <p className="text-muted-foreground text-sm">{activity.institution}</p>
                    <p className="text-muted-foreground text-sm">{activity.duration}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {activity.description}
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
