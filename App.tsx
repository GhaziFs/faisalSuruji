import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TimelineSection from './components/TimelineSection';
import QuotesSection from './components/QuotesSection';
import PublicationsSection from './components/PublicationsSection';
import ArticlesSection from './components/ArticlesSection';
import Footer from './components/Footer';

// Define the interface for the Props
interface ScrollRevealProps {
  children: ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen text-right bg-[#fdfcf8] overflow-x-hidden">
      <Navbar />
      
      <Hero />

      <ScrollReveal>
        <TimelineSection />
      </ScrollReveal>

      <ScrollReveal>
        <QuotesSection />
      </ScrollReveal>

      <ScrollReveal>
        <PublicationsSection />
      </ScrollReveal>

      <ScrollReveal>
        <ArticlesSection />
      </ScrollReveal>

      <Footer />
    </div>
  );
}