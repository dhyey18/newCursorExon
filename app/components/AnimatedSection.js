"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection({ 
  children, 
  className = "",
  variant = "fadeUp",
  stagger = false,
  delay = 0,
  duration = 0.6,
  threshold = 0.1 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: threshold 
  });

  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 }
    },
    fadeDown: {
      initial: { opacity: 0, y: -40 },
      animate: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 }
    },
    fadeRight: {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    flip: {
      initial: { opacity: 0, rotateX: -90 },
      animate: { opacity: 1, rotateX: 0 }
    },
    slide: {
      initial: { opacity: 0, x: -100, scale: 0.9 },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    bounce: {
      initial: { opacity: 0, y: 60, scale: 0.3 },
      animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: duration
        }
      }
    },
    morphText: {
      initial: { opacity: 0, y: 20, filter: "blur(5px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay
      }
    }
  };

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[variant]}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced Stagger Container
export function StaggerContainer({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {children}
    </motion.div>
  );
}

// Scroll-triggered reveal animation
export function RevealOnScroll({ children, className = "", direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        filter: "blur(10px)"
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directions[direction].y || 0,
        x: isInView ? 0 : directions[direction].x || 0,
        filter: isInView ? "blur(0px)" : "blur(10px)"
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
export function TextReveal({ children, className = "", stagger = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (stagger && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={{
              initial: { opacity: 0, y: 20, rotateX: -90 },
              animate: { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 100
                }
              }
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
} 