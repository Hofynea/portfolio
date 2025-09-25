import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"]
  },
  {
    company: "Creative Digital Agency",
    role: "Frontend Developer",
    period: "2020 - 2022",
    description: "Developed responsive web applications and interactive user interfaces for diverse clients. Collaborated closely with designers to bring creative visions to life.",
    technologies: ["React", "Vue.js", "SCSS", "JavaScript", "Figma", "Adobe Creative Suite"]
  },
  {
    company: "StartupX",
    role: "Junior Developer",
    period: "2019 - 2020",
    description: "Built and maintained web applications in a fast-paced startup environment. Contributed to both frontend and backend development while learning industry best practices.",
    technologies: ["JavaScript", "Python", "Django", "React", "MySQL", "Git"]
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 - 2019",
    description: "Provided web development services to small businesses and entrepreneurs. Created custom websites and e-commerce solutions tailored to client needs.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "MySQL", "Photoshop"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-earth-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-earth-400 mx-auto mb-6"></div>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            My professional journey spanning various roles and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-sage-300"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sage-500 rounded-full border-4 border-earth-50 z-10"></div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 ml-16 md:ml-0 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-earth-800">{exp.role}</h3>
                      <span className="text-sm font-medium text-sage-600 bg-sage-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-sage-700 mb-3">{exp.company}</h4>
                    <p className="text-earth-600 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-earth-100 text-earth-700 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;