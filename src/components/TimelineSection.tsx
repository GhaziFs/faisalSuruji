import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { TIMELINE_DATA } from '../constants'; // Ensure this array is typed as TimelineItem[]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

export default function TimelineSection(): JSX.Element {
  return (
    <Section  title="المسيرة المهنية" bgColor="bg-white">
      <motion.div 
        className="max-w-6xl mx-auto px-4" 
        dir="rtl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {TIMELINE_DATA.map((item, index: number) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              {/* Timeline Node */}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-amber-800 shadow-lg mb-8 z-10 flex items-center justify-center text-white font-bold group-hover:bg-amber-900 group-hover:scale-110 transition-all duration-300 ring-4 ring-amber-50">
                {index + 1}
              </div>
              
              {/* Content Card */}
              <div className="bg-stone-50 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all border border-slate-100 w-full text-right transform group-hover:-translate-y-2 relative flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xl font-bold text-amber-800 font-serif-heading">
                    {item.year}
                  </span>
                  <BriefcaseBusiness size={20} className="text-slate-300 group-hover:text-amber-700 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-serif-heading leading-tight">
                  {item.title}
                </h3>
                
                <div className="text-slate-500 font-bold mb-4 text-xs tracking-wide uppercase">
                  {item.institution}
                </div>
                
                <p className="text-slate-600 leading-relaxed font-serif-body text-base italic mt-auto border-t border-slate-200 pt-4">
                  {item.description}
                </p>

                {/* Subtle bottom hover line */}
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-amber-800 transition-all duration-300 group-hover:w-full rounded-b-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}