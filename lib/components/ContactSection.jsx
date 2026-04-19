import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { createMessage } from '../utils/api';


const ContactSection = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createMessage(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'prajwalfating2005@gmail.com',
      href: 'mailto:prajwalfating2005@gmail.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Prajwal Fating',
      href: 'https://www.linkedin.com/in/prajwal-fating-a1a39034a',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'prajwal-f15',
      href: 'https://github.com/prajwal-f15',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nagpur, Maharashtra, India',
      href: '#',
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
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-5 bg-orange-900" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-5 bg-orange-800" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto text-gray-400"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Methods - Pill Layout */}
        <motion.div
          className="mb-20 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3 className={`text-2xl font-bold mb-8 text-center ${'text-gray-100'}`}>
            Get In Touch
          </h3>
          <motion.div className="flex flex-wrap gap-4 justify-center">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all cursor-pointer bg-gray-800 border-blue-500/40 hover:bg-blue-900/20"
                  title={method.value}
                >
                  <Icon className={`flex-shrink-0 ${'text-blue-400'}`} size={18} />
                  <span className={`text-sm font-semibold whitespace-nowrap ${'text-blue-300'}`}>
                    {method.title}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Contact Form & Info */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 p-10 rounded-3xl border-2 shadow-lg transition-colors bg-gray-800 border-gray-700"
          >
            <h3 className={`text-3xl font-bold mb-8 ${'text-gray-100'}`}>Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${'text-gray-300'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all bg-gray-700 border-gray-600 text-gray-100 focus placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${'text-gray-300'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all bg-gray-700 border-gray-600 text-gray-100 focus placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${'text-gray-300'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all bg-gray-700 border-gray-600 text-gray-100 focus placeholder-gray-500"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${'text-gray-300'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-all resize-none bg-gray-700 border-gray-600 text-gray-100 focus placeholder-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-xl font-semibold text-center"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl border-2 transition-colors bg-blue-900/20 border-blue-700">
              <h4 className="text-lg font-bold mb-3 text-blue-300">💬 Response Time</h4>
              <p className="text-sm text-blue-200">I typically respond to messages within 24 hours during weekdays.</p>
            </div>

            <div className="p-8 rounded-3xl border-2 transition-colors bg-purple-900/20 border-purple-700">
              <h4 className="text-lg font-bold mb-3 text-purple-300">🎯 I'm Interested In</h4>
              <ul className="text-sm space-y-2 text-purple-200">
                <li>• Web Development Projects</li>
                <li>• IoT Solutions</li>
                <li>• AI/ML Collaborations</li>
                <li>• Startup Ideas</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border-2 transition-colors bg-green-900/20 border-green-700">
              <h4 className="text-lg font-bold mb-3 text-green-300">🚀 Let's Connect</h4>
              <p className="text-sm mb-4 text-green-200">Follow me on social media for updates and tech insights.</p>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/prajwal-f15"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 rounded-xl hover:shadow-md transition-all bg-gray-700 hover:bg-gray-600"
                >
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/prajwal-fating-a1a39034a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 rounded-xl hover:shadow-md transition-all bg-gray-700 hover:bg-gray-600"
                >
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:prajwalfating2005@gmail.com"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 rounded-xl hover:shadow-md transition-all bg-gray-700 hover:bg-gray-600"
                >
                  <span>Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
