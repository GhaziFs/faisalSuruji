import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export default function Section({
  id,
  title,
  children,
  className = '',
  bgColor = 'transparent',
}: SectionProps): JSX.Element {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${bgColor} ${className} overflow-hidden`}
    >
      <div className="container mx-auto px-6">
        {title && (
          <motion.div 
            className="mb-12 md:mb-20 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-serif-heading text-4xl md:text-5xl font-bold text-slate-800 relative inline-block">
              {title}
              {/* Animated Underline */}
              <motion.span 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-amber-700/40"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }} // Matches the w-16 in your original code
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </h2>
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}