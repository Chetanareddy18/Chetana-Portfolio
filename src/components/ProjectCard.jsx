import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}   // ✅ FIXED (removed whileInView)
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`} className="block group">
        
        {/* ❌ removed overflow-hidden from main container */}
        <div className="glass rounded-2xl glass-hover h-full flex flex-col relative">
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md border ${
              project.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
              project.status === 'Active' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
              'bg-amber-500/20 text-amber-300 border-amber-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 bg-brand-deep/20 group-hover:bg-transparent transition-colors z-0" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* CONTENT */}
          <div className="p-6 flex flex-col flex-grow">
            
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-purple transition-colors flex justify-between items-start">
              {project.title}
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-brand-purple" />
            </h3>
            
            <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techTags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-300 border border-white/10 group-hover:border-white/20 transition-colors">
                  {tag}
                </span>
              ))}
              {project.techTags.length > 3 && (
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400 border border-transparent">
                  +{project.techTags.length - 3}
                </span>
              )}
            </div>

          </div>
        </div>

      </Link>
    </motion.div>
  );
}