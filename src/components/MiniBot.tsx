import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MiniBotProps {
  className?: string;
}

const MiniBot: React.FC<MiniBotProps> = ({ className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [botPosition, setBotPosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [showIntro, setShowIntro] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [orbitDirection, setOrbitDirection] = useState(1);
  const botRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const sectionIntros = {
    hero: "Hi! I'm your guide. Let me show you around Abhishek's portfolio!",
    about: "Here's where you can learn more about Abhishek's journey and background.",
    skills: "Check out Abhishek's impressive tech stack and capabilities!",
    projects: "Take a look at some of Abhishek's amazing projects.",
    testimonials: "Here's what people say about working with Abhishek.",
    contact: "Want to get in touch? This is the perfect place!"
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, Math.random() * 4000 + 2000);
    
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const directionInterval = setInterval(() => {
      setOrbitDirection(prev => prev * -1);
    }, 3000);
    
    return () => clearInterval(directionInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom &&
          section.id
        ) {
          if (currentSection !== section.id) {
            setCurrentSection(section.id);
            setShowIntro(true);
            setTimeout(() => setShowIntro(false), 4000);
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentSection]);

  useEffect(() => {
    const moveBot = () => {
      if (!botRef.current) return;

      setOrbitAngle(prev => (prev + 0.02 * orbitDirection) % (Math.PI * 2));

      const orbitRadius = 50;
      const orbitX = Math.cos(orbitAngle) * orbitRadius;
      const orbitY = Math.sin(orbitAngle) * orbitRadius;

      const targetX = mousePosition.x + orbitX;
      const targetY = mousePosition.y + orbitY;

      const newX = botPosition.x + (targetX - botPosition.x) * 0.1;
      const newY = botPosition.y + (targetY - botPosition.y) * 0.1;

      setBotPosition({ x: newX, y: newY });
      updateEyePositions();
    };

    const animationId = requestAnimationFrame(moveBot);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, botPosition, orbitAngle, orbitDirection]);

  const updateEyePositions = () => {
    if (!botRef.current || !leftEyeRef.current || !rightEyeRef.current) return;
    
    const botRect = botRef.current.getBoundingClientRect();
    const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
    const rightEyeRect = rightEyeRef.current.getBoundingClientRect();
    
    const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
    const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;
    
    const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
    const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;
    
    const leftEyeAngle = Math.atan2(mousePosition.y - leftEyeCenterY, mousePosition.x - leftEyeCenterX);
    const rightEyeAngle = Math.atan2(mousePosition.y - rightEyeCenterY, mousePosition.x - rightEyeCenterX);
    
    const maxRadius = 1.5;
    const leftPupilX = Math.cos(leftEyeAngle) * maxRadius;
    const leftPupilY = Math.sin(leftEyeAngle) * maxRadius;
    
    const rightPupilX = Math.cos(rightEyeAngle) * maxRadius;
    const rightPupilY = Math.sin(rightEyeAngle) * maxRadius;
    
    if (leftEyeRef.current.firstElementChild) {
      (leftEyeRef.current.firstElementChild as HTMLElement).style.transform = 
        `translate(${leftPupilX + 1.5}px, ${leftPupilY + 1.5}px)`;
    }
    
    if (rightEyeRef.current.firstElementChild) {
      (rightEyeRef.current.firstElementChild as HTMLElement).style.transform = 
        `translate(${rightPupilX + 1.5}px, ${rightPupilY + 1.5}px)`;
    }
  };

  const springProps = useSpring({
    transform: `translate3d(${botPosition.x}px, ${botPosition.y}px, 0)`,
    config: { tension: 120, friction: 14 }
  });

  return (
    <>
      <animated.div
        ref={botRef}
        style={springProps}
        className={cn(
          "fixed z-50 w-16 h-16 pointer-events-none",
          className
        )}
      >
        <AnimatePresence>
          {showIntro && currentSection && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: -60, scale: 1 }}
              exit={{ opacity: 0, y: -80, scale: 0.9 }}
              className="absolute left-1/2 -translate-x-1/2 w-max max-w-[200px] p-3 rounded-lg text-sm text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                color: 'white'
              }}
            >
              {sectionIntros[currentSection as keyof typeof sectionIntros]}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="relative w-full h-full"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-primary rounded-full opacity-90 shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
            <div className="relative flex space-x-4">
              <div ref={leftEyeRef} className="w-3 h-3 rounded-full bg-white">
                <motion.div 
                  className={cn(
                    "w-1.5 h-1.5 bg-black rounded-full transition-transform duration-100",
                    isBlinking ? "scale-y-0" : ""
                  )}
                />
              </div>
              
              <div ref={rightEyeRef} className="w-3 h-3 rounded-full bg-white">
                <motion.div 
                  className={cn(
                    "w-1.5 h-1.5 bg-black rounded-full transition-transform duration-100",
                    isBlinking ? "scale-y-0" : ""
                  )}
                />
              </div>
            </div>
          </div>
          
          <motion.div 
            className="absolute w-1 h-4 bg-primary -top-3 left-1/2 transform -translate-x-1/2"
            animate={{
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </animated.div>
    </>
  );
};

export default MiniBot;
