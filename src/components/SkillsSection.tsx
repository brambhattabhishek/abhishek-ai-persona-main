import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

type SkillLevel = 'beginner' | 'intermediate' | 'expert' | 'all';

const SkillsSection: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<SkillLevel>('all');
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const allSkills = portfolioData.skills.technical.flatMap(category => 
    category.items
  ).concat(portfolioData.skills.soft);

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
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
            My Skills
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
            variants={itemVariants}
          >
            I've developed expertise in various technologies and methodologies throughout my career.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button 
            variant={activeLevel === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveLevel('all')}
            className="mb-2"
          >
            All Skills
          </Button>
          <Button 
            variant={activeLevel === 'beginner' ? 'default' : 'outline'}
            onClick={() => setActiveLevel('beginner')}
            className="mb-2"
          >
            Beginner
          </Button>
          <Button 
            variant={activeLevel === 'intermediate' ? 'default' : 'outline'}
            onClick={() => setActiveLevel('intermediate')}
            className="mb-2"
          >
            Intermediate
          </Button>
          <Button 
            variant={activeLevel === 'expert' ? 'default' : 'outline'}
            onClick={() => setActiveLevel('expert')}
            className="mb-2"
          >
            Expert
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.skills.technical.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="backdrop-blur-sm bg-background/40 border border-primary/10 shadow-lg hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gradient">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="hover:scale-105 transition-transform backdrop-blur-sm animate-in fade-in duration-300 delay-100"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl font-bold mb-6"
            variants={itemVariants}
          >
            Soft Skills
          </motion.h3>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {portfolioData.skills.soft.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Badge 
                  variant="outline" 
                  className="text-base py-2 px-4 backdrop-blur-sm bg-background/40"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
