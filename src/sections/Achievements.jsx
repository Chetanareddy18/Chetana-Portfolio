import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Award, Globe, BookOpen, Medal, Zap, Users } from 'lucide-react';

const achievements = [
  {
    title: "Gold Medalist – B.Tech (Data Science)",
    desc: "Woxsen University — Awarded for outstanding academic performance across 1st and 2nd years.",
    icon: Medal,
    tag: "Academic"
  },
  {
    title: "Project Selected – Japan Design Expo",
    desc: "Represented Woxsen University at an international innovation and design showcase.",
    icon: Globe,
    tag: "International"
  },
  {
    title: "Top 10 Winner – Innoverse 12-Hour Hackathon (COTD)",
    desc: "Designed an inclusive website solution for dyslexic students, ranking among the top 10 teams.",
    icon: Trophy,
    tag: "Hackathon"
  },
  {
    title: "NxtWave Consistent Champion",
    desc: "Recognized for sustained excellence in technical learning and competitive coding performance.",
    icon: Star,
    tag: "Excellence"
  },
  {
    title: "Societal Impact Project (SIP) Lead",
    desc: "Established a school library in Aroor Village and led student engagement initiatives.",
    icon: Users,
    tag: "Leadership"
  },
  {
    title: "Winner – Elocution Competition, Quthbullapur Mandal",
    desc: "Secured 1st place among 500+ participants, demonstrating strong public speaking skills.",
    icon: Award,
    tag: "Competition"
  },
  {
    title: "AIR 89 & State Rank 31 – NASO Olympiad",
    desc: "Competed nationally against 2,00,000+ participants across India.",
    icon: Target,
    tag: "Olympiad"
  },
  {
    title: "Master Graduation in Abacus (Age 15)",
    desc: "Completed advanced certification in mental arithmetic at an early age.",
    icon: Zap,
    tag: "Certification"
  },
  {
    title: "Top 10 Performer – National Olympiads",
    desc: "Achieved top rankings in YATT, NSTSE, and START Olympiad examinations.",
    icon: Trophy,
    tag: "Olympiad"
  },
];

const tagColors = {
  Academic: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  International: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  Hackathon: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Excellence: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  Leadership: "text-green-400 border-green-400/30 bg-green-400/10",
  Certification: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Competition: "text-pink-400 border-pink-400/30 bg-pink-400/10",
  Olympiad: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-white/5 bg-brand-deep/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Achievements &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Recognition</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Milestones, awards, and recognitions earned through academic excellence, innovation, and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass p-6 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-2xl rounded-full -mr-10 -mt-10 group-hover:bg-amber-500/15 transition-colors" />
              
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[item.tag] || 'text-slate-400 border-slate-400/30 bg-slate-400/10'}`}>
                  {item.tag}
                </span>
              </div>
              
              <h3 className="text-base font-bold text-white mb-2 relative z-10 leading-snug">{item.title}</h3>
              <p className="text-slate-400 text-sm relative z-10 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
