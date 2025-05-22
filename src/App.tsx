// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CompetencyPage from './pages/CompetencyPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  // 1) Check system preference on initial load.
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem('darkMode');
      if (storedPreference) {
        return JSON.parse(storedPreference);
      }
      // If no stored preference, fallback to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Update localStorage whenever darkMode changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      {/* Wrap the entire app in a container that toggles .dark class */}
      <div className={darkMode ? 'dark' : ''}>
        {/* This container ensures our Tailwind dark classes have effect */}
        <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          {/* Pass down the setter so we can toggle from Navbar or anywhere else */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
              <Route path="/competencies/:title" element={<CompetencyPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
