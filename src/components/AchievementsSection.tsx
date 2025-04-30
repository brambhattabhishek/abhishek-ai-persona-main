
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Star, Award, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

const AchievementsSection: React.FC = () => {
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
      transition: { duration: 0.5 }
    },
  };

  const metrics = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Problem Solving",
      value: "350+",
      description: "DSA Problems Solved"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "CodeChef Rating",
      value: "1431",
      description: "2-Star Coder"
    },
    {
      icon: <Github className="w-8 h-8 text-primary" />,
      title: "Open Source",
      value: "10+",
      description: "Pull Requests"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "IIT JAM",
      value: "1300",
      description: "All India Rank"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/50">
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
            Achievements & Metrics
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
            variants={itemVariants}
          >
            Quantifiable achievements and recognition
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <CardTitle className="text-xl">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20"
            >
              <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">{achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
