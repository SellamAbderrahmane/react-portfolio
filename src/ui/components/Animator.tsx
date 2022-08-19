import * as React from 'react';
import { motion } from 'framer-motion';

import { useLocation } from 'react-router-dom';

export function Animator({ children, ...rest }) {
  const location = useLocation();
  const width_variants = {
    hidden: {
      x: -window.innerWidth,
      opacity: 0.3,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: window.innerWidth,
      transition: { ease: 'easeInOut', duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={rest.className}
      variants={width_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default Animator;
