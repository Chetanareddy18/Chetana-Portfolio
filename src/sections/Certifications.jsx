import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronDown, ChevronUp, Clock } from 'lucide-react';

const certGroups = [
  {
    category: "Generative AI & Cloud",
    color: "from-purple-500 to-blue-500",
    border: "hover:border-purple-500/50",
    glow: "bg-purple-500/5",
    certs: [
      { name: "Operationalizing Generative AI Applications (FMOps/LLMOps)", authority: "AWS", link: "#" },
      { name: "AWS Academy Generative AI Foundations", authority: "AWS", link: "#" },
      { name: "Intro to Generative AI: A Beginner's Primer on Core Concepts", authority: "Google Cloud", link: "#" },
      { name: "Watson Services: Rapid Development for AI", authority: "IBM", link: "#" },
    ]
  },
  {
    category: "AI, ML & Data Science",
    color: "from-cyan-500 to-teal-500",
    border: "hover:border-cyan-500/50",
    glow: "bg-cyan-500/5",
    certs: [
      { name: "Mathematics for Machine Learning", authority: "Imperial College London (Coursera)", link: "#" },
      { name: "Probability & Statistics for ML & DS", authority: "DeepLearning.AI", link: "#" },
      { name: "Python for Data Science, AI & Development", authority: "IBM (Coursera)", link: "#" },
      { name: "Python Project for Data Science", authority: "IBM (Coursera)", link: "#" },
      { name: "Data Structures", authority: "University of California San Diego (Coursera)", link: "#" },
      { name: "Introduction to NoSQL Databases", authority: "IBM (Coursera)", link: "#" },
    ]
  },
  {
    category: "Industry Simulations",
    color: "from-orange-500 to-amber-500",
    border: "hover:border-orange-500/50",
    glow: "bg-orange-500/5",
    certs: [
      { name: "GenAI-Powered Data Analytics", authority: "Tata Group (Forage)", link: "#" },
      { name: "Data Visualization for Business Insights", authority: "Tata Group (Forage)", link: "#" },
    ]
  },
  {
    category: "Professional Development",
    color: "from-emerald-500 to-green-500",
    border: "hover:border-emerald-500/50",
    glow: "bg-emerald-500/5",
    certs: [
      { name: "IFDP – International Faculty Development Program", authority: "Woxsen University", link: "#" },
    ]
  },
  {
    category: "In Progress",
    color: "from-slate-400 to-slate-500",
    border: "hover:border-slate-400/50",
    glow: "bg-slate-500/5",
    inProgress: true,
    certs: [
      { name: "Generative AI with LangChain & Hugging Face", authority: "Udemy", link: "#" },
      { name: "Full Stack Development", authority: "NxtWave", link: "#" },
    ]
  },
];

const INITIAL_VISIBLE = 2; // Show 2 groups by default

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleGroups = showAll ? certGroups : certGroups.slice(0, INITIAL_VISIBLE);
  const hiddenCount = certGroups.slice(INITIAL_VISIBLE).reduce((acc, g) => acc + g.certs.length, 0);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Professional <span className="text-brand-purple">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Verified credentials across Generative AI, machine learning, data science, and cloud platforms.
          </p>
        </motion.div>

        <div className="space-y-10">
          <AnimatePresence>
            {visibleGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-white`}>
                    {group.inProgress ? '🔄' : '✦'} {group.category}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.certs.map((cert, ci) => (
                    <motion.div
                      key={ci}
                      initial={{ opacity: 0, x: ci % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: ci * 0.06 }}
                      className={`flex items-start gap-4 p-5 glass rounded-2xl border border-white/5 ${group.border} transition-all duration-300 group relative overflow-hidden`}
                    >
                      <div className={`absolute inset-0 ${group.glow} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      <div className="mt-0.5 shrink-0">
                        {group.inProgress
                          ? <Clock className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                          : <Award className="w-5 h-5 text-brand-purple group-hover:scale-110 transition-transform" />
                        }
                      </div>
                      <div className="relative z-10 flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white mb-1 leading-snug group-hover:text-brand-purple transition-colors">
                          {cert.name}
                        </h3>
                        <p className="text-slate-400 text-xs">{cert.authority}</p>
                      </div>
                      {cert.link && cert.link !== '#' && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                          <ExternalLink className="w-4 h-4 text-brand-purple" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {certGroups.length > INITIAL_VISIBLE && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]"
            >
              {showAll
                ? <> Show Less <ChevronUp className="w-5 h-5" /> </>
                : <> Show More ({hiddenCount} more) <ChevronDown className="w-5 h-5" /> </>
              }
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
