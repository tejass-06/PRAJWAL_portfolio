import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, BookOpen } from 'lucide-react';


const BlogSection = () => {
  
  const blogPosts = [
    {
      title: 'Building IoT Systems with ESP32 & Firebase',
      excerpt: 'A comprehensive guide to creating connected IoT devices with real-time data synchronization using Firebase.',
      icon: Zap,
      category: 'IoT',
      date: 'April 2024',
      readTime: '8 min',
    },
    {
      title: 'Full-Stack Development: React, Node.js & MongoDB',
      excerpt: 'Explore the complete workflow of building scalable web applications using the MERN stack with best practices.',
      icon: Code2,
      category: 'Web Dev',
      date: 'March 2024',
      readTime: '12 min',
    },
    {
      title: 'Data Structures & Algorithms for Real-World Problems',
      excerpt: 'Understanding DSA concepts and their practical applications in solving complex software engineering challenges.',
      icon: BookOpen,
      category: 'Algorithms',
      date: 'February 2024',
      readTime: '10 min',
    },
    {
      title: 'Deploying Full-Stack Apps to Production',
      excerpt: 'Step-by-step guide to deploying your MERN stack application on Vercel, Render, and MongoDB Atlas.',
      icon: Zap,
      category: 'DevOps',
      date: 'January 2024',
      readTime: '9 min',
    },
  ];

  return (
    <section className={`py-20 relative transition-colors duration-300 ${'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Terminal Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block backdrop-blur border rounded px-4 py-2 mb-4 font-mono bg-black/80 border-orange-600/30">
            <span className={'text-orange-400'}>$</span> <span className={'text-orange-300'}>npm run blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 font-mono">
            Latest Blog Posts
          </h2>
          <p className="mt-4 font-mono text-gray-400">
            <span className={'text-orange-400'}># </span>Thoughts on tech, development, and innovation
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => {
            const Icon = post.icon;
            return (
              <motion.a
                key={i}
                href="#"
                className="group rounded-lg p-6 transition-all cursor-pointer backdrop-blur border bg-black/50 border-orange-600/20 hover:border-orange-500/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.2)',
                }}
              >
                {/* Top Bar */}
                <div className="flex items-start justify-between mb-4">
                  <Icon className="text-orange-400 group-hover:text-orange-300 transition-colors" size={32} />
                  <span className="text-xs px-3 py-1 rounded-full font-mono bg-orange-600/20 text-orange-300">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors font-mono ${
                  'text-cyan-300'
                }`}>
                  {post.title}
                </h3>
                <p className={`mb-4 text-sm leading-relaxed ${
                  'text-gray-400'
                }`}>
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className={`flex items-center justify-between pt-4 border-t ${
                  'border-gray-700'
                }`}>
                  <div className={`flex gap-4 text-xs font-mono ${
                    'text-gray-500'
                  }`}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-orange-400 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-block px-8 py-3 font-mono rounded hover:bg-orange-600/30 transition-all border bg-orange-600/20 border-orange-500 text-orange-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
          >
            {'<'} View All Blog Posts {'/>'} 
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
