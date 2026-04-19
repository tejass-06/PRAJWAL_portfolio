import React, { useState, useEffect } from 'react';
import { Code2, ExternalLink, Github, ChevronDown } from 'lucide-react';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
  const [expandedTags, setExpandedTags] = useState({});

  // Fallback projects with gradient colors
  const fallbackProjects = [
    {
      id: 1,
      title: 'Smart Agriculture System',
      description: 'IoT-based agricultural monitoring and control system with real-time analytics and alerts.',
      technologies: ['IoT', 'Python', 'React', 'Arduino', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-blue-400 to-blue-600',
      thumbnail: '??'
    },
    {
      id: 2,
      title: 'Smart Inventory Management',
      description: 'Automated inventory tracking system with barcode scanning and predictive analytics.',
      technologies: ['Node.js', 'MongoDB', 'React', 'OpenCV', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-purple-400 to-purple-600',
      thumbnail: '??'
    },
    {
      id: 3,
      title: 'RFID Attendance System',
      description: 'Modern attendance management system using RFID technology with automated reporting.',
      technologies: ['RFID', 'Express.js', 'PostgreSQL', 'React', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-cyan-400 to-cyan-600',
      thumbnail: '??'
    },
    {
      id: 4,
      title: 'Emergency Spare-Part Delivery',
      description: 'Real-time logistics platform for urgent spare parts delivery with GPS tracking.',
      technologies: ['Geolocation', 'Maps API', 'Node.js', 'React Native', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-pink-400 to-pink-600',
      thumbnail: '??'
    }
  ];

  useEffect(() => {
    setProjects(fallbackProjects);
  }, []);

  const toggleTags = (projectId) => {
    setExpandedTags(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const renderTags = (technologies, projectId) => {
    const visibleTags = expandedTags[projectId] ? technologies : technologies.slice(0, 3);
    const remainingCount = technologies.length - 3;

    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {visibleTags.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full border transition-colors bg-blue-900/30 text-blue-300 border-blue-700 hover:border-blue-600">
            {tech}
          </span>
        ))}
        {remainingCount > 0 && !expandedTags[projectId] && (
          <button
            onClick={() => toggleTags(projectId)}
            className="px-3 py-1 text-xs font-medium rounded-full border transition-colors flex items-center gap-1 bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
          >
            +{remainingCount}
            <ChevronDown size={12} />
          </button>
        )}
        {expandedTags[projectId] && remainingCount > 0 && (
          <button
            onClick={() => toggleTags(projectId)}
            className="px-3 py-1 text-xs font-medium rounded-full border transition-colors flex items-center gap-1 bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
          >
            Show Less
            <ChevronDown size={12} className="rotate-180" />
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-900/30">
              <Code2 className="text-blue-400" size={24} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100">
              Featured Projects
            </h2>
          </div>
          <p className={`text-lg max-w-2xl ${
            'text-gray-400'
          }`}>
            Explore my latest work showcasing modern technologies, innovative solutions, and practical implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
                className="group bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-700/50"
            >
              {/* Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.thumbnail}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-orange-300 group-hover:text-orange-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description - 2 lines max */}
                <p className="text-sm mb-4 line-clamp-2 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                {renderTags(project.technologies, project.id)}

                {/* Buttons */}
                <div className={`flex gap-3 pt-4 border-t ${
                  'border-gray-600'
                }`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    <span className="hidden sm:inline">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more projects? Check out my GitHub for the complete portfolio.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Github size={20} />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
