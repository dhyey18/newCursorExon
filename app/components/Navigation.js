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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            {/* <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="MetronixSystem Logo"
                fill
                className="object-contain"
                priority
              />
            </div> */}
            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-steel-800' : 'text-steel-900'
            }`}>
              MetronixSystem
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pathname === item.path 
                    ? 'text-primary-600 bg-primary-50' 
                    : scrolled 
                      ? 'text-steel-700 hover:text-steel-900 hover:bg-steel-100' 
                      : 'text-steel-700 hover:text-steel-900 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="btn-primary ml-4"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled 
                ? 'hover:bg-steel-100 text-steel-600' 
                : 'hover:bg-white/10 text-steel-700'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
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
          <div className={`py-4 space-y-2 ${scrolled ? 'bg-white/95' : 'bg-white/90'} rounded-lg mt-4 backdrop-blur-sm`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors
                  ${pathname === item.path 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-steel-700 hover:text-steel-900 hover:bg-steel-100'
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
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 