
import { Button } from '@/components/ui/button';
import { Bot, X, Minimize2, Maximize2 } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface ChatHeaderProps {
  isMinimized: boolean;
  onMinimize: () => void;
  onClose: () => void;
}

export const ChatHeader = ({ isMinimized, onMinimize, onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/20">
          <Bot size={16} className="text-primary-foreground" />
        </div>
        <h3 className="font-medium">AI Assistant</h3>
      </div>
      
      <div className="flex items-center space-x-1">
        <ThemeToggle />
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full text-primary-foreground hover:bg-background/20"
          onClick={onMinimize}
        >
          {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full text-primary-foreground hover:bg-background/20"
          onClick={onClose}
        >
          <X size={14} />
        </Button>
      </div>
    </div>
  );
};
