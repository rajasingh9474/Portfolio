import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundGlow } from './components/background/BackgroundGlow';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative selection:bg-indigo-500 selection:text-white">
        {/* Animated ambient background */}
        <BackgroundGlow />

        {/* Sticky glassmorphic navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
