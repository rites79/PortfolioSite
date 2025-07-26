import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile picture */}
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-32 mx-auto rounded-full p-1 btn-gradient mb-6"
          >
            <img 
              src="/my profile pic_1753542379569.jpg"
              alt="Ritesh Kumar - Professional Photo"
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">{portfolioData.personal.name}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            {portfolioData.personal.title}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {portfolioData.personal.summary}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => scrollToSection("projects")}
              className="btn-gradient px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              className="text-muted-foreground hover:text-accent transition-colors text-xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/ritesh-kumar-42a560265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/rites79"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-accent transition-colors text-xl"
            >
              <i className="fab fa-github"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}