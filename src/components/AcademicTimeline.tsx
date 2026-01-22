import React from 'react';
import { GraduationCap, Backpack, Award, NotebookPen, MapPin, Plane } from 'lucide-react';
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
  const icons = [<Backpack />, <NotebookPen />, <Award />, <GraduationCap />, <Plane />];
  return icons[index % icons.length];
};

export default function AcademicTimeline(): JSX.Element {
  return (
    // استخدام نفس خلفية الـ Hero لتوحيد الهوية الهادئة
    <Section id="timeline" title="المسيرة الدراسية" bgColor="bg-[#f9f7f2]">
      <motion.div 
        className="max-w-6xl mx-auto px-4 relative" 
        dir="rtl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* الخط الواصل الخلفي - لون Amber خفيف جداً ليشبه الورق القديم */}
        {/* <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-amber-800/10 z-0" /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {ACADEMIC_DATA.map((item, index: number) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              {/* Node - المعين المائل: تم توحيد اللون مع الـ Amber-800 الموجود في الـ Hero */}
              <div className="w-16 h-16 rounded-2xl rotate-45 bg-white border-2 border-amber-800 shadow-lg mb-10 flex items-center justify-center text-amber-800 group-hover:bg-amber-800 group-hover:text-white transition-all duration-500 ring-4 ring-amber-800/5">
                <div className="-rotate-45">
                  {React.cloneElement(getAcademicIcon(index) as React.ReactElement, { size: 28 })}
                </div>
              </div>
              
              {/* Card - خلفية بيضاء ناصعة لتبرز فوق الخلفية الكريمية للموقع */}
              <div className="bg-white p-8 rounded shadow-sm border-b-2 border-slate-200 hover:border-amber-800 transition-all duration-500 w-full text-right relative overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-2">
                
                {/* شارة السنة - بنفس لون الـ Slate الداكن المستخدم في أزرار الـ Hero */}
                <div className="absolute top-0 left-0 bg-slate-900 text-white px-4 py-1.5 rounded-br-lg font-serif text-sm tracking-widest">
                  {item.year}
                </div>

                <div className="mt-4">
                  {/* العنوان - استخدمت font-serif-heading ليتناسب مع "إرث من العطاء" */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif-heading leading-tight">
                    {item.degree}
                  </h3>
                  
                  {/* الجامعة - لون Amber لربطها بكلمة "العطاء المعرفي" */}
                  <div className="flex items-center text-amber-800 font-bold mb-4 text-sm">
                    <MapPin size={16} className="ml-2 opacity-80" />
                    {item.university}
                  </div>
                  
                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    {item.major && (
                      <p className="text-slate-600 leading-relaxed text-sm">
                        <span className="font-bold text-slate-400 block mb-1 text-[10px] uppercase tracking-wider">التخصص الدقيق</span>
                        <span className="font-serif-body">{item.major}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* أيقونة مائية خلفية - بلون Amber خافت جداً */}
                <div className="absolute -bottom-6 -left-6 text-amber-900 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
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