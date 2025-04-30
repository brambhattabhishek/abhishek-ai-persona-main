
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import React from 'react';

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSendMessage: () => void;
  isTyping: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const ChatInput = ({ input, setInput, handleSendMessage, isTyping, inputRef }: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="p-4 border-t border-border">
      <div className="flex space-x-2">
        <Input
          ref={inputRef}
          className="flex-1"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button 
          onClick={handleSendMessage} 
          disabled={!input.trim() || isTyping}
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
};
