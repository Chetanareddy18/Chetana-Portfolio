import React from 'react';
import { motion } from 'framer-motion';
import Skills3D from '../components/Skills3D';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 bg-brand-deep/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 relative z-30 pointer-events-none"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-cyan-400">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A focused skill set across AI, data science, and development, applied to building scalable and intelligent real-world solutions.
          </p>
        </motion.div>

      </div>
      
      {/* Full width interactive 3D canvas */}
      <div className="w-full relative -mt-20">
        <Skills3D />
      </div>
        
    </section>
  );
}
