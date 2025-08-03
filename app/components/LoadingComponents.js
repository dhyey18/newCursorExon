"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Advanced Loading Spinner
export function LoadingSpinner({ size = "md", color = "primary" }) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colorClasses = {
    primary: "border-primary-600",
    white: "border-white",
    neutral: "border-neutral-600"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}

// Morphing Loading Dots
export function MorphingDots() {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-primary-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Pulse Loading
export function PulseLoading({ children, className = "" }) {
  return (
    <motion.div
      className={`${className}`}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// Skeleton Loader
export function SkeletonLoader({ 
  width = "100%", 
  height = "1rem", 
  className = "",
  lines = 1,
  spacing = "0.5rem"
}) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className={`skeleton rounded`}
          style={{ 
            width: i === lines - 1 ? "75%" : width, 
            height,
            marginBottom: i < lines - 1 ? spacing : 0
          }}
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Button with loading state
export function LoadingButton({ 
  children, 
  loading = false, 
  className = "", 
  onClick,
  disabled = false,
  variant = "primary"
}) {
  const baseClass = variant === "primary" ? "btn-primary-enhanced" : "btn-secondary";
  
  return (
    <motion.button
      className={`${baseClass} ${className} relative overflow-hidden`}
      onClick={onClick}
      disabled={loading || disabled}
      whileTap={{ scale: loading ? 1 : 0.95 }}
      whileHover={{ scale: loading ? 1 : 1.02 }}
    >
      <motion.span
        animate={{
          opacity: loading ? 0 : 1,
          x: loading ? -20 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          opacity: loading ? 1 : 0,
          x: loading ? 0 : 20
        }}
        transition={{ duration: 0.2 }}
      >
        <LoadingSpinner size="sm" color="white" />
      </motion.div>
    </motion.button>
  );
}

// Progress Bar
export function ProgressBar({ 
  progress = 0, 
  className = "", 
  animated = true,
  color = "primary" 
}) {
  const colorClasses = {
    primary: "bg-primary-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    danger: "bg-red-600"
  };

  return (
    <div className={`w-full h-2 bg-neutral-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className={`h-full ${colorClasses[color]} rounded-full relative`}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        transition={{ 
          duration: animated ? 0.5 : 0, 
          ease: "easeOut" 
        }}
      >
        {animated && (
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

// Floating Action Button
export function FloatingActionButton({ 
  children, 
  onClick, 
  className = "",
  position = "bottom-right" 
}) {
  const positions = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  return (
    <motion.button
      className={`fixed ${positions[position]} w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl z-50 flex items-center justify-center ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      {children}
    </motion.button>
  );
}

// Tooltip Component
export function Tooltip({ children, content, position = "top" }) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <motion.div
        className={`absolute ${positions[position]} px-2 py-1 text-sm bg-neutral-800 text-white rounded whitespace-nowrap z-50 pointer-events-none`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8 
        }}
        transition={{ duration: 0.2 }}
      >
        {content}
        <div className={`absolute w-2 h-2 bg-neutral-800 transform rotate-45 ${
          position === 'top' ? 'top-full -mt-1' :
          position === 'bottom' ? 'bottom-full -mb-1' :
          position === 'left' ? 'left-full -ml-1' :
          'right-full -mr-1'
        }`} />
      </motion.div>
    </div>
  );
} 