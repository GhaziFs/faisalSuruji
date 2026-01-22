import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import heroImg from '../assets/heroImg.jpeg'

// Animation Variants
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { duration: 1, ease: "easeOut", delay: 0.5 } 
  },
};

export default function Hero(): JSX.Element {
  return (
    <section id="about" className="pt-32 pb-24 md:pt-48 md:pb-32 bg-[#f9f7f2] overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16" dir="rtl">
        
        {/* Text Content Area */}
        <motion.div 
          className="w-full md:w-1/2 space-y-8"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-serif-heading text-5xl md:text-7xl font-bold text-slate-900 leading-tight"
          >
           رحلة طويلة في  <br />
            <span className="text-amber-800 italic">دروب التعليم </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="font-serif-body text-xl text-slate-700 leading-relaxed max-w-2xl"
          >
بدأت مسيرتي المهنية محاضرًا في أحد المعاهد، ثم عملت مدرسًا لعلم النفس في عدد من المدارس. ومع مرور الوقت، انتقلت إلى مجال الإرشاد التربوي، قبل أن أتولى إدارة مدرسة. على امتداد أكثر من أربعين عامًا، انشغلت بالتعليم وفهم التعلم والاهتمام بالجوانب النفسية للعملية التربوية. وبعد التقاعد، ما زلت أواصل القراءة والكتابة في القضايا التربوية التي شغلتني طوال حياتي المهنية.
 
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#publications"
              className="px-8 py-3 bg-slate-900 text-white rounded hover:bg-slate-800 transition-all font-bold flex items-center gap-3 shadow-lg hover:-translate-y-1 active:scale-95"
            >
              <BookOpen size={20} /> تصفح المؤلفات
            </a>

            <a
              href="#articles"
              className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded hover:border-slate-800 hover:text-slate-900 transition-all font-bold hover:-translate-y-1 active:scale-95"
            >
              قراءة المقالات
            </a>
          </motion.div>
        </motion.div>

        {/* Image Area */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative z-10 rounded shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
            <img
              src={heroImg}
              alt="فيصل سروجي"
              className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Decorative Background Frame with subtle floating animation */}
          <motion.div 
            className="absolute -bottom-6 -left-6 w-full h-full border-4 border-amber-800/10 -z-0"
            animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}