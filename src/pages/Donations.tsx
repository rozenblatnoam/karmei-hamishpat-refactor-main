import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

const impacts = [
  { icon: '📖', title: 'הכשרת דיינים', text: 'מימון לומדים מצוינים לאורך שמונה שנות לימוד אינטנסיבי.' },
  { icon: '⚖️', title: 'בתי דין נגישים', text: 'קיום בתי דין לממונות הפתוחים לציבור הרחב בכל רחבי הארץ.' },
  { icon: '📚', title: 'פרסום תורני', text: 'הוצאת חיבורים, פסקי דין ומאמרים בתחומי המשפט העברי.' },
  { icon: '🎓', title: 'חינוך הדור הבא', text: 'תוכנית "דיינים צעירים" בבתי ספר ותלמודי תורה ברחבי השומרון.' },
];

export default function Donations() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />

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
              <span className="text-sm font-medium">היו שותפים במפעל התורה</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              תרומות
            </h1>
            <p className="text-yellow-400 text-xl sm:text-2xl font-bold mb-4">
              כרמי המשפט – ענב
            </p>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              תרומתכם מכשירה דיינים, מקיימת בתי דין ומפיצה תורה לדורות
            </p>
          </div>
        </section>

        {/* ===== תוכן ===== */}
        <section className="relative overflow-hidden">
          <img src="/shomron.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white space-y-14">

            {/* פתיחה */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-sm">✦</span>
                <span className="text-sm font-medium">למה לתרום?</span>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                המכון הגבוה ללימודי דיינות "כרמי המשפט" פועל ומתקיים בזכות תרומותיהם הנדיבות של שותפים ותומכים. תרומתכם מאפשרת להמשיך ולהכשיר דור חדש של דיינים, לקיים בתי דין נגישים לציבור, ולפרסם חיבורים תורניים חשובים.
              </p>
            </div>

            {/* השפעת התרומה */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-5">תרומתכם פועלת</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {impacts.map(({ icon, title, text }) => (
                  <div key={title} className="flex gap-4 px-5 py-5 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <div className="text-white font-semibold mb-1">{title}</div>
                      <div className="text-white/65 text-sm leading-relaxed">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* פרטי קשר */}
            <div
              className="rounded-2xl border border-yellow-400/30 bg-yellow-400/8 backdrop-blur-sm px-8 py-8 text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              <div className="text-3xl mb-3">🤝</div>
              <h2 className="font-display text-xl font-bold text-yellow-400 mb-2">צרו קשר לתרומה</h2>
              <p className="text-white/60 text-sm mb-4">לפרטים נוספים על אפשרויות תרומה, צרו קשר:</p>
              <a
                href="tel:054-659-7850"
                className="inline-block text-white font-bold text-2xl hover:text-yellow-400 transition-colors duration-200"
              >
                054-659-7850
              </a>
            </div>

            {/* ציטוט */}
            <blockquote
              className="px-6 py-5 border-r-2 border-white/30 text-white/65 italic text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              <p className="font-display text-lg mb-2">"וְצַדִּיקִים יִרְאוּ וְיִשְׂמָחוּ"</p>
              <cite className="text-xs text-white/35 not-italic">
                פעילות המכון מתאפשרת הודות לתמיכתם של אוהבי תורה השותפים עמנו במפעל של השבת משפט התורה
              </cite>
            </blockquote>

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