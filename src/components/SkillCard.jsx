import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const defaultOptions = {
  max: 35,
  scale: 1.05,
  speed: 1000,
};

export default function SkillCard({ title, items = [], icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1 }}
    >
      <Tilt options={defaultOptions}>
        <div className="group relative glass rounded-2xl p-6 text-center overflow-hidden border border-white/5 hover:border-brand-purple/50 transition-all">

          <Icon className="w-12 h-12 mx-auto mb-4 text-slate-300 group-hover:text-white" />

          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          {/* Hover Skills */}
          <div className="absolute inset-0 bg-brand-deep/95 flex flex-wrap gap-2 items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">

            {items.map((item, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300"
              >
                {item}
              </span>
            ))}

          </div>

        </div>
      </Tilt>
    </motion.div>
  );
}