import React, { useState } from 'react';
import { Eye, X } from 'lucide-react'; // استبدال Download بـ Eye
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { PUBLICATIONS } from '../constants';

// 1. Define the Publication Interface
interface Publication {
  title: string;
  year: string;
  publisher: string;
  description: string;
  coverImage: string;
  pdfUrl?: string; // تم تغيير المسمى ليكون أدق
}

// 2. Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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
  // حالة للتحكم في الكتاب المفتوح
  const [activePdf, setActivePdf] = useState<Publication | null>(null);

  return (
    <Section id="publications" title="المؤلفات ">
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

              {/* Overlay with View Button */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <button 
                  onClick={() => setActivePdf(pub)}
                  className="bg-amber-800 text-white px-6 py-3 rounded shadow-xl flex items-center gap-3 font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 hover:bg-amber-700"
                >
                  <Eye size={20} /> تصفح 
                </button>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-3 px-4">
              <span className="text-sm font-bold text-amber-800 tracking-widest block">
                {pub.year}
              </span>
              
              <h3 className="text-2xl font-serif-heading font-bold text-slate-800 group-hover:text-amber-900 transition-colors">
                {pub.title}
              </h3>
              
              <p className="text-slate-400 font-bold text-sm italic">
                {pub.publisher}
              </p>
              
              <p className="text-slate-600 font-serif-body text-lg leading-relaxed line-clamp-3">
                {pub.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- نافذة عرض الـ PDF --- */}
      <AnimatePresence>
        {activePdf && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* الخلفية المظلمة */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePdf(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            />
            
            {/* حاوية العرض */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white w-full h-full max-w-6xl rounded-lg overflow-hidden shadow-2xl flex flex-col"
            >
              {/* شريط الأدوات العلوي للنافذة */}
              <div className="bg-stone-100 p-4 border-b flex justify-between items-center" dir="rtl">
                <div>
                  <h3 className="font-bold text-slate-800">{activePdf.title}</h3>
                  <p className="text-xs text-slate-500">{activePdf.publisher} - {activePdf.year}</p>
                </div>
                <button 
                  onClick={() => setActivePdf(null)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
                  title="إغلاق"
                >
                  <X size={24} />
                </button>
              </div>

              {/* عارض الـ PDF باستخدام iframe */}
              <div className="flex-1 bg-slate-100">
                <iframe
                  src={`${activePdf.pdfUrl}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none"
                  title={activePdf.title}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}