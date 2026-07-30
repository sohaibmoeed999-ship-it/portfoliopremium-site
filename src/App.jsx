import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        <CustomCursor />
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Experience />
          <Projects />
          <GithubStats />
          <Certificates />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
