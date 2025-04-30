
import React, { createContext, useContext, useState } from 'react';
import { Message } from '@/types/chat';

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isTyping: boolean;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const initialMessages: Message[] = [
  {
    id: '1',
    content: `Hi there! I'm your AI assistant. I can help with information about Abhishek or answer general questions about technology, coding, science, and more. How can I assist you today?`,
    sender: 'bot',
    timestamp: new Date(),
  },
];

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  return (
    <ChatContext.Provider value={{ messages, setMessages, isTyping, setIsTyping }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
