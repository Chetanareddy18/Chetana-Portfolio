import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border transition-all duration-300"
      style={{
        background: isDark ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.85)',
        borderColor: isDark ? 'rgba(139,92,246,0.4)' : 'rgba(139,92,246,0.3)',
        boxShadow: isDark
          ? '0 0 20px rgba(139,92,246,0.3)'
          : '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark
          ? <Sun className="w-5 h-5 text-amber-400" />
          : <Moon className="w-5 h-5 text-brand-purple" />
        }
      </motion.div>
    </motion.button>
  );
}
