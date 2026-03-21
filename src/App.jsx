import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Theme
import { ThemeProvider } from './context/ThemeContext';

// Core Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';

// Multi-sections for SPA Home
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

// Individual Pages
import ProjectDetails from './pages/ProjectDetails';

function RouteChangeHandler() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (pathname !== '/') window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainSPA() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainSPA />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-brand-deep relative transition-colors duration-500">
          <ParticleBackground />
          <ScrollToTop />
          <RouteChangeHandler />
          <Navbar />
          <main className="flex-grow selection:bg-brand-purple/30 selection:text-white">
            <AnimatedRoutes />
          </main>
          <Footer />
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
