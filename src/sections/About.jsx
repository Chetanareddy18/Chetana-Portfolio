import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-me.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              About <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-cyan-400">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-300">
              <p>
                An aspiring Data Scientist and AI Engineer focused on solving complex problems through data-driven methodologies and intelligent system design.
              </p>
              <p>
                Strong foundation in Machine Learning, Deep Learning, and Generative AI, with hands-on experience in building predictive models and scalable AI solutions. Passionate about transforming data into impactful, real-world applications.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-3xl font-black text-white mb-1">20+</h4>
                  <p className="text-sm font-medium text-brand-purple uppercase tracking-wider">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white mb-1">REAL-WORLD</h4>
                  <p className="text-sm font-medium text-brand-purple uppercase tracking-wider">AI Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple to-blue-500 rounded-[2rem] opacity-20 blur-2xl animate-pulse" />
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/20 p-2 transform-gpu shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                   <img 
                   src={aboutImg}
                   alt="Coding setup"
                   className="w-full h-full object-cover rounded-2xl"
                   />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent z-10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
