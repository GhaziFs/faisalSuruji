import React from 'react';
import { GraduationCap, Backpack, Award, NotebookPen,MapPin ,Plane  } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { ACADEMIC_DATA } from '../constants'; 

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const getAcademicIcon = (index: number) => {
  const icons = [<Backpack />, <NotebookPen />, <Award />, <GraduationCap /> , <Plane />];
  return icons[index % icons.length];
};

export default function AcademicTimeline(): JSX.Element {
  return (
    <Section id="academic" title="المسيرة الأكاديمية" bgColor="bg-white">
      <motion.div 
        className="max-w-6xl mx-auto px-4 relative" 
        dir="rtl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* الخط الواصل الخلفي - بلون Amber فاتح جداً */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-amber-100 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {ACADEMIC_DATA.map((item, index: number) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              {/* Academic Node - المعين المائل بلون الهوية */}
              <div className="w-16 h-16 rounded-2xl rotate-45 bg-white border-2 border-amber-800 shadow-xl mb-10 flex items-center justify-center text-amber-800 group-hover:bg-amber-800 group-hover:text-white transition-all duration-500 ring-4 ring-amber-50">
                <div className="-rotate-45">
                  {React.cloneElement(getAcademicIcon(index) as React.ReactElement, { size: 28 })}
                </div>
              </div>
              
              {/* Content Card - بلون Stone و حواف Amber */}
              <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border-b-4 border-amber-950 hover:border-amber-800 transition-all duration-300 w-full text-right relative overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-2">
                
                {/* شارة السنة - Amber 800 */}
                <div className="absolute top-0 left-0 bg-amber-800 text-white px-4 py-1 rounded-br-xl font-serif text-sm">
                  {item.year}
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif-heading leading-tight">
                    {item.degree}
                  </h3>
                  
                  <div className="flex items-center text-amber-800 font-bold mb-4 text-sm tracking-wide">
                    <MapPin  size={16} className="ml-2 text-amber-600" />
                    {item.university}
                  </div>
                  
                  <div className="space-y-3 border-t border-slate-200 pt-4">
                   {item.major && (
  <p className="text-slate-600 leading-relaxed text-sm">
    <span className="font-bold text-slate-400 block mb-1 text-xs uppercase">التخصص الدقيق:</span>
    {item.major}
  </p>
)}
                    
                    {/* {item.thesis && (
                      <div className="relative">
                        <p className="text-slate-500 text-xs italic bg-white p-3 rounded border-r-4 border-amber-800 shadow-sm">
                          {item.thesis}
                        </p>
                      </div>
                    )} */}
                  </div>
                </div>

                {/* أيقونة مائية خلفية للزينة */}
                <div className="absolute -bottom-6 -left-6 text-amber-900 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                   <GraduationCap size={140} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}