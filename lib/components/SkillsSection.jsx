import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Radio, Zap } from 'lucide-react';

const SkillsSection = () => {
    const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-orange-500 to-orange-600',
      skills: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'JavaScript'],
      level: 90,
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-orange-600 to-orange-700',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.io'],
      level: 88,
    },
    {
      title: 'IoT & Embedded',
      icon: Radio,
      color: 'from-orange-400 to-orange-500',
      skills: ['Arduino', 'ESP32', 'C/C++', 'MicroPython', 'Serial Communication'],
      level: 82,
    },
    {
      title: 'Data & AI',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      skills: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Data Analysis'],
      level: 85,
    },
  ];

  const allTechs = [
    'React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS',
    'GSAP', 'Framer Motion', 'Arduino', 'ESP32', 'IoT', 'Python',
    'C++', 'Socket.io', 'JWT', 'REST API', 'Git', 'Vite'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-900 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-20 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-orange-900/20 text-orange-300">
              🎯 Technical Expertise
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Skills & <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto text-gray-400"
          >
            Specialized in full-stack development, IoT solutions, and AI/ML applications
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group p-8 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg hover:shadow-2xl transition-all`}
              >
          <div className="mb-6 flex items-center justify-between px-4 py-3 rounded-lg transition-all bg-white/10 group-hover:bg-white/20">
            <div className="p-3 rounded-lg bg-white/20 group-hover:bg-white/30 transition-all">
              <Icon className="text-white" size={28} />
            </div>
            <div className="text-right text-white/90">
                  </div>
                  <span className="px-3 py-1 text-sm font-bold text-white bg-white/20 rounded-full">
                    {category.level}%
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>

                <div className="space-y-2 mb-6">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="text-sm text-white/90 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-white/60 rounded-full" />
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="p-10 rounded-2xl bg-white border-2 border-gray-200 shadow-lg"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">🛠️ Complete Tech Stack</h3>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allTechs.map((tech, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.1, boxShadow: '0 8px 20px rgba(37, 99, 235, 0.2)' }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 text-sm font-semibold text-gray-700 hover:border-blue-400 transition-all cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
