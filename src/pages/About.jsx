import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Terminal, Database, Cloud } from 'lucide-react';
import Layout from '../components/Layout';

const allSkills = [
  {
    category: "AI / ML",
    icon: Brain,
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "LLMs", "Computer Vision (CNNs)", "NLP", "Time Series Analysis"]
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs", "Microservices"]
  },
  {
    category: "Data Science",
    icon: Database,
    items: ["Pandas", "NumPy", "SQL", "Star Schema", "Power BI", "Data Modeling"]
  },
  {
    category: "Cloud & Ops",
    icon: Cloud,
    items: ["AWS", "Azure", "Docker", "CI/CD", "Git", "Vector Databases (Pinecone)"]
  }
];

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
              <div className="space-y-6 text-lg text-slate-300">
                <p>
                  I am an Artificial Intelligence Engineer and Full Stack Developer passionate about solving complex problems through data-driven methodologies and scalable software architectures.
                </p>
                <p>
                  With a strong foundation in machine learning, computer vision, and natural language processing, I specialize in translating cutting-edge research into production-ready applications. My experience ranges from developing predictive models for supply chain risk management to building agentic LLM systems and secure AI gateways.
                </p>
                <p>
                  Beyond AI modeling, I possess robust backend engineering skills, ensuring that the intelligent systems I design are performant, scalable, and seamlessly integrated into modern cloud environments.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple to-blue-500 rounded-[2rem] opacity-20 blur-2xl" />
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass border-white/20 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Coding setup"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Arsenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allSkills.map((skillSet, idx) => (
                <div key={idx} className="glass rounded-3xl p-8 border-t border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple">
                      <skillSet.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{skillSet.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillSet.items.map(item => (
                      <span key={item} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-brand-purple/20 hover:text-white hover:border-brand-purple/30 transition-all cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
