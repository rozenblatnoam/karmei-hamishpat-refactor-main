import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function NotFound() {
  useEffect(() => { document.title = 'דף לא נמצא | כולל ענב'; }, []);
  const navigate = useNavigate();

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen" dir="rtl">
        <section className="relative pt-32 pb-24 overflow-hidden flex items-center justify-center text-center">
          <img src="/shomron.jpg" alt="השומרון" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-white px-6">
            <p className="text-yellow-400 text-8xl font-bold mb-6 font-display">404</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              הדף לא נמצא
            </h1>
            <p className="text-white/70 text-lg mb-10 max-w-md mx-auto">
              הדף שחיפשת אינו קיים או הועבר למקום אחר.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors duration-200"
            >
              חזרה לדף הבית
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
