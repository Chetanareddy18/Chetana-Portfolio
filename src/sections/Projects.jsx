import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_COUNT = 6;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 bg-brand-deep/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Engineering intelligent systems that act as solution gateways to real-world problems through AI and data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayed.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index < INITIAL_COUNT ? 0 : (index - INITIAL_COUNT) * 0.08 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show More ({projects.length - INITIAL_COUNT} more) <ChevronDown className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
