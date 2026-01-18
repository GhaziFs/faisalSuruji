import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  bgColor?: string; // مثال: "bg-white" أو "bg-stone-50"
}

export default function Section({
  id,
  title,
  children,
  className = '',
  bgColor = 'transparent',
}: SectionProps) {
  return (
    <section id={id} className={`py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <div className="mb-20 text-center">
            <h2 className="font-serif-heading text-4xl md:text-5xl font-bold text-slate-800 relative inline-block">
              {title}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-700/40" />
            </h2>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
