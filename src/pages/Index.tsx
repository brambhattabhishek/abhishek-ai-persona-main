
import React, { useEffect, Suspense, useState, lazy } from 'react';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import MiniBot from '@/components/MiniBot';
import { TooltipProvider } from '@/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load components for better performance
const AboutSection = lazy(() => import('@/components/AboutSection'));
const SkillsSection = lazy(() => import('@/components/SkillsSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const AchievementsSection = lazy(() => import('@/components/AchievementsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));
const AIChat = lazy(() => import('@/components/AIChat'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    document.title = "Abhishek Brahmbhatt | AI Engineer & Full Stack Developer";
    
    // Delayed loading state to show loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotateZ: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute mt-24 text-xl font-bold text-gradient"
            >
              Building Experience...
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
        
      <TooltipProvider>
        <NavBar />
        <MiniBot />
        <Suspense fallback={null}>
          <AIChat />
        </Suspense>
        
        <main>
          <HeroSection />
          <Suspense fallback={<div className="py-20 flex justify-center">Loading...</div>}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<div className="py-20 flex justify-center">Loading...</div>}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<div className="py-20 flex justify-center">Loading...</div>}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<div className="py-20 flex justify-center">Loading...</div>}>
            <AchievementsSection />
          </Suspense>
          <Suspense fallback={<div className="py-20 flex justify-center">Loading...</div>}>
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={<div className="py-10 flex justify-center">Loading...</div>}>
          <Footer />
        </Suspense>
      </TooltipProvider>
    </div>
  );
};

export default Index;
