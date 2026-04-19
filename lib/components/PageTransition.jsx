import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
