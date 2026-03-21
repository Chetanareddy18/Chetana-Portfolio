import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-deep/80 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex items-center space-x-2 shrink-0 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30 group-hover:border-brand-purple transition-colors shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <Code2 className="w-6 h-6 text-brand-purple" />
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-cyan-400 tracking-tight">
              Palla Chetana Reddy
            </span>
          </Link>

          {/* Desktop Navigation */}
          {isHome ? (
            <nav className="hidden lg:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="text-sm font-semibold text-slate-300 hover:text-white cursor-pointer relative group transition-colors"
                  activeClass="!text-brand-purple"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full" />
                </ScrollLink>
              ))}
              <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </nav>
          ) : (
             <nav className="hidden lg:flex space-x-8 items-center">
                <Link to="/" className="text-sm font-semibold text-slate-300 hover:text-brand-purple cursor-pointer transition-colors">
                  ← Back to Home
                </Link>
             </nav>
          )}

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && isHome && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-brand-deep/95 backdrop-blur-3xl border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-brand-purple/20 hover:text-brand-purple transition-colors cursor-pointer"
                  activeClass="bg-brand-purple/10 !text-brand-purple"
                >
                  {item.name}
                </ScrollLink>
              ))}
              <div className="flex space-x-4 px-4 py-4 mt-4 border-t border-white/10">
                <a href="https://github.com" className="p-3 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="p-3 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
