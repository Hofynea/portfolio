import React from 'react';

interface SocialItem {
  id: number;
  title: string;
  description: string;
  type: 'artwork' | 'video' | 'music';
  thumbnail: string;
  url: string;
  platform: string;
  date: string;
}

const socialItems: SocialItem[] = [
  {
    id: 1,
    title: "Digital Dreamscapes",
    description: "AI-generated artwork exploring surreal landscapes and abstract forms",
    type: "artwork",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZjNlZGUxIi8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjQwMCIgcj0iMTAwIiBma`I9IiNiODkyNmQiIG9wYWNpdHk9IjAuMyIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIzMDAiIHI9IjYwIiBmaWxsPSIjOGM5NzgzIiBvcGFjaXR5PSIwLjQiLz4KPHN0cmluZyB0ZXh0PSJBcnR3b3JrIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiM3MDUyM2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQwMCIgeT0iNzAwIj5EaWdpdGFsIERyZWFtc2NhcGVzPC90ZXh0Pgo8L3N2Zz4=",
    url: "https://instagram.com/p/example1",
    platform: "Instagram",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "AI Escapism Series",
    description: "A collection of atmospheric videos created with AI tools for meditation and focus",
    type: "video",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZWVmMGVkIi8+Cjxwb2x5Z29uIHBvaW50cz0iMzAwLDMwMCA1MDAsMzAwIDQwMCw1MDAiIGZpbGw9IiM4Yzk3ODMiLz4KPHN0cmluZyB0ZXh0PSJWaWRlbyIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiBmaWxsPSIjNWQ2NTU2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MDAiIHk9IjcwMCI+QUkgRXNjYXBpc20gU2VyaWVzPC90ZXh0Pgo8L3N2Zz4=",
    url: "https://youtube.com/watch?v=example1",
    platform: "YouTube",
    date: "2024-01-10"
  },
  {
    id: 3,
    title: "Neon Cityscapes",
    description: "Cyberpunk-inspired digital art featuring futuristic urban environments",
    type: "artwork",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZThlMmQ0Ii8+CjxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjYTY3YjVhIi8+CjxyZWN0IHg9IjQwMCIgeT0iMTUwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjYjg5MjZkIi8+CjxzdHJpbmcgdGV4dD0iQXJ0d29yayIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiBmaWxsPSIjNzA1MjNjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MDAiIHk9IjcwMCI+TmVvbiBDaXR5c2NhcGVzPC90ZXh0Pgo8L3N2Zz4=",
    url: "https://behance.net/gallery/example1",
    platform: "Behance",
    date: "2024-01-08"
  },
  {
    id: 4,
    title: "Ambient AI Soundscapes",
    description: "Generative music compositions using AI for creative coding sessions",
    type: "music",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZGRlMWQ5Ii8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjQwMCIgcj0iMTIwIiBzdHJva2U9IiM4Yzk3ODMiIHN0cm9rZS13aWR0aD0iMTAiIGZpbGw9Im5vbmUiLz4KPHN0cmluZyB0ZXh0PSJNdXNpYyIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiBmaWxsPSIjNWQ2NTU2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0MDAiIHk9IjcwMCI+QW1iaWVudCBTb3VuZHNjYXBlczwvdGV4dD4KPC9zdmc+",
    url: "https://soundcloud.com/example1",
    platform: "SoundCloud",
    date: "2024-01-05"
  },
  {
    id: 5,
    title: "Abstract Formations",
    description: "Experimental digital art exploring color, form, and algorithmic beauty",
    type: "artwork",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZmFmN2YxIi8+CjxwYXRoIGQ9Ik0yMDAsMjAwIEw2MDAsMjAwIEw0MDAsMDAwIFoiIGZpbGw9IiNjZmIwODIiIG9wYWNpdHk9IjAuNiIvPgo8cGF0aCBkPSJNMjAwLDYwMCBMNjAwLDYwMCBMNDAwLDQwMCBaIiBmaWxsPSIjYmU5NzYzIiBvcGFjaXR5PSIwLjQiLz4KPHN0cmluZyB0ZXh0PSJBcnR3b3JrIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiM3MDU2M2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQwMCIgeT0iNzAwIj5BYnN0cmFjdCBGb3JtYXRpb25zPC90ZXh0Pgo8L3N2Zz4=",
    url: "https://dribbble.com/shots/example1",
    platform: "Dribbble",
    date: "2024-01-03"
  },
  {
    id: 6,
    title: "Digital Meditation Journey",
    description: "Immersive video experience combining AI visuals with calming narratives",
    type: "video",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZjNlZGUxIi8+CjxlbGxpcHNlIGN4PSI0MDAiIGN5PSI0MDAiIHJ4PSIxNTAiIHJ5PSI4MCIgZmlsbD0iIzhjOTc4MyIgb3BhY2l0eT0iMC41Ii8+CjxzdHJpbmcgdGV4dD0iVmlkZW8iIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0MCIgZmlsbD0iIzVkNjU1NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iNDAwIiB5PSI3MDAiPk1lZGl0YXRpb24gSm91cm5leTwvdGV4dD4KPC9zdmc+",
    url: "https://vimeo.com/example1",
    platform: "Vimeo",
    date: "2023-12-28"
  }
];

const getPlatformIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'behance':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 7.5v9c0 .83.67 1.5 1.5 1.5h5.11c2.59 0 4.64-1.11 4.64-3.5 0-1.95-1.14-2.84-2.29-3.17 0 0 1.67-.6 1.67-2.5 0-1.89-1.18-2.83-3.07-2.83H1.5C.67 5 0 5.67 0 7.5zm3.09 1.43h2.56c.44 0 .78.29.78.65 0 .36-.34.65-.78.65H3.09V8.93zm0 2.74h2.74c.6 0 1.04.29 1.04.77 0 .48-.44.77-1.04.77H3.09v-1.54zM15.5 5h3v1h-3V5zm-1 4c-3.18 0-5.5 2.32-5.5 5.5S11.32 20 14.5 20s5.5-2.32 5.5-5.5S17.68 9 14.5 9zm0 8.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-4.04 4.04a4.368 4.368 0 1 0 6.177 6.177L12 18.177a2.613 2.613 0 0 1-3.693-3.693L12 10.791l3.693 3.693A2.613 2.613 0 0 1 12 18.177l2.496 2.496a4.368 4.368 0 0 0 6.177-6.176l-4.04-4.04a4.368 4.368 0 0 0-3.089-1.279z"/>
        </svg>
      );
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'artwork':
      return '🎨';
    case 'video':
      return '🎬';
    case 'music':
      return '🎵';
    default:
      return '📱';
  }
};

const Social: React.FC = () => {
  return (
    <section id="social" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">Creative Social</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-earth-400 mx-auto mb-6"></div>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Exploring the intersection of technology and art through digital creations, AI-generated content, and immersive experiences
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-earth-100 rounded-full p-1">
            <button className="px-6 py-2 rounded-full text-sm font-medium bg-earth-600 text-white shadow-sm">
              All
            </button>
            <button className="px-6 py-2 rounded-full text-sm font-medium text-earth-600 hover:text-earth-800 transition-colors">
              Artwork
            </button>
            <button className="px-6 py-2 rounded-full text-sm font-medium text-earth-600 hover:text-earth-800 transition-colors">
              Videos
            </button>
            <button className="px-6 py-2 rounded-full text-sm font-medium text-earth-600 hover:text-earth-800 transition-colors">
              Music
            </button>
          </div>
        </div>

        {/* Social Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialItems.map((item) => (
            <div key={item.id} className="group">
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-earth-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="aspect-square bg-gradient-to-br from-sage-200 to-earth-200 overflow-hidden relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <span className="text-2xl">{getTypeIcon(item.type)}</span>
                        <span className="text-sm font-medium">View on {item.platform}</span>
                      </div>
                    </div>
                  </div>
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-earth-800 text-sm font-medium rounded-full">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-earth-800 group-hover:text-earth-900 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sage-600">
                      {getPlatformIcon(item.platform)}
                    </div>
                  </div>
                  
                  <p className="text-earth-600 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-earth-500">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-sm font-medium text-sage-600 group-hover:text-sage-800 transition-colors">
                      {item.platform} →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sage-100 to-earth-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
              Interested in Collaborative Projects?
            </h3>
            <p className="text-lg text-earth-600 mb-6 max-w-2xl mx-auto">
              I'm always exploring new creative territories and love working with other artists, 
              developers, and creative minds. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 text-white bg-earth-600 hover:bg-earth-700 rounded-lg transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </a>
              <a 
                href="https://instagram.com/johndoe_art" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 text-earth-600 bg-white hover:bg-earth-50 rounded-lg transition-colors font-medium border border-earth-300"
              >
                Follow My Art Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;