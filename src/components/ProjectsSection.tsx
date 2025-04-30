
import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProjectsGridView from './projects/ProjectsGridView';
import { Eye } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      <div className="container mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.div className="relative inline-block mb-8" variants={itemVariants}>
            <Eye 
              className="w-12 h-12 text-primary"
              style={{
                transform: `rotate(${mousePosition.x * 10}deg) translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
              }}
            />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
            variants={itemVariants}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </motion.p>
        </motion.div>

        <ProjectsGridView projects={portfolioData.projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
