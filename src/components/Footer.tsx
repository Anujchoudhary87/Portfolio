
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Anuj Kumar</h3>
            <p className="text-gray-300">
              C++ Developer & Competitive Programmer passionate about creating efficient solutions 
              and solving complex algorithmic challenges.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Anujchoudhary87" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/anuj-kumar-783352293" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:2023eeb1187@iitrpr.ac.in"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>C++ Tutoring</li>
              <li>Competitive Programming Help</li>
              <li>C++ Project Support</li>
              <li>Algorithm & Data Structure Guidance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
             
            </p>
            <p className="text-gray-300 text-sm flex items-center mt-2 md:mt-0">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
