import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-deep border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-blue-400">
              Data Scientist
            </span>
          </div>
          
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Palla Chetana Reddy. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Chetanareddy18" className="text-slate-400 hover:text-brand-purple transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/palla-chetana-reddy/" className="text-slate-400 hover:text-brand-purple transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:pallachetana@gmail.com" className="text-slate-400 hover:text-brand-purple transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}