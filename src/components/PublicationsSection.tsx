import React from 'react';
import { Download } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { PUBLICATIONS } from '../constants';

// 1. Define the Publication Interface
interface Publication {
  title: string;
  year: string;
  publisher: string;
  description: string;
  coverImage: string;
  downloadUrl?: string; // Optional if provided in data
}

// 2. Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function PublicationsSection(): JSX.Element {
  return (
    <Section id="publications" title="المؤلفات والكتب">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-14"
        dir="rtl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {PUBLICATIONS.map((pub: Publication, idx: number) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="group flex flex-col items-center text-center"
          >
            {/* Book Cover Container */}
            <div className="relative mb-8 overflow-hidden shadow-2xl aspect-[3/4] bg-stone-200 rounded-sm w-full max-w-[280px]">
              <img
                src={pub.coverImage}
                alt={pub.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay with Download Button */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <button className="bg-amber-800 text-white px-6 py-3 rounded shadow-xl flex items-center gap-3 font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <Download size={20} /> تحميل النسخة الكاملة
                </button>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-3">
              <span className="text-sm font-bold text-amber-800 tracking-widest block">
                {pub.year}
              </span>
              
              <h3 className="text-2xl font-serif-heading font-bold text-slate-800 group-hover:text-amber-900 transition-colors">
                {pub.title}
              </h3>
              
              <p className="text-slate-400 font-bold text-sm italic">
                {pub.publisher}
              </p>
              
              <p className="text-slate-600 font-serif-body text-lg leading-relaxed px-2">
                {pub.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}