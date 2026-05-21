import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation variants for different section types
export const animationVariants = {
  // Hero sections - fade + slide-up + slight scale
  hero: {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Custom easing for premium feel
      }
    }
  },
  
  // Text content - fade + slide from bottom
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  
  // Images - smooth zoom/fade
  zoomFade: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  
  // Slide with fade (testimonials, cards)
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  
  // CTA sections - scale + fade
  scaleFade: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  
  // Container for stagger children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  
  // Individual stagger items
  staggerItem: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
};

// Main AnimatedSection component
const AnimatedSection = ({ 
  children, 
  variant = 'fadeUp', 
  delay = 0,
  className = '',
  threshold = 0.1,
  once = false // Set to false to replay animations
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: once, // Animation replays when false
    amount: threshold,
    margin: "-50px" // Trigger slightly before entering viewport
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants[variant]}
      style={{ transitionDelay: `${delay}s` }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for cards/grids
export const StaggerContainer = ({ 
  children, 
  className = '',
  threshold = 0.1 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: threshold,
    margin: "-50px"
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants.staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item
export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={animationVariants.staggerItem}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
