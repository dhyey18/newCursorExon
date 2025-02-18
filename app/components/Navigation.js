"use client";

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Features', path: '/features' },
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Axon Automation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-xl md:text-2xl font-bold heading-gradient ${
              scrolled ? 'text-neutral-800' : 'text-gray-900'
            }`}>
              Axon Automation
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`nav-link ${pathname === item.path ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="btn-primary ml-4"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-neutral-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors
                  ${pathname === item.path 
                    ? 'nav-link-active' 
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="block w-full mt-4 btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 