import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

export default function RazeiMishpat() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />
      <main className="pt-24 min-h-screen">
        <section className="section-container py-16">

          {/* כותרת */}
          <h1 className="font-display text-4xl font-bold text-primary mb-8 text-center">
            מכון רזי המשפט
          </h1>

          {/* Hero Image */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
                <img
                  src="/sefarim.jpg"
                  alt="ספרי מכון רזי המשפט"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* תוכן */}
          <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 leading-relaxed text-right">

            {/* פתיחה */}
            <div>
              <p>
                מכון 'רזי המשפט' הוקם על ידי כולל הדיינות 'כרמי המשפט' לזכרו ולעילוי נשמתו של
                חברנו היקר, הרב רזיאל שבח הי"ד, רב ואברך בכולל שנפל על קידוש ה' בדרכו לביתו
                שבחוות גלעד.
              </p>
              <p className="mt-3">
                המכון פועל מתוך חזון של התחדשות התורה והמשפט העברי כחלק מתהליך התחייה והגאולה
                של עם ישראל בארצו. אנו שואפים להנגיש את סוגיות המשפט היהודי לציבור הרחב בכלל,
                ובאזור השומרון בפרט, מתוך שאיפה ל"השיבה שופטינו כבראשונה".
              </p>
            </div>

            {/* ציר א' – מחקר */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                מחקר, פרסום והלכה למעשה
              </h2>
              <p>
                מחלקת המחקר של המכון מהווה גשר בין עולם העיון התורני לבין חיי המעשה:
              </p>
              <ul className="mt-3 space-y-2 list-none">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>בית הוראה:</strong> מתן מענה הלכתי זמין בכל תחומי ההלכה, עם התמחות
                    מיוחדת בדיני ממונות.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>תיעוד ופרסום:</strong> הוצאה לאור של פסקי הדין מבית הדין שבענב,
                    כתיבת ניירות עמדה בסוגיות אקטואליות ופרסום מאמרים תורניים מעמיקים.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>הפצת תורה:</strong> הנגשת הסוגיות הנלמדות בכולל לקהל הרחב בכלים
                    מודרניים.
                  </span>
                </li>
              </ul>
            </div>

            {/* ציר ב' – חינוך */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                מחלקת חינוך: "דיינים צעירים"
              </h2>
              <p>
                המחלקה החינוכית של המכון מפעילה תוכנית ייחודית בבתי הספר ובתלמודי התורה,
                המפיחה חיים בלימוד הגמרא המסורתי:
              </p>
              <ul className="mt-3 space-y-2 list-none">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>למידה חווייתית:</strong> התלמידים מיישמים את הסוגיות הנלמדות על
                    מקרי מבחן אמיתיים שהגיעו לבית הדין.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>סדנת בית דין:</strong> בשיטה ייחודית, הילדים מתנסים בסימולציות
                    שבהן הם מתפקדים כדיינים, תובעים ונתבעים.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>חיבור לחיים:</strong> הדיון והפסיקה מבוססים על הגמרא, תוך פיתוח
                    חשיבה משפטית, יכולת טיעון והבנה עמוקה של ערכי הצדק והיושר בתורה.
                  </span>
                </li>
              </ul>
            </div>

            {/* ערכי המכון */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                ערכי המכון
              </h2>
              <div className="flex flex-wrap gap-3 justify-end">
                {['מורשת', 'העמקה תורנית', 'חינוך למשפט עברי', 'חיבור לשומרון'].map((value) => (
                  <span
                    key={value}
                    className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}