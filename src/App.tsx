import React, { useState } from 'react';

// Component imports
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-earth-50/80 backdrop-blur-sm border-b border-earth-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-earth-800">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-earth-600 hover:text-earth-800 transition-colors">About</a>
              <a href="#experience" className="text-earth-600 hover:text-earth-800 transition-colors">Experience</a>
              <a href="#projects" className="text-earth-600 hover:text-earth-800 transition-colors">Projects</a>
              <a href="#contact" className="text-earth-600 hover:text-earth-800 transition-colors">Contact</a>
              <a href="#social" className="text-earth-600 hover:text-earth-800 transition-colors">Social</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-earth-600 hover:text-earth-800 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-earth-50 border-t border-earth-200">
                <a 
                  href="#about" 
                  className="block px-3 py-2 text-earth-600 hover:text-earth-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#experience" 
                  className="block px-3 py-2 text-earth-600 hover:text-earth-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a 
                  href="#projects" 
                  className="block px-3 py-2 text-earth-600 hover:text-earth-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-earth-600 hover:text-earth-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="#social" 
                  className="block px-3 py-2 text-earth-600 hover:text-earth-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Social
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Social />
      </main>

      {/* Footer */}
      <footer className="bg-earth-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-earth-600">
            <p>&copy; 2024 Portfolio. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
