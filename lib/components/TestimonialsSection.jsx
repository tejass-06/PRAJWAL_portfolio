import React from 'react';
import { motion } from 'framer-motion';


const TestimonialsSection = () => {
  
  const testimonials = [
    {
      name: 'Dr. Singh',
      role: 'College Professor',
      text: 'Prajwal is an exceptional developer with outstanding problem-solving skills.',
      image: '👨‍🏫',
    },
    {
      name: 'Internship Manager',
      role: 'Tech Company',
      text: 'Great work on the Arduino project. Creative and efficient implementation.',
      image: '👔',
    },
    {
      name: 'Project Lead',
      role: 'Startup',
      text: 'Impressive full-stack development skills and dedication to quality.',
      image: '🚀',
    },
  ];

  return (
    <section className={`py-20 relative transition-colors duration-300 ${'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className={`backdrop-blur-md border rounded-xl p-6 transition-all ${
                'bg-gray-800/50 border-blue-700/30 hover
                  : 'bg-gray-50/50 border-blue-300/30 hover:border-blue-400/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className={`font-semibold ${'text-gray-100'}`}>{testimonial.name}</h4>
                  <p className={`text-sm ${'text-gray-400'}`}>{testimonial.role}</p>
                </div>
              </div>
              <p className={`italic ${'text-gray-300'}`}>"{testimonial.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
