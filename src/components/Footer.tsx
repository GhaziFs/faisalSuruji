export default function Footer() {
  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-serif-heading text-3xl font-bold text-slate-800 mb-6">فيصل سروجي</h3>

        <p className="text-slate-500 font-serif-body italic text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          "بوح معلم"
        </p>

        

        <p className="text-slate-400 text-xs tracking-[0.2em] uppercase font-bold">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
