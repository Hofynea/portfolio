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
              I'm a full-stack software engineer with a strong backend focus and a clean, practical approach to design. I build tools
              that work - from Flask apps with background scheduling to data dashboards and reminders with intuitive interfaces.
              My strengths lie in clean logic, efficient logic, and solving real problems with tech that feels straightforward
              and useful.
            </p>
            <p className="text-lg text-earth-700 leading-relaxed">
              Outside of work, I build visual stories using AI art tools - creating cinematic, escapist scenes that explore mood,
              space, and stillness. It's how I recharge and experiment with aesthetics, and that visual thinking often makes
              its way back into how I approach UI and product design.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['Python', 'Django', 'Node.js', 'Flask', 'Angular', 'HTML', 'PostgreSQL', 'AWS', 'CSS', 'JavaScript', 'React', 'GitHub Actions', 'Render', 'Streamlit'].map((skill) => (
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
                  <img
                    src="/er_avatar.png"
                    alt="ER Avatar"
                    className="w-full h-full object-cover rounded-2x1"></img>
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