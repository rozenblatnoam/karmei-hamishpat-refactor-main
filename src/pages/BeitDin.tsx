import { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const branches = [
  {
    title: 'סניף מרכזי – ענב',
    details: [
      { label: 'כתובת', value: "רחוב המכבים 5, מבנה 'מנחת דורון'" },
      { label: 'קבלת קהל', value: "ימים א'–ה' | 09:30–13:00 ו-16:00–20:00" },
      { label: 'מזכיר בית הדין', value: 'הרב יובל רחמן | 055-3078922' },
      { label: 'מענה טלפוני', value: '09:00–18:00 (וואטסאפ 24/7)' },
    ],
  },
  {
    title: 'שלוחת יצהר',
    details: [
      { label: 'כתובת', value: "רחוב עטרת התורה 1, ישיבת 'רועה ישראל'" },
      { label: 'תיאום דיון', value: 'הרב בעז רוזנטל | 054-5519878' },
      { label: 'מענה אנושי', value: '09:00–17:00' },
    ],
  },
  {
    title: 'שלוחת רמת השרון',
    details: [
      { label: 'כתובת', value: 'רחוב בית גוברין 4' },
      { label: 'תיאום דיון', value: 'הרב שי שאוליין | 054-2447766' },
      { label: 'שעות יצירת קשר', value: '13:00–15:30 | 18:00–20:00' },
    ],
  },
];

const services = [
  { title: 'דיונים ממוניים', text: 'בירור תביעות וסכסוכים אזרחיים בליווי דיינים מוסמכים.' },
  { title: 'בית הוראה', text: 'מענה למאות שאלות הלכתיות מדי חודש בתחומי חושן משפט ואבן העזר.' },
  { title: 'ערכאת ערעור', text: 'אפשרות להגשת ערעור על פסק דין, שיידון בפני הרכב דיינים חדש הנקבע על ידי המזכירות.' },
];

export default function BeitDin() {
  useEffect(() => { document.title = 'בית הדין לממונות | כולל ענב'; }, []);
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
              <span className="text-sm font-medium">משפט תורה מקצועי ונגיש</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              בית הדין לממונות
            </h1>
            <p className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-4">
              'כרמי המשפט'
            </p>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              בירור סכסוכים על פי דין תורה — בליווי מקצועי, ביחס מכבד
            </p>

            {/* תמונת בית הדין */}
            <div
              className="max-w-sm mx-auto rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              <img
                src="/beitdin.jpg"
                alt="בית הדין לממונות"
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* ===== תוכן ===== */}
        <section className="relative overflow-hidden">
          <img src="/shomron.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white space-y-16">

            {/* פתיחה */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-sm">✦</span>
                <span className="text-sm font-medium">אודות בית הדין</span>
              </div>
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                בית הדין לממונות 'כרמי המשפט' הוקם בשנת תשע"ב (2011) מתוך מטרה להציג משפט תורה איכותי, מקצועי ונגיש. הדיונים בבית הדין נערכים על פי חוק הבוררות, דבר המעניק לפסקי הדין תוקף משפטי מחייב ומאפשר בירור יסודי של סכסוכים אזרחיים וממוניים.
              </p>
              <p className="text-white/65 leading-relaxed">
                בית הדין משרת את תושבי ענב והשומרון, ומקבל בעלי דין מכל רחבי הארץ המבקשים לדון על פי דין תורה. צוות הדיינים אמון על בירור מעמיק, יחס מכבד ומתן מענה הלכתי מקיף גם בתחומי המעמד האישי.
              </p>
            </div>

            {/* שירותים */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-5">שירותי בית הדין</h2>
              <div className="space-y-3">
                {services.map(({ title, text }) => (
                  <div key={title} className="flex gap-3 px-5 py-4 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white">{title}: </strong>{text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* סניפים */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-5">פריסת סניפים ודרכי התקשרות</h2>
              <div className="space-y-4">
                {branches.map(({ title, details }) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-6">
                    <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                      🏛️ {title}
                    </h3>
                    <div className="space-y-2">
                      {details.map(({ label, value }) => (
                        <div key={label} className="flex gap-2 text-sm">
                          <span className="text-white/45 flex-shrink-0 min-w-[120px]">{label}:</span>
                          <span className="text-white/80">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* קבצים להורדה */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-5">מידע שימושי וטפסים</h2>
              <div className="space-y-3">
                <a
                  href="/tofes-hazmant-diyun.docx"
                  download
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm px-5 py-4 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-200 group"
                >
                  <span className="text-2xl">📥</span>
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-white group-hover:text-yellow-400 transition-colors">טופס הזמנה לדיון</div>
                    <div className="text-xs text-white/40">DOCX • להורדה</div>
                  </div>
                  <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">הורד ↓</span>
                </a>

                <a
                  href="/takanon-beit-hadin.pdf"
                  download
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm px-5 py-4 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-200 group"
                >
                  <span className="text-2xl">📄</span>
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-white group-hover:text-yellow-400 transition-colors">תקנון בית הדין</div>
                    <div className="text-xs text-white/40">PDF • להורדה</div>
                  </div>
                  <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">הורד ↓</span>
                </a>

                <p className="text-sm text-white/45 text-right pt-1">
                  ⚖️ להגשת כתב תביעה או בקשת ערעור – נא לפנות למזכירות.
                </p>
              </div>
            </div>

            {/* ציטוט סיום */}
            <blockquote
              className="px-6 py-5 border-r-2 border-white/30 text-white/65 italic text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
            >
              <p className="font-display text-lg mb-2">"ציון במשפט תפדה ושביה בצדקה"</p>
              <cite className="text-xs text-white/35 not-italic">
                אנו כאן כדי להשיב את משפט התורה למרכז החיים הציבוריים והפרטיים במקצועיות וביושרה.
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