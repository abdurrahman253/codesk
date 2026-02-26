// app/page.jsx - Fixed Server Component Error
'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Banner from "@/components/home/Banner";
import WhyChooseCodesk from '@/components/shared/WhyChooseCodesk';

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <Banner />
      
      <WhyChooseCodesk />
      
    </>
  );
}
