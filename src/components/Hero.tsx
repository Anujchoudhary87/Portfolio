
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Anuj Kumar
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-200 font-medium">
                C++ Developer & Competitive Programmer
              </p>
              <p className="text-lg text-gray-300 max-w-xl">
                Third-year Electrical Engineering student at IIT Ropar, passionate about 
                building efficient software solutions and solving algorithmic challenges.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <a
  href="https://drive.google.com/drive/u/1/folders/1ICjl5XBDlYpiNkRydAVT8gJokT6cE7sp"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
  >
    <Download className="mr-2" size={20} />
    Download Resume
  </Button>
</a>


              
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Anujchoudhary87" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://linkedin.com/in/anuj-kumar-783352293" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              >
                <Linkedin size={28} />
              </a>

              <a 
                href="https://www.instagram.com/anujchoudharry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://codeforces.com/profile/AnujChoudhary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
              >
                <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  CF
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 p-1 animate-pulse">
                <img 
                  src="/lovable-uploads/5ae5442c-c229-4829-b010-6d8867e16ae7.png"
                  alt="Anuj Kumar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg animate-bounce">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
