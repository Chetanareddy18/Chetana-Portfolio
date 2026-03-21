import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Activity, Code, Server } from 'lucide-react';

const experiences = [
  {
    role: "AI Developer Intern",
    company: "Quadone Technologies, Hyderabad",
    period: "April 2025 – May 2025",
    points: [
      "Engineered an AI-powered WhatsApp chatbot using RAG handling 100+ daily queries",
      "Implemented vector-based semantic retrieval improving accuracy by 25%",
      "Reduced hallucinations using context-aware retrieval pipelines",
      "Designed and deployed chatbot landing page for seamless UX",
      "Worked on AI agents and healthcare analytics dashboards"
    ],
    icon: Activity
  },
  {
    role: "WordPress Developer Intern",
    company: "Sarvani Software Solutions Pvt Ltd",
    period: "May 2025 – June 2025",
    points: [
      "Developed responsive WordPress websites using Elementor and custom CSS",
      "Improved mobile responsiveness and boosted performance by 30%",
      "Integrated and optimized third-party plugins",
      "Maintained consistent UI/UX across all pages"
    ],
    icon: Server
  },
  {
    role: "Web Developer",
    company: "Institute of Technical and Scientific Research",
    period: "June 2025 – July 2025",
    points: [
      "Built user-focused web features aligned with project goals",
      "Collaborated with cross-functional teams",
      "Enhanced platform performance and user engagement"
    ],
    icon: Code
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Work <span className="text-brand-purple">Experience</span>
          </h2>
          <p className="text-slate-400">A timeline of my professional journey and contributions.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 md:-ml-px top-0 h-full w-0.5 bg-gradient-to-b from-brand-purple/50 via-cyan-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-brand-deep border-4 border-brand-purple z-10 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="w-full pl-12 md:pl-0 md:w-1/2">
                  <div className={`p-6 glass rounded-2xl hover:border-brand-purple/50 transition-colors group ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                          <exp.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-brand-purple font-medium text-sm tracking-wide uppercase">{exp.company}</p>
                      <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {exp.period}
                      </p>
                    </div>

                    {/* 🔥 BULLET POINTS */}
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-brand-purple mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}