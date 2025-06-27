
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
  title: 'Sorting Algorithm Visualizer',
  description: 'An interactive web-based tool for visualizing how different sorting algorithms work. It dynamically demonstrates the step-by-step process of algorithms like Bubble Sort, Selection Sort, and Insertion Sort, helping users understand their logic and performance.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jeact.js'],
  features: [
    'Visual representation of sorting process with animations',
    'Multiple algorithms: Bubble, Selection, Insertion, and more',
    'Customizable array size and sorting speed',
    'Real-time user interaction and UI feedback'
  ],
  githubLink: 'https://github.com/Anujchoudhary87/Sorting-Algorithm-Visualizer',
  liveLink: null
},

    {
      title: 'Lost and Found Portal',
      description: 'A secure C++ console-based application that allows students to report found items and search for lost ones. The portal uses file handling and object-oriented programming to manage and match item records efficiently.',
      technologies: ['C++', 'OOP', 'File Handling', 'Console I/O', 'STL'],
      features: [
        'User registration and login authentication',
        'Report and record found items with detailed attributes',
        'Search lost items with exact match logic and optional removal',
        'Admin features to view or erase lost and found entries'
      ],
      githubLink: 'https://github.com/Anujchoudhary87/Lost-and-Found-',
      liveLink: null
    },
    



    {
      title: 'Library Management System',
      description: 'A comprehensive C++ application for managing library operations including book cataloging, member management, and loan tracking. Features advanced file handling and object-oriented design patterns.',
      technologies: ['C++', 'File Handling', 'OOP', 'Data Structures'],
      features: [
        'Complete CRUD operations for books and members',
        'Advanced search and filtering capabilities',
        'Automated fine calculation system',
        'Persistent data storage using file I/O'
      ],
      githubLink: 'https://github.com/Anujchoudhary87/Library_management',
      liveLink: null
    },
    
    {
      title: 'Music Player Controller',
      description: 'A console-based music player simulation implementing queue data structures for playlist management and advanced audio controls.',
      technologies: ['C++', 'Queues', 'Linked Lists', 'Algorithm Design'],
      features: [
        'Playlist management with queue operations',
        'Shuffle and repeat functionality',
        'Song navigation and control simulation',
        'Memory-efficient implementation'
      ],
      githubLink: 'https://github.com/Anujchoudhary87/Music_Player',
      liveLink: null
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my technical skills through real-world C++ applications and algorithmic solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    View Code
                  </a>
                </Button>
                {project.liveLink && (
                  <Button 
                    asChild
                    variant="outline" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold"
          >
            <a href="https://github.com/Anujchoudhary87" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
