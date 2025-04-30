
import React from 'react';
import { ChatProvider } from '@/contexts/ChatContext';
import { ChatWindow } from './chat/ChatWindow';

const AIChat: React.FC = () => {
  return (
    <ChatProvider>
      <ChatWindow />
    </ChatProvider>
  );
};

export default AIChat;
