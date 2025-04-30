
import { motion } from 'framer-motion';

export const TypingIndicator = () => (
  <motion.div 
    className="flex justify-start"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-lg px-4 py-2 max-w-[75%]">
      <div className="flex space-x-1">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.div 
            key={i}
            className="w-2 h-2 rounded-full bg-muted-foreground"
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, delay, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);
