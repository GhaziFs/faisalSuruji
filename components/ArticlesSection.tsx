import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { ARTICLES, ARTICLE_TYPES } from '../src/constants';

// 1. Define the Article Type
interface Article {
  title: string;
  excerpt: string;
  date: string;
  type: string;
  url: string;
}

// 2. Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for list items
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 }, // Slide from the left (in RTL context)
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function ArticlesSection(): JSX.Element {
  return (
    <Section id="articles" title="المقالات والأرشيف" bgColor="bg-stone-50">
      <motion.div 
        className="max-w-5xl mx-auto space-y-6"
        dir="rtl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {ARTICLES.map((article: Article, idx: number) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white p-6 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-amber-700 hover:shadow-xl transition-all duration-500 rounded-lg"
          >
            <div className="flex-1 md:pl-12 text-right">
              <div className="flex items-center gap-4 mb-3">
                <span
                  className={`text-[11px] px-3 py-1 font-bold uppercase tracking-wider rounded-full shadow-sm ${
                    article.type === ARTICLE_TYPES.ONLINE ? 'bg-blue-100 text-blue-700' :
                    article.type === ARTICLE_TYPES.PDF ? 'bg-rose-100 text-rose-700' :
                    article.type === ARTICLE_TYPES.SCANNED ? 'bg-amber-100 text-amber-800' :
                    'bg-slate-100 text-slate-700'
                  }`}
                >
                  {article.type}
                </span>

                <span className="text-sm text-slate-400 font-semibold">{article.date}</span>
              </div>

              <h4 className="text-2xl font-serif-heading font-bold text-slate-800 mb-3 group-hover:text-amber-900 transition-colors">
                {article.title}
              </h4>

              <p className="text-slate-600 text-lg italic font-serif-body max-w-3xl leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="mt-8 md:mt-0 w-full md:w-auto">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full md:w-auto text-slate-900 bg-stone-100 px-6 py-3 rounded group-hover:bg-amber-800 group-hover:text-white transition-all font-bold"
              >
                <span>فتح المحتوى</span>
                {/* RTL Fix: Icon moves to the left on hover in Arabic layout */}
                <ChevronLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}