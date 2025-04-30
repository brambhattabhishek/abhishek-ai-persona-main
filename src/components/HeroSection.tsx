
import React from 'react';
import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 filter blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary animate-pulse-light">
            Hello, I'm
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-gradient text-shadow">
            {portfolioData.personal.name}
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground">
            {portfolioData.personal.title}
          </p>
          
          <p className="text-lg mb-8 text-muted-foreground">
            {portfolioData.personal.description}
          </p>
          
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <Button variant="outline" size="lg" className="group">
              <a 
                href="#projects" 
                className="flex items-center gap-2"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </Button>
            
            <Button size="lg">
              <a 
                href="#contact" 
                className="flex items-center gap-2"
              >
                Contact Me
              </a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href={portfolioData.personal.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href={portfolioData.personal.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={portfolioData.personal.socialLinks.codechef} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Code size={24} />
            </a>
            <a 
              href={portfolioData.personal.socialLinks.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen size={24} />
            </a>
          </div>
        </motion.div>
        
        {/* Profile Picture */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="flex justify-center items-center"
>
  <Avatar className="w-64 h-64 border-4 border-primary/50 shadow-2xl hover:border-primary transition-colors duration-300 rounded-full overflow-hidden flex justify-center items-center">
    <AvatarImage 
      src="public/imageprofile.png"
      alt={`${portfolioData.personal.name}'s profile picture`}
      className="w-full h-full object-cover bg-transparent"
    />
   <AvatarFallback className="text-6xl bg-primary/10 rounded-full flex justify-center items-center">
  {portfolioData.personal.name.split(' ').map(name => name[0]).join('')}
</AvatarFallback>
  </Avatar>
</motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
