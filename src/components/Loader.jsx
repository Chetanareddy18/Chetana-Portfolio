import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2 + Math.floor(Math.random() * 5);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-deep flex flex-col items-center justify-center"
    >
      <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-8">
        <motion.div
          className="absolute top-0 left-0 h-full bg-brand-purple"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-cyan-400 tracking-tighter">
        <motion.span
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          {Math.min(progress, 100)}%
        </motion.span>
      </div>
      
      <p className="mt-4 text-slate-500 text-sm tracking-widest uppercase font-semibold">
        Initializing AI Engine...
      </p>
    </motion.div>
  );
}
