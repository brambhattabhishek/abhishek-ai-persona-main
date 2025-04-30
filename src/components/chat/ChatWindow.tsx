
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { categorizeInput, generateBotResponse } from '@/utils/chatUtils';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { ChatHeader } from './ChatHeader';
import { ChatToggleButton } from './ChatToggleButton';
import { useChat } from '@/contexts/ChatContext';
import { useChatWindow } from '@/hooks/useChatWindow';

export const ChatWindow: React.FC = () => {
  const { messages, setMessages, isTyping, setIsTyping } = useChat();
  const { isOpen, setIsOpen, isMinimized, setIsMinimized, messagesEndRef, inputRef } = useChatWindow();
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const category = categorizeInput(input);
      const botResponse = generateBotResponse(input, category);
      
      const baseDelay = 500;
      const charsPerSecond = 20;
      const typingDelay = Math.min(3000, baseDelay + (botResponse.length / charsPerSecond) * 1000);
      
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: botResponse,
            sender: 'bot' as const,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, typingDelay);
    }, 500);
  };

  const chatWindowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  if (!isOpen) {
    return (
      <ChatToggleButton 
        onClick={() => { setIsOpen(true); setIsMinimized(false); }} 
      />
    );
  }
  
  if (isMinimized) {
    return (
      <ChatToggleButton 
        onClick={() => { setIsOpen(true); setIsMinimized(false); }} 
      />
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={chatWindowVariants}
      className="fixed z-40 transition-all duration-300 ease-in-out shadow-xl rounded-xl overflow-hidden border border-border bg-background/90 backdrop-blur-sm w-80 sm:w-96 h-[28rem] bottom-4 right-4"
    >
      <ChatHeader 
        isMinimized={isMinimized}
        onMinimize={() => setIsMinimized(!isMinimized)}
        onClose={() => setIsOpen(false)}
      />
      
      <ScrollArea className="h-[calc(100%-6rem)] px-4 py-2">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={message.id} message={message} index={index} />
          ))}
          
          {isTyping && <TypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <ChatInput
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
        isTyping={isTyping}
        inputRef={inputRef}
      />
    </motion.div>
  );
};
