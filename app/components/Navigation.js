"use client";

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/20 backdrop-blur-xl shadow-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated border gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-primary-500/20 transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-400 rounded-xl shadow-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
            </motion.div>
            <motion.span 
              className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600 bg-clip-text text-transparent ${
                scrolled ? 'drop-shadow-sm' : ''
              }`}
              whileHover={{ scale: 1.02 }}
            >
              MetronixSystem
            </motion.span>
          </Link>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.path}
                  className={`relative px-5 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    pathname === item.path 
                      ? 'text-primary-600 bg-primary-50/80 backdrop-blur-sm shadow-sm' 
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-white/50 backdrop-blur-sm'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-400/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                href="/contact"
                className="ml-4 btn-primary-enhanced"
              >
                <span>Get Quote</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-3 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              <motion.span
                className="absolute h-0.5 w-6 bg-neutral-700 rounded-full"
                style={{ top: "25%" }}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-neutral-700 rounded-full"
                style={{ top: "50%" }}
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-neutral-700 rounded-full"
                style={{ top: "75%" }}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 mt-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl">
                <div className="space-y-2 px-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          pathname === item.path 
                            ? 'text-primary-600 bg-primary-50/80 backdrop-blur-sm shadow-sm' 
                            : 'text-neutral-700 hover:text-primary-600 hover:bg-white/30'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <Link 
                      href="/contact"
                      className="block w-full btn-primary-enhanced text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Quote
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 