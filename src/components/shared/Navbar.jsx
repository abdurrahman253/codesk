'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-gray-200 shadow-sm' 
          : 'border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo Section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="block">
              <Image
                src="/assets/images/codesk.png"
                alt="Codesk"
                width={160}
                height={60}
                className="h-14 sm:h-16 md:h-16 lg:h-20 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#8BC53F] relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BC53F] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.button 
              whileHover={{ opacity: 0.7 }}
              className="p-2 text-gray-700 hover:text-[#8BC53F] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1 4m1-4h10m0 0l-1 4m1-4H7m10 4a1 1 0 01-1 1H7a1 1 0 01-1-1v-1H4a1 1 0 00-1 1v3a1 1 0 001 1h14a1 1 0 001-1v-3a1 1 0 00-1-1z" />
              </svg>
            </motion.button>

            <Link
              href="/signin"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#8BC53F] rounded-md shadow-sm hover:bg-[#7AB82F] transition-all duration-300"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#8BC53F] transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Container - Position Absolute and Shadow Fix */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            // absolute, inset-x-0, ebong bg-white bebohar kora hoyeche jate banner-er upore thake
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl lg:hidden z-[60]"
          >
            <div className="px-6 py-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-[#8BC53F] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link 
                  href="/signin" 
                  className="block w-full px-4 py-4 text-center text-base font-bold text-white bg-[#8BC53F] rounded-lg shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}