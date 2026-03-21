import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {

  // 🔥 STATE TO CONTROL HOW MANY PROJECTS TO SHOW
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(projects.length); // show all
  };

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Projects
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A collection of intelligent systems, AI-driven solutions, and high-impact projects.
            </p>
          </motion.div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* 🔥 SHOW MORE BUTTON */}
          {visibleCount < projects.length && (
            <div className="text-center mt-12">
              <button
                onClick={showMore}
                className="px-6 py-3 rounded-full bg-brand-purple text-white hover:bg-brand-purple/80 transition"
              >
                Show More 🚀
              </button>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}