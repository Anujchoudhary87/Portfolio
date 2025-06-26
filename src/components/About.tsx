
import React from 'react';
import { GraduationCap, Code, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating efficient solutions and pushing the boundaries of what's possible with code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm currently in my third year of Electrical Engineering at the prestigious 
              Indian Institute of Technology, Ropar, with an expected graduation in 2027. 
              My passion lies in software development, especially in C++, data structures, 
              algorithms, and competitive programming.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I've built multiple real-world C++ projects and actively participate in contests 
              on platforms like Codeforces. My goal is to leverage my technical skills to 
              solve complex problems and create impactful software solutions.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-300">B.Tech in Electrical Engineering</p>
                  <p className="text-blue-400">IIT Ropar • Class of 2027</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Development</h3>
                  <p className="text-gray-300">C++ Developer & Software Engineer</p>
                  <p className="text-blue-400">Building efficient solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Competitive Programming</h3>
                  <p className="text-gray-300">Codeforces & LeetCode Enthusiast</p>
                  <p className="text-blue-400">Solving algorithmic challenges</p>
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
