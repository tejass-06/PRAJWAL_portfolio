import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Trophy, Star } from 'lucide-react';


const AchievementsSection = () => {
  
  const achievements = [
    {
      icon: Medal,
      title: 'Campus Tech Innovation Hackathon',
      subtitle: '2024 Winner',
      description: 'Won for innovative IoT solution for smart agriculture',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Star,
      title: 'Outstanding Academic Performance',
      subtitle: 'CGPA: 9.5/10',
      description: 'Consistently top performer in B.Tech Data Science',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'Research Publication',
      subtitle: 'IoT Applications in Smart Systems',
      description: 'Published research on emerging IoT technologies',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const certifications = [
    { 
      name: 'Python Programming Master Class', 
      issuer: 'Completed',
      year: 2024,
      badge: '⭐'
    },
    { 
      name: 'Machine Learning Specialization', 
      issuer: 'In Progress',
      year: 2024,
      badge: '🤖'
    },
    { 
      name: 'AWS Cloud Basics', 
      issuer: 'Completed',
      year: 2023,
      badge: '☁️'
    },
    { 
      name: 'Full Stack Web Development', 
      issuer: 'Completed',
      year: 2023,
      badge: '💻'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
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
    <section id="achievements" className={`py-24 px-4 relative overflow-hidden transition-colors duration-300 ${'bg-gray-900'}`}>
      {/* Decorative background */}
      <div className={`absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${'bg-blue-900'}`} />
      <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${'bg-purple-900'}`} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              'bg-yellow-900/30 text-yellow-300' text-yellow-600'
            }`}>
              🏆 Achievements & Certifications
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              'text-gray-100'
            }`}
          >
            Recognition & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Milestones</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${
              'text-gray-400'
            }`}
          >
            Awards, certifications, and accomplishments that showcase my dedication to excellence
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group p-8 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-lg hover:shadow-2xl transition-all`}
              >
                <div className="mb-6 p-4 rounded-xl bg-white/20 group-hover:bg-white/30 transition-all w-fit">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-white/90 font-semibold mb-3">{achievement.subtitle}</p>
                <p className="text-white/80 leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className={`p-10 rounded-2xl border-2 shadow-lg transition-colors ${
            'bg-gray-800 border-gray-700' from-gray-50 to-white border-gray-200'
          }`}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3 className={`text-3xl font-bold mb-4 ${
            'text-gray-100'
          }`}>📜 Certifications & Credentials</h3>
          <p className={'text-gray-400 mb-8' mb-8'}>Professional certifications and training courses</p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  'bg-gray-700 border-blue-600 hover hover:shadow-lg'
                    : 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className={`text-lg font-bold ${
                      'text-gray-100'
                    }`}>{cert.name}</h4>
                    <p className={`text-sm font-semibold mt-1 ${
                      cert.issuer === 'Completed'
                        ? 'text-green-400'
                        : 'text-orange-400'
                    }`}>
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-3xl">{cert.badge}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    'bg-blue-900/30 text-blue-300' text-blue-600'
                  }`}>
                    {cert.year}
                  </span>
                  {cert.issuer === 'Completed' && (
                    <span className="text-green-600 font-semibold text-sm">✓ Verified</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {[
            { number: '1', label: 'Hackathon Winner' },
            { number: '9.5', label: 'CGPA' },
            { number: '4+', label: 'Certifications' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`text-center p-6 rounded-xl border ${
                'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700' from-blue-50 to-purple-50 border-blue-200'
              }`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className={`font-semibold ${'text-gray-300'}`}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
