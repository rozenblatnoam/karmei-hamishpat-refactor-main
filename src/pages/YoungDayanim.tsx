import { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const sections = [
  {
    title: 'חזון',
    text: 'מיזם "דיינים צעירים" מבקש לקרב ילדים ובני נוער ללימוד הגמרא וההלכה בדרך חיה, חווייתית ומשמעותית. התוכנית שמה לה למטרה להקנות אהבת תורה, הבנה מעמיקה ויכולת יישום בסוגיות מרכזיות בדיני ממונות.',
  },
  {
    title: 'הדרך',
    text: 'בלב התוכנית עומד מודל ייחודי של בית דין כיתתי פעיל, שבו תלמידי הכיתה לוקחים חלק מלא בתהליך הלמידה – כדיינים, כבעלי דין, כעדים וכיועצים. במסגרת זו נידונים מקרים אמיתיים מחיי היום-יום, המאפשרים לתלמידים ליישם בפועל את הסוגיות הנלמדות.',
    text2: 'הפעילות מתקיימת בליווי והכוונה מקצועית של רבני המכון, בשיתוף המחנכים והמורים, תוך דגש על למידה פעילה, חשיבה עצמאית ויכולת הסקה מתוך מקורות הגמרא.',
  },
  {
    title: 'התוצאה',
    text: 'התלמידים מפתחים חיבור עמוק ללימוד, אחריות אישית, חשיבה חדה ויכולת ניתוח הלכתי – תוך חוויה לימודית מעשירה, מרתקת ורלוונטית לחיים.',
  },
];

export default function YoungDayanim() {
  useEffect(() => { document.title = 'דיינים צעירים | כולל ענב'; }, []);
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen" dir="rtl">

        {/* ===== Hero Banner ===== */}
        <section className="relative pt-32 pb-24 overflow-hidden flex items-center justify-center text-center">
          <img src="/shomron.jpg" alt="השומרון" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-yellow-400 blur-3xl" />
            <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
          </div>

          <div className="relative z-10 text-white px-6" style={{ animation: 'fadeInUp 0.6s ease-out both' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8">
              <span className="text-sm">✦</span>
              <span className="text-sm font-medium">מיזם חינוכי ייחודי</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              דיינים צעירים
            </h1>
            <p className="text-yellow-400 text-xl sm:text-2xl font-bold mb-4">
              בסוד המשפט
            </p>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              לימוד גמרא והלכה בדרך חיה, חווייתית ומשמעותית
            </p>

            {/* לוגו סוד המשפט */}
            <div
              className="flex justify-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              <img
                src="/sodhamishpat.jpg"
                alt="סוד המשפט"
                className="w-52 h-52 sm:w-64 sm:h-64 object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* ===== תוכן ===== */}
        <section className="relative overflow-hidden">
          <img src="/shomron.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white space-y-6">

            {sections.map(({ title, text, text2 }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm px-6 py-6"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.1 + i * 0.1}s both` }}
              >
                <h2 className="font-display text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>✦</span> {title}
                </h2>
                <p className="text-white/80 leading-relaxed text-sm">{text}</p>
                {text2 && <p className="text-white/70 leading-relaxed text-sm mt-3">{text2}</p>}
              </div>
            ))}

            {/* וידאו */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }} className="pt-6">
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-6 text-center">
                צפו בפעילות
              </h2>
              <div
                className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-white/15"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe
                  src="https://www.youtube.com/embed/uw-QjeVeR-E"
                  title="סוד המשפט"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </section>

      </main>

      <SiteFooter />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}