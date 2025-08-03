"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingElements({ variant = "default", density = "medium" }) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const generateElements = () => {
      const densityMap = {
        low: 8,
        medium: 12,
        high: 16
      };
      
      const count = densityMap[density] || 12;
      const newElements = [];

      for (let i = 0; i < count; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * 360,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 5,
          shape: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)],
          opacity: Math.random() * 0.3 + 0.1
        });
      }
      
      setElements(newElements);
    };

    generateElements();
  }, [density]);

  const getShapeElement = (element) => {
    const baseClasses = "absolute pointer-events-none";
    const style = {
      left: `${element.x}%`,
      top: `${element.y}%`,
      width: element.size,
      height: element.size,
      opacity: element.opacity
    };

    switch (element.shape) {
      case 'circle':
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} rounded-full bg-gradient-to-br from-primary-400 to-primary-600`}
            style={style}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      
      case 'square':
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg`}
            style={style}
            animate={{
              y: [-15, 25, -15],
              x: [-15, 15, -15],
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      
      case 'triangle':
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses}`}
            style={style}
            animate={{
              y: [-10, 30, -10],
              x: [-20, 20, -20],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-gradient-to-r from-purple-400 to-purple-600"
              style={{
                borderBottomColor: 'rgb(147, 51, 234)'
              }}
            />
          </motion.div>
        );
      
      case 'hexagon':
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses}`}
            style={style}
            animate={{
              y: [-25, 15, -25],
              x: [-5, 25, -5],
              rotate: [0, 60, 120, 180, 240, 300, 360],
              scale: [1, 0.8, 1.1, 1]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,2 90,25 90,75 50,98 10,75 10,25"
                fill="url(#hexGradient)"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(251, 191, 36)" />
                  <stop offset="100%" stopColor="rgb(245, 158, 11)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (variant === "particles") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: Math.random() * 3,
              duration: Math.random() * 3 + 2,
              repeat: Infinity
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => getShapeElement(element))}
    </div>
  );
}

// Background Video Component
export function BackgroundVideo({ 
  src, 
  poster, 
  opacity = 0.3, 
  overlay = true,
  className = ""
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-primary-900/20" />
      )}
    </div>
  );
}

// Animated Gradient Background
export function AnimatedBackground({ variant = "wave" }) {
  if (variant === "wave") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
            `
          }}
          animate={{
            backgroundPosition: [
              "20% 50%, 80% 20%, 40% 80%",
              "60% 30%, 30% 70%, 80% 40%",
              "20% 50%, 80% 20%, 40% 80%"
            ]
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 gradient-animation opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
    </div>
  );
} 