
import { categories, CategoryType } from '@/types/chat';
import { portfolioData } from '@/data/portfolio-data';

export const categorizeInput = (input: string): CategoryType => {
  const lowercaseInput = input.toLowerCase();
  
  // Portfolio related questions
  if (lowercaseInput.includes('abhishek') || 
      lowercaseInput.includes('portfolio') || 
      lowercaseInput.includes('resume') || 
      lowercaseInput.includes('work experience') ||
      lowercaseInput.includes('skills') ||
      lowercaseInput.includes('projects') ||
      lowercaseInput.includes('education') ||
      lowercaseInput.includes('contact') ||
      lowercaseInput.includes('hire')) {
    return categories.PORTFOLIO;
  }
  
  // Technology related questions
  if (lowercaseInput.includes('computer') || 
      lowercaseInput.includes('technology') || 
      lowercaseInput.includes('ai') || 
      lowercaseInput.includes('artificial intelligence') ||
      lowercaseInput.includes('machine learning') ||
      lowercaseInput.includes('deep learning') ||
      lowercaseInput.includes('internet') ||
      lowercaseInput.includes('smartphone') ||
      lowercaseInput.includes('robot') ||
      lowercaseInput.includes('software')) {
    return categories.TECH;
  }
  
  // Coding related questions
  if (lowercaseInput.includes('code') || 
      lowercaseInput.includes('programming') || 
      lowercaseInput.includes('javascript') || 
      lowercaseInput.includes('python') ||
      lowercaseInput.includes('react') ||
      lowercaseInput.includes('typescript') ||
      lowercaseInput.includes('css') ||
      lowercaseInput.includes('html') ||
      lowercaseInput.includes('framework') ||
      lowercaseInput.includes('library')) {
    return categories.CODING;
  }
  
  // Science related questions
  if (lowercaseInput.includes('science') || 
      lowercaseInput.includes('physics') || 
      lowercaseInput.includes('chemistry') || 
      lowercaseInput.includes('biology')) {
    return categories.SCIENCE;
  }
  
  // Math related questions
  if (lowercaseInput.includes('math') || 
      lowercaseInput.includes('calculus') || 
      lowercaseInput.includes('algebra')) {
    return categories.MATH;
  }
  
  return categories.GENERAL;
};

export const generateBotResponse = (userInput: string, category: CategoryType): string => {
  const lowercaseInput = userInput.toLowerCase();
  
  // Portfolio related responses
  if (category === categories.PORTFOLIO) {
    if (lowercaseInput.includes('about') || lowercaseInput.includes('who is')) {
      return portfolioData.chatbotPrompts.aboutMe;
    }
    
    if (lowercaseInput.includes('skill') || lowercaseInput.includes('know')) {
      return portfolioData.chatbotPrompts.skills;
    }
    
    if (lowercaseInput.includes('project') || lowercaseInput.includes('work')) {
      return portfolioData.chatbotPrompts.projects;
    }
    
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('email')) {
      return portfolioData.chatbotPrompts.contact;
    }
    
    if (lowercaseInput.includes('educat') || lowercaseInput.includes('study')) {
      return portfolioData.chatbotPrompts.education;
    }
    
    if (lowercaseInput.includes('experience') || lowercaseInput.includes('job')) {
      return portfolioData.chatbotPrompts.experience;
    }
    
    return portfolioData.chatbotPrompts.customAnswer;
  }
  
  // Basic greetings and common responses
  if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi ')) {
    return "Hello there! I'm your AI assistant. I can help with information about Abhishek's portfolio or answer general questions about technology, science, mathematics, and more. What would you like to know about today?";
  }
  
  // Default responses for other categories
  const defaultResponses = [
    "That's an interesting question. While I have knowledge about many topics including technology, science, mathematics, and Abhishek's portfolio, I might not have all the specific details you're looking for. Could you provide more context or ask in a different way?",
    "I'm here to help with information across various topics. Your question is important, but I want to make sure I provide accurate information. Could you rephrase or provide more details?",
    "I aim to provide helpful and accurate information across many domains. To better assist you, could you share what specific information you're looking for?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
