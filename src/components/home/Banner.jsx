'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full h-screen min-h-[600px] md:h-[700px] lg:h-screen">
        <Image
          src="/assets/images/codesk-banner.jpeg"
          alt="Codesk Executive Workspaces"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />

        {/* Single Dark Overlay - Subtle and Professional */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16 text-center text-white">
          
          {/* Main Headline - Bold, Executive, No Gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-normal leading-[1.15] mb-6 md:mb-8 text-white"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Executive Workspaces Built for Sustainable Growth
          </motion.h1>

          {/* Subheadline - Professional and Concise */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-10 md:mb-14 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-gray-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Premium shared office spaces built for professionals who demand excellence. We combine quality infrastructure, sustainable practices, and collaborative environments to support your business growth.
          </motion.p>

          {/* CTA Buttons Container */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            {/* Primary CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/workspaces"
                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base sm:text-lg font-semibold text-white bg-[#8BC53F] rounded-lg transition-all duration-300 hover:bg-[#7AB82F] shadow-lg hover:shadow-xl"
              >
                Explore Workspaces
              </Link>
            </motion.div>

            {/* Secondary CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-[#454199] uppercase transition-all duration-300 bg-white border-2 border-[#454199] hover:bg-[#454199] hover:text-white rounded-lg"
              >
                Schedule a Visit
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators - Optional Subtle Addition */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/20"
          >
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-2">500+</p>
                <p className="text-sm text-gray-300 font-normal">Active Members</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-2">25+</p>
                <p className="text-sm text-gray-300 font-normal">Prime Locations</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-2">98%</p>
                <p className="text-sm text-gray-300 font-normal">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;