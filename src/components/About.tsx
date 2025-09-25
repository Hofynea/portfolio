import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-earth-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-earth-700 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              digital experiences that matter. My journey in technology began with curiosity and has 
              evolved into a career focused on building innovative solutions.
            </p>
            <p className="text-lg text-earth-700 leading-relaxed">
              When I'm not coding, you'll find me exploring digital art, experimenting with AI-generated 
              content, or diving into the latest web technologies. I believe in the power of technology 
              to create meaningful connections and solve real-world problems.
            </p>
            <p className="text-lg text-earth-700 leading-relaxed">
              My approach combines technical expertise with creative vision, ensuring that every project 
              not only functions flawlessly but also provides an engaging user experience.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-sage-200 to-earth-200 rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-sage-300/20 to-earth-300/20 flex items-center justify-center">
                <div className="text-center text-earth-600">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg font-medium">Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;