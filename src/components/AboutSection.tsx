
import React from 'react';
import { portfolioData } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInVariants}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInVariants}
            custom={1}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={fadeInVariants}
            custom={2}
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
          >
            {portfolioData.about.bio}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={fadeInVariants}
              custom={0}
              className="text-2xl font-bold mb-6"
            >
              Education
            </motion.h3>
            
            <div className="space-y-6">
              {portfolioData.about.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  custom={index + 1}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.year}</p>
                      <Badge variant="outline" className="mt-2">
                        {edu.specialization}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={fadeInVariants}
              custom={0}
              className="text-2xl font-bold mb-6"
            >
              Work Experience
            </motion.h3>
            
            <div className="space-y-6">
              {portfolioData.about.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  custom={index + 1}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{exp.role}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.period}</p>
                      <p className="mt-2">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
