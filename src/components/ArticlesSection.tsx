import React, { useState, useMemo } from 'react';
import { ChevronLeft, X, ExternalLink } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { ARTICLES, ARTICLE_TYPES } from '../constants';

// 1. Define the Article Type
interface Article {
  title: string;
  excerpt: string;
  date: string;
  type: string;
  url: string;
  content?: string; 
  pub: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

export default function ArticlesSection(): JSX.Element {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeTab, setActiveTab] = useState<'ALL' | string>('ALL');

  const closeModal = () => setSelectedArticle(null);

  // قائمة التصنيفات بناءً على الأنواع المتوفرة
  const tabs = [
    { id: 'ALL', label: 'الكل' },
    // { id: ARTICLE_TYPES.TEXT, label: 'مقالات نصية' },
    // { id: ARTICLE_TYPES.PDF, label: 'ملفات PDF' },
        { id: ARTICLE_TYPES.ONLINE, label: 'الصحف الالكترونية ' },
    { id: ARTICLE_TYPES.SCANNED, label: ' الصحف الورقية' },
  ];

  // تصفية المقالات بناءً على التصنيف النشط
  const filteredArticles = useMemo(() => {
    if (activeTab === 'ALL') return ARTICLES;
    return ARTICLES.filter(article => article.type === activeTab);
  }, [activeTab]);

  return (
    <Section id="articles" title="المقالات والأرشيف" bgColor="bg-stone-50">
      <motion.div 
        className="max-w-5xl mx-auto"
        dir="rtl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* --- النص التشويقي --- */}
        <motion.div 
          variants={itemVariants}
          className="mb-10 border-r-4 border-amber-800 pr-6 py-2"
        >
          <p className="text-xl md:text-2xl text-slate-700 font-serif-body italic leading-relaxed max-w-3xl">
            هوامش فكرية على دفتر الحياة، ألتقط فيها مشاهد من الواقع، وأعلّق على ما يطفو في الساحة في بعض الاحيان، وأشارك اقتراحات بسيطة من باب الاهتمام.
          </p>
        </motion.div>

        {/* --- نظام الـ Tabs --- */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id 
                  ? 'bg-amber-800 text-white shadow-md' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- قائمة المقالات المفلترة --- */}
        <motion.div 
          layout
          className="space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article: Article, idx: number) => {
              const isInternal = article.type !== ARTICLE_TYPES.ONLINE;

              return (
                <motion.div
                  key={article.title} // استخدام العنوان كـ key لضمان حركة الأنيميشن عند الفلترة
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-amber-700 hover:shadow-xl transition-all duration-500 rounded-lg"
                >
                  <div className="flex-1 md:pl-12 text-right">
                    <div className="flex items-center gap-4 mb-3">
                      {/* <span
                        className={`text-[11px] px-3 py-1 font-bold uppercase tracking-wider rounded-full shadow-sm ${
                          article.type === ARTICLE_TYPES.ONLINE ? 'bg-blue-100 text-blue-700' :
                          article.type === ARTICLE_TYPES.PDF ? 'bg-rose-100 text-rose-700' :
                          article.type === ARTICLE_TYPES.SCANNED ? 'bg-amber-100 text-amber-800' :
                          'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {article.type}
                      </span> */}
                       <span
                        className={`text-[11px] px-3 py-1 font-bold uppercase tracking-wider rounded-full shadow-sm ${
                          article.type === ARTICLE_TYPES.ONLINE ? 'bg-blue-100 text-blue-700' :
                          article.type === ARTICLE_TYPES.PDF ? 'bg-rose-100 text-rose-700' :
                          article.type === ARTICLE_TYPES.SCANNED ? 'bg-amber-100 text-amber-800' :
                          'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {article.pub}
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
                    {isInternal ? (
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="cursor-pointer inline-flex items-center justify-center gap-3 w-full md:w-auto text-slate-900 bg-stone-100 px-6 py-3 rounded group-hover:bg-amber-800 group-hover:text-white transition-all font-bold"
                      >
                        <span>عرض المقال</span>
                        <ChevronLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-3 w-full md:w-auto text-slate-900 bg-stone-100 px-6 py-3 rounded group-hover:bg-amber-800 group-hover:text-white transition-all font-bold"
                      >
                        <span>زيارة الرابط</span>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* حالة عدم وجود نتائج */}
          {filteredArticles.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20 text-slate-400 font-serif-body"
            >
              لا توجد مقالات في هذا التصنيف حالياً.
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* --- النافذة المنبثقة (Modal) كما هي دون تغيير --- */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col"
              dir="rtl"
            >
              <div className="p-6 border-b flex justify-between items-center bg-stone-50">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedArticle.title}</h3>
                  <p className="text-sm text-amber-800">{selectedArticle.date} • {selectedArticle.type}</p>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-slate-200 rounded-full transition-colors cursor-pointer">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#fdfcf9]">
                {selectedArticle.type === ARTICLE_TYPES.PDF && (
                  <iframe 
                    src={`${selectedArticle.url}#toolbar=0`} 
                    className="w-full h-[70vh] rounded border"
                    title={selectedArticle.title}
                  />
                )}

                {selectedArticle.type === ARTICLE_TYPES.SCANNED && (
                  <div className="flex flex-col items-center">
                    <img 
                      src={selectedArticle.url} 
                      alt={selectedArticle.title}
                      className="max-w-full shadow-lg rounded border"
                    />
                    <p className="mt-4 text-slate-500 italic text-sm">صورة أرشيفية ممسوحة ضوئياً</p>
                  </div>
                )}

                {selectedArticle.type === ARTICLE_TYPES.TEXT && (
                  <div className="prose prose-lg max-w-none text-right font-serif-body leading-loose text-slate-800">
                    <div dangerouslySetInnerHTML={{ __html: selectedArticle.content || selectedArticle.excerpt }} />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}