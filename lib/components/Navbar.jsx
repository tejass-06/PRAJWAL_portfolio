import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: '/resume' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-lg border-b border-orange-900/50 shadow-lg'
          : 'bg-black/50 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="p-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg">
              <Code className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent cursor-pointer whitespace-nowrap">
              Prajwal
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-12">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="text-sm font-medium transition-colors relative group text-gray-300 hover:text-orange-400 whitespace-nowrap px-1"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex-shrink-0 whitespace-nowrap"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center flex-shrink-0">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 text-gray-300"
              whileHover={{ rotate: 90 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t bg-black/95 border-orange-900/50">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-300 hover:bg-orange-900/30 hover:text-orange-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
