import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Target, Code2, Award, Zap, GitBranch, Briefcase, Heart, Eye, Brain, Gauge } from 'lucide-react';


const AboutSection = () => {
  
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const storyCards = [
    {
      icon: Rocket,
      title: 'My Journey',
      description: 'Started with curiosity, built expertise in full-stack development, IoT, and machine learning. Every project is a step toward innovation.',
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-900/30 to-blue-800/30',
      textColor: 'text-blue-300',
      borderColor: 'border-blue-700'
    },
    {
      icon: Lightbulb,
      title: 'What Drives Me',
      description: 'Solving complex problems with elegant solutions. Building products that make a meaningful difference in people\'s lives.',
      gradient: 'from-purple-400 to-purple-600',
      bgGradient: 'from-purple-900/30 to-purple-800/30',
      textColor: 'text-purple-300',
      borderColor: 'border-purple-700'
    },
    {
      icon: Target,
      title: 'Current Focus',
      description: 'Full-stack development, cloud technologies, AI/ML applications. Building beautiful + functional products.',
      gradient: 'from-cyan-400 to-cyan-600',
      bgGradient: 'from-cyan-900/30 to-cyan-800/30',
      textColor: 'text-cyan-300',
      borderColor: 'border-cyan-700'
    }
  ];

  const skills = [
    { title: 'Full Stack Dev', desc: 'MERN stack with React, Node.js, MongoDB' },
    { title: 'AI & ML', desc: 'TensorFlow, Python, Data Science models' },
    { title: 'IoT Solutions', desc: 'Arduino, ESP32, smart automation' },
    { title: 'UI/UX Design', desc: 'Tailwind, animations, responsive design' },
  ];

  const stats = [
    { icon: Zap, label: 'Projects Completed', value: '20+', color: 'from-blue-500 to-blue-600' },
    { icon: Award, label: 'Certifications', value: '5+', color: 'from-purple-500 to-purple-600' },
    { icon: Eye, label: 'Tech Stack', value: '15+', color: 'from-cyan-500 to-cyan-600' },
    { icon: Brain, label: 'Years Learning', value: '5+', color: 'from-pink-500 to-pink-600' },
  ];

  const values = [
    { icon: Heart, title: 'Innovation', desc: 'Always seeking cutting-edge solutions' },
    { icon: Gauge, title: 'Quality', desc: 'Code excellence and best practices' },
    { icon: GitBranch, title: 'Collaboration', desc: 'Open to teamwork and feedback' },
    { icon: Briefcase, title: 'Professionalism', desc: 'Commitment to every project' },
  ];

  return (
    <section id="about" className={`py-32 px-4 relative overflow-hidden transition-colors duration-300 ${'bg-gray-900'}`}>
      {/* Background decorations */}
      <div className={`absolute top-40 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse ${'bg-purple-900'}`} />
      <div className={`absolute -bottom-20 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse ${'bg-blue-900'}`} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={itemVariants}>
            <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${'text-white'}`}>
              About Me
            </h2>
            <div className="flex gap-2 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid lg:grid-cols-3 gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Left Content - Text & Expertise */}
          <motion.div className="lg:col-span-2 space-y-8">
            {/* Main Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className={`text-lg leading-relaxed ${'text-gray-300'}`}>
                I'm a results-driven developer specializing in <span className="text-purple-500 font-semibold">Full-Stack Development</span> and <span className="text-purple-500 font-semibold">Data Science</span>. With a strong foundation in building intelligent systems, I create innovative digital solutions that bridge the gap between technology and real-world needs.
              </p>

              <p className={`text-lg leading-relaxed ${'text-gray-300'}`}>
                As a <span className="text-purple-500 font-semibold">Technical Mentor</span>, I lead initiatives and guide teams through complex challenges. My expertise spans full-stack web development, IoT architecture, and data-driven applications, with a commitment to staying at the forefront of emerging technologies.
              </p>

              <p className={`text-lg leading-relaxed ${'text-gray-300'}`}>
                I'm passionate about <span className="text-purple-500 font-semibold">solving complex problems</span> with elegant solutions, building products that make a meaningful impact, and mentoring the next generation of developers. Every project is an opportunity to innovate and grow.
              </p>
            </motion.div>

            {/* Core Expertise */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className={`text-xl font-bold uppercase tracking-wider ${'text-gray-200'}`}>
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'IoT Systems', 'Data Analysis', 'Backend Architecture', 'ML & AI', 'Cloud Tech', 'Leadership', 'Mentoring'].map((expertise, idx) => (
                  <motion.div
                    key={expertise}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2 rounded-full border-2 font-semibold text-sm transition-all cursor-pointer bg-purple-900/30 border-purple-700/50 text-purple-300 hover:border-purple-500 hover:bg-purple-900/50"
                  >
                    {expertise}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid - Mobile/Tablet */}
            <motion.div className="lg:hidden grid grid-cols-2 gap-4" variants={containerVariants}>
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-xl border-2 shadow-sm hover:shadow-lg transition-all bg-gray-800/50 border-gray-700 hover:border-purple-500"
                  >
                    <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <p className={`text-sm font-medium ${'text-gray-400'}`}>
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div className="hidden lg:flex flex-col gap-6" variants={containerVariants}>
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                  className={`p-8 rounded-xl border-2 shadow-md hover:shadow-xl transition-all group overflow-hidden`}
                  style={{
                    borderColor: '#4b5563',
                    background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.6), rgba(31, 41, 55, 0.6))'
                  }}
                >
                  <div className="text-right">
                    <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <p className={`text-sm font-semibold ${'text-gray-400'}`}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h3 
            variants={itemVariants}
            className={`text-3xl font-bold mb-10 ${'text-white'}`}
          >
            What I Value 🎯
          </motion.h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`p-6 rounded-xl border-2 shadow-sm hover:shadow-lg transition-all text-center group`}
                  style={{
                    borderColor: '#4b5563',
                    background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.5), rgba(31, 41, 55, 0.5))'
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-4 bg-gradient-to-br ${
                    ['from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 'from-pink-500 to-pink-600', 'from-cyan-500 to-cyan-600'][idx]
                  } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${'text-gray-100'}`}>{value.title}</h4>
                  <p className={`text-sm ${'text-gray-400'}`}>{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="p-10 rounded-xl border-2 shadow-sm transition-all bg-gray-800/50 border-gray-700 hover:shadow-lg hover:border-purple-500"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500`}>
              <Code2 className="text-white" size={28} />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${'text-gray-100'}`}>Tech Arsenal</h3>
              <p className={`text-sm ${'text-gray-400'}`}>Technologies I Master</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {['React', 'Node.js', 'Python', 'MongoDB', 'Tailwind', 'GSAP', 'TensorFlow', 'Arduino'].map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.15, y: -5, boxShadow: '0 12px 25px rgba(168, 85, 247, 0.3)' }}
                className="px-4 py-3 rounded-lg border-2 text-center font-semibold transition-all text-sm cursor-pointer bg-gray-700 border-gray-600 text-gray-200 hover:border-purple-500 hover:text-purple-300 hover:shadow-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
