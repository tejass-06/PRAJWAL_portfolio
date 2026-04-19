import React from 'react';
import { motion } from 'framer-motion';


const Footer = () => {
  
  
  return (
    <footer className="border-t py-12 transition-colors duration-300 border-gray-700 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Prajwal
            </h3>
            <p className={`text-sm ${'text-gray-400'}`}>
              Building smart systems for the future.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Navigation',
              links: ['Home', 'About', 'Projects', 'Contact'],
            },
            {
              title: 'Resources',
              links: ['GitHub', 'LinkedIn', 'Resume', 'Email'],
            },
            {
              title: 'Tech Stack',
              links: ['React', 'Node.js', 'MongoDB', 'Arduino'],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className={`font-semibold mb-4 ${'text-gray-100'}`}>{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="transition-colors text-sm text-gray-400 hover:text-gray-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className={`border-t pt-8 ${'border-gray-700'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-gray-400">
              © 2024 Prajwal Fating. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="transition-colors text-gray-400 hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors text-gray-400 hover:text-blue-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
