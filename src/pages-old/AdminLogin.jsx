import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { adminLogin } from '../utils/api';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await adminLogin(credentials.email, credentials.password);
      login(res.data.token, res.data.admin);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-dark-800/50 backdrop-blur-md border border-neon-purple/30 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Admin Login
          </h1>
          <p className="text-center text-gray-400 mb-8">Manage your portfolio</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-4 py-2 bg-dark-700/50 border border-neon-blue/30 rounded-lg text-white focus:border-neon-cyan/50 focus:outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-2 bg-dark-700/50 border border-neon-blue/30 rounded-lg text-white focus:border-neon-cyan/50 focus:outline-none transition-all"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-900 font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
