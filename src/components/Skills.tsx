
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'C++', level: 95 },
    { name: 'Data Structures & Algorithms', level: 90 },
    { name: 'Object-Oriented Programming', level: 88 },
    { name: 'STL (Standard Template Library)', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'Git & Version Control', level: 80 },
    { name: 'VS Code', level: 85 },
    { name: 'File Handling', level: 82 }
  ];

  const softSkills = [
    'Analytical Thinking',
    'Problem-Solving',
    'Self-Learning',
    'Team Collaboration',
    'Time Management',
    'Critical Thinking',
    'Attention to Detail',
    'Communication'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>


           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
