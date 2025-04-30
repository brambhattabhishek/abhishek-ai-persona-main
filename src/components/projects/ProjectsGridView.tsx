
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectsGridViewProps {
  projects: Project[];
}

const ProjectsGridView: React.FC<ProjectsGridViewProps> = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          variants={cardVariants}
          whileHover="hover"
          className="group"
        >
          <Card className="h-full flex flex-col overflow-hidden backdrop-blur-sm bg-background/40 border border-primary/10">
            <motion.div 
              className="h-48 bg-secondary/50 overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <motion.div 
                className="absolute inset-0 bg-primary/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            
            <CardHeader>
              <CardTitle className="text-gradient">{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary" 
                    className="backdrop-blur-sm animate-in fade-in duration-300 delay-100"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="outline" 
                asChild 
                className="w-full group relative overflow-hidden"
              >
                <a 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>View Project</span>
                  <Eye className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsGridView;
