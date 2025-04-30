
import { Message } from '@/types/chat';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: Message;
  index: number;
}

export const ChatMessage = ({ message, index }: ChatMessageProps) => {
  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={messageVariants}
      transition={{ delay: index * 0.1 }}
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[75%] rounded-lg px-4 py-2 ${
          message.sender === 'user'
            ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'
            : 'bg-secondary/80 backdrop-blur-sm text-secondary-foreground'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
};
