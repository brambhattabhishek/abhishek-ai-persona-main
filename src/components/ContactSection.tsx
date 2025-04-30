
import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { AtSign, MapPin, Send, Github, Linkedin, Code, BookOpen } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
            variants={itemVariants}
          >
            Contact Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
            variants={itemVariants}
          >
            Have a question or want to work together? Reach out to me!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <Card>
              <CardContent className="pt-6">
                <motion.div className="space-y-6" variants={containerVariants}>
                  <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <AtSign size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">{portfolioData.personal.email}</p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">{portfolioData.personal.location}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="font-medium mb-2">Connect with me</h3>
                    <div className="flex space-x-4">
                      <a
                        href={portfolioData.personal.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={portfolioData.personal.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={portfolioData.personal.socialLinks.codechef}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Code size={20} />
                      </a>
                      <a
                        href={portfolioData.personal.socialLinks.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <BookOpen size={20} />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <motion.div className="space-y-4" variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>
                            Send Message
                            <Send size={16} className="ml-2" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
