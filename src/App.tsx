// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SectionRefsProvider } from './components/SectionRefsContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToSection from './components/ScrollToSection';

const App: React.FC = () => (
  <SectionRefsProvider>
    <Router>
      <ScrollToSection />
      <div className="flex h-screen">
        <Navigation />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  </SectionRefsProvider>
);

export default App;
