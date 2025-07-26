import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const downloadResume = async () => {
    try {
      const response = await fetch("/api/resume/download");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Ritesh_Kumar_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Resume downloaded successfully!",
        description: "The resume has been downloaded to your device.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, collaborations, or answering any questions you might have. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-accent text-xl mr-4"></i>
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-phone text-accent text-xl mr-4"></i>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a 
                    href={`tel:${portfolioData.personal.phone}`} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-accent text-xl mr-4"></i>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a 
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-accent p-3 rounded-lg transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-accent p-3 rounded-lg transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="bg-muted hover:bg-accent p-3 rounded-lg transition-colors"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            
            {/* Resume Download */}
            <div className="mt-8">
              <Button 
                onClick={downloadResume}
                className="btn-gradient px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your Name"
                      required
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Your message here..."
                      required
                      rows={5}
                      className="bg-muted border-border focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full btn-gradient px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}