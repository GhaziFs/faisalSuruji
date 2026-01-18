import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    
    
    { name: 'المقالات', href: '#articles' },
    { name: 'المؤلفات', href: '#publications' },
        { name: 'أقوال', href: '#quotes' },

    { name: 'المسيرة', href: '#timeline' },
        { name: 'عن فيصل', href: '#about' },

  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#about"
          className="font-serif-heading text-2xl font-bold tracking-tight text-slate-800"
        >
          فيصل سروجي
        </a>

        {/* Desktop Menu */}
    {/* Desktop Menu */}
<div className="hidden md:flex flex-row-reverse gap-x-10">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className="text-sm font-semibold text-slate-600 hover:text-amber-800 transition-colors duration-200 whitespace-nowrap"
    >
      {link.name}
    </a>
  ))}
</div>


        {/* Mobile Toggle */}
        <button
          aria-label="فتح القائمة"
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-6 space-y-4 shadow-lg absolute top-full left-0 w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="block text-slate-700 font-bold hover:text-amber-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
