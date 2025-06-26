
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'C++ Developer',
      company: 'Self-Driven (GitHub)',
      duration: 'Present',
      location: 'Remote',
      description: [
        'Build C++ projects focused on Data Structures & Object-Oriented Programming',
        'Implement efficient algorithms and data structures for real-world applications',
        'Use GitHub for version control and collaborative development',
        'Create well-documented, maintainable code following best practices'
      ],
      skills: ['C++', 'OOP', 'Data Structures', 'Git', 'GitHub']
    },
    {
      title: 'Competitive Programmer',
      company: 'Codeforces, LeetCode',
      duration: 'Present',
      location: 'Online Platforms',
      description: [
        'Solved hundreds of algorithmic problems across various difficulty levels',
        'Specialized in graphs, dynamic programming, and advanced data structures',
        'Participated in regular contests and coding competitions',
        'Maintained consistent problem-solving practice and skill improvement'
      ],
      skills: ['Algorithms', 'Dynamic Programming', 'Graph Theory', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building expertise through continuous learning and practical application
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>

                {/* Experience card */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2 mt-2 lg:mt-0">
                      <div className="flex items-center text-gray-300">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
