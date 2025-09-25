import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjZjNlZGUxIi8+CjxwYXRoIGQ9Ik0zNTAgMTUwaDEwMHY1MGgtMTAwdi01MHoiIGZpbGw9IiNiODkyNmQiLz4KPHN0cmluZyB0ZXh0PSJBZGQgdG8gQ2FydCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNzA1MjNjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MDAiIHk9IjMwMCI+RS1Db21tZXJjZSBQbGF0Zm9ybTwvdGV4dD4KPC9zdmc+",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjZWVmMGVkIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iMTAiIGZpbGw9IiM4Yzk3ODMiLz4KPHN0cmluZyB0ZXh0PSJUYXNrIE1hbmFnZW1lbnQiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzVkNjU1NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iNDAwIiB5PSIzMDAiPlRhc2sgTWFuYWdlbWVudCBBcHA8L3RleHQ+Cjwvc3ZnPg==",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/example/taskapp",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjZjNlZGUxIi8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjE1MCIgcj0iMzAiIGZpbGw9IiNjZmIwODIiLz4KPHN0cmluZyB0ZXh0PSJXZWF0aGVyIERhc2hib2FyZCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNzA1MjNjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MDAiIHk9IjMwMCI+V2VhdGhlciBEYXNoYm9hcmQ8L3RleHQ+Cjwvc3ZnPg==",
    technologies: ["Vue.js", "JavaScript", "OpenWeather API", "Chart.js"],
    liveUrl: "https://weather.example.com",
    githubUrl: "https://github.com/example/weather",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjZThlMmQ0Ii8+CjxyZWN0IHg9IjMwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2E2N2M1YSIvPgo8dGV4dCB4PSI0MDAiIHk9IjMwMCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNzA1MjNjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qb3J0Zm9saW8gV2Vic2l0ZTwvdGV4dD4KPC9zdmc+",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/example/portfolio",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media performance tracking with data visualization and insights.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjZGRlMWQ5Ii8+CjxyZWN0IHg9IjIwMCIgeT0iMTUwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM4Yzk3ODMiLz4KPHN0cmluZyB0ZXh0PSJTb2NpYWwgTWVkaWEgQW5hbHl0aWNzIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM1ZDY1NTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQwMCIgeT0iMzAwIj5Tb2NpYWwgTWVkaWEgQW5hbHl0aWNzPC90ZXh0Pgo8L3N2Zz4=",
    technologies: ["React", "D3.js", "Python", "Django", "PostgreSQL"],
    liveUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/example/analytics",
    featured: true
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A mobile-first recipe discovery app with ingredient-based search, meal planning, and shopping list generation.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL1sdmciPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iI2ZhZjdmMSIvPgo8Y2lyY2xlIGN4PSI0MDAiIGN5PSIxNTAiIHI9IjIwIiBmaWxsPSIjYmU5NzYzIi8+CjxzdHJpbmcgdGV4dD0iUmVjaXBlIEZpbmRlciIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNzA1NjNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MDAiIHk9IjMwMCI+UmVjaXBlIEZpbmRlciBBcHA8L3RleHQ+Cjwvc3ZnPg==",
    technologies: ["React Native", "Node.js", "MongoDB", "Recipe API"],
    liveUrl: "https://recipes.example.com",
    githubUrl: "https://github.com/example/recipes",
    featured: false
  }
];

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-earth-400 mx-auto mb-6"></div>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            A selection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`relative group ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-sage-200 to-earth-200 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="px-4 py-2 bg-white/90 text-earth-800 rounded-lg font-medium hover:bg-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="px-4 py-2 bg-earth-800/90 text-white rounded-lg font-medium hover:bg-earth-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <h3 className="text-3xl font-bold text-earth-800 mb-4">{project.title}</h3>
                <p className="text-lg text-earth-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      className="inline-flex items-center px-6 py-3 text-white bg-earth-600 hover:bg-earth-700 rounded-lg transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="inline-flex items-center px-6 py-3 text-earth-600 border border-earth-300 hover:bg-earth-100 rounded-lg transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-earth-800 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-earth-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-video bg-gradient-to-br from-sage-200 to-earth-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-earth-800 mb-3">{project.title}</h4>
                  <p className="text-earth-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-sage-100 text-sage-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="text-sm font-medium text-earth-600 hover:text-earth-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="text-sm font-medium text-earth-600 hover:text-earth-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;