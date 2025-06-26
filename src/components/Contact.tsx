
import React from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect over our shared passion for technology
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-8 max-w-2xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or help fellow developers with C++ and competitive programming challenges. Feel free to reach out!
              </p>
            </div>

           {/* Contact Details */}
<div className="space-y-10 px-4 sm:px-6 md:px-10">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 text-center sm:text-left">
    <div className="w-12 h-12 mx-auto sm:mx-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <Mail className="text-white" size={20} />
    </div>
    <div>
      <p className="text-white font-semibold">Email</p>
      <a href="mailto:2023eeb1187@iitrpr.ac.in" className="text-blue-400 hover:text-blue-300 transition-colors break-words">
        2023eeb1187@iitrpr.ac.in
      </a>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 text-center sm:text-left">
    <div className="w-12 h-12 mx-auto sm:mx-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
      <Phone className="text-white" size={20} />
    </div>
    <div>
      <p className="text-white font-semibold">Phone</p>
      <a href="tel:+919116082379" className="text-blue-400 hover:text-blue-300 transition-colors">
        +91 91160 82379
      </a>
    </div>
  </div>
</div>


            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://github.com/Anujchoudhary87" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/20 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/anuj-kumar-783352293" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/20 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://shorturl.at/VYuYZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/20 transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>


                
                <a 
                  href="https://codeforces.com/profile/AnujChoudhar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/20 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold text-xs">
                    CF
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
