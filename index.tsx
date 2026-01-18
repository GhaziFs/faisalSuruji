
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  FileText, 
  ExternalLink, 
  BookOpen, 
  Download, 
  ChevronLeft, 
  GraduationCap,
  Quote as QuoteIcon,
  Menu,
  X
} from 'lucide-react';
// Corrected import path from './constants.js' to './constants' to resolve potential module resolution issues in TypeScript
import { TIMELINE_DATA, PUBLICATIONS, QUOTES, ARTICLES, ARTICLE_TYPES } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'عن الدكتورة', href: '#about' },
    { name: 'المسيرة', href: '#timeline' },
    { name: 'أقوال', href: '#quotes' },
    { name: 'المؤلفات', href: '#publications' },
    { name: 'المقالات', href: '#articles' },
  ];

  return (
    <nav className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`} dir="rtl">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#about" className="font-serif-heading text-2xl font-bold tracking-tight text-slate-800">
          د. مريم العتيبي
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-reverse space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-amber-800 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-6 space-y-4 shadow-lg absolute top-full left-0 w-full animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-700 font-bold hover:text-amber-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Added interface for Section props to fix TypeScript property missing errors and make title optional
interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

const Section = ({ id, title, children, className = '', bgColor = 'transparent' }: SectionProps) => (
  <section id={id} className={`py-24 ${bgColor} ${className}`} dir="rtl">
    <div className="container mx-auto px-6">
      {title && (
        <div className="mb-20 text-center">
          <h2 className="font-serif-heading text-4xl md:text-5xl font-bold text-slate-800 relative inline-block">
            {title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-700/40"></span>
          </h2>
        </div>
      )}
      {children}
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen text-right bg-[#fdfcf8]" dir="rtl">
      <Navbar />

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-24 md:pt-48 md:pb-32 bg-[#f9f7f2] overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="font-serif-heading text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              إرث من <br />
              <span className="text-amber-800 italic">العطاء المعرفي.</span>
            </h1>
            <p className="font-serif-body text-xl text-slate-700 leading-relaxed max-w-2xl">
              كرست الدكتورة مريم العتيبي أكثر من أربعين عاماً لفهم آليات التعلم، وتطوير أساليب التدريس، وصياغة مستقبل التربية. كباحثة وأكاديمية ملهمة، تركت بصمة لا تُمحى في قلوب وعقول أجيال من المعلمين والباحثين حول العالم العربي.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#publications" className="px-8 py-3 bg-slate-900 text-white rounded hover:bg-slate-800 transition-all font-bold flex items-center gap-3 shadow-lg">
                <BookOpen size={20} /> تصفح المؤلفات
              </a>
              <a href="#articles" className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded hover:border-slate-800 hover:text-slate-900 transition-all font-bold">
                قراءة المقالات
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="د. مريم العتيبي" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-amber-800/10 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Section id="timeline" title="المسيرة المهنية" bgColor="bg-white">
        <div className="max-w-4xl mx-auto relative pr-10 md:pr-0">
          <div className="absolute top-0 bottom-0 right-4 md:right-1/2 w-px bg-slate-200 hidden md:block"></div>
          
          {TIMELINE_DATA.map((item, index) => (
            <div key={index} className={`relative mb-16 last:mb-0 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute right-[-2.5rem] md:right-1/2 md:translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-amber-800 shadow-md z-20"></div>
              
              <div className="w-full md:w-[45%] bg-stone-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <span className="text-lg font-bold text-amber-800 mb-2 block font-serif-heading">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 font-serif-heading group-hover:text-amber-900 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 font-bold mb-4">
                  <GraduationCap size={18} />
                  <span>{item.institution}</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-serif-body text-lg italic">
                  {item.description}
                </p>
              </div>
              <div className="hidden md:block w-[10%]"></div>
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quotes Section */}
      <Section id="quotes" bgColor="bg-stone-900" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <QuoteIcon size={300} className="text-amber-600" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-12">
            <QuoteIcon size={56} className="text-amber-500 opacity-60" />
            <div className="space-y-20">
              {QUOTES.map((quote, idx) => (
                <div key={idx} className="space-y-8">
                  <blockquote className="font-serif-heading text-3xl md:text-5xl text-stone-100 italic leading-snug">
                    "{quote.text}"
                  </blockquote>
                  <cite className="block text-amber-500 font-bold text-xl tracking-wide">— {quote.source}</cite>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="المؤلفات والكتب">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {PUBLICATIONS.map((pub, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative mb-8 overflow-hidden shadow-2xl aspect-[3/4] bg-stone-200 rounded-sm w-full max-w-[280px]">
                <img 
                  src={pub.coverImage} 
                  alt={pub.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <button className="bg-amber-800 text-white px-6 py-3 rounded shadow-xl flex items-center gap-3 font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <Download size={20} /> تحميل النسخة الكاملة
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-sm font-bold text-amber-800 tracking-widest">{pub.year}</span>
                <h3 className="text-2xl font-serif-heading font-bold text-slate-800 group-hover:text-amber-900 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-slate-400 font-bold text-sm italic">{pub.publisher}</p>
                <p className="text-slate-600 font-serif-body text-lg leading-relaxed px-2">
                  {pub.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Articles Section */}
      <Section id="articles" title="المقالات والأرشيف" bgColor="bg-stone-50">
        <div className="max-w-5xl mx-auto space-y-6">
          {ARTICLES.map((article, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-amber-700 hover:shadow-xl transition-all duration-500 rounded-lg"
            >
              <div className="flex-1 md:pl-12">
                <div className="flex items-center gap-4 mb-3">
                  <span className={`text-[11px] px-3 py-1 font-bold uppercase tracking-wider rounded-full shadow-sm ${
                    article.type === ARTICLE_TYPES.ONLINE ? 'bg-blue-100 text-blue-700' :
                    article.type === ARTICLE_TYPES.PDF ? 'bg-rose-100 text-rose-700' :
                    article.type === ARTICLE_TYPES.SCANNED ? 'bg-amber-100 text-amber-800' :
                    'bg-slate-100 text-slate-700'
                  }`}>
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
              <div className="mt-8 md:mt-0">
                <a 
                  href={article.url} 
                  className="inline-flex items-center gap-3 text-slate-900 bg-stone-100 px-6 py-3 rounded group-hover:bg-amber-800 group-hover:text-white transition-all font-bold"
                >
                  <span>فتح المحتوى</span>
                  <ChevronLeft size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-serif-heading text-3xl font-bold text-slate-800 mb-6">د. مريم العتيبي</h3>
          <p className="text-slate-500 font-serif-body italic text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            "نحن جميعاً طلاب في مدرسة الحياة، نتعلم حتى النفس الأخير، فالمعرفة بحر لا ساحل له."
          </p>
          <div className="flex justify-center space-x-reverse space-x-10 mb-14">
            <a href="#" className="text-slate-500 hover:text-amber-800 font-bold transition-colors">السيرة الذاتية الكاملة</a>
            <a href="#" className="text-slate-500 hover:text-amber-800 font-bold transition-colors">تواصل معي</a>
            <a href="#" className="text-slate-500 hover:text-amber-800 font-bold transition-colors">الأبحاث المنشورة</a>
          </div>
          <p className="text-slate-400 text-xs tracking-[0.2em] uppercase font-bold">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </div>
  );
};

// --- Render ---

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
