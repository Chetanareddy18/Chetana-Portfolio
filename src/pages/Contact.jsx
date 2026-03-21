import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import Layout from '../components/Layout';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    alert("Message sent! (Mock)");
  };

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Interested in collaborating on AI solutions or full-stack architectures? Let's connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-purple/50 transition-colors">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400">Email</h3>
                  <a href="mailto:hello@example.com" className="text-lg font-semibold text-white hover:text-brand-purple transition-colors">hello@example.com</a>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-purple/50 transition-colors">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400">LinkedIn</h3>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-lg font-semibold text-white hover:text-brand-purple transition-colors">Connect with me</a>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-purple/50 transition-colors">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400">GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-lg font-semibold text-white hover:text-brand-purple transition-colors">View repositories</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 glass p-8 rounded-3xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-brand-deep/50 border border-white/10 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-brand-deep/50 border border-white/10 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-brand-deep/50 border border-white/10 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none"
                    placeholder="How can we work together?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-medium flex items-center justify-center gap-2 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(139,92,246,0.3)]"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
