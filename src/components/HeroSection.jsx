import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';


const HeroSection = () => {
  
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20"
    >
      {/* Background gradient orbs */}
      <div className={`absolute top-20 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${
        'bg-blue-900'
      }`} />
      <div className={`absolute -bottom-8 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${
        'bg-purple-900'
      }`} />

      <motion.div
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left - Text Content */}
        <div>
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-blue-900/30 text-blue-300">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              'text-gray-100'
            }`}
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Prajwal Fating</span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.a
              href="/resume.txt"
              download="Prajwal_Fating_Resume.txt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
            >
              Download Resume
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 font-semibold rounded-lg transition-all border-gray-700 text-gray-100 hover:text-blue-400"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/prajwal-f15"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-lg transition-all bg-gray-800 text-gray-400 hover:text-blue-400"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prajwal-fating-a1a39034a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-lg transition-all bg-gray-800 text-gray-400 hover:text-blue-400"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:prajwalfating2005@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-lg transition-all bg-gray-800 text-gray-400 hover:text-blue-400"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Right - Professional Photo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          {/* Professional Photo */}
          <motion.div
            className="relative flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20" />
            <img
              src="/profile.jpg"
              alt="Prajwal Fating"
              className={`relative w-72 h-72 object-cover rounded-full shadow-2xl border-4 ${
                'border-gray-800'
              }`}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className={`text-sm ${
            'text-gray-400'
          }`}>Scroll to explore</p>
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            'border-gray-600'
          }`}>
            <motion.div
              className={`w-1 h-2 rounded-full mt-2 ${
                'bg-gray-600'
              }`}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
