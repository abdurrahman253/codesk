// components/WhyChooseCodesk.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function WhyChooseCodesk() {
  const pillars = [
    {
      title: 'Innovative Design',
      description:
        'Modern ergonomic layouts engineered to support sustained focus, seamless collaboration, and professional efficiency.',
      icon: (
        <svg className="w-7 h-7 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ),
    },
    {
      title: 'Premium Facilities',
      description:
        'Fully equipped meeting rooms, pantry, prayer room, secure lockers, reception services, and dedicated waiting areas for seamless operations.',
      icon: (
        <svg className="w-7 h-7 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Sustainable Infrastructure',
      description:
        'Energy-efficient systems, responsible resource management, and environmentally conscious operations for long-term workspace reliability.',
      icon: (
        <svg className="w-7 h-7 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-3m-3 0h6m4 0v3m-10-3h-4a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v5m-10 3h4"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 16" />
        </svg>
      ),
    },
    {
      title: 'Professional Environment',
      description:
        'Structured, distraction-minimized atmosphere tailored for startups, freelancers, corporate teams, and business professionals.',
      icon: (
        <svg className="w-7 h-7 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column */}
          <div className="lg:pr-8 lg:border-r lg:border-gray-200">
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm uppercase tracking-wider font-medium text-[#8BC53F] mb-4"
            >
              Why Codesk
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6"
            >
              Why Choose Codesk
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base text-gray-600 leading-relaxed max-w-xl mb-6"
            >
              Codesk delivers a complete professional workspace ecosystem designed for sustained productivity, collaboration, and operational efficiency.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm text-gray-500 font-medium mb-8"
            >
              Trusted venue for corporate training sessions, workshops, youth development programs, and professional events.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/workspaces"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#8BC53F] text-white font-medium rounded-md shadow-sm hover:bg-[#7ab336] transition-colors duration-200"
              >
                Explore Workspaces
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                Book a Tour
              </Link>
            </motion.div>
          </div>

          {/* Right Column – Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeInUp} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">{pillar.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}