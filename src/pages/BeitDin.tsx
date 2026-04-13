import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

export default function BeitDin() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />
      <main className="pt-24 min-h-screen">
        <section className="section-container py-16">

          {/* כותרת */}
          <h1 className="font-display text-4xl font-bold text-primary mb-8 text-center">
            בית הדין לממונות 'כרמי המשפט'
          </h1>

          {/* Hero Image */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
                <img
                  src="/beitdin.jpg"
                  alt="בית הדין לממונות"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 leading-relaxed text-right">

            {/* פתיחה */}
            <div>
              <p>
                בית הדין לממונות 'כרמי המשפט' הוקם בשנת תשע"ב (2011) מתוך מטרה להציג משפט תורה
                איכותי, מקצועי ונגיש. הדיונים בבית הדין נערכים על פי חוק הבוררות, דבר המעניק
                לפסקי הדין תוקף משפטי מחייב ומאפשר בירור יסודי של סכסוכים אזרחיים וממוניים.
              </p>
              <p className="mt-3">
                בית הדין משרת את תושבי ענב והשומרון, ומקבל בעלי דין מכל רחבי הארץ המבקשים לדון
                על פי דין תורה. צוות הדיינים אמון על בירור מעמיק, יחס מכבד ומתן מענה הלכתי מקיף
                גם בתחומי המעמד האישי.
              </p>
            </div>

            {/* שירותי בית הדין */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                שירותי בית הדין
              </h2>
              <ul className="space-y-2 list-none">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>דיונים ממוניים:</strong> בירור תביעות וסכסוכים אזרחיים בליווי דיינים
                    מוסמכים.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>בית הוראה:</strong> מענה למאות שאלות הלכתיות מדי חודש בתחומי חושן
                    משפט ואבן העזר.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>ערכאת ערעור:</strong> אפשרות להגשת ערעור על פסק דין, שיידון בפני
                    הרכב דיינים חדש הנקבע על ידי המזכירות.
                  </span>
                </li>
              </ul>
            </div>

            {/* סניפים */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                פריסת סניפים ודרכי התקשרות
              </h2>

              {/* סניף מרכזי */}
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  🏛️ סניף מרכזי – ענב
                </h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>כתובת:</strong> רחוב המכבים 5, מבנה 'מנחת דורון'</li>
                  <li><strong>קבלת קהל:</strong> ימים א'–ה' | 09:30–13:00 ו-16:00–20:00</li>
                  <li><strong>מזכיר בית הדין:</strong> הרב יובל רחמן | 055-3078922</li>
                  <li><strong>מענה טלפוני:</strong> 09:00–18:00 (וואטסאפ 24/7)</li>
                </ul>
              </div>

              {/* שלוחת יצהר */}
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  🏛️ שלוחת יצהר
                </h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>כתובת:</strong> רחוב עטרת התורה 1, ישיבת 'רועה ישראל'</li>
                  <li><strong>תיאום דיון:</strong> הרב בעז רוזנטל | 054-5519878</li>
                  <li><strong>מענה אנושי:</strong> 09:00–17:00</li>
                </ul>
              </div>

              {/* שלוחת רמת השרון */}
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  🏛️ שלוחת רמת השרון
                </h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>כתובת:</strong> רחוב בית גוברין 4</li>
                  <li><strong>תיאום דיון:</strong> הרב שי שאוליין | 054-2447766</li>
                  <li><strong>שעות יצירת קשר:</strong> 13:00–15:30 | 18:00–20:00</li>
                </ul>
              </div>
            </div>

            {/* קבצים להורדה */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                מידע שימושי וטפסים
              </h2>
              <div className="space-y-3">
                <a
                  href="/טופס-הזמנת-דיון.docx"
                  download
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-border/40 hover:shadow-md hover:border-primary/40 transition-all duration-200 group"
                >
                  <span className="text-2xl">📥</span>
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      טופס הזמנה לדיון
                    </div>
                    <div className="text-xs text-foreground/50">DOCX • להורדה</div>
                  </div>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                    הורד ↓
                  </span>
                </a>

                <div className="flex items-center gap-3 bg-white/60 rounded-xl px-5 py-4 border border-border/20 opacity-60 cursor-not-allowed">
                  <span className="text-2xl">📄</span>
                  <div className="flex-1 text-right">
                    <div className="font-semibold text-foreground">תקנון בית הדין</div>
                    <div className="text-xs text-foreground/50">PDF • בקרוב</div>
                  </div>
                </div>

                <p className="text-sm text-foreground/60 text-right pt-1">
                  ⚖️ להגשת כתב תביעה או בקשת ערעור – נא לפנות למזכירות.
                </p>
              </div>
            </div>

            {/* ציטוט סיום */}
            <div className="text-center pt-4 pb-2">
              <p className="font-display text-lg text-primary/80 italic">
                "ציון במשפט תפדה ושביה בצדקה"
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                אנו כאן כדי להשיב את משפט התורה למרכז החיים הציבוריים והפרטיים במקצועיות וביושרה.
              </p>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}