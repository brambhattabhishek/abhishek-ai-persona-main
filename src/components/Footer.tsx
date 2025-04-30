
import React from 'react';
import { portfolioData } from '@/data/portfolio-data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
