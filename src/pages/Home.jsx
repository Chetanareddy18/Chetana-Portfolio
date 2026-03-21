import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Brain, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import Skills3D from '../components/Skills3D';
import { projects } from '../data/projects';

const skills = [
  { icon: Brain, title: 'AI / ML', desc: 'PyTorch, TensorFlow, LLMs' },
  { icon: Terminal, title: 'Backend', desc: 'Python, FastAPI, Node.js' },
  { icon: Database, title: 'Data Science', desc: 'Pandas, SQL, EDA' },
  { icon: Cloud, title: 'Cloud', desc: 'AWS, Azure' },
];

export default function Home() {

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 6);

  return (
    <Layout>
      <div className="min-h-screen pt-20">

        {/* HERO */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xl text-slate-400 mb-4">HELLO, I'M YOUR NAME</h2>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">AI Engineer & </span>
                <br />
                <span className="text-gradient">Full Stack Developer</span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
                Building intelligent systems and scalable architectures.
              </p>

              <div className="flex gap-4 justify-center">
                <Link to="/projects">
                  <button className="px-8 py-4 rounded-full bg-brand-purple text-white flex items-center gap-2">
                    View Projects <ArrowRight />
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="px-8 py-4 rounded-full glass text-white">
                    Contact Me
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-24 border-t border-white/5 bg-brand-deep/50 relative z-0">
          <div className="max-w-7xl mx-auto px-4 text-center">

            <h2 className="text-3xl font-bold text-white mb-10">
              Core Competencies
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {skills.map((skill, i) => (
                <div key={i} className="glass p-6 rounded-2xl">
                  <skill.icon className="w-10 h-10 mb-4 text-white" />
                  <h3 className="text-white font-semibold">{skill.title}</h3>
                  <p className="text-slate-400 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>

            {/* 3D SKILLS */}
            <div className="mt-32">
              <Skills3D />
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-24 border-t border-white/5 relative z-50">
          <div className="max-w-7xl mx-auto px-4 pb-60">

            <h2 className="text-3xl font-bold text-white mb-6">
              Projects
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* SHOW MORE BUTTON */}
            {projects.length > 6 && (
              <div className="mt-16 text-center relative z-50">
                <button
                  onClick={() => setShowAll(prev => !prev)}
                  className="px-6 py-3 rounded-full glass text-white hover:bg-brand-purple transition-all"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}

          </div>
        </section>

      </div>
    </Layout>
  );
}