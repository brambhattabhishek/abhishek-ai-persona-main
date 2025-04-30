
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const categories = {
  PORTFOLIO: 'portfolio',
  TECH: 'tech',
  SCIENCE: 'science',
  GENERAL: 'general',
  CODING: 'coding',
  MATH: 'math',
  UNKNOWN: 'unknown'
} as const;

export type CategoryType = typeof categories[keyof typeof categories];
