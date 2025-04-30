
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatToggleButtonProps {
  onClick: () => void;
}

export const ChatToggleButton = ({ onClick }: ChatToggleButtonProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 z-30"
    >
      <Button
        onClick={onClick}
        className="rounded-full p-3 w-14 h-14 shadow-lg bg-gradient-to-r from-primary to-primary/80"
      >
        <Bot size={24} className="text-primary-foreground" />
      </Button>
    </motion.div>
  );
};
