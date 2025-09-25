import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-sage-400 to-earth-400 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-earth-800 mb-6">
            <span className="block">John Doe</span>
            <span className="block text-3xl md:text-4xl font-normal text-sage-600 mt-2">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-earth-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web experiences and exploring the intersection of technology and art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-earth-600 hover:bg-earth-700 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-earth-600 bg-earth-100 hover:bg-earth-200 rounded-lg transition-colors border border-earth-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;