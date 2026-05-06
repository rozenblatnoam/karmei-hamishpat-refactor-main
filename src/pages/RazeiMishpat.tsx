import { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

const researchItems = [
  { title: 'בית הוראה', text: 'מתן מענה הלכתי זמין בכל תחומי ההלכה, עם התמחות מיוחדת בדיני ממונות.' },
  { title: 'תיעוד ופרסום', text: 'הוצאה לאור של פסקי הדין מבית הדין שבענב, כתיבת ניירות עמדה בסוגיות אקטואליות ופרסום מאמרים תורניים מעמיקים.' },
  { title: 'הפצת תורה', text: 'הנגשת הסוגיות הנלמדות בכולל לקהל הרחב בכלים מודרניים.' },
];

const educationItems = [
  { title: 'למידה חווייתית', text: 'התלמידים מיישמים את הסוגיות הנלמדות על מקרי מבחן אמיתיים שהגיעו לבית הדין.' },
  { title: 'סדנת בית דין', text: 'בשיטה ייחודית, הילדים מתנסים בסימולציות שבהן הם מתפקדים כדיינים, תובעים ונתבעים.' },
  { title: 'חיבור לחיים', text: 'הדיון והפסיקה מבוססים על הגמרא, תוך פיתוח חשיבה משפטית, יכולת טיעון והבנה עמוקה של ערכי הצדק והיושר בתורה.' },
];

export default function RazeiMishpat() {
  useEffect(() => { document.title = 'מכון רזי המשפט | כולל ענב'; }, []);
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
              <span className="text-sm font-medium">לזכרו של הרב רזיאל שבח הי"ד</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              מכון רזי המשפט
            </h1>
            <p className="text-yellow-400 text-xl sm:text-2xl font-bold mb-4">
              מחקר, פרסום וחינוך למשפט עברי
            </p>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              "השיבה שופטינו כבראשונה" — הנגשת סוגיות המשפט היהודי לציבור הרחב
            </p>

            {/* לוגו + תמונת ספרים */}
            <div
              className="max-w-2xl mx-auto flex flex-col items-center gap-6"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              {/* לוגו המכון */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl border border-white/30">
                <img
                  src="/mazkon-razei-hamishpat.png"
                  alt="לוגו מכון רזי המשפט"
                  className="h-20 w-auto object-contain mx-auto"
                />
              </div>

              {/* תמונת הספרים */}
              <div className="w-full rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/sefarim.jpg"
                  alt="פרסומי מכון רזי המשפט"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                />
              </div>
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
                <span className="text-sm font-medium">אודות המכון</span>
              </div>
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                מכון 'רזי המשפט' הוקם על ידי כולל הדיינות 'כרמי המשפט' לזכרו ולעילוי נשמתו של חברנו היקר, הרב רזיאל שבח הי"ד, רב ואברך בכולל שנפל על קידוש ה' בדרכו לביתו שבחוות גלעד.
              </p>
              <p className="text-white/65 leading-relaxed">
                המכון פועל מתוך חזון של התחדשות התורה והמשפט העברי כחלק מתהליך התחייה והגאולה של עם ישראל בארצו. אנו שואפים להנגיש את סוגיות המשפט היהודי לציבור הרחב בכלל, ובאזור השומרון בפרט, מתוך שאיפה ל"השיבה שופטינו כבראשונה".
              </p>
            </div>

            {/* מחקר */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-2">
                מחקר, פרסום והלכה למעשה
              </h2>
              <p className="text-white/60 text-sm mb-5">
                מחלקת המחקר של המכון מהווה גשר בין עולם העיון התורני לבין חיי המעשה:
              </p>
              <div className="space-y-3">
                {researchItems.map(({ title, text }) => (
                  <div key={title} className="flex gap-3 px-5 py-4 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white">{title}: </strong>{text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* חינוך */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-2">
                מחלקת חינוך: "דיינים צעירים"
              </h2>
              <p className="text-white/60 text-sm mb-5">
                המחלקה החינוכית של המכון מפעילה תוכנית ייחודית בבתי הספר ובתלמודי התורה, המפיחה חיים בלימוד הגמרא המסורתי:
              </p>
              <div className="space-y-3">
                {educationItems.map(({ title, text }) => (
                  <div key={title} className="flex gap-3 px-5 py-4 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white">{title}: </strong>{text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ציטוט */}
            <blockquote
              className="px-6 py-5 border-r-2 border-white/30 text-white/65 italic text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              <p className="font-display text-lg mb-2">"וְהָיָה אֱמוּנַת עִתֶּיךָ חֹסֶן יְשׁוּעֹת חָכְמַת וָדָעַת"</p>
              <cite className="text-xs text-white/35 not-italic">— ישעיהו ל"ג, ו'</cite>
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