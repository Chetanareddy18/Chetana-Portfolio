import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Calendar, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <button onClick={() => navigate('/projects')} className="text-brand-purple hover:text-white transition-colors">
              Return to Projects
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/projects" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Projects
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 relative shadow-2xl shadow-brand-purple/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent z-10" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                  <span className={`px-3 py-1 rounded-full border ${
                    project.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                    project.status === 'Active' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                    'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-purple" /> Key Features & Outcomes
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 mr-4 shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sidebar Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-brand-deep font-semibold hover:bg-slate-200 transition-colors"
              >
                <Github className="w-5 h-5" /> View Source Code
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
