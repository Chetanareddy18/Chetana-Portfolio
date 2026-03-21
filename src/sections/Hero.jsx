import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDown } from 'lucide-react';
import NeuralNetwork3D from '../components/NeuralNetwork3D';
import AnimatedText from '../components/AnimatedText';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >

            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              <span className="text-white block">AI Engineer &</span>
              <AnimatedText text="Data Science Innovator" className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-cyan-400 justify-start" />
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Engineering intelligent, data-driven solutions through Machine Learning, Deep Learning, and Generative AI. Transforming complexity into scalable, high-impact systems.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="mb-10 text-brand-purple font-medium tracking-wide flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base"
            >
              <span>Driven by Data</span>
              <span className="hidden sm:inline">•</span>
              <span>Inspired by Impact</span>
              <span className="hidden sm:inline">•</span>
              <span>Built for Innovation</span>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <ScrollLink to="projects" smooth={true} duration={800} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-brand-purple text-white font-bold flex items-center gap-2 hover:bg-brand-purple/90 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] cursor-pointer"
                >
                  Explore Portfolio
                </motion.button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={800} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full glass text-white font-bold cursor-pointer hover:bg-white/10 hover:border-brand-purple/50 transition-all"
                >
                  Contact Engine
                </motion.button>
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-to-tr from-brand-purple/30 to-cyan-500/30 rounded-full blur-[100px] pointer-events-none" />
            <NeuralNetwork3D />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ScrollLink to="about" smooth={true} duration={800} offset={-80} className="cursor-pointer flex flex-col items-center">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll to discover</span>
          <ArrowDown className="w-5 h-5" />
        </ScrollLink>
      </motion.div>
    </section>
  );
}
