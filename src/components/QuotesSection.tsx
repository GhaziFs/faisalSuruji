import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { QUOTES } from '../constants';

// 1. Define the Quote Interface
interface Quote {
  text: string;
  source: string;
}

// 2. Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Slower stagger for a more dramatic effect
    },
  },
};

const quoteVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const bgIconVariants: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { 
    opacity: 0.05, 
    rotate: 0, 
    transition: { duration: 2, ease: "easeOut" } 
  },
};

export default function QuotesSection(): JSX.Element {
  return (
    <Section id="quotes" bgColor="bg-stone-900" className="relative overflow-hidden">
      {/* Background Decorative Icon with Animation */}
      <motion.div 
        className="absolute top-0 right-0 p-20 pointer-events-none"
        variants={bgIconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <QuoteIcon size={300} className="text-amber-600" />
          
      </motion.div>
       

      <div className="max-w-4xl mx-auto px-4 relative z-10" dir="rtl">
        <motion.div 
          className="flex flex-col items-center text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Pulsing Central Icon */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <QuoteIcon size={56} className="text-amber-500" />
          </motion.div>

          <div className="space-y-20">
            {QUOTES.map((quote: Quote, idx: number) => (
              <motion.div 
                key={idx} 
                className="space-y-8"
                variants={quoteVariants}
              >
                <blockquote className="font-serif-heading text-3xl md:text-5xl text-stone-100 italic leading-snug">
                  "{quote.text}"
                </blockquote>
                <cite className="block text-amber-500 font-bold text-xl tracking-wide">
                  — {quote.source}
                </cite>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}